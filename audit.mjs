// SEO crawl of the live site: on-page checks, internal links, orphans, broken links.
const SITE = 'https://webygrowth.com';

const get = async (url) => {
  const r = await fetch(url, { redirect: 'manual' });
  const body = r.status === 200 ? await r.text() : '';
  return { status: r.status, loc: r.headers.get('location'), body, type: r.headers.get('content-type') || '' };
};

const sm = await (await fetch(`${SITE}/sitemap-0.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const pages = new Map();
const linkCounts = new Map(); // inbound internal links

for (const url of urls) {
  const { status, body } = await get(url);
  const path = new URL(url).pathname;
  if (status !== 200) { pages.set(path, { status }); continue; }

  const txt = body.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
  const title = (body.match(/<title>([\s\S]*?)<\/title>/) || [])[1]?.replace(/&amp;/g, '&').trim() || '';
  const desc = (body.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const canon = (body.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  const h1s = [...txt.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...txt.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].length;
  const words = txt.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  const schemas = [...body.matchAll(/"@type":"([^"]+)"/g)].map((m) => m[1]);
  const imgs = [...body.matchAll(/<img[^>]*>/g)];
  const imgsNoAlt = imgs.filter((m) => !/alt="/.test(m[0])).length;
  const links = [...body.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  const extLinks = [...body.matchAll(/href="(https?:\/\/[^"]+)"/g)].map((m) => m[1]).filter((u) => !u.includes('webygrowth.com'));
  const outUnique = [...new Set(links)].filter((l) => l !== path);
  for (const l of outUnique) linkCounts.set(l, (linkCounts.get(l) || 0) + 1);

  pages.set(path, {
    status, title, titleLen: title.length, desc, descLen: desc.length, canon,
    h1Count: h1s.length, h1: h1s[0] || '', h2s, words,
    schemas: [...new Set(schemas)].join(','), imgs: imgs.length, imgsNoAlt,
    out: outUnique.length, ext: [...new Set(extLinks)],
    lang: /<html lang="en-GB"/.test(body),
    ogImage: /og:image/.test(body),
  });
}

console.log('=== PAGES (' + pages.size + ') ===');
console.log('path'.padEnd(46), 'T'.padStart(3), 'D'.padStart(4), 'H1', 'H2'.padStart(3), 'words'.padStart(6), 'out'.padStart(4), 'in'.padStart(3));
for (const [p, d] of pages) {
  console.log(p.padEnd(46), String(d.titleLen).padStart(3), String(d.descLen).padStart(4),
    String(d.h1Count).padStart(2), String(d.h2s).padStart(3), String(d.words).padStart(6),
    String(d.out).padStart(4), String(linkCounts.get(p) || 0).padStart(3));
}

const issues = [];
for (const [p, d] of pages) {
  if (d.status !== 200) issues.push(`${p}: HTTP ${d.status}`);
  if (d.titleLen > 60) issues.push(`${p}: title ${d.titleLen} chars (>60, may truncate)`);
  if (d.titleLen < 30) issues.push(`${p}: title only ${d.titleLen} chars`);
  if (d.descLen > 160) issues.push(`${p}: description ${d.descLen} chars (>160)`);
  if (d.descLen < 70) issues.push(`${p}: description only ${d.descLen} chars`);
  if (d.h1Count !== 1) issues.push(`${p}: ${d.h1Count} H1 tags`);
  if (d.words < 300) issues.push(`${p}: thin content (${d.words} words)`);
  if (d.imgsNoAlt) issues.push(`${p}: ${d.imgsNoAlt} images missing alt`);
  if (!d.canon.startsWith(SITE)) issues.push(`${p}: canonical "${d.canon}"`);
  if (!d.lang) issues.push(`${p}: html lang not en-GB`);
  if ((linkCounts.get(p) || 0) === 0 && p !== '/') issues.push(`${p}: ORPHAN — no internal links point here`);
  if ((linkCounts.get(p) || 0) < 3 && p !== '/') issues.push(`${p}: only ${linkCounts.get(p) || 0} internal links in`);
}

// duplicate titles / descriptions
const byTitle = new Map(), byDesc = new Map();
for (const [p, d] of pages) {
  if (!d.title) continue;
  byTitle.set(d.title, [...(byTitle.get(d.title) || []), p]);
  byDesc.set(d.desc, [...(byDesc.get(d.desc) || []), p]);
}
for (const [t, ps] of byTitle) if (ps.length > 1) issues.push(`duplicate title "${t}": ${ps.join(', ')}`);
for (const [t, ps] of byDesc) if (ps.length > 1) issues.push(`duplicate description: ${ps.join(', ')}`);

// internal links that 404
const allLinks = new Set();
for (const [, d] of pages) {}
console.log('\n=== INTERNAL LINK TARGETS NOT IN SITEMAP ===');
const sitemapPaths = new Set([...pages.keys()]);
for (const [l, n] of [...linkCounts].sort((a, b) => b[1] - a[1])) {
  if (!sitemapPaths.has(l)) {
    const { status } = await get(SITE + l);
    console.log(`${l} (${n} links) -> HTTP ${status}${status !== 200 ? '  *** BROKEN ***' : ''}`);
    if (status !== 200) issues.push(`broken internal link: ${l} (${n} links point here)`);
  }
}

console.log('\n=== EXTERNAL LINKS ===');
const ext = new Set();
for (const [, d] of pages) (d.ext || []).forEach((e) => ext.add(e));
for (const e of ext) {
  try {
    const r = await fetch(e, { method: 'HEAD', redirect: 'follow' });
    console.log(r.status, e);
  } catch { console.log('ERR', e); }
}

console.log('\n=== SCHEMA PER PAGE ===');
for (const [p, d] of pages) if (d.schemas) console.log(p.padEnd(46), d.schemas);

console.log('\n=== ISSUES (' + issues.length + ') ===');
issues.forEach((i) => console.log('-', i));

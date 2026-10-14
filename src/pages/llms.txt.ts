import type { APIRoute } from 'astro';
import { SITE, HOME_FAQS, PROCESS } from '../data/site';
import { SERVICES, INDUSTRIES } from '../data/pages';
import { getPosts } from '../lib/posts';

// llms.txt — a plain-text summary of the site for AI assistants (https://llmstxt.org).
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const link = (slug: string) => `${SITE.url}/${slug}/`;
  const body = `# ${SITE.name}

> ${SITE.name} is a web design agency for UK small businesses. We build fast, SEO-ready WordPress, WooCommerce and Shopify websites, handle store migrations, and provide SEO services — all designed to generate more leads, sales and visibility.

- Website: ${SITE.url}
- Area served: United Kingdom (working remotely)
- WhatsApp (fastest): +${SITE.whatsapp} — https://wa.me/${SITE.whatsapp}
- Email: ${SITE.email}
- Typical small business website timeline: 2–4 weeks

## Services

${SERVICES.map((s) => `- [${s.label}](${link(s.slug)}): ${s.short}`).join('\n')}

## Industry websites

${INDUSTRIES.map((s) => `- [${s.label}](${link(s.slug)}): ${s.short}`).join('\n')}

## Process

${PROCESS.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`).join('\n')}

## Guides

${posts.map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.id}/): ${p.data.description}`).join(String.fromCharCode(10))}

## Company

- [About](${SITE.url}/about/): Our mission is to help small businesses compete online with professional websites, better visibility, and digital systems that support growth.
- [All services](${SITE.url}/services/)
- [Contact / free website audit](${SITE.url}/contact/)

## FAQ

${HOME_FAQS.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

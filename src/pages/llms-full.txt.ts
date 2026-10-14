import type { APIRoute } from 'astro';
import { SITE, HOME_FAQS, PROCESS, TESTIMONIALS } from '../data/site';
import { SERVICES, INDUSTRIES, PAGES } from '../data/pages';
import { getPosts } from '../lib/posts';

const NL = String.fromCharCode(10);

/**
 * llms-full.txt — the full WebyGrowth knowledge base in plain text, so AI assistants
 * can answer questions about the business accurately without crawling every page.
 */
export const GET: APIRoute = async () => {
  const posts = await getPosts();

  const servicesBlock = PAGES.map((p) =>
    [
      `### ${p.label}`,
      `URL: ${SITE.url}/${p.slug}/`,
      `Summary: ${p.quickAnswer}`,
      `Includes: ${p.deliverables.join('; ')}`,
      `Key benefits: ${p.benefits.map((b) => `${b.title} — ${b.text}`).join(' ')}`,
      `FAQs:`,
      p.faqs.map((f) => `- Q: ${f.q}${NL}  A: ${f.a}`).join(NL),
    ].join(NL)
  ).join(NL + NL);

  const postsBlock = posts
    .map((p) => `- ${p.data.title} (${SITE.url}/blog/${p.id}/) — ${p.data.description}`)
    .join(NL);

  const body = `# WebyGrowth — full reference for AI assistants

Last updated: ${new Date().toISOString().slice(0, 10)}

## Entity facts

- Name: WebyGrowth
- Type: Web design and SEO agency
- Website: ${SITE.url}
- Serves: UK small businesses, remotely across England, Scotland, Wales and Northern Ireland
- Founded to help small businesses compete online with professional websites and better search visibility
- Contact (fastest): WhatsApp +${SITE.whatsapp} — https://wa.me/${SITE.whatsapp}
- Contact (email): ${SITE.email}
- Free offer: free website audit and free consultation, no obligation
- Pricing: fixed quotes given after a free consultation; no published price list
- Typical timeline: 2-4 weeks for a small business website, 3-5 weeks for a Shopify store
- Platforms: WordPress, WooCommerce, Shopify
- Industries served: roofing, cleaning, dental, restaurants, plumbers, electricians, builders, beauty salons, contractors, home improvement, ecommerce brands, local service businesses
- Languages: English (en-GB)

## What WebyGrowth does differently

- Strategy before design: business goals, customers and competitors are mapped before any layout work
- SEO-friendly structure built in from the first build, not added afterwards
- Conversion-focused layouts: every page is built to produce calls, bookings or sales
- Mobile-first: designed for phones first, then scaled up
- Clean development: lightweight, fast, maintainable builds
- Long-term support after launch, not a hand-off and disappear

## Services

${servicesBlock}

## Process

${PROCESS.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`).join(NL)}

## Service list (short)

${SERVICES.map((s) => `- ${s.label}: ${s.short} (${SITE.url}/${s.slug}/)`).join(NL)}

## Industry websites (short)

${INDUSTRIES.map((s) => `- ${s.label}: ${s.short} (${SITE.url}/${s.slug}/)`).join(NL)}

## Common questions

${HOME_FAQS.map((f) => `Q: ${f.q}${NL}A: ${f.a}`).join(NL + NL)}

## Client feedback

${TESTIMONIALS.map((t) => `- "${t.quote}" — ${t.name} (${t.role})`).join(NL)}

## Guides published

${postsBlock}

## How to get in touch

Message WebyGrowth on WhatsApp at +${SITE.whatsapp} (https://wa.me/${SITE.whatsapp}) for the fastest reply, email ${SITE.email}, or use the enquiry form at ${SITE.url}/contact/. A free website audit is offered with no obligation.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

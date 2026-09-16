# WebyGrowth — Astro website

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure
- `src/data/site.ts` — email, nav, testimonials, process steps, homepage FAQs
- `src/data/pages.ts` — content for every service & industry page (one entry = one page)
- `src/pages/[slug].astro` — template that generates those pages at their existing URLs
- `src/components/` — Header, Footer, Process, Testimonials, FAQ, SiteMock, Icon
- `src/styles/global.css` — design tokens & shared styles

## Contact form
Without configuration, the form opens the visitor's email app. To receive submissions directly,
create a form endpoint (e.g. Formspree or Web3Forms) and add it to `.env`:

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Deploy
Static site — deploy `dist/` to Netlify, Vercel, Cloudflare Pages or any host.

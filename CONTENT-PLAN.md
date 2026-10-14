# WebyGrowth SEO & Content Plan

Baseline when this plan started (Google Search Console, 3 months): **1.1K impressions, 2 clicks, average position 72.1**.

Google already shows the site for commercial queries — it just ranks far down page 7+ because there was no content depth behind the service pages. Everything below targets queries the site *already* appears for.

---

## 1. Publishing schedule (live)

Posts are markdown files in `src/content/blog/`. A post with a **future `pubDate` stays hidden** until that date, then appears automatically on the next daily rebuild (see §4).

| Publish date | Post | Target query | Funnels to |
|---|---|---|---|
| 14 Oct 2026 | How to Build a High-Converting Cleaning Company Website | high converting cleaning websites | /cleaning-website-design/ |
| 14 Oct 2026 | Roofing Website Builder vs Custom Website | roofing website builder | /roofing-website-design/ |
| 14 Oct 2026 | Shopify Store Design: 12 Things High-Converting Stores Get Right | shopify store design | /shopify-store-design/ |
| 14 Oct 2026 | How Much Does a Small Business Website Cost in the UK? | small business website cost uk | /wordpress-website-design/ |
| 17 Oct 2026 | WooCommerce Store Design: A Practical Guide for UK Retailers | woocommerce store design | /woocommerce-store-design/ |
| 20 Oct 2026 | Ecommerce Website Migration: The SEO-Safe Checklist | ecommerce website migration | /store-migrations/ |
| 23 Oct 2026 | Local SEO for Tradesmen | local seo for tradesmen | /seo-services/ |
| 26 Oct 2026 | Dental Website Design: Attract More Private Patients | dental website design | /dental-website-design/ |
| 29 Oct 2026 | Restaurant Website Essentials That Actually Fill Tables | restaurant website design | /restaurant-website-design/ |
| 1 Nov 2026 | Website Speed and Core Web Vitals | improve website speed small business | /wordpress-website-design/ |
| 4 Nov 2026 | 15 Website Mistakes Quietly Costing You Enquiries | website mistakes losing leads | /services/ |
| 7 Nov 2026 | Shopify Plus vs Shopify | shopify plus store design | /shopify-store-design/ |

### To add a post
Create `src/content/blog/your-slug.md`:

```markdown
---
title: "Post title"
description: "Meta description, max 155 characters"
keyword: "target search query"
pubDate: 2026-11-10
category: "Web Design"   # Web Design | Ecommerce | SEO | Industry Guides | Growth
tags: ["Tag", "Tag"]
relatedService: "wordpress-website-design"
featured: false
faqs:
  - q: "A question people actually search"
    a: "A two-to-three sentence answer."
---

Body in markdown. No H1 — the template adds the title.
```

Commit and push. If `pubDate` is in the future, it publishes itself on that date.

---

## 2. Keyword map (one page per intent — avoid two pages chasing the same query)

| Page | Primary query | Supporting queries |
|---|---|---|
| `/` | web design agency uk small business | website design for small business |
| `/wordpress-website-design/` | wordpress website design uk | custom wordpress website, wordpress web designer uk |
| `/woocommerce-store-design/` | woocommerce store design | woocommerce website developer uk |
| `/shopify-store-design/` | shopify store design | shopify website design uk, shopify plus store design |
| `/store-migrations/` | ecommerce store migration | woocommerce to shopify migration |
| `/seo-services/` | seo services for small business uk | local seo services uk |
| `/roofing-website-design/` | roofing website design | website builder for roofing company, web design roofing |
| `/cleaning-website-design/` | cleaning company website design | website for my cleaning company |
| `/dental-website-design/` | dental website design uk | websites for dentists |
| `/restaurant-website-design/` | restaurant website design uk | website for my restaurant |

Blog posts target the question/comparison versions of these queries and link up to the service page.

---

## 3. Next month's ideas (write these when the first 12 are live)

Pick based on what Search Console shows people actually searching for.

1. WordPress vs Shopify for a UK small business
2. How long does it take to build a website? (week-by-week)
3. What to prepare before your web designer starts (content checklist)
4. Google Business Profile optimisation for trades
5. How to write service pages that rank and convert
6. Plumber website design guide *(new industry page candidate)*
7. Electrician website design guide *(new industry page candidate)*
8. Beauty salon website design guide *(new industry page candidate)*
9. Website maintenance: what actually needs doing monthly
10. How to get reviews that help you rank locally
11. Ecommerce product page checklist
12. Signs your website needs a redesign

**Location pages** are the other big opportunity: `/web-design-[city]/` for 5–10 UK cities you want work from. Only build them with genuinely different content per city — thin duplicated location pages hurt more than they help.

---

## 4. How scheduled publishing works

- Future-dated posts are filtered out at build time by `src/lib/posts.ts`.
- `.github/workflows/scheduled-publish.yml` pings a Cloudflare deploy hook every day at 07:10 UTC, so the site rebuilds and the day's post goes live.
- **One-time setup:** create a Deploy hook in Cloudflare Pages (Settings → Builds & deployments), then add it to GitHub as a repository secret named `CLOUDFLARE_DEPLOY_HOOK`.

---

## 5. Ongoing routine

**Weekly (20 minutes)**
- Search Console → Performance: note new queries appearing. Any query with impressions but no clicks is a post waiting to be written.
- Search Console → Pages: fix anything new under "Not indexed".

**Monthly**
- Publish 4–8 new posts (see §3).
- Update the oldest posts with anything that changed; set `updatedDate` in the frontmatter.
- Add internal links from new posts to older ones, and from service pages to the best posts.
- Check Core Web Vitals and the top landing pages by enquiries.

**Off-site (the part no website change can replace)**
- Google Business Profile: complete it, post updates, collect reviews.
- Get listed on trade directories and local business sites.
- Ask every happy client for a review and a link.

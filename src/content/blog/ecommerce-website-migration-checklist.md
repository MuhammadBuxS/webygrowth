---
title: "Ecommerce Website Migration: The SEO-Safe Checklist"
description: "A step-by-step ecommerce website migration checklist: audit, URL mapping, 301 redirects, staging QA, launch day and post-launch monitoring to protect your traffic."
keyword: "ecommerce website migration"
pubDate: 2026-10-20
category: "Ecommerce"
tags: ["Migration", "SEO", "Ecommerce"]
relatedService: "store-migrations"
featured: false
faqs:
  - q: "Will I lose rankings when I migrate my online store?"
    a: "Some movement is common in the first few weeks, even with a careful migration. Losses become serious when redirects are missing, URLs change without mapping, or pages are blocked from crawling. Following a checklist keeps those avoidable problems out of the way."
  - q: "How long does an ecommerce migration take?"
    a: "A small store with a clean catalogue can take a few weeks including testing. Larger catalogues, custom features, many customers and orders, or messy URLs take longer. Allow time for audit, staging, QA and monitoring afterwards, not just the data transfer."
  - q: "Do I need 301 redirects if the URLs are staying the same?"
    a: "If a URL is identical on the new site, it needs no redirect. Any URL that changes needs a 301 to its closest equivalent. Check every old URL against the new site rather than assuming, because small differences such as trailing slashes or category paths can break matches."
  - q: "Can I migrate from Shopify to WooCommerce, or the other way round, without downtime?"
    a: "Yes. You build and test the new store on a staging site while the old one keeps trading, then switch over at a planned time. A short content freeze for orders and customers is usually needed so that nothing is missed during the final data sync."
---

An SEO-safe ecommerce website migration means keeping every page that earns traffic or revenue reachable at the same address, or redirecting it with a 301 to its closest equivalent, then monitoring closely after launch. Most traffic loss comes from skipped steps, not from the move itself. Use the checklist below in order.

## Why migrations lose traffic

Search engines know your store by its URLs, content, internal links and signals built over time. A migration puts all of that at risk at once. The usual causes are:

- Old URLs that return 404 errors because nobody mapped them.
- Redirects pointing at the home page instead of the matching page.
- Titles, descriptions, headings and structured data that disappear in the new theme.
- A staging site left blocked from search engines after launch.
- Slower pages or a weaker mobile experience on the new platform.
- Internal links still pointing at old URLs, creating redirect chains.

None of these is mysterious, and all are preventable. We cannot promise your rankings will be unchanged, but we can make sure none of these are the reason they move.

## Phase 1: Audit before you touch anything

1. **Crawl the current site.** Use a crawler to export every URL, status code, title, meta description, heading, canonical tag and internal link. This is your baseline.
2. **Build a URL inventory.** Include products, categories, filtered pages that are indexed, blog posts, landing pages, images and PDFs.
3. **Rank pages by value.** Pull organic traffic and revenue per page from Google Analytics and Search Console. Mark your top pages, those with backlinks, and those with strong conversion. These get the most care.
4. **Record current performance.** Save a snapshot of rankings, impressions, clicks, conversion rate and page speed so that you can compare afterwards.
5. **Check external links.** Export backlinks from Search Console or a link tool. Pages with valuable links must be redirected correctly.
6. **Decide what you will not move.** Dead products, thin pages and duplicates can be retired deliberately, with a redirect or a proper 410, rather than carried over by default.

## Phase 2: Decide what data to move

Each platform handles data differently, so list what you need and confirm how each item will transfer.

| Data | What to check |
|---|---|
| Products | Titles, descriptions, SKUs, images, prices, stock, categories, tags |
| Variants | Option names, per-variant prices, SKUs, images, stock |
| Customers | Names, addresses, marketing consent, account status |
| Orders | History, statuses, totals, tax. Needed for accounts and reporting |
| Reviews | Text, ratings, dates. Check the new platform will keep them and show structured data |
| Blog and pages | Content, images, authors, dates, internal links |
| Redirects | Any existing redirect rules that must carry over |
| Discounts and gift cards | Active codes and balances, where the platform allows it |

Customer passwords generally cannot be moved between platforms, so plan for a password reset email. Think about data protection too: only migrate customers whose data you are entitled to keep, and keep marketing consent records intact.

## Phase 3: URL mapping and 301 redirects

This is the step that protects your traffic.

1. **List old URLs in one column and the new URL in the next.** Every indexed URL from your crawl needs a row.
2. **Keep URLs the same where you can.** If the new platform allows it, do not change them for the sake of tidiness. Needless changes create risk.
3. **Map to the closest equivalent.** An old product goes to the same product, or to its category if it has been discontinued. Do not send everything to the home page.
4. **Use 301 (permanent) redirects**, one hop only. Avoid chains where A goes to B goes to C.
5. **Cover variants of the URL**, such as with and without trailing slashes, http and https, and with or without the www prefix.
6. **Test the sheet** by running the old URL list through a crawler against the staging redirects before launch.
7. **Update internal links** so they point directly at new URLs, not through redirects.

Keep the redirects in place for at least a year, and longer if the old URLs have good backlinks. Dropping them early is one of the most common mistakes we see.

## Phase 4: Preserve metadata and structured data

For each page type, confirm that the new site carries across:

- Title tags and meta descriptions, at least for your top pages
- H1 and heading structure
- Canonical tags pointing at the correct, final URL
- Product structured data: name, image, price, availability, and review ratings where genuine
- Breadcrumb markup
- Image file names and alt text
- Hreflang tags, if you sell in more than one language or region
- XML sitemap listing only live, indexable URLs

Spot check with Google's Rich Results Test and the URL Inspection tool in Search Console.

## Phase 5: Staging and QA checklist

Build and test on a private staging site. Block it from search engines and put a password on it.

1. Check every template: home, category, product, search results, basket, checkout, account, blog and 404 page.
2. Place test orders using each payment method, with each shipping option and a discount code.
3. Confirm tax, VAT display and invoices are correct.
4. Check order emails, account emails and password resets.
5. Test on real phones and at least two browsers.
6. Compare page speed with your baseline, and fix regressions before launch.
7. Verify analytics, conversion tracking and any ad pixels fire correctly.
8. Run the redirect test from Phase 3.
9. Crawl staging and compare it against your original crawl for missing titles, headings and canonicals.
10. Review accessibility basics: contrast, form labels, keyboard navigation.

## Phase 6: Launch day sequence

1. Lower the DNS TTL to a short value, such as 300 seconds, at least 24 to 48 hours beforehand, so changes spread quickly.
2. Announce a short content and order freeze if necessary.
3. Take a full backup of the old site.
4. Run the final data sync for products, stock, customers and orders.
5. Switch DNS to the new host or platform.
6. **Remove the staging password and search engine block.** Check robots.txt and the "discourage search engines" or noindex setting.
7. Confirm SSL is working and all pages load over https.
8. Switch on the redirects and test a sample of old URLs, starting with your top pages.
9. Submit the new XML sitemap in Search Console.
10. Place a live test order and refund it.
11. Raise the TTL again once everything is stable.

If your domain name changes, also use the Change of Address tool in Search Console. If it does not, you do not need it.

## Phase 7: Post-launch monitoring

Check daily for the first two weeks, then weekly for a few months.

- **Page indexing report in Search Console:** watch for rising "Not found (404)", "Blocked by robots.txt" or "Excluded by noindex" counts.
- **Crawl stats and sitemap status:** confirm Google is reading the new sitemap.
- **404s:** fix any real URLs that were missed by adding redirects. Server logs or your platform's 404 report help here.
- **Performance report:** compare clicks and impressions for your top pages against your baseline.
- **Rankings:** track your priority terms. Expect some fluctuation, and judge over weeks rather than days.
- **Revenue and conversion:** a traffic recovery means little if checkout is broken.
- **Core Web Vitals and speed:** check real user data once it accumulates.

## Common mistakes

- **Dropping redirects** after a few months to "tidy up".
- **Changing URLs needlessly**, such as renaming categories or switching URL structure with no benefit.
- **Redirecting everything to the home page**, which search engines may treat as a soft 404.
- **Blocking staging in robots.txt, then forgetting to remove the block** at launch. Make it a named step on your launch list.
- **Forgetting the blog and non-product pages**, which often carry the most backlinks.
- **Launching on a Friday afternoon** with nobody available to fix problems.
- **Not recording a baseline**, so you cannot tell what changed.

## A realistic timeline

Every store differs, but this is a sensible shape:

| Stage | Typical duration |
|---|---|
| Audit and planning | 1 to 2 weeks |
| Build, data import and redirect mapping | 2 to 4 weeks |
| Staging QA and fixes | 1 to 2 weeks |
| Launch | 1 day, plus a content freeze if needed |
| Intensive monitoring | 2 weeks |
| Follow-up checks | 3 months |

Large catalogues, custom features or messy legacy URLs will push this out.

## Platform-specific notes

**WooCommerce to Shopify.** Shopify fixes some URL patterns, such as /products/ and /collections/, so many URLs will change and a thorough redirect map is essential. Shopify lets you import redirects in bulk using a CSV file. Blog posts and pages need to be moved too, and check how your reviews will be handled. See our [Shopify store design](/shopify-store-design/) page for how we build these.

**Shopify to WooCommerce.** You gain freedom over URL structure, so you can often recreate the old paths exactly using permalink settings. Pay attention to redirects for collection and product paths, and set up WooCommerce tax, shipping and payments properly.

**Wix and Squarespace.** Exporting data is more limited, so expect to rebuild some content by hand and to export products and blog posts through whatever the platform allows. Document URLs from a crawl instead of relying on an export. Be aware of how each handles redirect rules.

**Magento.** Older Magento stores often have long product URLs, suffixes such as .html, layered navigation pages and many store views. Audit these carefully and decide which to keep, redirect or retire.

For a managed move, see our [store migrations](/store-migrations/) service. If you are choosing a destination, our [WooCommerce store design guide](/blog/woocommerce-store-design-guide/) explains when it is the right fit.

## Next steps

If you are planning a move and want the redirects, data and launch handled properly, ask us for a free website audit. We will review your current store, list the risks and outline a plan. Talk to us through the [contact page](/contact/), on WhatsApp at +44 7460 610320 or by email at hello@webygrowth.com. If you want help with search performance before or after the move, our [SEO services](/seo-services/) cover it.

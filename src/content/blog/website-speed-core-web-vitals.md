---
title: "Website Speed and Core Web Vitals: A Small Business Guide"
description: "Improve website speed for your small business: Core Web Vitals explained, how to measure them, and a prioritised fix list from quick wins to rebuilds."
keyword: "improve website speed small business"
pubDate: 2026-11-01
category: "Web Design"
tags: ["Performance", "Core Web Vitals", "SEO"]
relatedService: "wordpress-website-design"
featured: false
faqs:
  - q: "What is a good Core Web Vitals score?"
    a: "Google considers a page good when its Largest Contentful Paint is 2.5 seconds or less, Interaction to Next Paint is 200 milliseconds or less, and Cumulative Layout Shift is 0.1 or less. These are measured at the 75th percentile of real visits, so most of your visitors need to meet them, not just the fastest."
  - q: "Will fixing Core Web Vitals improve my Google rankings?"
    a: "Core Web Vitals are one of many signals Google uses, and relevance and content quality still matter far more. A faster site will not guarantee higher rankings, but it removes a handicap and usually improves the experience for visitors, which helps enquiries and sales."
  - q: "Why does PageSpeed Insights show a different score each time?"
    a: "The lab score comes from a simulated test that varies with server load, network conditions and the device being emulated, so small changes are normal. Focus on the field data section, which reflects real visitors over the previous 28 days, and on trends rather than single test results."
  - q: "Is it worth rebuilding a slow website instead of optimising it?"
    a: "Sometimes. If the problems come from the theme, page builder or underlying structure, optimisation can only go so far and a lean rebuild is often cheaper than endless patching. If the issues are mainly images, hosting and caching, optimisation is usually enough."
---

To improve website speed as a small business, start by measuring real visitor data, then fix the biggest causes in order: oversized images, heavy plugins and scripts, weak hosting and missing caching. Core Web Vitals are Google's three measures of how fast, responsive and stable a page feels. This guide explains them in plain English and gives you a prioritised list of fixes.

## What Core Web Vitals are, in plain English

Core Web Vitals are three measurements of the experience on a real page. Google publishes the thresholds, and they apply to the experience of at least 75% of visits.

| Metric | What it means | Good | Needs improvement | Poor |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | How long until the biggest thing on screen, usually a hero image or main heading, has loaded | 2.5 seconds or less | 2.5 to 4 seconds | Over 4 seconds |
| **INP** (Interaction to Next Paint) | How quickly the page responds when someone taps, clicks or types | 200 milliseconds or less | 200 to 500 milliseconds | Over 500 milliseconds |
| **CLS** (Cumulative Layout Shift) | How much the page jumps around while loading, such as a button moving as you tap it | 0.1 or less | 0.1 to 0.25 | Over 0.25 |

INP replaced an older measure called First Input Delay in 2024, so older articles may still mention that.

### What Google does with them

Google uses Core Web Vitals as part of its page experience signals. They are one input among many, and great, relevant content can still rank with imperfect scores. We would not promise anyone a ranking boost from speed alone. The more practical reason to care is that slow, jumpy pages frustrate people, and frustrated people leave before they call, book or buy.

## How to measure properly

Many owners run one test, see a score of 54 and panic. Measuring well matters, because you want to fix real problems, not chase a number.

### Lab data versus field data

[PageSpeed Insights](https://pagespeed.web.dev/) shows two kinds of data:

- **Field data** comes from real Chrome users visiting your site over the previous 28 days. This is what Google uses for Core Web Vitals. It only appears if your site gets enough traffic.
- **Lab data** is a simulated test run on a throttled mobile connection. It is excellent for diagnosing problems and checking a fix, but it is not the same as what real visitors experience, and it varies from run to run.

Use the field data to judge where you stand, and the lab data to find out why.

### Search Console

If you have Google Search Console set up, the Core Web Vitals report groups your pages into Good, Needs improvement and Poor, for mobile and desktop separately. It shows patterns across template types, such as every blog post failing LCP for the same reason, which tells you where one fix will help many pages. Allow time after making changes, as the data updates over weeks, not instantly.

Also test on a real mid-range phone using mobile data. Your office Wi-Fi and latest handset hide problems your customers feel.

## The usual culprits on small business sites

We see the same causes again and again.

- **Huge, unoptimised images.** A 4 MB photograph straight from a phone or camera, displayed in a box 400 pixels wide, is the most common problem by far.
- **Too many plugins.** Each WordPress plugin may load its own scripts and styles on every page, even where it is not used.
- **Heavy page builders.** Some builders produce deeply nested markup and large amounts of JavaScript and CSS for simple layouts.
- **Sliders and carousels.** They often load several large images plus a script library, and the first slide is frequently the LCP element.
- **Third-party scripts and chat widgets.** Analytics, tag managers, live chat, social feeds, review badges and booking widgets each add requests and can slow responsiveness.
- **Cheap shared hosting.** Slow server response means everything else starts late.
- **No caching or CDN.** Without caching, the server rebuilds the same page for every visitor. Without a CDN, files travel further than they need to.

## A prioritised fix list, easiest win first

Work down this list in order. Test after each step so you know what helped.

1. **Compress and resize images.** Resize to the largest size they are actually displayed, then compress. This is usually the biggest single win and takes an afternoon.
2. **Set image dimensions.** Add width and height attributes so the browser reserves space, which prevents layout shift.
3. **Lazy-load images below the fold, but not the main one.** Never lazy-load your LCP image. If anything, tell the browser it is a priority.
4. **Delete unused plugins and themes.** Deactivate and remove anything you do not need, then check the site still works.
5. **Turn on caching.** Use a reputable caching plugin or your host's built-in caching.
6. **Remove or delay third-party scripts.** Ask of each one: is it earning its place? Load chat widgets after the page is interactive or when someone clicks.
7. **Replace sliders** with a single strong hero image.
8. **Optimise fonts** (see below).
9. **Add a CDN.** Many hosts include one, or you can use a standalone service.
10. **Upgrade hosting.** If your server response is slow even with caching, a better plan or provider is the fix.
11. **Rebuild or replace the theme or page builder.** The biggest job, but sometimes the only real answer.

Steps 1 to 6 are mostly cheap and quick, and for many small sites they are enough to reach the Good thresholds.

## Image formats and sizing

Images are usually the largest files on a page, so it is worth getting them right.

- **Use modern formats.** WebP and AVIF are typically much smaller than JPEG at similar visual quality. Keep JPEG as a fallback if needed. Use SVG for logos and icons.
- **Match the size to the layout.** A full-width hero rarely needs to be wider than about 1,600 to 2,000 pixels. A card thumbnail may need only 400.
- **Serve responsive sizes** using `srcset` and `sizes` so phones download smaller files than desktops.
- **Do not overshoot quality.** Quality settings around 75 to 85 are often indistinguishable on screen but much lighter.
- **Always include alt text and dimensions.** This helps accessibility and stability.

## Fonts

Custom fonts are a hidden cost. Each weight and style is another file.

- Limit yourself to one or two font families and only the weights you use.
- Host fonts on your own domain where possible rather than fetching them from a third party.
- Use `font-display: swap` so text appears immediately in a fallback font.
- Subset fonts to the characters you need, and preload the most important file.
- Consider system fonts for body text. They cost nothing to download.

## When a rebuild beats optimisation

Optimisation is the right first step, but it has limits. A rebuild usually makes sense when:

- The theme or builder is the main cause and every page is weighed down by the same code.
- You have layered plugin after plugin to patch behaviour, and each update risks breaking something.
- The design is due for a refresh anyway, so you would be paying for two projects.
- Scores stay in the Poor range after sensible image, caching and hosting fixes.

A purpose-built site, whether on a lightweight WordPress setup or a static framework, can start fast and stay fast because it contains only what it needs. Our [WordPress website design](/wordpress-website-design/) service is built around this, and our [services page](/services/) shows the other options. If cost is a concern, our guide to [small business website cost in the UK](/blog/small-business-website-cost-uk/) explains what to expect.

## Maintaining speed after launch

Sites rarely become slow overnight. They get slower through small additions.

- **Check Search Console monthly** for new Poor or Needs improvement pages.
- **Set an image routine.** Anyone uploading photos should resize and compress first, or use a plugin that does it automatically.
- **Review plugins and scripts quarterly.** Remove anything unused before adding anything new.
- **Test before adding anything big,** such as a new widget, pop-up or tracking tag.
- **Keep WordPress, themes and plugins updated,** after taking a backup.
- **Revisit hosting** if traffic grows.

Speed supports your wider search visibility alongside content and links, which is where our [SEO services](/seo-services/) come in.

## Next steps

If you are not sure where your site stands, we offer a free website audit that checks your Core Web Vitals, the biggest speed problems and what we would fix first, in plain English. [Contact us here](/contact/), message us on WhatsApp at +44 7460 610320, or email hello@webygrowth.com and we will take a look.

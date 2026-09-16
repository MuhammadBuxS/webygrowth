export type Feature = { title: string; text: string };
export type Faq = { q: string; a: string };

export type ServicePage = {
  slug: string;
  kind: 'service' | 'industry';
  label: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  short: string;
  benefits: Feature[];
  deliverables: string[];
  faqs: Faq[];
  mock: { brand: string; headline: string; cta: string; hue: number };
};

export const PAGES: ServicePage[] = [
  {
    slug: 'wordpress-website-design',
    kind: 'service',
    label: 'WordPress Website Design',
    icon: 'wordpress',
    metaTitle: 'WordPress Website Design UK | Fast, SEO-Ready Sites | WebyGrowth',
    metaDescription:
      'Custom WordPress website design for UK small businesses. Professional, fast-loading, SEO-ready websites built to turn visitors into enquiries.',
    eyebrow: 'WordPress Design & Development',
    h1: 'WordPress websites that',
    h1Accent: 'win you work.',
    intro:
      'Custom WordPress websites designed to look professional, load fast, and turn visitors into enquiries — and simple enough for you to update yourself.',
    short: 'Custom WordPress websites designed to look professional, load fast, and turn visitors into enquiries.',
    benefits: [
      { title: 'Bespoke design', text: 'No recycled templates. A layout shaped around your services, customers and brand.' },
      { title: 'Lightning fast', text: 'Lean themes, optimised images and caching for green Core Web Vitals scores.' },
      { title: 'Easy to edit', text: 'Update text, photos and pages yourself — no developer needed for day-to-day changes.' },
      { title: 'SEO foundations', text: 'Clean headings, schema, metadata and sitemaps configured before launch.' },
      { title: 'Built for leads', text: 'Click-to-call, quote forms and trust signals exactly where visitors need them.' },
      { title: 'Secure & maintained', text: 'Hardened setup, backups and updates so your site stays healthy long term.' },
    ],
    deliverables: [
      'Strategy & sitemap planning',
      'Custom responsive design',
      'Lead & quote forms',
      'On-page SEO setup',
      'Google Analytics & Search Console',
      'Speed & image optimisation',
      'Training video walkthrough',
      '30 days post-launch support',
    ],
    faqs: [
      { q: 'Will I be able to edit my WordPress website?', a: 'Yes. We build with a clean, intuitive editing experience and give you a walkthrough so you can update content confidently.' },
      { q: 'Can you redesign my current WordPress site?', a: 'Yes. We can rebuild it with a modern design and faster setup while preserving URLs and content that already rank.' },
      { q: 'How much does a WordPress website cost?', a: 'It depends on pages, features and content. After a quick consultation we give you a clear fixed quote — no surprises.' },
      { q: 'Do you provide hosting?', a: 'We can recommend and configure fast, reliable UK-friendly hosting, or work with your existing provider.' },
    ],
    mock: { brand: 'Northgate Joinery', headline: 'Craftsmanship built to last.', cta: 'Get a quote', hue: 221 },
  },
  {
    slug: 'woocommerce-store-design',
    kind: 'service',
    label: 'WooCommerce Store Design',
    icon: 'cart',
    metaTitle: 'WooCommerce Store Design UK | Ecommerce Websites | WebyGrowth',
    metaDescription:
      'Flexible WooCommerce store design built for beautiful product presentation, smooth checkout and easy management. Grow online sales with WebyGrowth.',
    eyebrow: 'WooCommerce Store Design',
    h1: 'WooCommerce stores',
    h1Accent: 'built to sell.',
    intro:
      'Flexible WooCommerce stores built for striking product presentation, a smooth shopping journey, and effortless day-to-day management.',
    short: 'Flexible WooCommerce stores built for product presentation, smooth shopping, and easy management.',
    benefits: [
      { title: 'Own your platform', text: 'No platform lock-in or transaction fees — full control of your store and data.' },
      { title: 'Conversion-first checkout', text: 'Streamlined checkout flows that reduce abandonment and increase order value.' },
      { title: 'Product pages that sell', text: 'Rich galleries, variations, reviews and upsells presented beautifully.' },
      { title: 'Payments & shipping', text: 'Stripe, PayPal, Apple Pay, Royal Mail and courier rules configured for the UK.' },
      { title: 'Ecommerce SEO', text: 'Optimised category structure, product schema and fast pages that rank.' },
      { title: 'Simple management', text: 'Manage orders, stock and discounts easily from one dashboard.' },
    ],
    deliverables: [
      'Custom store design',
      'Product & category setup',
      'Payment gateway integration',
      'Shipping & VAT configuration',
      'Product schema & SEO',
      'Abandoned cart recovery',
      'Analytics & ecommerce tracking',
      'Store management training',
    ],
    faqs: [
      { q: 'WooCommerce or Shopify — which is better for me?', a: 'WooCommerce suits businesses wanting full control and flexibility; Shopify suits those wanting a fully hosted platform. We will recommend the best fit honestly.' },
      { q: 'Can you import my existing products?', a: 'Yes. We can import products, variations, images and customers from spreadsheets or other platforms.' },
      { q: 'Will my store work well on mobile?', a: 'Every store is designed mobile-first, since most shoppers browse and buy on their phones.' },
      { q: 'Can you add subscriptions or bookings?', a: 'Yes. WooCommerce supports subscriptions, bookings, memberships and more through trusted extensions.' },
    ],
    mock: { brand: 'Fern & Clay', headline: 'Handmade ceramics for slow living.', cta: 'Shop now', hue: 262 },
  },
  {
    slug: 'shopify-store-design',
    kind: 'service',
    label: 'Shopify Store Design',
    icon: 'bag',
    metaTitle: 'Shopify Store Design UK | Premium Shopify Websites | WebyGrowth',
    metaDescription:
      'Modern Shopify store design with premium layouts, mobile-first shopping experiences and conversion-focused sections for growing UK brands.',
    eyebrow: 'Shopify Store Design',
    h1: 'Shopify stores that feel',
    h1Accent: 'premium.',
    intro:
      'Modern Shopify stores with premium layouts, mobile-first shopping experiences, and conversion-focused sections that turn browsers into buyers.',
    short: 'Modern Shopify stores with premium layouts, mobile-first shopping experiences, and conversion-focused sections.',
    benefits: [
      { title: 'Premium brand feel', text: 'Custom-styled themes that make your products look as good as they are.' },
      { title: 'Mobile-first shopping', text: 'Thumb-friendly navigation, fast product pages and one-tap checkout.' },
      { title: 'Conversion sections', text: 'Bundles, reviews, trust badges and urgency elements placed with purpose.' },
      { title: 'App stack done right', text: 'Only the apps you need — keeping your store fast and your costs down.' },
      { title: 'Shopify SEO', text: 'Collections, metadata and structured data optimised for search.' },
      { title: 'Scales with you', text: 'Markets, multi-currency and wholesale ready when you are.' },
    ],
    deliverables: [
      'Custom theme design',
      'Homepage & collection layouts',
      'Product page optimisation',
      'Shopify Payments & shipping',
      'Review & email app setup',
      'SEO & structured data',
      'Speed optimisation',
      'Store training & handover',
    ],
    faqs: [
      { q: 'Do you build custom Shopify themes?', a: 'We customise premium themes or build bespoke sections depending on your budget and goals — always tailored to your brand.' },
      { q: 'Can you improve my existing Shopify store?', a: 'Yes. We can redesign key pages, improve speed and optimise conversion without rebuilding everything.' },
      { q: 'Will you set up payments and shipping?', a: 'Yes. We configure Shopify Payments, shipping zones, taxes and notifications for UK and international selling.' },
      { q: 'How long does a Shopify store take?', a: 'Most Shopify builds take 3–5 weeks depending on product count and custom features.' },
    ],
    mock: { brand: 'Ossa Skincare', headline: 'Clean skincare, honestly made.', cta: 'Shop bestsellers', hue: 160 },
  },
  {
    slug: 'store-migrations',
    kind: 'service',
    label: 'Store Migrations',
    icon: 'migrate',
    metaTitle: 'Ecommerce Store Migrations | Shopify & WooCommerce | WebyGrowth',
    metaDescription:
      'Move your products, pages, customers and store structure between Shopify, WooCommerce and other platforms with a clean, SEO-safe migration strategy.',
    eyebrow: 'Store Migrations',
    h1: 'Switch platforms.',
    h1Accent: 'Keep everything.',
    intro:
      'Move your products, pages, customers and store structure from one platform to another with a clean migration strategy that protects your rankings and revenue.',
    short: 'Move your products, pages, and store structure from one platform to another with a clean migration strategy.',
    benefits: [
      { title: 'Zero data loss', text: 'Products, variants, customers, orders and reviews moved accurately.' },
      { title: 'SEO protected', text: 'Full 301 redirect mapping so your search rankings carry over.' },
      { title: 'No downtime', text: 'We build and test on staging, then switch over when it suits you.' },
      { title: 'Cleaner structure', text: 'We tidy categories, tags and URLs during the move — not after.' },
      { title: 'Design upgrade', text: 'Launch on the new platform with a fresher, faster storefront.' },
      { title: 'Post-launch checks', text: 'We monitor traffic, errors and orders closely after go-live.' },
    ],
    deliverables: [
      'Migration audit & plan',
      'Product & variant transfer',
      'Customer & order history',
      '301 redirect mapping',
      'Staging build & QA',
      'Payment & shipping setup',
      'Launch-day support',
      'Post-migration SEO monitoring',
    ],
    faqs: [
      { q: 'Which platforms can you migrate between?', a: 'Most commonly WooCommerce ⇄ Shopify, plus migrations from Wix, Squarespace, Magento and BigCommerce.' },
      { q: 'Will I lose my Google rankings?', a: 'Not with a proper migration. We map every important URL with 301 redirects and preserve metadata to protect visibility.' },
      { q: 'Will my store go offline during migration?', a: 'No. We build on a staging environment and switch over with minimal to no downtime.' },
      { q: 'Can customers keep their accounts?', a: 'Customer records can be migrated; depending on the platform, customers may need to reset passwords, which we help communicate.' },
    ],
    mock: { brand: 'Harbour Coffee Co.', headline: 'Roasted in small batches.', cta: 'Browse coffee', hue: 28 },
  },
  {
    slug: 'seo-services',
    kind: 'service',
    label: 'SEO Services',
    icon: 'search',
    metaTitle: 'SEO Services for Small Businesses UK | Local SEO | WebyGrowth',
    metaDescription:
      'SEO services designed to improve your search visibility, content structure, rankings and local presence. Get found by more customers on Google.',
    eyebrow: 'SEO Services',
    h1: 'Get found by customers',
    h1Accent: 'ready to buy.',
    intro:
      'SEO services designed to improve your search visibility, content structure, rankings and local presence — so the right customers find you first.',
    short: 'SEO services designed to improve your search visibility, content structure, rankings, and local presence.',
    benefits: [
      { title: 'Technical SEO', text: 'Fix crawl issues, speed, indexing and Core Web Vitals holding you back.' },
      { title: 'Local SEO', text: 'Google Business Profile optimisation and local landing pages that rank in your area.' },
      { title: 'Content structure', text: 'Service and location pages organised around what customers actually search.' },
      { title: 'Keyword strategy', text: 'Target high-intent searches that bring enquiries, not just traffic.' },
      { title: 'On-page optimisation', text: 'Titles, headings, internal links and schema tuned page by page.' },
      { title: 'Clear reporting', text: 'Plain-English monthly reports on rankings, traffic and leads.' },
    ],
    deliverables: [
      'Full SEO audit',
      'Keyword & competitor research',
      'Technical fixes',
      'Google Business Profile optimisation',
      'Service & location pages',
      'Schema markup',
      'Internal linking strategy',
      'Monthly performance reports',
    ],
    faqs: [
      { q: 'How long does SEO take to work?', a: 'Technical improvements can show results in weeks; meaningful ranking growth typically builds over 3–6 months.' },
      { q: 'Do you do local SEO?', a: 'Yes. Local SEO is a core focus — helping trades, clinics and restaurants appear in map results and local searches.' },
      { q: 'Can you do SEO on a site you did not build?', a: 'Yes. We work on WordPress, WooCommerce, Shopify and most other platforms.' },
      { q: 'Do you guarantee first-place rankings?', a: 'No honest agency can guarantee rankings. We guarantee transparent work, best practice and clear reporting on progress.' },
    ],
    mock: { brand: 'Google Search', headline: 'Top 3 in your area', cta: 'Call now', hue: 199 },
  },
  {
    slug: 'roofing-website-design',
    kind: 'industry',
    label: 'Roofing Website Design',
    icon: 'roof',
    metaTitle: 'Roofing Website Design UK | Websites for Roofers | WebyGrowth',
    metaDescription:
      'Roofing website design that wins more quote requests. Fast, mobile-first websites for UK roofers with local SEO, galleries and click-to-call.',
    eyebrow: 'Websites for Roofers',
    h1: 'Roofing websites that',
    h1Accent: 'bring in quotes.',
    intro:
      'Show off your work, build instant trust and make it effortless for homeowners to request a quote — from any phone, in any postcode you cover.',
    short: 'Quote-focused websites for roofers that build trust and rank locally.',
    benefits: [
      { title: 'Quote requests first', text: 'Sticky call buttons and short quote forms on every page.' },
      { title: 'Project galleries', text: 'Before-and-after showcases that prove the quality of your work.' },
      { title: 'Trust badges', text: 'Accreditations, guarantees and reviews displayed prominently.' },
      { title: 'Local area pages', text: 'Rank in every town and city you serve.' },
      { title: 'Emergency repairs', text: 'Urgent-call sections for storm damage and leaks.' },
      { title: 'Mobile-first', text: 'Built for homeowners searching on their phones.' },
    ],
    deliverables: ['Service pages per roofing type', 'Before & after gallery', 'Quote request form', 'Google reviews integration', 'Local SEO area pages', 'Click-to-call & WhatsApp', 'Accreditation badges', 'Google Business Profile setup'],
    faqs: [
      { q: 'Can you create pages for each area I cover?', a: 'Yes. Location pages help you rank in each town or city you serve.' },
      { q: 'Can I add new project photos myself?', a: 'Yes. Galleries are easy to update from your phone or computer.' },
      { q: 'Do you show Google reviews?', a: 'We can display your reviews to build trust with new customers.' },
      { q: 'How quickly can my roofing site launch?', a: 'Most roofing websites launch in 2–4 weeks.' },
    ],
    mock: { brand: 'Summit Roofing', headline: 'Roof repairs you can trust.', cta: 'Free roof survey', hue: 14 },
  },
  {
    slug: 'cleaning-website-design',
    kind: 'industry',
    label: 'Cleaning Website Design',
    icon: 'sparkle',
    metaTitle: 'Cleaning Company Website Design UK | WebyGrowth',
    metaDescription:
      'Website design for cleaning companies. Win more domestic and commercial contracts with fast, trustworthy websites, instant quotes and local SEO.',
    eyebrow: 'Websites for Cleaning Companies',
    h1: 'Cleaning websites that',
    h1Accent: 'book more jobs.',
    intro:
      'Spotless, trustworthy websites for domestic and commercial cleaning companies — with instant quotes, clear pricing and local visibility.',
    short: 'Trust-building websites that help cleaning companies win regular clients.',
    benefits: [
      { title: 'Instant quote forms', text: 'Collect property size, frequency and service in seconds.' },
      { title: 'Domestic & commercial', text: 'Separate journeys for homeowners and business clients.' },
      { title: 'Trust & vetting', text: 'Insurance, DBS checks and guarantees front and centre.' },
      { title: 'Clear pricing', text: 'Transparent packages that pre-qualify enquiries.' },
      { title: 'Local SEO', text: 'Rank for “cleaners near me” in your service areas.' },
      { title: 'Booking ready', text: 'Online booking integrations when you want them.' },
    ],
    deliverables: ['Service & package pages', 'Instant quote calculator', 'Commercial enquiry page', 'Trust & insurance section', 'Local area pages', 'Reviews integration', 'Online booking option', 'Recruitment page'],
    faqs: [
      { q: 'Can customers book online?', a: 'Yes. We can integrate booking tools so customers can schedule cleans directly.' },
      { q: 'Can you target commercial contracts?', a: 'Yes. We create dedicated commercial pages aimed at offices, landlords and facilities managers.' },
      { q: 'Can I add a staff recruitment page?', a: 'Yes — a recruitment page helps you grow your team as demand increases.' },
      { q: 'Will my site rank locally?', a: 'Every site includes local SEO foundations for your service areas.' },
    ],
    mock: { brand: 'Brightside Cleaning', headline: 'A spotless home, every time.', cta: 'Get instant quote', hue: 186 },
  },
  {
    slug: 'dental-website-design',
    kind: 'industry',
    label: 'Dental Website Design',
    icon: 'tooth',
    metaTitle: 'Dental Website Design UK | Websites for Dentists | WebyGrowth',
    metaDescription:
      'Dental website design that attracts new patients. Calm, trustworthy, fast websites for UK dental practices with online booking and treatment pages.',
    eyebrow: 'Websites for Dental Practices',
    h1: 'Dental websites that',
    h1Accent: 'fill your diary.',
    intro:
      'Calm, reassuring and professional websites that help anxious patients choose you — and make booking an appointment effortless.',
    short: 'Calm, professional websites that attract new patients to dental practices.',
    benefits: [
      { title: 'Patient reassurance', text: 'Warm design, team profiles and clear information that ease nerves.' },
      { title: 'Treatment pages', text: 'Implants, Invisalign, whitening and more — each page built to rank.' },
      { title: 'Online booking', text: 'Integrate your booking system for 24/7 appointments.' },
      { title: 'Finance & pricing', text: 'Transparent fees and payment plans that encourage bookings.' },
      { title: 'Compliance aware', text: 'Content structured with GDC advertising guidance in mind.' },
      { title: 'Accessible', text: 'Readable, accessible design for patients of all ages.' },
    ],
    deliverables: ['Treatment page structure', 'Online booking integration', 'Meet the team section', 'Fees & finance pages', 'Patient reviews', 'Local dental SEO', 'New patient forms', 'Accessibility best practices'],
    faqs: [
      { q: 'Can you integrate our booking software?', a: 'Yes. We integrate most popular dental booking systems or add a request-an-appointment form.' },
      { q: 'Do you write treatment page content?', a: 'We can structure and write SEO-friendly treatment content for your review.' },
      { q: 'Is the site accessible?', a: 'We follow accessibility best practices for contrast, typography and navigation.' },
      { q: 'Can you help us rank for private treatments?', a: 'Yes. Dedicated, optimised treatment pages help attract high-value private patients.' },
    ],
    mock: { brand: 'Willow Dental', headline: 'Gentle dentistry for the whole family.', cta: 'Book appointment', hue: 172 },
  },
  {
    slug: 'restaurant-website-design',
    kind: 'industry',
    label: 'Restaurant Website Design',
    icon: 'dish',
    metaTitle: 'Restaurant Website Design UK | Websites for Restaurants | WebyGrowth',
    metaDescription:
      'Restaurant website design that fills tables. Mouth-watering, mobile-first websites with menus, reservations and ordering for UK restaurants and cafés.',
    eyebrow: 'Websites for Restaurants',
    h1: 'Restaurant websites that',
    h1Accent: 'fill tables.',
    intro:
      'Mouth-watering websites for restaurants, cafés and takeaways — with mobile menus, reservations and direct ordering that skip the commission.',
    short: 'Appetising, mobile-first websites that fill tables for restaurants and cafés.',
    benefits: [
      { title: 'Menus that sell', text: 'Fast, readable mobile menus — no clunky PDF downloads.' },
      { title: 'Table reservations', text: 'Integrate OpenTable, ResDiary or your preferred system.' },
      { title: 'Direct ordering', text: 'Take orders online without third-party commission.' },
      { title: 'Atmosphere first', text: 'Photography-led design that captures your venue’s vibe.' },
      { title: 'Local visibility', text: 'Rank for “restaurants near me” and cuisine searches.' },
      { title: 'Events & offers', text: 'Promote specials, private dining and events easily.' },
    ],
    deliverables: ['Mobile-friendly menu', 'Reservation integration', 'Online ordering setup', 'Gallery & atmosphere', 'Private dining page', 'Google Business Profile', 'Restaurant schema', 'Events & offers section'],
    faqs: [
      { q: 'Can I update my menu myself?', a: 'Yes. Menus are easy to edit — change dishes and prices in minutes.' },
      { q: 'Can you add online ordering?', a: 'Yes. We can set up direct ordering so you keep more of every sale.' },
      { q: 'Do you integrate reservation systems?', a: 'We integrate popular systems like OpenTable and ResDiary, or add a simple booking form.' },
      { q: 'Will it help us show up on Google Maps?', a: 'We optimise your Google Business Profile and add restaurant schema to improve local visibility.' },
    ],
    mock: { brand: 'Ember & Oak', headline: 'Wood-fired. Locally sourced.', cta: 'Book a table', hue: 35 },
  },
];

export const SERVICES = PAGES.filter((p) => p.kind === 'service');
export const INDUSTRIES = PAGES.filter((p) => p.kind === 'industry');

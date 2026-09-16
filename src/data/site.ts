export const SITE = {
  name: 'WebyGrowth',
  url: 'https://webygrowth.com',
  email: 'hello@webygrowth.com',
  tagline: 'Web design for small businesses that want more leads, sales & visibility.',
  description:
    'WebyGrowth is a UK web design agency building fast, SEO-ready WordPress, WooCommerce and Shopify websites that turn visitors into enquiries.',
  area: 'Serving UK businesses remotely',
  // Contact form submissions are delivered by FormSubmit (formsubmit.co).
  // Override with PUBLIC_FORM_ENDPOINT, e.g. the random alias FormSubmit gives you after activation.
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) || 'https://formsubmit.co/ajax/mbux4001@gmail.com',
};

export type NavItem = { label: string; href: string; desc?: string };

export const NAV_SERVICES: NavItem[] = [
  { label: 'WordPress Websites', href: '/wordpress-website-design/', desc: 'Custom, fast, lead-focused builds' },
  { label: 'WooCommerce Stores', href: '/woocommerce-store-design/', desc: 'Flexible stores you fully own' },
  { label: 'Shopify Stores', href: '/shopify-store-design/', desc: 'Premium, mobile-first shopping' },
  { label: 'Store Migrations', href: '/store-migrations/', desc: 'Switch platforms without losing SEO' },
  { label: 'SEO Services', href: '/seo-services/', desc: 'Rank higher, get found locally' },
];

export const NAV_INDUSTRIES: NavItem[] = [
  { label: 'Roofing Websites', href: '/roofing-website-design/' },
  { label: 'Cleaning Websites', href: '/cleaning-website-design/' },
  { label: 'Dental Websites', href: '/dental-website-design/' },
  { label: 'Restaurant Websites', href: '/restaurant-website-design/' },
];

export const TESTIMONIALS = [
  {
    quote:
      'WebyGrowth gave our business a much more professional online presence and made it easier for customers to contact us.',
    name: 'Local Service Business Owner',
    role: 'Service business',
  },
  {
    quote:
      'The new website structure feels clear, fast, and focused on enquiries. It is exactly what our business needed.',
    name: 'Tradesman Website Client',
    role: 'Trades',
  },
  {
    quote:
      'Our store now looks more premium and works much better on mobile. The shopping experience is much cleaner.',
    name: 'Ecommerce Brand Owner',
    role: 'Ecommerce',
  },
];

export const PROCESS = [
  {
    title: 'Discovery & Planning',
    text: 'We dig into your business, customers and competitors so every page has a job before a single pixel is designed.',
  },
  {
    title: 'Design & Content Structure',
    text: 'Layouts built around trust, clarity, SEO and conversions — with clear calls to action on every screen.',
  },
  {
    title: 'Development & Optimisation',
    text: 'Clean, responsive builds tuned for Core Web Vitals, accessibility and search engines from day one.',
  },
  {
    title: 'Launch & Growth Support',
    text: 'A smooth, zero-downtime launch — then ongoing improvements, tracking and support as you grow.',
  },
];

export const HOME_FAQS = [
  {
    q: 'How long does a small business website take?',
    a: 'Most small business websites take around 2–4 weeks, depending on the number of pages, how ready your content is, and how quickly feedback comes back.',
  },
  {
    q: 'Do you work with businesses across the UK?',
    a: 'Yes. We work remotely with UK small businesses in trades, healthcare, hospitality, ecommerce and local services — wherever you are based.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We modernise existing WordPress, WooCommerce and Shopify sites, improving design, speed, structure and conversions while protecting your existing rankings.',
  },
  {
    q: 'Is SEO included with every website?',
    a: 'Every build includes an SEO-friendly foundation: clean structure, fast loading, metadata, schema and mobile optimisation. We also offer ongoing SEO services for businesses that want to push rankings further.',
  },
  {
    q: 'Do you build ecommerce stores?',
    a: 'Yes — both WooCommerce and Shopify stores, plus migrations between platforms that keep your products, customers and search visibility intact.',
  },
];

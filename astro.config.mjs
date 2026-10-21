// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkUnpublishedLinks } from './src/lib/remark-unpublished-links.mjs';

const SERVICE_PAGES = ['wordpress-website-design', 'woocommerce-store-design', 'shopify-store-design', 'store-migrations', 'seo-services'];
const buildDate = new Date().toISOString();

export default defineConfig({
  site: 'https://webygrowth.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname.replaceAll('/', '');
        item.lastmod = buildDate;
        if (path === '') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path === 'services' || path === 'contact' || SERVICE_PAGES.includes(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  markdown: { remarkPlugins: [remarkUnpublishedLinks] },
  build: { inlineStylesheets: 'auto' },
});

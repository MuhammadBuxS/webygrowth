import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Optional shorter title for search results (<= 60 characters). */
    metaTitle: z.string().optional(),
    description: z.string(),
    /** Target search query for this post. */
    keyword: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Web Design', 'Ecommerce', 'SEO', 'Industry Guides', 'Growth']),
    tags: z.array(z.string()).default([]),
    /** Slug of the service page this post should funnel readers to. */
    relatedService: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };

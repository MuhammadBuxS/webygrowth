import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Future-dated posts stay hidden until their publish date. */
export async function getPosts(): Promise<Post[]> {
  const now = Date.now();
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.pubDate.getTime() <= now);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export const readingTime = (body: string) => Math.max(2, Math.round(body.trim().split(/\s+/).length / 220));

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

/** Posts related to a given post: same category first, then most recent. */
export function relatedPosts(all: Post[], current: Post, limit = 3): Post[] {
  const others = all.filter((p) => p.id !== current.id);
  const sameCategory = others.filter((p) => p.data.category === current.data.category);
  return [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, limit);
}

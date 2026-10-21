import fs from 'node:fs';
import path from 'node:path';

/**
 * Rewrites markdown links that point at scheduled (not yet published) posts.
 *
 * Posts cross-link each other, but a post dated next month does not exist yet, so the
 * link would 404 until its publish date. Those links are pointed at the blog index
 * instead, and restored automatically once the target post goes live.
 */
export function remarkUnpublishedLinks() {
  const dir = path.resolve('src/content/blog');

  return (tree, file) => {
    const now = Date.now();
    const pubDates = new Map();
    for (const name of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const src = fs.readFileSync(path.join(dir, name), 'utf8');
      const m = src.match(/^pubDate:\s*(\S+)/m);
      if (m) pubDates.set(name.replace(/\.md$/, ''), Date.parse(m[1]));
    }

    const walk = (node) => {
      if (node.type === 'link' && typeof node.url === 'string') {
        const m = node.url.match(/^\/blog\/([a-z0-9-]+)\/$/);
        if (m) {
          const date = pubDates.get(m[1]);
          if (date === undefined || date > now) node.url = '/blog/';
        }
      }
      (node.children || []).forEach(walk);
    };
    walk(tree);
  };
}

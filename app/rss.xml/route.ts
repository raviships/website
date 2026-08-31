import { localPosts } from '@/lib/blog/posts';

const siteUrl = 'https://raviships.com';
const feedUrl = `${siteUrl}/rss.xml`;

export const dynamic = 'force-static';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toRssDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`).toUTCString();
}

export function GET() {
  const items = [...localPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.topic)}</category>
      <pubDate>${toRssDate(post.publishedAt)}</pubDate>
    </item>`;
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ravi Ships</title>
    <link>${siteUrl}/blog</link>
    <description>Notes on software by Ravi.</description>
    <language>en</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}

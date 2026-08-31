import type { MetadataRoute } from 'next';
import { localPosts } from '@/lib/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: 'https://raviships.com/links',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://raviships.com/blog',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const publishedPosts: MetadataRoute.Sitemap = localPosts.map((post) => ({
    url: `https://raviships.com/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...publishedPosts];
}

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
}

import type { BlogPost, LocalPost } from './types';

export const posts: readonly BlogPost[] = [
  {
    kind: 'external',
    title: '10 Ways to Make Next.js Navigation Feel Instant',
    description:
      'Loading states, prefetching, caching, and partial prerendering.',
    publishedAt: '2026-08-18',
    readingTime: '9 min',
    topic: 'Next.js',
    slug: 'nextjs-navigation-performance',
    href: 'https://blog.perfectbase.dev/nextjs-navigation-performance',
  },
  {
    kind: 'external',
    title: 'Building an AI Script for Realistic Mock Data',
    description: 'Generate typed seed data and match it with real images.',
    publishedAt: '2026-07-29',
    readingTime: '7 min',
    topic: 'AI',
    slug: 'building-an-ai-script-to-generate-mock-data-with-realistic-images',
    href: 'https://blog.perfectbase.dev/building-an-ai-script-to-generate-mock-data-with-realistic-images',
  },
  {
    kind: 'external',
    title: 'EdgeStore: From Idea to Validation',
    description: 'How customer calls and small prototypes shaped EdgeStore.',
    publishedAt: '2026-06-12',
    readingTime: '6 min',
    topic: 'Building',
    slug: 'edge-store-idea-validation',
    href: 'https://blog.perfectbase.dev/edge-store-idea-validation',
  },
  {
    kind: 'external',
    title: 'A TypeScript CLI for AWS Batch',
    description:
      'Run and inspect long AWS Batch jobs from a TypeScript command line.',
    publishedAt: '2026-05-08',
    readingTime: '8 min',
    topic: 'TypeScript',
    slug: 'typescript-cli-aws-batch',
    href: 'https://blog.perfectbase.dev/typescript-cli-aws-batch',
  },
  {
    kind: 'external',
    title: 'A Better Dialog and Snackbar Pattern in React',
    description: 'Coordinate dialogs and snackbars without global UI state.',
    publishedAt: '2026-04-21',
    readingTime: '5 min',
    topic: 'React',
    slug: 'react-dialog-snackbar',
    href: 'https://blog.perfectbase.dev/react-dialog-snackbar',
  },
  {
    kind: 'external',
    title: 'Serverless GraphQL with Node.js',
    description:
      'Cold starts and deployment size in a small serverless GraphQL API.',
    publishedAt: '2026-03-17',
    readingTime: '10 min',
    topic: 'Backend',
    slug: 'nodejs-serverless-graphql',
    href: 'https://blog.perfectbase.dev/nodejs-serverless-graphql',
  },
];

export const localPosts: readonly LocalPost[] = posts.filter(
  (post): post is LocalPost => post.kind === 'local',
);

export function getLocalPost(slug: string) {
  return localPosts.find((post) => post.slug === slug);
}

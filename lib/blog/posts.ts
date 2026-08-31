import type { BlogPost, LocalPost } from './types';

export const posts: readonly BlogPost[] = [
  {
    kind: 'local',
    title: 'Building a Super Fast Next.js App with the App Router',
    description:
      'Optimize your Next.js app navigation with the App Router using caching, prefetching, and Partial Prerendering for enhanced speed and performance',
    publishedAt: '2024-12-20',
    readingTime: '5 min',
    topic: 'Next.js',
    slug: 'nextjs-navigation-performance',
    load: () => import('@/content/blog/nextjs-navigation-performance/post.mdx'),
  },
  {
    kind: 'local',
    title: 'Building an AI Script to Generate Mock Data with Realistic Images',
    description:
      'Automate mock data creation with AI scripts using OpenAI and DALL-E for seamless database integration and realistic image generation',
    publishedAt: '2024-11-23',
    readingTime: '8 min',
    topic: 'OpenAI',
    slug: 'building-an-ai-script-to-generate-mock-data-with-realistic-images',
    load: () =>
      import(
        '@/content/blog/building-an-ai-script-to-generate-mock-data-with-realistic-images/post.mdx'
      ),
  },
  {
    kind: 'local',
    title:
      'Building a SaaS for storing and handling images in your app. Is it a good idea?',
    description:
      'Building side projects can be a daunting task, especially when you’re short on time and resources. Luckily, there are some awesome tools out there to help us out - Vercel for hosting and PlanetScale for database, for example. I love to leverage these...',
    publishedAt: '2022-12-01',
    updatedAt: '2023-10-05',
    readingTime: '4 min',
    topic: 'SaaS',
    slug: 'edge-store-idea-validation',
    load: () => import('@/content/blog/edge-store-idea-validation/post.mdx'),
  },
  {
    kind: 'local',
    title: 'Creating a dockerized TypeScript CLI for running batch jobs on AWS',
    description:
      'Learn how to create a TypeScript cli with Commander, use Docker to containerize it and run it as a batch job on AWS with Fargate.',
    publishedAt: '2022-07-18',
    updatedAt: '2023-10-05',
    readingTime: '8 min',
    topic: 'TypeScript',
    slug: 'typescript-cli-aws-batch',
    load: () => import('@/content/blog/typescript-cli-aws-batch/post.mdx'),
  },
  {
    kind: 'local',
    title:
      'Create an easily callable Modal Dialog or Snackbar Provider in React with Promise and Context',
    description:
      'Use Context and Provider to create an easily callable Dialog and Snackbar. It will help you keep your code clean an easy to read. GitHub sample code shared.',
    publishedAt: '2022-07-01',
    readingTime: '5 min',
    topic: 'React',
    slug: 'react-dialog-snackbar',
    load: () => import('@/content/blog/react-dialog-snackbar/post.mdx'),
  },
  {
    kind: 'local',
    title:
      'Deploying a GraphQL API to Lambda with Serverless Framework, Apollo and TypeScript',
    description:
      'Develop a GraphQL API with TypeScript, with a fast hot reload and that is easily deployable to AWS Lambda.',
    publishedAt: '2022-06-28',
    updatedAt: '2023-10-05',
    readingTime: '9 min',
    topic: 'GraphQL',
    slug: 'nodejs-serverless-graphql',
    load: () => import('@/content/blog/nodejs-serverless-graphql/post.mdx'),
  },
];

export const localPosts: readonly LocalPost[] = posts.filter(
  (post): post is LocalPost => post.kind === 'local',
);

export function getLocalPost(slug: string) {
  return localPosts.find((post) => post.slug === slug);
}

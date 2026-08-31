import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import type { Options } from 'rehype-pretty-code';

const legacyBlogSlugs = [
  'nextjs-navigation-performance',
  'building-an-ai-script-to-generate-mock-data-with-realistic-images',
  'edge-store-idea-validation',
  'typescript-cli-aws-batch',
  'react-dialog-snackbar',
  'nodejs-serverless-graphql',
] as const;

const legacyBlogHost = {
  type: 'host' as const,
  value: 'blog.perfectbase.dev',
};

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  redirects() {
    return [
      {
        source: '/',
        has: [legacyBlogHost],
        destination: 'https://raviships.com/blog',
        permanent: true,
      },
      ...legacyBlogSlugs.map((slug) => ({
        source: `/${slug}`,
        has: [legacyBlogHost],
        destination: `https://raviships.com/blog/${slug}`,
        permanent: true,
      })),
    ];
  },
};

const prettyCodeOptions = {
  theme: 'github-dark-default',
  keepBackground: false,
  defaultLang: { block: 'plaintext' },
} satisfies Options;

const withMDX = createMDX({
  options: {
    rehypePlugins: [['rehype-pretty-code', prettyCodeOptions]],
  },
});

export default withMDX(nextConfig);

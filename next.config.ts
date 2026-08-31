import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import type { Options } from 'rehype-pretty-code';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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

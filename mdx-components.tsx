import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { CodeBlock, Pre } from '@/components/code-block';

const components = {
  a: ({ href = '', ...props }) => {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    const isExternal =
      href.startsWith('https://') || href.startsWith('http://');
    if (isInternal) {
      return <Link href={href} {...props} />;
    }

    return (
      <a
        href={href}
        rel={isExternal ? 'noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
        {...props}
      />
    );
  },
  figure: CodeBlock,
  pre: Pre,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}

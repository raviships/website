import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

const components = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-2xl font-semibold tracking-[-0.03em]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-9 mb-3 text-lg font-semibold tracking-[-0.02em]"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-5 text-[16px] leading-8 text-[#d4d6ce]" {...props} />
  ),
  a: ({ href = '', ...props }) => {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    const isExternal =
      href.startsWith('https://') || href.startsWith('http://');
    const className =
      'text-foreground decoration-muted underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-3';

    if (isInternal) {
      return <Link className={className} href={href} {...props} />;
    }

    return (
      <a
        className={className}
        href={href}
        rel={isExternal ? 'noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul
      className="my-5 list-disc space-y-2 pl-6 text-[16px] leading-8 text-[#d4d6ce] marker:text-muted"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-6 text-[16px] leading-8 text-[#d4d6ce] marker:text-muted"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-border pl-5 text-lg leading-8 text-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-xs bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto border border-border bg-surface p-5 text-sm leading-6 [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-12 border-border" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}

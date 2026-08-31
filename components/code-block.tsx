'use client';

import { Check, Clipboard } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

type CodeBlockProps = ComponentPropsWithoutRef<'figure'>;

export function CodeBlock({
  children,
  className = '',
  ...props
}: CodeBlockProps) {
  const figureRef = useRef<HTMLElement>(null);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copied, setCopied] = useState(false);

  useEffect(
    () => () => {
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    },
    [],
  );

  const copyCode = useCallback(() => {
    const pre = figureRef.current?.querySelector('pre');
    if (!pre) return;

    void navigator.clipboard.writeText(pre.innerText);

    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    setCopied(true);
    feedbackTimerRef.current = setTimeout(() => setCopied(false), 1500);
  }, []);

  const Icon = copied ? Check : Clipboard;
  const label = copied ? 'Code copied' : 'Copy code';

  return (
    <figure className={`not-typeset ${className}`} {...props} ref={figureRef}>
      {children}
      <button
        aria-label={label}
        className={`grid size-7 place-items-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${copied ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:text-foreground'}`}
        data-code-copy
        data-copied={copied || undefined}
        onClick={copyCode}
        title={label}
        type="button"
      >
        <Icon aria-hidden="true" size={14} />
      </button>
    </figure>
  );
}

export function Pre({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre
      className={`w-full max-w-full overflow-x-auto bg-card py-3 text-sm leading-6 [&_code]:w-max [&_code]:min-w-full [&_code]:bg-transparent [&_code]:p-0 ${className}`}
      {...props}
    />
  );
}

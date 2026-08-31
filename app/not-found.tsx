import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export default function NotFound() {
  return (
    <SiteShell>
      <section className="grid min-h-[calc(100svh-266px)] content-center py-16">
        <p className="font-mono text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
          404
        </p>
        <h1 className="mt-3 text-[clamp(30px,5vw,48px)] leading-none font-bold tracking-[-0.045em]">
          Page not found
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          className="mt-8 w-fit border border-border px-4 py-2.5 text-[13px] hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-3"
          href="/blog"
        >
          Back to blog
        </Link>
      </section>
    </SiteShell>
  );
}

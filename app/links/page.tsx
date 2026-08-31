import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { socialLinks } from '@/lib/site-data';
import { createPageMetadata } from '@/lib/site-metadata';

const description =
  'Find Ravi Ships on YouTube, X, GitHub, EdgeStore, Discord, and email.';

export const metadata: Metadata = createPageMetadata(
  'Links',
  description,
  '/links',
);

export default function LinksPage() {
  return (
    <SiteShell activeView="links">
      <div className="py-8.5 pb-5.5 max-sm:pt-8 max-sm:pb-5">
        <h1 className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
          My links
        </h1>
      </div>
      <section className="grid grid-cols-1" aria-label="Ravi's links">
        {socialLinks.map((item) => (
          <a
            className="-mt-px grid min-h-18 grid-cols-[1fr_auto] items-center gap-2 border border-border p-4.5 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-3 max-sm:p-4.25"
            href={item.href}
            key={item.name}
            rel="noreferrer"
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
          >
            <h2 className="text-[17px] font-medium tracking-[-0.015em]">
              {item.name}
            </h2>
            <ArrowUpRight
              aria-hidden="true"
              className="text-muted-foreground"
              size={17}
            />
          </a>
        ))}
      </section>
    </SiteShell>
  );
}

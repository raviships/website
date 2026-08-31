import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';
import { formatPostDate } from '@/lib/blog/format-date';
import { posts } from '@/lib/blog/posts';
import { createPageMetadata } from '@/lib/site-metadata';

const description = 'Notes on software and the projects Ravi works on.';

export const metadata: Metadata = createPageMetadata(
  'Blog',
  description,
  '/blog',
);

export default function BlogPage() {
  return (
    <SiteShell activeView="blog">
      <div className="py-8.5 pb-5.5 max-sm:pt-8 max-sm:pb-5">
        <h1 className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
          Blog
        </h1>
      </div>
      <section className="border-b-2 border-border" aria-label="Blog posts">
        {posts.map((post) => {
          const isExternal = post.kind === 'external';
          const Icon = isExternal ? ArrowUpRight : ArrowRight;

          return (
            <Link
              className="grid grid-cols-[100px_minmax(260px,1fr)_minmax(180px,0.7fr)_18px] items-start gap-6 border-t-2 border-border py-4.75 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-3 max-md:grid-cols-[1fr_auto] max-md:gap-x-4 max-md:gap-y-2 max-md:py-5"
              href={isExternal ? post.href : `/blog/${post.slug}`}
              key={post.slug}
              rel={isExternal ? 'noreferrer' : undefined}
              target={isExternal ? '_blank' : undefined}
            >
              <div className="flex flex-col gap-1.25 font-mono text-[11px] leading-[1.4] font-medium text-muted-foreground uppercase max-md:col-span-full max-md:flex-row max-md:flex-wrap">
                <span>{formatPostDate(post.publishedAt)}</span>
                <span>{post.readingTime}</span>
                <span>{post.topic}</span>
              </div>
              <h2 className="text-[clamp(20px,2.4vw,27px)] leading-[1.15] font-bold tracking-[-0.035em] max-md:col-start-1">
                {post.title}
              </h2>
              <p className="mt-px text-[13px] leading-[1.65] text-muted-foreground max-md:col-span-full">
                {post.description}
              </p>
              <Icon
                aria-hidden="true"
                className="text-muted-foreground max-md:col-start-2 max-md:row-start-2"
                size={17}
              />
            </Link>
          );
        })}
      </section>
    </SiteShell>
  );
}

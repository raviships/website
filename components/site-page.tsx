import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { posts, socialLinks } from '@/lib/site-data';

type View = 'links' | 'blog';

function Header({ view }: { view: View }) {
  return (
    <header className="mx-auto flex min-h-16.5 w-[min(1040px,calc(100%_-_40px))] items-center justify-between border-b-2 border-border max-sm:w-[min(calc(100%_-_32px),560px)]">
      <Link
        className="bg-accent px-2 py-1.25 text-[13px] font-bold tracking-[-0.015em] text-[#111] focus-visible:outline-2 focus-visible:outline-offset-3"
        href="/links"
      >
        Ravi Ships
      </Link>
      <nav className="flex gap-5" aria-label="Main navigation">
        <Link
          aria-current={view === 'links' ? 'page' : undefined}
          className="text-xs text-muted hover:text-foreground aria-[current=page]:text-foreground"
          href="/links"
        >
          Links
        </Link>
        <Link
          aria-current={view === 'blog' ? 'page' : undefined}
          className="text-xs text-muted hover:text-foreground aria-[current=page]:text-foreground"
          href="/blog"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex min-h-25 w-[min(1040px,calc(100%_-_40px))] items-center justify-between text-[10px] text-muted max-sm:w-[min(calc(100%_-_32px),560px)] max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-2">
      <span>Ravi Ships</span>
      <a
        className="text-foreground focus-visible:outline-2 focus-visible:outline-offset-3"
        href="mailto:contact@raviships.com"
      >
        contact@raviships.com
      </a>
    </footer>
  );
}

function LinksPage() {
  return (
    <>
      <div className="py-8.5 pb-5.5 max-sm:pt-8 max-sm:pb-5">
        <h1 className="text-[11px] font-semibold tracking-[0.1em] text-muted uppercase">
          My links
        </h1>
      </div>
      <section className="grid grid-cols-1" aria-label="Ravi's links">
        {socialLinks.map((item) => (
          <a
            className="-mt-px grid min-h-18 grid-cols-[1fr_auto] items-center gap-2 border border-border p-4.5 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-3 max-sm:p-4.25"
            href={item.href}
            key={item.name}
            rel="noreferrer"
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
          >
            <h2 className="text-[17px] font-medium tracking-[-0.015em]">
              {item.name}
            </h2>
            <ArrowUpRight aria-hidden="true" className="text-muted" size={17} />
          </a>
        ))}
      </section>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <div className="py-8.5 pb-5.5 max-sm:pt-8 max-sm:pb-5">
        <h1 className="text-[11px] font-semibold tracking-[0.1em] text-muted uppercase">
          Blog
        </h1>
      </div>
      <section className="border-b-2 border-border" aria-label="Blog posts">
        {posts.map((post) => (
          <a
            className="grid grid-cols-[100px_minmax(260px,1fr)_minmax(180px,0.7fr)_18px] items-start gap-6 border-t-2 border-border py-4.75 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-3 max-sm:grid-cols-[1fr_auto] max-sm:gap-x-4 max-sm:gap-y-2 max-sm:py-5"
            href={`https://blog.perfectbase.dev/${post.slug}`}
            key={post.slug}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex flex-col gap-1.25 font-mono text-[9px] leading-[1.4] font-medium text-muted uppercase max-sm:col-span-full max-sm:flex-row max-sm:flex-wrap">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.tag}</span>
            </div>
            <h2 className="text-[clamp(20px,2.4vw,27px)] leading-[1.15] font-bold tracking-[-0.035em] max-sm:col-start-1">
              {post.title}
            </h2>
            <p className="mt-px text-xs leading-[1.65] text-muted max-sm:col-span-full">
              {post.excerpt}
            </p>
            <ArrowUpRight
              aria-hidden="true"
              className="text-muted max-sm:col-start-2 max-sm:row-start-2"
              size={17}
            />
          </a>
        ))}
      </section>
    </>
  );
}

export function SitePage({ view }: { view: View }) {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <Header view={view} />
      <div className="mx-auto min-h-[calc(100svh_-_166px)] w-[min(1040px,calc(100%_-_40px))] max-sm:w-[min(calc(100%_-_32px),560px)]">
        {view === 'links' ? <LinksPage /> : <BlogPage />}
      </div>
      <Footer />
    </main>
  );
}

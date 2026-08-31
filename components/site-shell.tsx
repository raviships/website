import Link from 'next/link';

type View = 'links' | 'blog';

function Header({ activeView }: { activeView: View }) {
  return (
    <header className="mx-auto flex min-h-16.5 w-[min(1040px,calc(100%-40px))] items-center justify-between border-b-2 border-border max-sm:w-[min(calc(100%-32px),560px)]">
      <Link
        className="bg-primary px-2 py-1.25 text-[13px] font-bold tracking-[-0.015em] text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-3"
        href="/links"
      >
        Ravi
      </Link>
      <nav className="flex gap-5" aria-label="Main navigation">
        <Link
          aria-current={activeView === 'links' ? 'page' : undefined}
          className="text-[13px] text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground"
          href="/links"
        >
          Links
        </Link>
        <Link
          aria-current={activeView === 'blog' ? 'page' : undefined}
          className="text-[13px] text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground"
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
    <footer className="mx-auto flex min-h-25 w-[min(1040px,calc(100%-40px))] items-center justify-between text-[11px] text-muted-foreground max-sm:w-[min(calc(100%-32px),560px)] max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-2">
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

export function SiteShell({
  activeView,
  children,
}: {
  activeView: View;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header activeView={activeView} />
      <main className="mx-auto min-h-[calc(100svh-166px)] w-[min(1040px,calc(100%-40px))] max-sm:w-[min(calc(100%-32px),560px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

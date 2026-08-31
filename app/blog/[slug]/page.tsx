import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { formatPostDate } from '@/lib/blog/format-date';
import { getLocalPost, localPosts } from '@/lib/blog/posts';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getLocalPost(slug);

  if (!post) {
    return {};
  }

  const pathname = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: pathname },
    openGraph: {
      type: 'article',
      url: pathname,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${pathname}/opengraph-image`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getLocalPost(slug);

  if (!post) {
    notFound();
  }

  const { default: Content } = await post.load();
  const canonicalUrl = `https://raviships.com/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    author: {
      '@type': 'Person',
      name: 'Ravi',
      url: 'https://raviships.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Ravi',
      url: 'https://raviships.com',
    },
    image: `${canonicalUrl}/opengraph-image`,
  };

  return (
    <SiteShell activeView="blog">
      <script
        type="application/ld+json"
        // The payload is local, typed content and escapes HTML-opening characters.
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires an inline script.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article className="mx-auto max-w-180 py-10 max-sm:py-8">
        <Link
          className="mb-12 inline-flex items-center gap-2 text-[13px] text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-3 max-sm:mb-10"
          href="/blog"
        >
          <ArrowLeft aria-hidden="true" size={15} />
          Blog
        </Link>
        <header className="border-b border-border pb-8">
          <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] font-medium text-muted uppercase">
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
            <span>{post.readingTime}</span>
            <span>{post.topic}</span>
          </div>
          <h1 className="max-w-160 text-[clamp(34px,6vw,58px)] leading-[1.02] font-bold tracking-[-0.05em]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-150 text-[16px] leading-7 text-muted">
            {post.description}
          </p>
        </header>
        <div className="pt-5">
          <Content />
        </div>
      </article>
    </SiteShell>
  );
}

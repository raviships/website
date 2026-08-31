import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { formatPostDate } from '@/lib/blog/format-date';
import { getLocalPost } from '@/lib/blog/posts';
import type { SocialImageProps } from '@/lib/blog/types';

export const alt = 'Ravi Ships blog post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

function DefaultSocialImage({ publishedAt, title, topic }: SocialImageProps) {
  return (
    <div
      style={{
        alignItems: 'stretch',
        background: '#0e0f0d',
        color: '#f3f4ec',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '64px 72px',
        width: '100%',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: 26,
          fontWeight: 700,
          gap: 18,
        }}
      >
        <span
          style={{
            background: '#b9d92d',
            color: '#111',
            display: 'flex',
            padding: '8px 14px',
          }}
        >
          Ravi Ships
        </span>
        <span style={{ color: '#92968b', display: 'flex' }}>Blog</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: '-0.045em',
            lineHeight: 1.02,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: '#92968b',
            display: 'flex',
            fontSize: 22,
            gap: 22,
            textTransform: 'uppercase',
          }}
        >
          <span>{topic}</span>
          <span>{formatPostDate(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getLocalPost(slug);

  if (!post) {
    notFound();
  }

  const SocialImage = post.loadSocialImage
    ? (await post.loadSocialImage()).default
    : DefaultSocialImage;

  return new ImageResponse(
    <SocialImage
      publishedAt={post.publishedAt}
      title={post.title}
      topic={post.topic}
    />,
    size,
  );
}

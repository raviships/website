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
        padding: '72px 80px 66px',
        width: '100%',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: 24,
          fontWeight: 500,
          justifyContent: 'space-between',
        }}
      >
        <span style={{ display: 'flex' }}>Ravi</span>
        <span style={{ color: '#92968b', display: 'flex' }}>BLOG</span>
      </div>
      <div
        style={{
          display: 'flex',
          maxWidth: '92%',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 70 ? 60 : 70,
            fontWeight: 500,
            letterSpacing: '-0.045em',
            lineHeight: 1.02,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid #3a3c34',
          color: '#92968b',
          display: 'flex',
          fontSize: 20,
          justifyContent: 'space-between',
          letterSpacing: '0.04em',
          paddingTop: 28,
          textTransform: 'uppercase',
        }}
      >
        <span>{topic}</span>
        <span>{formatPostDate(publishedAt)}</span>
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

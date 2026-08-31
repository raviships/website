import type { Metadata } from 'next';

const socialImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Ravi Ships',
};

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  const socialTitle = `${title} | Ravi Ships`;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: socialTitle,
      description,
      images: [socialImage],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/og.png'],
    },
  };
}

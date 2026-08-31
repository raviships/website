import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://raviships.com'),
  title: {
    default: 'Ravi Ships',
    template: '%s | Ravi Ships',
  },
  description: 'Links and notes on software by Ravi.',
  authors: [{ name: 'Ravi Ships', url: 'https://raviships.com' }],
  openGraph: {
    title: 'Ravi Ships',
    description: 'Links and notes on software by Ravi.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ravi Ships',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravi Ships',
    description: 'Links and notes on software by Ravi.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

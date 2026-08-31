import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on software and the projects Ravi works on.',
};

export default function BlogPage() {
  return <SitePage view="blog" />;
}

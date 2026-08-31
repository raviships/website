import type { Metadata } from 'next';
import { SitePage } from '@/components/site-page';

export const metadata: Metadata = {
  title: 'Links',
  description:
    'Find Ravi Ships on YouTube, X, GitHub, EdgeStore, Discord, and email.',
};

export default function LinksPage() {
  return <SitePage view="links" />;
}

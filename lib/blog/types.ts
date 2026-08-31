import type { ComponentType } from 'react';

type PostDetails = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  topic: string;
};

export type SocialImageProps = Pick<
  PostDetails,
  'publishedAt' | 'title' | 'topic'
>;

export type LocalPost = PostDetails & {
  kind: 'local';
  updatedAt?: string;
  load: () => Promise<{ default: ComponentType }>;
  loadSocialImage?: () => Promise<{
    default: ComponentType<SocialImageProps>;
  }>;
};

export type ExternalPost = PostDetails & {
  kind: 'external';
  href: string;
};

export type BlogPost = LocalPost | ExternalPost;

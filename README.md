# Website

My personal website with my links, blog posts and whatever else I want to add in the future.

## Local development

Setup:

```bash
bun install
bun dev
```

Checks:

```bash
bun run check
bun run build
```

## Blog posts

Add the MDX body at `content/blog/<slug>/post.mdx`, start headings at `##`,
and register it in `lib/blog/posts.ts`. Use `loadSocialImage` with inline styles
for a custom social image.

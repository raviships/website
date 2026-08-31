# Ravi Ships website

The source for `raviships.com/links` and `raviships.com/blog`.

## Local development

Use Node.js 24 and Bun 1.4 or newer.

```bash
bun install
bun dev
```

This is a standard Next.js App Router project using TypeScript, Tailwind CSS,
Biome, Bun, and self-hosted Geist fonts through `next/font`.

Before committing changes:

```bash
bun run check
bun run build
```

The public routes are `/links` and `/blog`. The root route permanently redirects
to `/links` until the site has a dedicated homepage.

The links and article metadata live in `lib/site-data.ts`. Blog cards still point to the existing Perfect Base articles until their content moves into this project.

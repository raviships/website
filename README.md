# Ravi Ships website

The source for `raviships.com/links` and `raviships.com/blog`.

## Local development

```bash
bun install
bun dev
```

This is a standard Next.js App Router project using TypeScript, Tailwind CSS,
Biome, and Bun.

The links and article metadata live in `lib/site-data.ts`. Blog cards still point to the existing Perfect Base articles until their content moves into this project.

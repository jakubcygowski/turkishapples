# Turkish Apples — turkishapples.com

An informational Next.js 15 site about Turkish apples as an export category. Warm, orchard-inspired visual style; six SEO-friendly article pages plus a storytelling homepage.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **TailwindCSS v4** (config via `@theme` in `src/app/globals.css`)
- **lucide-react** icons
- **next/font** with `Fraunces` (display serif) and `Inter` (body sans)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — lint

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx                 root layout, fonts, metadata
│  ├─ page.tsx                   homepage
│  ├─ globals.css                tailwind v4 theme + base styles
│  ├─ sitemap.ts, robots.ts
│  └─ <slug>/page.tsx            one directory per article
├─ components/                   Header, Footer, Hero, ArticleLayout, …
└─ content/
   └─ articles.ts                typed content for all 6 articles
```

## Articles

- `/turkish-apples`
- `/turkish-apple-varieties`
- `/turkish-apples-quality`
- `/turkish-apple-export`
- `/turkish-apples-price`
- `/turkish-apple-suppliers`

Article content lives in `src/content/articles.ts` as typed data and is rendered by the shared `ArticleLayout`.

## Design tokens

Defined in `src/app/globals.css` under `@theme`:

- `--color-cream`, `--color-cream-soft`
- `--color-apple-red`, `--color-apple-red-dark`
- `--color-leaf-green`, `--color-leaf-deep`
- `--color-bark`, `--color-bark-soft`
- `--color-sun`
- `--font-display` (Fraunces), `--font-sans` (Inter)

## Deployment

Deploys cleanly to Vercel or Netlify. Update `metadataBase` in `src/app/layout.tsx` and `BASE` in `src/app/sitemap.ts` if you change the production domain.

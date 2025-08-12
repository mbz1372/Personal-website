# Personal Website — Next.js (App Router) + Tailwind + i18n (fa/en)

- App Router with `[locale]` segment
- RTL/LTR per-locale layout with correct `lang` and `dir`
- Minimal pages: Home, About, Articles, Books, Videos
- Tailwind styling, simple components (Navbar, LangSwitcher)
- Middleware redirects `/` → `/fa`
- `sitemap.ts` and `robots.txt` routes for SEO

## Quick start

```bash
pnpm i # or npm i / yarn
pnpm dev
```

Open http://localhost:3000 (redirects to /fa). Switch language with the button (EN/FA).

## Deploy on Vercel
- Import the repo in Vercel
- Framework preset: **Next.js**
- No special settings needed
- Set your custom domain `mbzolfaghari.ir` to the project

## To customize
- Edit content in `/app/[locale]/**`
- Update Open Graph image at `/public/og.jpg`
- Add real articles: create content pipeline or use CMS later

# MBZ Personal Website

Professional bilingual personal website for Mohammad Bagher Zolfaghari.

## What is included

- Bilingual Persian and English website
- RTL and LTR layout support
- Home, About, Resume, Portfolio, Case Studies, Blog and Contact routes
- Project detail pages
- Case study detail pages
- Blog article pages
- Static admin panel at `/admin`
- Local content editing and JSON export
- Vercel-safe static build with `public` output directory

## Admin

URL: `/admin`

Password:

```txt
mbz-admin
```

The admin panel is a static CMS-lite panel. It stores changes in the browser and exports JSON. For public persistence, connect it to GitHub API, Supabase, Vercel KV or another database in a later version.

## Vercel settings

Use these settings if Vercel asks:

```txt
Framework Preset: Other / Static
Build Command: npm run build
Install Command: npm install
Output Directory: public
Node.js: 20.x
```

This version intentionally avoids Next.js runtime dependencies to prevent the previous output-directory build failure.

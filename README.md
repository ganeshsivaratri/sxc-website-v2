# SintraX Creations — Website

The public website for SintraX Creations (https://sxc.codpox.com).
Deployed on **Cloudflare Pages**: every push to `main` goes live automatically.

## Tech stack

- **React 19 + TypeScript** — the interface
- **Vite 8** — dev server + build (`npm run build` type-checks first, then builds)
- **react-router-dom 7** — one URL per page
- **Tailwind CSS 4 + own CSS** — see the styling rule below
- **Cloudflare Pages Functions** — `functions/` holds server-side code

## Run it

```
npm install     # once
npm run dev     # local site
npm run build   # production build into dist/
```

## File map

```
index.html            the single HTML entry (root)
public/               files served as-is: favicons, og-image,
                      robots.txt, sitemap.xml, _redirects (SPA rule)
src/
  main.tsx            starts the app (imports index.css + App)
  App.tsx             ROUTER + shared shell only (Header, Footer,
                      FloatingActions, PageShell). No page content.
  index.css           Tailwind import + DESIGN TOKENS + shell styles
  pages/              one file per page, its CSS beside it:
                      Home, Projects, StudentJourney, PlansBeyond,
                      JoinNow, Benefits, PrivacyPolicy, RefundPolicy,
                      TermsAndConditions, NotFound (404)
  components/         reusable pieces, grouped by the page they serve:
    Header, Footer, FloatingActions, PageEffects (scroll/meta/shell)
    home/             HomeHero, BuildTicker, InterviewPriority,
                      VideoShowcase, FakeVsReal, WhatIsSXC, HomeCTA
    projects/         ProjectsHero, CurrentProjects, FutureProjects,
                      ProjectDetails
    student-journey/  StudentJourneySection1–3
    join-now/         JoinForm
    plans-beyond/     PlansBeyondHero, PlansPricing
  assets/             images (.webp), videos, audio — named by meaning
functions/
  api/join.js         server-side lead proxy (see "Join form leads")
```

## Rules of this codebase

1. **One file, one job.** A component renders one section; its CSS sits
   beside it with the same name. Keep files small enough to read fully.
2. **Pages are stacks.** A page file only arranges its sections in order
   (see `pages/Home.tsx`). Sections never live in `App.tsx`.
3. **Brand colours live in ONE place** — the tokens in `src/index.css`
   (`--brand` #1805f5, `--lime` #d3fd51, `--dark` #0b0e1b, `--white`).
   Never hard-code a brand hex in a component file. (The home hero keeps
   its own scoped shades, `--home-*` in `pages/Home.css`, on purpose.)
4. **Styling rule:** Tailwind utilities are for layout and spacing inside
   JSX; a component's own look lives in its CSS file. Do not mix both for
   the same job.
5. **Pages load lazily** (see `App.tsx`). Add new pages the same way.
6. **No secrets in this repo.** It is public and the built site ships to
   every browser. Anything private belongs in a Cloudflare secret.

## Join form leads

Today `components/join-now/JoinForm.tsx` posts leads straight to a Google
Apps Script URL — that URL is public, so anyone can spam the leads sheet.
The fix is prepared in `functions/api/join.js` (a server-side proxy).
Activation steps are written at the top of that file: add the
`SHEET_WEBAPP_URL` secret in Cloudflare, point the form at `/api/join`,
then redeploy the Apps Script so the old public URL dies.

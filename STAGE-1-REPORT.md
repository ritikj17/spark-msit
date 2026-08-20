# SPARK ⚡ — Stage 1 Report: Foundation

**Scope:** Foundation only (per architecture amendment §26). No full pages, no 3D, no contact backend, no visual polishing.

---

## 1. Files created

**Config / root**
- `next.config.ts` — security headers (X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy). CSP deferred to the security audit stage (3D/`next/font` need tuning first).
- `.env.example` — `CONTACT_FORM_TO=` (empty until a delivery provider is configured; form must fail gracefully when unset).
- `postcss.config.mjs` — Tailwind v4 via `@tailwindcss/postcss` (from scaffold).
- `tsconfig.json`, `eslint.config.mjs`, `next-env.d.ts`, `.gitignore`, `README.md` (from scaffold, retained).
- `package-lock.json` — committed (per locked DoD).

**Design system / styles**
- `src/styles/tokens.css` — full SPARK token set (colors, fonts, radius, shadows/glow, motion, z-index, layout) mapped into Tailwind v4 via `@theme inline`.
- `src/app/globals.css` — imports Tailwind + tokens, base styles, `prefers-reduced-motion` global reduction, focus-visible styling.

**Content architecture**
- `src/content/types.ts` — content model interfaces (CMS-swappable contract).
- `src/content/site.ts` — brand, tagline, institution, official social URLs (exact, from amendment §10).
- `src/content/navigation.ts` — nav items + CTA.
- `src/content/pages.ts` — per-page meta (title/eyebrow/description/notice).
- `src/content/team.ts` — faculty + executive panel (verbatim descriptions).
- `src/content/departments.ts` — 7 departments, members, pending role modeled as `name: null / status: "pending"`.
- `src/content/events.ts` — 3 past events (verbatim) + upcoming blurb.
- `src/content/contact.ts` — contact copy, social/location structure (no invented contacts).

**Asset architecture**
- `public/assets/{brand,team,events,icons,textures,3d,decorative}/.gitkeep` — locked asset tree.
- `src/lib/assets.ts` — placeholder token system (`[SPARK-...]`), `resolveAsset()`, `pendingAssets()`.

**Hooks** (`src/hooks/`, all SSR-safe, built on `useSyncExternalStore`)
- `useReducedMotion.ts`, `useMediaQuery.ts`, `useViewport.ts`.

**Utilities**
- `src/lib/utils.ts` — dependency-free `cn()`.

**UI primitives** (`src/components/ui/`)
- `Button.tsx` (primary/outline/ghost, sm/md/lg, internal Link / external `<a>` / `<button>`), `Card.tsx`, `Chip.tsx`, `Container.tsx`, `SectionHeader.tsx`, `SocialIcon.tsx`, `SocialLink.tsx`.

**Shared components** (`src/components/shared/`)
- `Logo.tsx` (inline SVG bolt mark, `[SPARK-LOGO]` placeholder), `Placeholder.tsx` (branded empty-state), `SparkImage.tsx` (token-aware `next/image`), `PagePlaceholder.tsx` (temporary stage placeholder).

**Layout** (`src/components/layout/`)
- `Navbar.tsx` (client, sticky, responsive hamburger, aria-expanded/controls, active state, closes on route change), `Footer.tsx` (server, brand + nav + official socials + institution), `SkipLink.tsx`.

**App routes** (`src/app/`)
- `layout.tsx` (fonts, metadata, viewport, Navbar/Footer/SkipLink shell), `page.tsx` (Home foundation placeholder), `about/page.tsx`, `events/page.tsx`, `team/page.tsx`, `contact/page.tsx`, `not-found.tsx` (custom 404), `error.tsx` (root error boundary), `icon.svg` (bolt favicon placeholder).

**Locked-but-empty dirs** (materialize the approved structure, filled in later stages): `src/components/{home,about,events,team,contact,three}/.gitkeep`.

## 2. Files modified

- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css` (replaced scaffold defaults).
- `package.json` (added `typecheck` script).

## 3. Dependencies installed

Runtime:
- `next@16.3.1` (latest stable 16.x, verified via npm at implementation time)
- `react@19.2.8`, `react-dom@19.2.8`

Dev:
- `typescript@5.9.3`, `tailwindcss@4.3.3`, `@tailwindcss/postcss@4.3.3`, `eslint@9.39.5`, `eslint-config-next@16.3.1`, `@types/node`, `@types/react`, `@types/react-dom`

`npm audit`: **0 vulnerabilities**.

## 4. Why each dependency exists

| Dependency | Why |
|---|---|
| `next` | Framework (App Router, SSG, metadata, image optimization, server actions later). Locked stack. |
| `react` / `react-dom` | Peer requirement of Next.js 16 (React 19). |
| `typescript` | Locked language; typed content contracts; `typecheck` gate. |
| `tailwindcss` + `@tailwindcss/postcss` | Locked styling; v4 CSS-first integration with the selected Next version. |
| `eslint` + `eslint-config-next` | Lint gate; includes core-web-vitals + typescript configs. |

Deliberately **not** installed yet (deferred to their stages): `motion` (Stage 2, animation), `three`/`@react-three/fiber`/`@react-three/drei` (Stage 3). No state manager, no CSS-in-JS, no UI kit, no CMS, no DB, no auth — per amendment §18/§24.

## 5. Final folder structure

```
spark-msit/
├── .env.example
├── next.config.ts
├── package.json / package-lock.json
├── postcss.config.mjs
├── tsconfig.json / eslint.config.mjs / next-env.d.ts / .gitignore
├── public/assets/
│   ├── brand/ team/ events/ icons/ textures/ 3d/ decorative/
└── src/
    ├── app/            layout · page · about · events · team · contact · not-found · error · icon.svg
    ├── components/
    │   ├── ui/         Button Card Chip Container SectionHeader SocialIcon SocialLink
    │   ├── layout/     Navbar Footer SkipLink
    │   ├── shared/     Logo Placeholder SparkImage PagePlaceholder
    │   └── home/ about/ events/ team/ contact/ three/   (reserved, .gitkeep)
    ├── content/        types site navigation pages team departments events contact
    ├── hooks/          useReducedMotion useMediaQuery useViewport
    ├── lib/            assets utils
    └── styles/         tokens.css
```

## 6. Design tokens implemented

Full set in `src/styles/tokens.css`: surfaces (`bg`/`bg-deep`/`surface`/`surface-raised`), borders (`line`/`line-strong`), text (`ink`/`ink-secondary`/`ink-muted`), accent gold (`accent`/`accent-bright`/`accent-dim`), status (`success`/`error`), font families (Space Grotesk/Inter/JetBrains Mono), radii (`sm`/`card`/`panel`), shadows/glow (`card`/`glow`/`glow-strong`), motion durations + easing, z-index layers, container/section metrics. Mapped into Tailwind v4 utilities via `@theme inline` (verified: `bg-surface`, `text-ink`, `bg-accent`, `border-line`, `rounded-panel`, `shadow-glow`, `font-display/sans/mono` all emit the token references).

## 7. Content architecture implemented

Typed TypeScript modules (`src/content/`) consumed by components — nothing hardcoded in JSX. Real supplied content is present verbatim (team names/roles/descriptions, event data, official social URLs from amendment §10, institution address). `Publication & Documentation — Deputy Head` modeled as `{ name: null, role: "Deputy Head", status: "pending" }`. No invented facts/people/contacts/statistics.

## 8. Asset architecture implemented

`public/assets/` tree created; placeholder token system in `src/lib/assets.ts` (tokens `[SPARK-LOGO]`, `[SPARK-FACULTY-PHOTO]`, `[SPARK-CORE-2026-2027-*-PHOTO]`, per-member `[SPARK-*-PHOTO]`, `[SPARK-EVENT-0N-COVER]`, `[SPARK-EVENT-0N-GALLERY-0N]`). Drop-in workflow: place file → point token to path → done. `SparkImage` renders branded `<Placeholder>` for unresolved tokens; never a broken image, never fake people.

## 9. Routes created

`/`, `/about`, `/events`, `/team`, `/contact`, custom `/404`, plus `error.tsx` boundary and `/icon.svg`. All verified static (prerendered) in the production build.

## 10. Components created

`Button, Card, Chip, Container, SectionHeader, SocialIcon, SocialLink` (ui); `Logo, Placeholder, SparkImage, PagePlaceholder` (shared); `Navbar, Footer, SkipLink` (layout). Empty reserved dirs for `home/about/events/team/contact/three`.

## 11. TypeScript status

`npm run typecheck` — **pass** (strict mode). Route types generated by Next 16 (`LayoutProps<"/">` in root layout).

## 12. Lint status

`npm run lint` — **pass** (0 errors, 0 warnings). Note: scaffold's ESLint enforces `react-hooks/set-state-in-effect`; hooks were written idiomatically with `useSyncExternalStore` and the Navbar uses React's render-phase state adjustment to comply (no rule disabling).

## 13. Build status

`npm run build` — **pass** (Next.js 16.3.1, Turbopack). All routes statically prerendered. Runtime smoke test: `/`, `/about`, `/events`, `/team`, `/contact` → 200; unknown route → styled 404; security headers present; 3 font woff2 preloads + font variable classes on `<html>`; token utilities resolve in compiled CSS.

## 14. Known issues

- npm printed an `allow-scripts` advisory that `unrs-resolver`'s postinstall didn't run (optional native resolver for ESLint's import resolution). Lint/build unaffected; review `npm approve-scripts` on next install if lint resolution is slow.
- `.env.example` `CONTACT_FORM_TO` is scaffolding only — no provider wired (by design, Stage 8).
- `favicon.ico` removed; `app/icon.svg` bolt is a placeholder brand mark pending the official logo.
- Default scaffold `README.md` retained as-is (not part of locked scope).
- No automated tests installed — nothing to test in a static-foundation stage; test strategy is a Stage 13 decision.
- Git repository is not initialized (was not requested; `create-next-app` ran with `--disable-git`).

## 15. Technical decisions

- **Next.js 16.3.1** — latest stable verified via npm at implementation time (amendment §1); no compatibility issues found, so no downgrade.
- **Tailwind v4 CSS-first integration** (`@tailwindcss/postcss`) — matches selected Next version (amendment §2); tokens via `@theme inline`.
- **Design tokens → Tailwind utilities** — colors/fonts/radius/shadow namespaces; durations/easing/z use standard utilities in components (token values kept as CSS vars for raw CSS/JS, avoiding namespace ambiguity).
- **`useSyncExternalStore`** for matchMedia/viewport hooks — SSR-safe, no setState-in-effect violations.
- **Placeholder system centralised** in `lib/assets.ts` — single map; real assets drop in without component changes.
- **Security headers** added now; CSP deliberately deferred (3D + `next/font` interaction needs tuning at audit).
- **Motion library not yet installed** — no Stage 1 component needs it; CSS handles current transitions (amendment §3).

## 16. Deviations from the locked architecture

- **None functional.** Documented adjustments (not deviations):
  - `pages.ts` content module added for per-page meta (keeps page copy out of JSX, consistent with §15).
  - Footer/social data sourced from `site.ts` (single source for official URLs).
  - `src/app/error.tsx` added (root boundary) — required by §7 fallback philosophy; `global-error.tsx` intentionally skipped (only needed for root-layout crashes).
  - Placeholder page notices are honest build-state markers ("full page ships in a later stage") — not invented site content.

## 17. Recommended next step

**Stage 2 — Design System & Animation Foundation:** introduce `motion` (locked stack), implement `ScrollReveal` + coordinated transitions (reduced-motion aware), refine primitives (interactive cards, focus/glow states), and produce the Navbar/Footer visual polish. Review of this report is required before proceeding.

---

**Status: STOPPED per amendment §27 — awaiting external review before Stage 2.**
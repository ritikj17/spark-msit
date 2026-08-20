# SPARK ⚡ — Product Discovery, UX & Technical Architecture Report

**Phase 0 · Discovery & Architecture (no implementation yet)**
**Society:** SPARK — Student Platform for Advancement, Research & Knowledge, Maharaja Surajmal Institute of Technology, New Delhi
**Date:** August 2026

---

## A. Product Understanding

### What SPARK is

SPARK is a **student-driven research, innovation and learning society** at MSIT. It is not a typical "college club" — it positions itself as a peer-led research and creation ecosystem: students helping students move from curiosity, through research and collaboration, to building real things.

### What the website must accomplish

1. **Communicate identity** — convey a real, ambitious, student-run research & innovation community (not a generic society template).
2. **Recruit members** — convert curious students into inquiries/joiners (primary conversion goal).
3. **Establish credibility** — show the team, past events, vision and mission.
4. **Be a discovery surface** — "what does SPARK do?", "what have they done?", "who runs it?", "how do I reach them?".
5. **Feel premium and technically ambitious** — the site itself is a demonstration of SPARK's technical/creative capability.

### Key brand traits to encode

Curiosity, Research, Innovation, Collaboration, Learning, Creation, Student community, Exploration, Opportunity.

### What it must NOT be

Generic cyberpunk, neon overload, AI/robot imagery, glassmorphism soup, crypto UI, template college site.

**Aesthetic anchor:** *modern research laboratory + premium developer interface + university innovation ecosystem — human, technical, curious, ambitious.*

---

## B. User Journey

### Primary personas

| Persona | Goal | Primary path |
|---|---|---|
| **Curious student** (prospective member) | Discover SPARK, decide to join/inquire | Home → What We Do → Events → Team → Contact (Join) |
| **Interested researcher/project builder** | See if SPARK enables their idea | Home → What We Do → Events → Contact |
| **Current member** | Navigate to team/events quickly | Direct links, footer |
| **Faculty / collaborators** | Verify credibility, find contact | Home → About → Contact |
| **Potential sponsors/partners** | Understand scope and reach | Home → About → Events → Contact |

### Primary journey (desktop)

1. Visitor lands on **Home**. The 3D SPARK universe loads behind a clear, readable hero: `SPARK ⚡`, full name, tagline *"Where Curiosity Meets Creation."*
2. Hero copy introduces the invitation: *"Have an idea you want to work on?"*
3. Visitor scrolls — the scene reacts subtly (parallax, camera easing). **What We Do** cards explain Research / Innovation / Collaboration / Workshops / Opportunities.
4. Closing CTA: *"Ready to explore? Bring your curiosity. Find your SPARK. ⚡"* → scroll-driven or button to **About** / **Contact**.
5. Secondary journeys: **About** (mission/vision), **Events** (proof via past events timeline), **Team** (credibility), **Contact** (social + inquiry form).

### Mobile journey

Same narrative, simplified. The 3D scene is reduced or replaced by the 2D/SVG fallback. Typography and content remain identical — 3D is an enhancement, never a content gate.

---

## C. Information Architecture

### Sitemap (v1)

```
/
├── Home
├── About
├── Events
├── Team
└── Contact
```

### Global navigation

- Primary nav (desktop): Home, About, Events, Team, Contact + CTA button ("Join SPARK" → Contact)
- Mobile: collapsible/hamburger menu, same items, keyboard accessible
- Footer: brand block, nav links, social links (Instagram / WhatsApp / LinkedIn), society name + college, copyright, small print

### Future pages (reserved, not built in v1)

- `/research`, `/projects`, `/opportunities`, `/join` — content-driven, plug into the same architecture
- 404 page for unknown routes

### Navigation model

Shallow (2 levels max), flat top-level pages, all reachable within 2 clicks. No mega-menus. Anchor links for in-page sections (e.g., Home → What We Do).

---

## D. Page-by-Page Architecture

---

### D.1 Home `/`

**Purpose:** Immersive first impression + primary conversion surface.

**Sections (top → bottom):**

| # | Section | Content | Interaction |
|---|---|---|---|
| 1 | Hero (3D) | `SPARK ⚡`, full name, tagline, invitation copy, CTA | 3D SPARK universe, scroll parallax, CTA buttons |
| 2 | Intro | "We bring together students who are interested in research, innovation, projects and learning…" | Scroll reveal |
| 3 | What We Do | Research / Innovation / Collaboration / Workshops & Training / Opportunities | Card hover states, reveal on scroll |
| 4 | Closing CTA | "Ready to explore? Bring your curiosity. Find your SPARK. ⚡" | CTA → About / Contact |

**Hero content (exact, from spec):**
> Have an idea you want to work on? Interested in research? Want to build something new or learn something beyond your classroom? SPARK is a place to start.

**What We Do copy (exact, from spec):**
- **Research** — Explore new ideas and learn how research works.
- **Innovation** — Turn ideas into projects and practical solutions.
- **Collaboration** — Work and learn with students, seniors and mentors.
- **Workshops & Training** — Learn new skills through interactive sessions.
- **Opportunities** — Explore projects, publications, funding and other opportunities.

**CTA:** Primary → Contact/Join. Secondary → About.

**Responsive:** Hero text reflows above/over a simplified 3D or 2D scene; cards stack 1→2→3 columns; particle/3D load gated by capability.

---

### D.2 About `/about`

**Purpose:** Mission, vision, and why SPARK exists. Establishes legitimacy.

**Sections:**
1. Hero: **"What is SPARK?"** + definition + mission copy
2. The "simple question" narrative paragraph
3. **Our Vision** (pull-quote block)
4. **What We Aim To Do** (numbered list, 6 items)
5. Closing: *"You don't need to know everything to get started. You just need to be curious. ⚡"* + CTA

**Interactions:** scroll reveals, pull-quote styling, numbered milestone list hover.

**Content (exact, from spec):** all supplied copy verbatim; the 6 aims verbatim.

**Responsive:** single-column typographic page; numbered aims become a responsive grid (2×3 on desktop, 1-col mobile).

---

### D.3 Events `/events`

**Purpose:** Proof of activity; archive of past work; signpost for future.

**Hero:** **"Learn. Explore. Experience."** + intro copy.

**Sections:**
1. Hero + intro
2. **Past Events** — interactive timeline/archive visual language
   - Financial Literacy Webinar 💰 — September 2025
   - Hands-On Soldering Workshop 🔧 — September 2025
   - AR/VR Workshop 🥽 — March 2026
3. **Upcoming Events** — "More workshops, events and learning opportunities are coming soon. Stay tuned! 👀"

**Event card structure:** cover image (placeholder `[SPARK-EVENT-0N-COVER]`), title, date, description, "explored" tag list (e.g., budgeting, savings, investments, mutual funds, loans, debt, fraud awareness), optional gallery (placeholder `[SPARK-EVENT-0N-GALLERY-0N]`).

**Interactions:**
- Timeline rail (desktop) with active/hover states
- Expandable event detail (accordion or modal) with gallery
- Tag chips for event topics
- Hover: cover image zoom/gradient, card lift

**Responsive:** timeline becomes a vertical stacked timeline on mobile; galleries become swipeable; touch-friendly hit targets.

---

### D.4 Team `/team`

**Purpose:** Humanize SPARK; build trust via named, real people.

**Sections:**
1. Hero
2. **Faculty Team** — Dr. Deepshika Yadav Ma'am (`[SPARK-FACULTY-PHOTO]`)
3. **Executive Panel 2026–2027** — President (Ashvini Adhikari), Vice President (Pranjal Sharma), General Secretary (Dhanya Manocha), each with role description and photo placeholder
4. **Departments** — 7 departments, each with head/deputy/coordinator(s) and description:
   - Research (Palak Gupta, Manaswin Kath, Aaditya Rai)
   - Publication & Documentation (Nitya Bharadwaj, Deputy — pending)
   - Workshop (Aalia Ali, Anushka)
   - Tech (Mudit, Ritik)
   - PR, Marketing & Outreach (Sumit Kumar, Guransh Singh)
   - Event Management (Reet Rathore, Varun Hooda)
   - Design & Videography (Utkarsh Gaur, Divyanshi)
5. Closing: **"Different departments. Different skills. One SPARK. ⚡"**

**Interactions:**
- Department sub-navigation / tab or accordion navigation (7 groups)
- Team member cards with photo placeholders, hover states
- "Deputy Head — pending" rendered as an intentional empty-state chip (not an error)

**Responsive:** department cards grid (1/2/3 cols); sub-nav becomes sticky horizontal scroll or accordion on mobile.

---

### D.5 Contact `/contact`

**Purpose:** Conversion endpoint — inquiries, joining, collaboration.

**Hero:** **"Want to Know More About SPARK?"** + invitation copy.

**Sections:**
1. Hero
2. **Connect With Us** — social cards:
   - Instagram: @spark_msit
   - WhatsApp: Join our WhatsApp Community
   - LinkedIn: SPARK MSIT
   - *(Official links preserved exactly — provided separately; no invented handles beyond spec)*
3. **Visit Us** — Maharaja Surajmal Institute of Technology, C-4, Janakpuri, New Delhi
4. **Inquiry form** — polished, validated, responsive (name, email, category, message)
5. Closing: *"Have an idea? We'd love to hear it. ⚡"* / *"SPARK — Research. Collaborate. Discover."*

**Interactions:** social cards hover/link, form validation + submit states (idle/submitting/success/error), focus states.

**Constraints:** no invented phone numbers, emails, or office hours. Contact method = supplied official links + form delivery via env-configured endpoint.

---

## E. Design System

Source of truth: the locked moodboard (dark-first, gold accent, research/HUD, thin borders, rounded technical panels, restrained glow, elegant motion).

### E.1 Color tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0A0B0D` | Page base (near-black) |
| `--color-bg-deep` | `#060708` | Hero/deep zones |
| `--color-surface` | `#101216` | Panels, cards |
| `--color-surface-raised` | `#14171C` | Hover/raised surfaces |
| `--color-border` | `rgba(255,255,255,0.08)` | Thin borders, dividers |
| `--color-border-strong` | `rgba(255,255,255,0.14)` | Card/panel outlines |
| `--color-text` | `#EDEFF2` | Primary text |
| `--color-text-secondary` | `#9AA0A8` | Secondary text |
| `--color-text-muted` | `#6B7076` | Captions, meta |
| `--color-accent` | `#F0B13F` | SPARK gold (primary accent) |
| `--color-accent-bright` | `#FFC25E` | Hover/active gold |
| `--color-accent-dim` | `#9C6F1E` | Muted gold (borders, glow base) |
| `--color-success` / `--color-error` | muted green / red | Form states (restrained) |

**Glow token:** `--glow-accent: 0 0 24px rgba(240,177,63,0.18)` — restrained, not neon.

**Rules:** gold is an accent, never a background fill; backgrounds stay near-black; contrast maintained (body text on bg ≥ 7:1, secondary ≥ 4.5:1).

### E.2 Typography

| Role | Family | Notes |
|---|---|---|
| Display/Headings | **Space Grotesk** (self-hosted via `next/font`) | Technical, modern, characterful |
| Body | **Inter** | Neutral, highly legible |
| Mono/labels | **JetBrains Mono** | HUD labels, eyebrow tags, coordinates, meta |

- Scale: clamp-driven fluid type (e.g., hero `clamp(2.75rem, 6vw, 4.5rem)`).
- Eyebrow label pattern: mono uppercase, letter-spaced, gold-tinted (e.g., `01 // RESEARCH`).
- Line-height: headings ~1.05–1.15, body ~1.6.
- Alternative considered: an editorial serif for pull-quotes (e.g., Instrument Serif) — optional garnish, not required for v1.

### E.3 Spacing & layout

- 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section spacing: `padding-block: clamp(4rem, 10vw, 8rem)`.
- Container max-width: `1280px`, content rail `72ch` for prose.
- Grid: subtle background grid lines (CSS gradients or SVG) at ~5–8% opacity — the "technical grid".

### E.4 Radius, borders, shadows

- Radius: `8px` (buttons/chips), `12px` (cards), `16px` (panels).
- Borders: `1px` hairline using border tokens.
- Shadows: layered — `0 1px 0 rgba(255,255,255,0.04) inset`, plus card drop shadow.
- Glow: only for focus/active/3D accents; never ambient-wide.

### E.5 Motion tokens

| Token | Value |
|---|---|
| Duration `fast` | 150ms |
| Duration `base` | 250ms |
| Duration `slow` | 400ms |
| Duration `reveal` | 600–900ms |
| Easing default | `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint-ish) |
| Easing 3D | spring / lerp-based damping |

**Rule:** every animated element must have a `prefers-reduced-motion: reduce` resolution (CSS-only ambient at most).

### E.6 Z-index layers

| Layer | Value | Used by |
|---|---|---|
| 3D canvas | `0` (fixed, behind content) | Home hero |
| Content | `10` | Sections |
| Nav/Footer | `50` | Sticky header |
| Overlays | `60` | Full-bleed overlays |
| Modal/Sheet | `70` | Event detail, mobile menu |
| Toast/loading | `80` | Form status |

### E.7 Breakpoints

Tailwind defaults: `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`. Design decisions made per breakpoint, not just scaled.

---

## F. 3D Strategy

### F.1 Technology recommendation

**Three.js + @react-three/fiber (R3F) + @react-three/drei**, loaded **lazily only on Home**, gated behind capability detection.

**Why this stack (vs alternatives):**

| Option | Verdict |
|---|---|
| Raw Three.js + manual React DOM sync | Rejected — manual lifecycle, harder to maintain, worse ergonomics for state-driven nodes |
| React Three Fiber + drei | **Recommended** — declarative, React-state-driven, ecosystem-standard, fine-grained control over perf |
| Custom WebGL | Rejected — enormous complexity/maintenance burden for v1 |
| SVG/CSS hybrid | Used as **fallback + supporting layers**, not the hero replacement |

**Scene concept — "SPARK universe":**
1. **Core** — central "SPARK core": low-poly icosahedron/energy sphere, wireframe + emissive gold, subtle pulse, occasional particle ignitions.
2. **Orbital rings** — 2–3 thin elliptical rings (line segments) at varied tilt, gold-tinted, low opacity.
3. **Nodes** — 5 orbiting nodes: **Research · Innovation · Collaboration · Workshops · Opportunities**. Each = small octahedron/sphere with a label chip. Hover → highlight + tooltip; click → focus + description panel. Maps the story: *Curiosity → Research → Exploration → Collaboration → Creation*.
4. **Particles** — instanced point cloud (thousands on desktop, capped on mobile), slow drift, restrained gold/white.
5. **Grid** — subtle technical floor/back grid, very low opacity.

### F.2 Interaction model

- Gentle auto-rotation by default.
- Pointer parallax (subtle camera offset).
- Node hover (pointerover) → scale + glow + label.
- Node click/tap → camera focus + descriptive panel (also clickable list on screen).
- **3D is never the only information path** — the same 5 nodes exist as normal content cards/sections below the hero.

### F.3 Performance strategy

- `next/dynamic(() => import(...))`, `ssr: false`, Suspense fallback = styled 2D hero.
- `dpr` clamped `[1, 1.75]`; render loop paused when hero offscreen (IntersectionObserver) and when tab hidden.
- **Instancing** via drei `<Instances>` / `<Points>` for particles.
- Bloom (post-processing) **feature-gated**: enabled only on high-tier desktop; off on mobile/low-end/reduced-motion.
- Particle budget: desktop ≤ ~4,000 points; mobile ≤ ~600; dynamic scaling via drei `PerformanceMonitor`.
- Use drei helpers (`<OrbitControls>` clamped, no zoom) rather than hand-rolled camera math where possible.

### F.4 Mobile strategy

- Reduce particle count, disable bloom/shadows, cap dpr at 1.5.
- Simplify camera (tap node, no drag-zoom).
- If `PerformanceMonitor` detects low FPS → degrade gracefully (fewer particles → static render → 2D fallback).
- Below `lg` (1024px), consider shipping the 2D/SVG animated hero instead of WebGL to protect battery/perf.

### F.5 Fallback strategy (ordered)

1. **Static/SVG hero** — always present as base layer (hero text is HTML; 3D is enhancement).
2. **No WebGL** → animated SVG orbital system (CSS/SMIL), same visual language.
3. **Reduced motion** → static scene render + CSS-only subtle ambient (no continuous transforms).
4. **Runtime error** → ErrorBoundary around Canvas → drops to 2D fallback, never a blank hero.

### F.6 Bundle impact

Three.js ~600kb min (~150–160kb gzip) + fiber ~40kb + drei (tree-shaken, used parts only). **Lazy-loaded exclusively on Home** — About/Events/Team/Contact never pay for it. Accepted and controlled via code-splitting.

---

## G. Technical Stack

| Concern | Choice | Justification |
|---|---|---|
| **Framework** | **Next.js 15 (App Router), static-first (SSG)** | Real society site → SEO matters; file-based routing; `metadata`/`sitemap.ts`/`robots.ts`/OG out of the box; `next/image` for optimization; server actions for form; first-class deployment. |
| **Language** | **TypeScript** | Typed content contracts prevent drift; team churn friendly. |
| **Styling** | **Tailwind CSS v4 + CSS custom-property design tokens** | Token-driven, enforces design system, CSS-first (no JS config), excellent dark-mode + arbitrary-value support. |
| **UI** | **Bespoke component library** (no third-party UI kit) | The aesthetic is unique; a kit would fight the design. Hand-build on design tokens. |
| **3D** | **Three.js + @react-three/fiber + @react-three/drei** | See Section F. Lazy island, capability-gated. |
| **Animation** | **`motion` (Framer Motion) + CSS** for UI reveals/transitions; spring math in 3D | Orchestrated page transitions & scroll reveals worth the ~40kb; CSS handles simple transitions. `prefers-reduced-motion` respected everywhere. |
| **Content** | **Typed TypeScript modules** (`src/content/*.ts`), CMS-ready interfaces | See Section J. |
| **Forms** | **Next.js Server Action** → env-configured delivery (email/webhook/WhatsApp deep-link), honeypot + rate-limit | No DB/auth needed for v1. |
| **Storage** | **None** for v1 (static assets only) | No auth, no DB, no CMS in v1. |
| **Deployment** | **Vercel** (primary); Cloudflare Pages/Netlify viable | See Section Q. |

**Deliberately excluded:** no CMS, no auth, no admin, no database, no state manager (React state suffices), no `axios` (native `fetch`), no CSS-in-JS, no animation library for 3D beyond R3F/drei.

---

## H. Application Architecture

```
spark-msit/
├── public/
│   └── assets/                    # see Section K
├── src/
│   ├── app/
│   │   ├── layout.tsx             # root layout, fonts, metadata, nav/footer shell
│   │   ├── page.tsx               # Home
│   │   ├── about/page.tsx
│   │   ├── events/page.tsx
│   │   ├── team/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx          # 404
│   │   ├── error.tsx              # error boundary UI
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── icon.tsx               # favicon
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, SkipLink, PageShell
│   │   ├── ui/                    # Button, Card, SectionHeader, Chip, ...
│   │   ├── home/                  # HomeHero, Hero3D wrapper, WhatWeDo, CTA
│   │   ├── about/  events/  team/  contact/
│   │   ├── three/                 # SparkScene, Node, Orbit, Particles, Grid
│   │   └── shared/                # ScrollReveal, SparkImage, Placeholder, ...
│   ├── content/                   # typed content modules (Section J)
│   ├── lib/                       # assets resolver, form action, hooks, utils
│   └── styles/                    # tokens.css, base.css, utilities
├── package.json / tsconfig.json / next.config.ts
└── (vercel.json / .env.example)
```

---

## I. Component Architecture

Meaningful responsibilities — neither one giant page nor hundreds of one-liners.

**Layout**
- `Navbar` — responsive nav, mobile menu, active state, skip-link target.
- `Footer` — brand, nav, social links, copyright.
- `SkipLink`, `PageShell` (motion page transitions).

**UI primitives**
- `Button` (variant: primary-gold, ghost, link; sizes).
- `Card` (panel surface + border + optional glow).
- `SectionHeader` (eyebrow label + title + lede).
- `Chip` / `Tag` (event topics, roles).
- `SocialLink` (Instagram / WhatsApp / LinkedIn icons + safe external-link handling).

**Home**
- `HomeHero` (text overlay + CTA, always present).
- `Hero3D` (lazy dynamic import + capability gate + ErrorBoundary).
- `WhatWeDo` (5 activity cards), `ClosingCTA`.

**Events**
- `EventCard`, `EventTimeline` (rail), `EventDetail` (expandable + gallery), `UpcomingEvents`.

**Team**
- `TeamMemberCard` (photo, name, role, description), `DepartmentCard`, `DepartmentNav` (tabs/accordion), `PendingRoleChip` (for `Deputy Head — [ ]`).

**Shared/3D**
- `SparkImage` (wraps `next/image`; renders branded placeholder when asset is a token or missing).
- `Placeholder` (branded empty-state visual — gradient, initials, mono token label).
- `ScrollReveal` (IntersectionObserver + motion, respects reduced motion).
- `three/SparkScene`, `three/Node`, `three/OrbitRing`, `three/ParticleField`, `three/TechnicalGrid`.
- `LoadingState` (gold shimmer skeleton, mono "calibrating…" style), `ErrorState`, `NotFound`.

---

## J. Content Architecture

### Recommendation: typed TypeScript content modules

**Why TypeScript modules (over JSON/MDX/CMS):**
- Type safety — mistyped names/roles/links fail at build, not at runtime.
- No build tooling (JSON/MDX add config); no CMS infra for v1.
- Editor-friendly and diff-friendly.
- **CMS-ready:** content is consumed through typed interfaces, so a headless CMS (Sanity/Contentful) can later replace the module source without touching components.

**Structure:**
```
src/content/
├── site.ts            # name, full name, tagline, socials (Instagram/WhatsApp/LinkedIn)
├── navigation.ts      # nav items, footer links, CTAs
├── team.ts            # faculty, exec panel, all members (name, role, desc, photo token)
├── departments.ts     # 7 departments (name, members, description, icon)
├── events.ts          # 3 past events + upcoming (title, date, desc, topics, cover/gallery tokens)
└── contact.ts         # contact copy, official links, address
```

**Contract example (illustrative):**
```ts
// content/team.ts
export const departments: Department[] = [
  {
    id: "research",
    name: "Research",
    description: "The Research team encourages students to explore new ideas…",
    members: [
      { name: "Palak Gupta", role: "Research Head", photo: "[SPARK-RESEARCH-HEAD-PHOTO]" },
      { name: "Manaswin Kath", role: "Research Deputy Head", photo: "[SPARK-RESEARCH-DEPUTY-HEAD-PHOTO]" },
      { name: "Aaditya Rai", role: "Research Coordinator", photo: "[SPARK-RESEARCH-COORDINATOR-PHOTO]" },
    ],
  },
  // …
];
```

**Explicit no-goes:** no hardcoded names/roles in JSX; no fabricated members; "Deputy Head — [ ]" is a typed `role: null` → rendered as a designed pending-state chip.

---

## K. Asset Architecture

```
public/assets/
├── brand/            # SPARK logo (SVG + favicon), mark variants
├── team/             # faculty + all member photos
│   └── (faculty/, core/, research/, publications/, workshop/, tech/, pr/, events/, design/)
├── events/           # per-event covers + galleries
│   └── (event-01-financial-literacy/, event-02-soldering/, event-03-ar-vr/)
├── icons/            # social, department, decorative inline icons
├── textures/         # grid, noise, glow, gradient textures for 2D/3D
├── 3d/               # any GLTF/GLB models or HDRI (added when needed)
└── decorative/       # SVG ornaments, orbital diagrams, background art
```

### Placeholder token system

- Content data holds **placeholder tokens** exactly as supplied (`[SPARK-LOGO]`, `[SPARK-EVENT-01-COVER]`, `[SPARK-RESEARCH-HEAD-PHOTO]`, …).
- `src/lib/assets.ts` maps token → real path (or `null` while placeholder).
- `<SparkImage src={token}>` resolves via the map; unresolved/missing → branded `Placeholder` (initials/gradient/mono token label) — **never a broken image, never a fake face**.
- **Swapping a real asset = drop the file at the mapped path (or update one map entry).** No component changes.

---

## L. Responsive Strategy

| Breakpoint | Behavior |
|---|---|
| **Desktop (≥1280)** | Full 3D scene, full particle budget, bloom on, wide grids, hover states, keyboard shortcuts for hero nodes |
| **Laptop (1024–1279)** | Full 3D with modest particle reduction; layouts hold |
| **Tablet (768–1023)** | 3D simplified (fewer particles, no bloom) or 2D fallback; stacked grids; touch taps |
| **Mobile (<768)** | 2D/SVG hero (perf/battery), single-column layouts, thumb-friendly targets (≥44px), no hover reliance, swipeable galleries, hamburger nav |

**Universal rules:**
- Mobile-first content order; design per breakpoint, not just scaled.
- `overflow-x: hidden` guard at root; fluid type via clamp.
- All interactions have touch equivalents; hover-only patterns avoided.
- `prefers-reduced-motion: reduce` → static/ambient-CSS-only rendering everywhere.

---

## M. Accessibility

- Semantic landmarks (`header/nav/main/footer`), single `h1` per page, logical heading hierarchy.
- Skip-to-content link; visible focus states (gold ring, matches accent).
- Keyboard: full nav, menu, event accordions, hero node list, form.
- Buttons/links with descriptive accessible names; icons `aria-hidden` + text labels.
- Alt text for all real images; placeholders get descriptive `aria-label`s, never decorative fakes.
- Contrast: body ≥ 7:1, secondary ≥ 4.5:1 (verified against tokens).
- Forms: labels, `required`/`aria-invalid`, error summaries, server + client validation.
- Motion: global `prefers-reduced-motion` handling; 3D never the only path to information (content always in HTML).

---

## N. SEO

- Per-page `metadata` (title template `SPARK ⚡ | <Page>`), descriptions, canonical URLs.
- Open Graph + Twitter/X cards (brand image from `public/assets/brand/`).
- `sitemap.ts`, `robots.ts`, favicon via `app/icon.tsx`.
- Semantic HTML; descriptive links; structured data where useful (Organization on Home; Event for past events; Person for faculty advisor).
- Static rendering (SSG) → fast, crawlable, no hydration-gated content.

---

## O. Performance

**Budgets (targets):**
- LCP ≤ 2.5s · CLS ≤ 0.1 · INP ≤ 200ms (mobile baseline)
- Initial JS ≤ ~350kb gzip (content pages), 3D chunk lazy (Home only)
- Images: AVIF/WebP, responsive srcset via `next/image`, explicit `sizes`

**Strategy:**
- SSG everywhere; no client re-fetch for content.
- Lazy `dynamic()` import for `Hero3D` + Suspense fallback.
- WebGL: dpr clamp, instanced particles, render-loop pause offscreen/hidden, `PerformanceMonitor`-driven degradation, bloom feature-gated.
- Fonts: `next/font` self-hosted + subset, preload critical families only.
- Code-splitting per route; no unused drei/three imports (tree-shaking via `three/webgpu`/`three/examples` selective imports, or standard `three` core only).

---

## P. Security

- **No secrets in client code.** Form delivery keys/tokens only in server environment variables.
- Form: honeypot field, server-side validation, basic rate limiting; no PII stored (v1 forwards messages, stores nothing).
- External links (`target="_blank"`) get `rel="noopener noreferrer"`.
- Headers via `next.config.ts` (CSP, X-Content-Type-Options, etc.).
- No auth/DB surface = dramatically reduced attack surface for v1.
- Dependency hygiene: minimal, pinned, audited (`npm audit` in CI); keep lockfile committed.

---

## Q. Deployment

**Primary:** **Vercel** — native Next.js build/SSG, image optimization, preview deploys per branch/PR, edge-free simple hosting, easy custom domain, environment variables, generous free tier for a student site.

**Alternatives:**
- **Cloudflare Pages / Netlify** — equally viable for a static-first Next.js app.
- **Static export** (`output: "export"`) → GitHub Pages / college hosting, if hosting constraints demand it (3D island still works; server actions would need a hosted endpoint instead).

**Pipeline:** repo → CI (typecheck + lint + `npm audit`) → preview deploy → promote to production; custom domain `spark-msit.in`-style (or provided domain) with HTTPS.

---

## R. Future Extensibility

| Future item | Path |
|---|---|
| **Research / Projects / Opportunities / Join pages** | New routes + content modules; reuse existing card/grid/timeline primitives; zero architecture change |
| **CMS / admin** | Content modules already consumed via typed interfaces → swap source to headless CMS (Sanity/Contentful/Strapi) behind same contracts; admin UI lives outside this site |
| **Event galleries, real photos** | Drop files into `public/assets/events/` + update map/token → real paths |
| **Additional 3D scenes / models** | `public/assets/3d/` ready; scene params (colors, node counts) read from a config so non-devs can tune without touching GL |
| **Analytics** | Add lightweight `next/script` analytics later (Plausible/GA) — no structural change |
| **Newsletter / join form persistence** | Introduce a DB/service only when a genuine need appears (e.g., actual registration volume) |

---

## S. Risks & Tradeoffs (honest)

| Risk | Severity | Mitigation |
|---|---|---|
| **3D complexity/scope creep** | High | Lock scene to the 5-node + core + particles spec; no random blobs/extra meshes; parameterized config |
| **Performance on low-end/mobile GPUs** | High | Capability gating, dpr caps, particle budgets, `PerformanceMonitor` degradation, 2D fallback below `lg` |
| **Bundle weight from 3D** | Medium | Lazy island scoped to Home only; tree-shaken three/drei |
| **Motion-driven design vs accessibility** | Medium | `prefers-reduced-motion` handled globally; content never lives only in 3D |
| **Maintainability under team turnover** | Medium | Typed content modules + token design system + documented content swaps; no bespoke one-off CSS in pages |
| **Asset management / placeholder drift** | Medium | Central `assets.ts` map; `SparkImage` never shows broken images; clear `[TOKEN]` naming |
| **CMS migration later** | Low | Content behind interfaces from day one |
| **Fabricated details (contacts, stats, people)** | Low | Hard rule: only supplied copy; "pending" roles rendered as designed empty states |
| **WebGL support fragmentation** | Low | WebGL detection + graceful fallback chain |
| **Design drift from locked direction** | Medium | Design tokens + component library enforce the language; review gates in roadmap |

---

## T. Implementation Roadmap

```
Phase 0  — (this report) Approval gate
Phase 1  — Foundation: Next.js scaffold, TS, Tailwind v4 + tokens, fonts, lint/CI
Phase 2  — Design System: primitives (Button, Card, SectionHeader, Chip, SparkImage, Placeholder)
Phase 3  — 3D Engine: SparkScene skeleton, capability detection, fallback chain, perf hooks
Phase 4  — Home: hero + 3D integration, What We Do, closing CTA, scroll reveals
Phase 5  — About
Phase 6  — Events: timeline, event detail, galleries
Phase 7  — Team: exec panel, departments, pending roles
Phase 8  — Contact: social cards, location, form (server action + states)
Phase 9  — Responsive: per-breakpoint polish, mobile nav, touch, 3D degradation
Phase 10 — Accessibility: full keyboard/AT/reduced-motion audit
Phase 11 — Performance: budgets verification, 3D tuning, image optimization pass
Phase 12 — SEO: metadata, OG cards, sitemap, robots, structured data
Phase 13 — Final Audit: cross-browser, Lighthouse, content accuracy, asset swap drill
```

Each phase ends with a review; content/asset swaps are validated with a dry run in Phase 13.

---

## U. Definition of Done

1. All 5 pages render as designed (visual parity with locked moodboard) on desktop/tablet/mobile.
2. 3D hero: loads lazily, degrades gracefully (no-WebGL / low-end / reduced-motion), never blocks content.
3. Every supplied content string appears verbatim where specified; zero invented facts (no fake numbers, people, contacts, events).
4. Placeholder token system works: missing assets render branded placeholders; swapping a real file in `public/assets/` updates the site with no component edits.
5. Lighthouse: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms, Accessibility + SEO ≥ 95 on representative mobile & desktop runs.
6. WCAG 2.1 AA: keyboard nav complete, visible focus, alt text, form validation, contrast passes, reduced-motion respected.
7. No horizontal overflow anywhere; touch targets ≥ 44px on mobile.
8. `npm run lint`, `npm run typecheck`, `npm run build` clean; `npm audit` clean.
9. Contact form: idle/submitting/success/error states all styled in SPARK language; submissions deliver correctly (staging verified).
10. SEO: metadata, OG/Twitter cards, sitemap, robots, canonical, favicon all live and correct.
11. Code review: content lives in `src/content/*`, no hardcoded names/links in components, no giant page components.
12. External review of this architecture signed off before implementation begins.

---

## RECOMMENDED ARCHITECTURE

```
Framework:  Next.js 15 (App Router, static-first SSG)
Language:   TypeScript
Styling:    Tailwind CSS v4 + CSS custom-property design tokens
UI:         Bespoke SPARK component library (no third-party UI kit)
3D:         Three.js + @react-three/fiber + @react-three/drei (lazy island, capability-gated)
Animation:  motion (Framer Motion) + CSS; prefers-reduced-motion respected
Content:    Typed TypeScript modules in src/content/ (CMS-ready interfaces)
Forms:      Next.js Server Action → env-configured delivery (email/webhook), honeypot + rate limit
Storage:    None for v1 (static assets only; no DB/auth/CMS)
Deployment: Vercel (primary); Cloudflare Pages/Netlify/static export as alternatives

Major dependencies:      Next.js, React, TypeScript, Tailwind v4, Three.js, @react-three/fiber,
                         @react-three/drei, motion
Major architectural decisions:
                         - Static-first with a single lazy 3D island on Home
                         - Design tokens + bespoke components to hold the locked visual direction
                         - Content behind typed interfaces so a CMS can slot in later
                         - Capability-gated 3D with an ordered fallback chain (3D → SVG → static)
                         - No backend/auth/DB/CMS in v1; forms forwarded server-side
Major risks:              Mobile/GPU performance, 3D scope creep, design drift, team-turnover
                         maintenance, asset placeholder drift — all mitigated above.
```

### IMPLEMENTATION ORDER

1. Scaffold Next.js + TS + Tailwind v4 + design tokens + fonts (Phase 1)
2. Build design-system primitives (Phase 2)
3. Build 3D engine skeleton + fallback chain + perf hooks (Phase 3)
4. Assemble Home (hero + 3D + What We Do + CTA) (Phase 4)
5. About (Phase 5)
6. Events (timeline + detail + galleries) (Phase 6)
7. Team (exec + departments + pending roles) (Phase 7)
8. Contact (social + location + form) (Phase 8)
9. Responsive pass (Phase 9)
10. Accessibility pass (Phase 10)
11. Performance pass (Phase 11)
12. SEO pass (Phase 12)
13. Final audit + asset-swap drill (Phase 13)

---

*Report ends here. No implementation was performed. Awaiting external review before Phase 1.*

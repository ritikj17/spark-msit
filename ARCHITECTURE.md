# 🏛️ SPARK MSIT — Architecture & System Design

This document details the architectural decisions, component hierarchy, rendering pipeline, and design system driving the **SPARK MSIT** website.

---

## 1. System Overview

```
                                  [ User Browser ]
                                         │
                         ┌───────────────┴───────────────┐
                         ▼                               ▼
                 [ Real GPU Available ]           [ No WebGL Support ]
                         │                               │
                         ▼                               ▼
                 <SparkSceneInner>               <StaticFallback>
                (Canvas + Three.js)              (Pure HTML & CSS Grid)
                         │
     ┌───────────────────┼───────────────────┐
     ▼                   ▼                   ▼
<SparkCore>        <OrbitSystem>      <EnergyPlatform>
(Emissive Glass    (5 Tilted Planes   (Technical Grid +
Volumetric Sphere)  + Active Nodes)    Concentric Arcs)
```

---

## 2. Next.js App Router Architecture

The project uses Next.js 16 with the App Router paradigm:

- `src/app/layout.tsx`: Root wrapper containing font definitions (Inter, Space Grotesk, JetBrains Mono), the fixed floating `Navbar`, and global `Footer`.
- `src/app/page.tsx`: Home landing page featuring the 3D Universe Hero, manifesto, and 5 Pillars.
- `src/app/about/page.tsx`: Society vision, purpose, institutional affiliation, and aims.
- `src/app/events/page.tsx`: Past workshop archive and upcoming initiatives.
- `src/app/team/page.tsx`: Faculty mentor, executive council, and department rosters.
- `src/app/contact/page.tsx`: Direct connection protocols and institutional location details.

---

## 3. 3D Graphics & WebGL Fallback Chain

The 3D hero is mounted dynamically via `HeroMount.tsx` with React Suspense and an Error Boundary:

```
page.tsx ➔ HeroMount ➔ Hero3D ➔ SparkScene
                                  ├─ StaticFallback  : webgl=false OR tier==="none"
                                  └─ SparkSceneInner : <Canvas> ➔ Universe (3D WebGL)
```

### Fallback Rules:
1. **Reduced Motion Gating:** Users with `prefers-reduced-motion: reduce` **still mount the real WebGL Canvas**, but all `useFrame` rotational deltas are gated to `0`.
2. **Deterministic PRNG:** Random positions for stardust and metallic debris are generated with `mulberry32` seed functions to ensure zero hydration mismatches.
3. **Hardware Scaling:** `useWebGLCapability` reads GPU vendor/renderer details. High-end devices receive 2x DPR with anti-aliasing; mobile devices receive 1x DPR.

---

## 4. Design System & CSS Tokens

Styling is powered by **Tailwind CSS v4** and CSS variables in `src/styles/tokens.css`:

| Token | CSS Variable | Hex / Value | Purpose |
|---|---|---|---|
| `bg-base` | `--spark-bg` | `#0a0b0d` | Primary canvas background |
| `bg-base-deep` | `--spark-bg-deep` | `#060708` | Contrast section background |
| `bg-surface` | `--spark-surface` | `#101216` | Panel & navigation background |
| `text-ink` | `--spark-ink` | `#f1f3f7` | High-contrast heading text |
| `text-ink-secondary` | `--spark-ink-secondary` | `#9ea5b0` | Body paragraph text |
| `text-accent` | `--spark-accent` | `#f0b13f` | SPARK signature golden brand accent |
| `border-line` | `--spark-line` | `rgba(255,255,255,0.08)` | Subtle 1px structural grid borders |

---

## 5. Performance Optimization

- **Turbopack Build Optimization:** Zero external uncompiled scripts.
- **Tree-Shaking:** Selective imports from `three` and `@react-three/drei`.
- **FPS Guard:** Active rolling frame rate monitoring (`useThreePerformance`) reduces particle count dynamically if FPS drops below 30.

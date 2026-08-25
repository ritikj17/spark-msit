# SPARK MSIT Website — Agent Context & Workflow

> This file is the single source of truth for AI agents working on this repo.
> Read it fully before making any change. Update it after completing a stage.

## Project

- **Repo:** `D:\MSIT\Sem 5\Socs\Spark` → https://github.com/ritikj17/spark-msit
- **Stack:** Next.js 16.3.1 (Turbopack) · React 19 · TypeScript · Tailwind v4 · `three@^0.185` · `@react-three/fiber@9` · `@react-three/drei@10`
- **Design language:** dark black/gold "SPARK Universe" hero — glowing sphere + wordmark, Fresnel rim, 5 tilted orbital planes with icon nodes, energy platform, technical floor grid, particles/debris, atmospheric depth.

## Workflow contract (ChatGPT ⇄ agent)

1. ChatGPT emits one step-prompt with objectives and hard rules.
2. The agent executes ONLY that scope. No redesigns beyond it.
3. The agent verifies (typecheck → lint → build → runtime probes) and writes an
   honest numbered report — including anything NOT done and every disclosure.
4. The user pastes the report to ChatGPT; ChatGPT approves or issues corrections.
5. Only after approval: commit (concise conventional message) and push to `main`.
6. Stop after the approved scope. Never start the next stage unprompted.

## Current state (update this section every session)

- Home hero visual rebuild: **done** (`d5c998b`).
- Runtime fallback fix: **done** — capable desktop browsers always mount WebGL;
  reduced-motion users get the real scene with animation disabled.
- Stage 5 (`/about`, `/events`, `/team`, `/contact` content): **NOT started**.
- Home is under human visual review; do not restyle without instruction.

## Architecture map

```
page.tsx → HeroMount (lazy + ErrorBoundary + Suspense)
         → Hero3D (pass-through wrapper)
         → SparkScene        ← ONLY branch point (fallback chain)
           ├─ StaticFallback  : webgl=false OR tier==="none"
           ├─ SvgFallback     : tier==="low" only (NOT reduced motion)
           └─ SparkSceneInner : <Canvas> → Universe (core/orbits/nodes/platform/grid/particles)
```

Key files:

| File | Role |
|---|---|
| `src/components/three/SparkScene.tsx` | All 3D composition + fallback chain + `NODES` data export |
| `src/hooks/useWebGLCapability.ts` | Module-cached detection; stable `SERVER_SNAPSHOT` for `useSyncExternalStore`; dev-only `[SPARK] capability:` console log |
| `src/hooks/useReducedMotion.ts` | SSR-safe matchMedia hook |
| `src/hooks/useThreePerformance.ts` | FPS rolling avg → runtime throttle flag |
| `src/app/page.tsx` | Hero layout; sections use `xl:pl-16` so ProgressRail never overlaps |

### Fallback semantics (locked decisions)

- `prefers-reduced-motion` must **never** select a fallback. Reduced-motion users
  get the real WebGL scene with all `useFrame` animation gated off internally.
- `devicePixelRatio` reflects OS display scaling (125% ⇒ 1.25), **not** GPU power.
  It may only downgrade **mobile** tier, never desktop.
- Detection prefers WebGL2, accepts WebGL1; keeps `failIfMajorPerformanceCaveat:true`.
- `getServerSnapshot` must return the module-level `SERVER_SNAPSHOT` constant —
  returning fresh objects causes the React infinite-loop warning (fixed once at
  `36044b9`; do not regress).

## Environment facts

- Windows + Chrome, Intel Iris Xe (ANGLE/D3D11). WebGL2 works on real GPU.
- Machine DPR = **1.5**, cores = 8, deviceMemory = 8.
- Dev server usually already running on port **3000** (`npm run dev`). Check
  before starting another; second instance fails with "already running".
- Headless Chrome has no GPU → lands on StaticFallback by design. Real-GPU
  verification must use **headed** Chrome via CDP (scripts below).
- Cold Turbopack compile can exceed 20 s: probes need a warm-up navigation +
  ≥40 s poll window, or they falsely report "no canvas".

## Verification toolkit (temp scripts, recreate as needed)

Located in `C:\Users\bravo\AppData\Local\Temp\opencode\` (may be cleaned; patterns here):

- `probe-final.mjs` — headed CDP probe: scenario A normal (canvas mounts +
  screenshot-diff proves animation), scenario B emulated `prefers-reduced-motion`
  (canvas still mounts, static). Warm-up nav first. **This is the acceptance test**
  for any capability/fallback change.
- `scripts/capture.mjs` — headless overflow/element checks at 1440×900,
  1280×800, 768×1024, 412×915, 390×844 (expects StaticFallback headless).
- DOM markers: real scene ⇒ `canvas[data-engine^="three.js"]`;
  SvgFallback ⇒ inline `<svg>` in hero; stuck Suspense ⇒ text
  "INITIALIZING SPARK UNIVERSE".

### Shell gotchas (this machine)

- Bash tool timeout parameter is **milliseconds** — pass ≥120000 for builds.
- PowerShell 5.1: no `&&`, no `||`, no `head`. Use `if ($?) { }`, `foreach`,
  `Select-Object -First`.
- `npm run dev -- -p PORT` (not `--port`).

## Hard rules for agents

1. NEVER trust prior reports — re-run typecheck/lint/build yourself.
2. Never claim visual results without programmatic proof (CDP DOM/screenshot
   diff). The model cannot view images; say so in reports.
3. Preserve: responsive rules (desktop 40/60, tablet stack, mobile copy→CTA→3D),
   compact screen-space labels (<640 px), radial scale `clamp(width/1400, .55, 1)`,
   ProgressRail `xl:pl-16` gutters, reduced-motion gating inside the scene.
4. No comments unless asked; match existing code style; no new deps.
5. If localhost ≠ capture behavior: find the divergence FIRST (capability log,
   fallback markers) — do not touch SparkScene visuals speculatively.
6. Honest reporting > green checkmarks. List failures verbatim.

## Report template (paste to ChatGPT)

```
1. Root cause / what changed
2. Files touched
3. Verification: typecheck / lint / build (verbatim status)
4. Runtime evidence (probe outputs, both scenarios)
5. Console warnings remaining (expected: THREE.Clock deprecation only)
6. What was NOT done / disclosures
7. Commit hash + push status (only if approved)
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

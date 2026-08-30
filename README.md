# SPARK — Student Platform for Advancement, Research & Knowledge
### Maharaja Surajmal Institute of Technology (MSIT)

> Official web portal for **SPARK MSIT**, the student-driven research and innovation society at MSIT. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Three.js / React Three Fiber.

---

## 🌟 Overview

SPARK is an interdisciplinary engineering society empowering students to explore research, build innovative hardware/software projects, and publish impactful papers. This web portal serves as the central hub showcasing the society's mission, five core pillars, executive leadership, and upcoming workshops & hackathons.

### ✨ Key Features
- **🪐 Interactive 3D Universe Hero:** Built with Three.js (`@react-three/fiber` & `@react-three/drei`), featuring an emissive core sphere, equatorial energy rings, dynamic camera framing, and 5 interactive orbital nodes.
- **🛡️ Robust Fallback Chain:** Automatic capability detection with graceful degradation (WebGL2 Real GPU ➔ WebGL1 ➔ SVG Fallback ➔ Static CSS Fallback).
- **✨ Swiss Editorial UI:** Clean, modern, high-contrast brutalist design with custom design tokens, fluid typography, and zero cluttered cards.
- **♿ Accessibility & Reduced Motion:** Full `prefers-reduced-motion` compliance, SSR-safe external store hydration, and semantic HTML5.
- **📱 Ultra-Responsive:** Optimized for ultra-wide desktop monitors, laptops, iPads/tablets, and mobile viewports.

---

## 🛠️ Tech Stack

| Technology | Role | Version |
|---|---|---|
| **Next.js** | React Framework (App Router + Turbopack) | `16.3.1` |
| **React** | UI Library | `19.0.0` |
| **TypeScript** | Type Safety & Strict Checking | `^5.0` |
| **Tailwind CSS** | Utility-First Styling (v4 Engine) | `^4.0` |
| **Three.js** | 3D Graphics Engine | `^0.185` |
| **React Three Fiber (R3F)** | Declarative 3D Canvas in React | `^9.0` |
| **React Three Drei** | Three.js Helper Library | `^10.0` |
| **Framer Motion** | Fluid Micro-Interactions & Scroll Reveals | `^12.0` |

---

## 🚀 Quick Start for Developers

Ready to run the project locally? Follow these simple steps:

```bash
# 1. Clone the repository
git clone https://github.com/ritikj17/spark-msit.git
cd spark-msit

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

> 📖 **Need a complete beginner guide?** Read [SETUP.md](./SETUP.md) for step-by-step instructions from installing Node.js to running the project on Windows, macOS, and Linux.

---

## 📂 Project Structure

```
spark-msit/
├── public/                     # Static assets (images, icons, brand assets)
│   ├── assets/
│   │   ├── brand/              # SPARK logos, emblems
│   │   ├── events/             # Workshop and webinar posters
│   │   └── team/               # Faculty and executive member portraits
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # Society vision, mission, and aims
│   │   ├── contact/            # Join protocol form and contact info
│   │   ├── events/             # Past and upcoming workshops
│   │   ├── team/               # Faculty, executive panel, departments
│   │   ├── globals.css         # Tailwind v4 import and base styles
│   │   ├── layout.tsx          # Root layout with floating Navbar and Footer
│   │   └── page.tsx            # Home page with 3D Hero and Five Pillars
│   ├── components/
│   │   ├── contact/            # Contact form and location components
│   │   ├── layout/             # Navbar, Footer, ProgressRail
│   │   ├── shared/             # ScrollReveal, Logo, CTAStrip
│   │   ├── team/               # PortraitCard and department listings
│   │   ├── three/              # WebGL 3D Canvas, SparkScene, Fallbacks
│   │   └── ui/                 # Buttons, Containers, Badges, Icons
│   ├── content/                # Single source of truth for all text & data
│   │   ├── about.ts            # About page text and aim points
│   │   ├── events.ts           # Event details, topics, and gallery
│   │   ├── home.ts             # Pillar descriptions and manifesto
│   │   ├── site.ts             # Society name, social links, metadata
│   │   └── team.ts             # Faculty, Executive, and Deputy details
│   ├── hooks/                  # Custom React hooks (WebGL capability, performance)
│   ├── lib/                    # Utility functions (cn helper, asset paths)
│   └── styles/
│       └── tokens.css          # Design system color tokens, typography, radii
├── ARCHITECTURE.md             # In-depth architectural documentation
├── CONTRIBUTING.md             # Guide for junior developers on adding content
├── SETUP.md                    # Beginner step-by-step setup guide
└── SECURITY.md                 # Security review & vulnerability reporting
```

---

## 🖼️ How to Insert Images (Quick Guide for Juniors)

Adding images for **Team Members** or **Events** takes 2 quick steps:

### 1. Adding a Team Portrait:
1. Save the image file as a `.jpg` or `.png` inside `public/assets/team/` (e.g. `ashvini-adhikari.jpg`).
2. Open `src/content/team.ts`.
3. Locate the member and change the `photo` property:
   ```ts
   photo: "/assets/team/ashvini-adhikari.jpg",
   ```

### 2. Adding an Event Banner / Poster:
1. Save the image inside `public/assets/events/` (e.g. `robotics-workshop.jpg`).
2. Open `src/content/events.ts`.
3. Update the `cover` property:
   ```ts
   cover: "/assets/events/robotics-workshop.jpg",
   ```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the production static application |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs ESLint to check for code quality and bugs |

---

## 🤝 Contributing

We love contributions from juniors and society members! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) to understand the branch workflow, coding standards, and how to submit a pull request.

---

## 📄 License & Ownership

Designed and maintained by the **SPARK MSIT Technical Team**.  
All rights reserved © 2026–2027 Maharaja Surajmal Institute of Technology.

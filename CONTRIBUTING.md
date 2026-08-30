# 🤝 Contributing to SPARK MSIT

Welcome to the **SPARK MSIT** contributor community! We are excited to have you contribute to our official society website.

Whether you are adding new team members, publishing upcoming event posters, building new UI components, or writing backend integrations, this document explains our standard workflow.

---

## 📋 Table of Contents
1. [Code of Conduct](#1-code-of-conduct)
2. [Strict Golden Rule: NEVER Work on main](#2--strict-golden-rule-never-work-directly-on-main)
3. [Git Branch & Commit Message Schemas](#3-git-branch--commit-message-schemas)
4. [Step-by-Step Git Workflow](#4-step-by-step-git-workflow-for-every-change)
5. [How to Make Common Updates](#5-how-to-make-common-updates)
   - [Adding / Updating Team Members](#51-adding--updating-team-members)
   - [Adding / Updating Events](#52-adding--updating-events)
   - [Inserting Images (Photos & Posters)](#53-inserting-images)
6. [Design Guidelines & Coding Standards](#6-design-guidelines--coding-standards)
7. [Submitting a Pull Request](#7-submitting-a-pull-request)

---

## 1. Code of Conduct
Please review our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). We expect all contributors to maintain a respectful, welcoming, and collaborative environment.

---

## 2. 🚨 Strict Golden Rule: NEVER Work Directly on `main`

> ⚠️ **IMPORTANT RULE FOR ALL JUNIORS & CONTRIBUTORS:**  
> **Never make commits or push directly to the `main` branch.**  
> The `main` branch is protected and contains the live production website. All development must happen on a **separate feature or fix branch**, which is then merged through a reviewed Pull Request (PR).

---

## 3. Git Branch & Commit Message Schemas

### 3.1 🌿 Git Branch Naming Schema
Always prefix your branch name with the appropriate category:

| Prefix | Use Case | Example |
|---|---|---|
| `feat/` | New features or interactive components | `git checkout -b feat/registration-modal` |
| `content/` | Updating photos, events, team info, or text | `git checkout -b content/update-team-2026` |
| `fix/` | Bug fixes or alignment corrections | `git checkout -b fix/navbar-mobile-padding` |
| `style/` | CSS token adjustments or design refinements | `git checkout -b style/hero-globe-glow` |
| `docs/` | Adding or editing documentation | `git checkout -b docs/update-contributing` |

---

### 3.2 💬 Git Commit Message Schema
We follow the **Conventional Commits** specification:

\`\`\`
<type>(<scope>): <short description in present tense>
\`\`\`

**Allowed Types:**
- `feat`: A new feature or UI component (e.g. `feat(events): add countdown timer for hackathon`)
- `fix`: A bug fix (e.g. `fix(about): resolve text contrast issue on mobile`)
- `content`: Adding or updating team, event, or society text (e.g. `content(team): add photo for Deputy Tech Head`)
- `style`: Changes that do not affect code logic (formatting, tokens, spacing)
- `docs`: Documentation updates (`README`, `SETUP`, `CONTRIBUTING`)
- `refactor`: Code refactoring without changing user functionality

---

## 4. Step-by-Step Git Workflow (For Every Change)

Follow these exact terminal commands whenever you make an update:

### Step 1: Sync your main branch
\`\`\`bash
git checkout main
git pull upstream main
\`\`\`

### Step 2: Create a new branch
\`\`\`bash
git checkout -b content/add-new-event
\`\`\`

### Step 3: Make your code/image changes
- Put images in `public/assets/events/` or `public/assets/team/`.
- Update `src/content/events.ts` or `src/content/team.ts`.

### Step 4: Verify your build locally
\`\`\`bash
npm run build
npm run lint
\`\`\`

### Step 5: Stage and commit specific files
\`\`\`bash
# Check what files you modified:
git status

# Add only your modified files:
git add src/content/events.ts public/assets/events/robotics-poster.jpg

# Commit with a clean message:
git commit -m "content(events): add robotics workshop poster and schedule"
\`\`\`

### Step 6: Push your branch to your GitHub fork
\`\`\`bash
git push -u origin content/add-new-event
\`\`\`

### Step 7: Create a Pull Request (PR)
1. Go to [https://github.com/ritikj17/spark-msit](https://github.com/ritikj17/spark-msit).
2. GitHub will show a green banner: **"Compare & pull request"**. Click it!
3. Fill out the pre-populated PR template with a summary of what you did.
4. Click **Create Pull Request** and request review from the Technical Leads.

## 5. How to Make Common Updates

### 3.1 Adding / Updating Team Members
All team data lives in a single source of truth: `src/content/team.ts`.

- To edit the **Faculty Coordinator**, modify `faculty`.
- To edit **President, Vice President, or General Secretary**, modify `executivePanel`.
- To edit **Department Leads & Deputy Heads**, locate the department inside `departments` (e.g. `research`, `technical`, `events`, `pr`, `graphics`, etc.).

Example entry:
```ts
{
  name: "Ritik Jha",
  role: "Deputy Tech Head",
  status: "active",
  photo: "/assets/team/ritik-jha.jpg",
}
```

---

### 3.2 Adding / Updating Events
Event information is centralized in `src/content/events.ts`.

1. For **Past Events**, add an entry to `pastEvents`.
2. For **Upcoming Events / Hackathons**, update `upcomingEvents`.

Example entry:
```ts
{
  id: "event-04",
  title: "Next-Gen AI & Robotics Hackathon",
  date: "November 2026",
  description: "24-hour hardware and software innovation sprint.",
  topics: ["AI", "Robotics", "Hardware Prototyping"],
  cover: "/assets/events/hackathon-2026.jpg",
  gallery: [],
}
```

---

### 3.3 Inserting Images (Photos & Posters)

Next.js automatically serves everything placed in the `public/` folder at the root URL path:

| Asset Type | File Directory | Code Path in `src/content/` |
|---|---|---|
| **Team Member Photo** | `public/assets/team/name.jpg` | `photo: "/assets/team/name.jpg"` |
| **Event Poster / Cover** | `public/assets/events/poster.jpg` | `cover: "/assets/events/poster.jpg"` |
| **Society Brand Logos** | `public/assets/brand/logo.png` | `src: "/assets/brand/logo.png"` |

> 📸 **Image Best Practices:**
> - Keep portrait photos square or standard 4:5 ratio (e.g., 600×600 px or 800×1000 px).
> - Compress images before adding (use WebP or JPG under 200 KB) to ensure lightning-fast page loads.

---

## 6. Design Guidelines & Coding Standards

- **Color Palette & Tokens:** Do NOT hardcode arbitrary colors like `bg-[#123456]`. Always use design tokens defined in `src/styles/tokens.css`:
  - Backgrounds: `bg-base`, `bg-base-deep`, `bg-surface`, `bg-surface-raised`
  - Borders: `border-line`, `border-line-strong`
  - Text: `text-ink`, `text-ink-secondary`, `text-ink-muted`, `text-accent`
- **Accessibility:** Ensure all interactive elements have `aria-label` where appropriate, and text maintains high contrast.
- **3D & Animation:** Do NOT modify `SparkScene.tsx` unless you understand the Three.js render loop and fallback capability checks in `AGENTS.md`.

---

## 7. Submitting a Pull Request

1. Push your branch to your GitHub fork:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Open [https://github.com/ritikj17/spark-msit](https://github.com/ritikj17/spark-msit) and click **New Pull Request**.
3. Fill out the PR description template clearly explaining:
   - What changes were made.
   - Screenshots / proof of local verification.
4. Request a review from the Tech Head or Deputy Tech Head!

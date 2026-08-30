# 🚀 SPARK MSIT — Complete Setup Guide

Welcome to the **SPARK MSIT** technical team! This guide walks you through setting up the project from scratch on your local machine, whether you are on **Windows, macOS, or Linux**.

---

## 📋 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Cloning the Repository](#2-cloning-the-repository)
3. [Installing Dependencies](#3-installing-dependencies)
4. [Running the Local Server](#4-running-the-local-server)
5. [Building for Production](#5-building-for-production)
6. [Common Troubleshooting](#6-common-troubleshooting)

---

## 1. Prerequisites

Before starting, ensure you have the following installed on your computer:

### 1.1 Git
- **Windows:** Download and install [Git for Windows](https://git-scm.com/download/win).
- **macOS:** Install via Homebrew: `brew install git` (or install Xcode Command Line Tools: `xcode-select --install`).
- **Linux (Ubuntu/Debian):** `sudo apt update && sudo apt install git`

Verify installation:
```bash
git --version
```

### 1.2 Node.js & npm
- We recommend **Node.js v20.x or v22.x (LTS)**.
- Download from [nodejs.org](https://nodejs.org/).

Verify installation:
```bash
node -v  # Should be v20.x or higher
npm -v   # Should be v10.x or higher
```

---

## 2. Cloning the Repository

### Step 2.1: Fork the Repo (If you are contributing via PR)
1. Go to [https://github.com/ritikj17/spark-msit](https://github.com/ritikj17/spark-msit).
2. Click the **Fork** button in the top-right corner to create a copy under your GitHub account.

### Step 2.2: Clone Your Fork
Open your terminal (PowerShell, Command Prompt, or Terminal) and run:

```bash
# Replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/spark-msit.git
cd spark-msit
```

### Step 2.3: Set Up Upstream Remote
Connect your local repository to the main repository to keep your fork updated:
```bash
git remote add upstream https://github.com/ritikj17/spark-msit.git
git remote -v
```

---

## 3. Installing Dependencies

Install all required packages (Next.js 16, React 19, Tailwind v4, Three.js, etc.):

```bash
npm install
```

> 💡 **Tip:** If you encounter peer dependency warnings, Next.js 16 and React 19 are properly configured. Avoid using `--force` unless instructed.

---

## 4. Running the Local Server

Start the development server with Next.js Turbopack:

```bash
npm run dev
```

You will see output similar to:
```
   ▲ Next.js 16.3.1 (Turbopack)
   - Local:        http://localhost:3000
   - Environments: .env
```

Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**. Any edits you make to code or content files will auto-reload in real time!

---

## 5. Building for Production

To test the production build before submitting a pull request:

```bash
# 1. Run typecheck & build
npm run build

# 2. Run linter
npm run lint

# 3. Preview production build locally
npm run start
```

---

## 6. Common Troubleshooting

### Q: Port 3000 is already in use
**Solution:** Start on another port, or kill the process occupying port 3000:
```bash
npm run dev -- -p 3001
```

### Q: 3D Globe shows Static Fallback instead of 3D Canvas
**Solution:**
- The 3D canvas requires WebGL support in your browser. Check `chrome://gpu` or ensure Hardware Acceleration is enabled in your browser settings.
- In headless testing environments (or very low-end GPUs), the site automatically falls back to an SVG or CSS static render by design.

### Q: Turbopack compilation error after git pull
**Solution:** Clean your `.next` cache and restart:
```bash
# On Windows (PowerShell):
Remove-Item -Recurse -Force .next
npm run dev

# On macOS/Linux:
rm -rf .next
npm run dev
```

---

## 💬 Need Help?
Contact the Technical Head or Deputy Tech Head via the SPARK MSIT Discord/WhatsApp developer group!

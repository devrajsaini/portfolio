# Devraj Singh — Portfolio

A modern, high-performance, and responsive personal portfolio website built with clean HTML5, custom CSS3, and JavaScript.

## 🚀 Quick Start

### 1. Run Locally
You can run a local development server with live-reloading:

```bash
npm start
```
This will start the local server at [http://localhost:3000](http://localhost:3000) and automatically refresh whenever you edit any files.

*Alternatively, since this is a static site, you can simply double-click [index.html](index.html) to open it directly in any browser.*

### 2. Build
Since this is a fully static site, no compilation or build process is required:
```bash
npm run build
```

## 📦 Deploy to Vercel

Deploying to Vercel is extremely easy and zero-config:

**Option 1: GitHub + Vercel (Recommended)**
1. Push this project folder to your GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New Project**.
3. Import your repository, keep the default settings, and click **Deploy**.
4. Every push to your main branch will automatically deploy.

**Option 2: Vercel CLI**
Install the Vercel CLI globally and deploy directly from your terminal:
```bash
npm install -g vercel
vercel
```

## 🛠️ Tech Stack & Features

- **Structure:** Semantic HTML5
- **Styling:** Custom CSS3 (featuring glassmorphism, glowing backdrop orbs, fluid grids, and CSS variables)
- **Animations:** Fluid fade-in animations on load and custom filters
- **Interactions:** Dynamic project category filters, contact form pre-filled mail handler, and responsive navigation
- **SEO & Performance:** Optimized fast-loading static assets, lightweight footprint, and custom SVG favicon (💻)

## 📂 Project Structure

```
├── index.html        # Home / Landing page
├── about.html        # Professional bio, education & skills
├── projects.html     # Interactive projects catalog with category filter
├── contact.html      # Contact form and email link setup
├── script.js         # JavaScript interactivity (filters, form handling)
├── styles.css        # Premium custom CSS styling
├── package.json      # npm scripts configuration
└── vercel.json       # Deployment configuration for Vercel
```

---
© 2026 Devraj Singh. All rights reserved.

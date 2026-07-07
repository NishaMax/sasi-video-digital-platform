# SASI VIDEO — ITERATIVE BUILD PLAN (PLAN 2.0)
## Agile Execution Roadmap
**Status:** 🟡 IN PROGRESS  
**Approach:** Mobile-first, iterative design checking, component-by-component building.

---

## 🎯 THE EXECUTION STRATEGY
Instead of building everything at once in the dark, we will build **step-by-step**, checking the UI/UX on mobile first before moving to desktop or backend. 

### 🚀 PHASE 1: The "Digital Entrance" & Setup (Completed ✅)
**Goal:** Setup the project and perfect the very first impression (The Door Animation).
- [x] Initialize Next.js (App Router) project with basic folder structure.
- [x] Setup global CSS with exact brand colors (Sasi Red, Graphite Black, Silver, Light Grey).
- [x] Configure typography (Plus Jakarta Sans).
- [x] **Build the Splash Screen:** The 2-3s cinematic black door opening animation revealing the logo.
- [x] **Review Checkpoint:** Reviewed door animation, colors, and logo sizing on mobile.

### 📱 PHASE 2: Entry Flow & Mobile Homepage (Completed ✅)
**Goal:** Build the essential mobile homepage and make sure the layout feels exactly like the "Sasi Video digital identity."
- [x] Build Language Selection UI (Sinhala, Tamil, English cards).
- [x] Build Branch Selection UI (Kalawana / Ratnapura cards).
- [x] **Build the Mobile Homepage:**
  - Branch-specific Hero Section (Blurry background, welcoming text).
  - Quick Actions Bar (Call, WhatsApp, Directions, Services).
  - Category Grid (Electronics categories).
  - Bottom Navigation Bar.
- [x] Full multilingual support (English, Sinhala, Tamil) via i18n context.
- [x] Branch-aware logic (Services hidden on Kalawana branch).
- [x] **Review Checkpoint:** Mobile layout reviewed and confirmed premium.

### 💻 PHASE 3: Desktop Scaling & Animations (Completed ✅)
**Goal:** Ensure the mobile design expands beautifully to desktop and add micro-interactions.
- [x] Scale all pages for Tablet and Desktop (multi-column grids).
- [x] Fixed left sidebar navigation on desktop (replaces bottom nav).
- [x] Hover states, card animations, and micro-interactions everywhere.
- [x] Responsive 2→3→4 column product grids.
- [x] **Review Checkpoint:** All screens verified on mobile, tablet, and desktop.

### 📦 PHASE 4: Core Pages & "Ask Before You Visit" (Completed ✅)
**Goal:** Build the product browsing experience and connect it to WhatsApp.
- [x] Build the Product Listing Page with live category filters.
- [x] Build the Product Detail Page.
- [x] Implement the **"Ask Before You Visit"** button (Generates pre-filled WhatsApp message).
- [x] Build Services, Branches, Contact pages.
- [x] Build global **Preferences Bottom Sheet** (Language/Branch switching without reloading).
- [x] **Review Checkpoint:** Complete customer journey tested: Homepage ➔ Product ➔ WhatsApp.

### ⚙️ PHASE 5: Backend & Database (IN PROGRESS 🟡)
**Goal:** Connect the beautiful UI to a real database so you can manage it.
- [x] Setup **Neon PostgreSQL** cloud database.
- [x] Installed and configured **Prisma ORM v7** with `pg` adapter.
- [x] Defined database schema: `Category`, `Product`, `Service` models.
- [x] Ran initial migration — tables created on live Neon database.
- [x] Seeded database with initial data (6 categories, 8 products, 4 services).
- [x] Built **Next.js Server Actions** (`getProducts`, `getCategories`, `getServices`).
- [x] Built icon resolver (`src/lib/icons.ts`) to map DB string names to Lucide components.
- [x] Wired `MobileHome`, `MobileProducts`, `MobileServices` to live DB data.
- [x] Branch-aware product filtering — Kalawana/Ratnapura products auto-filtered.
- [x] Loading spinners while data is being fetched.
- [x] **Build the Admin CMS Dashboard** (Add/Edit/Delete products & services without touching code).
- [x] Connect **Cloudflare R2** (or other image storage) for product image uploads via CMS.
- [ ] **Review Checkpoint:** Test adding a product via the CMS and seeing it appear live on the website.

### 🚀 PHASE 6: Polish, SEO & Launch
**Goal:** Make it fast, secure, and ready for customers.
- [ ] Configure **Progressive Web App (PWA)** so customers can "Add to Home Screen".
- [ ] Setup **SEO** (Dynamic Meta tags per branch/page, Google Business Integration).
- [ ] Performance Optimization (WebP images, lazy loading, Cloudflare CDN).
- [ ] Final deployment to **Vercel** (production build).
- [ ] **Review Checkpoint:** Final Live Launch Celebration! 🎉

---
*This plan is designed to be flexible. We build a piece, we check it, and if it's perfect, we move to the next.*

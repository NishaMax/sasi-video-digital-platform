# SASI VIDEO — ITERATIVE BUILD PLAN (PLAN 2.0)
## Agile Execution Roadmap
**Status:** 🟡 IN PROGRESS  
**Approach:** Mobile-first, iterative design checking, component-by-component building.

---

## 🎯 THE EXECUTION STRATEGY
Instead of building everything at once in the dark, we will build **step-by-step**, checking the UI/UX on mobile first before moving to desktop or backend. 

### 🚀 PHASE 1: The "Digital Entrance" & Setup (Completed)
**Goal:** Setup the project and perfect the very first impression (The Door Animation).
- [x] Initialize Next.js (App Router) project with basic folder structure.
- [x] Setup global CSS with exact brand colors (Sasi Red, Graphite Black, Silver, Light Grey).
- [x] Configure typography (Plus Jakarta Sans).
- [x] **Build the Splash Screen:** The 2-3s cinematic black door opening animation revealing the logo.
- [x] **Review Checkpoint:** We will pause here to review the door animation, colors, and logo sizing on mobile.

### 📱 PHASE 2: Entry Flow & Mobile Homepage (Completed)
**Goal:** Build the essential mobile homepage and make sure the layout feels exactly like the "Sasi Video digital identity."
- [x] Build Language Selection UI (Sinhala, Tamil, English cards).
- [x] Build Branch Selection UI (Kalawana / Ratnapura cards).
- [x] **Build the Mobile Homepage:**
  - Branch-specific Hero Section (Blurry background, welcoming text).
  - Quick Actions Bar (Call, WhatsApp, Directions, Services).
  - Large, instant Search Bar.
  - Category Grid (Movies, Accessories, Storage, etc.).
  - Bottom Navigation Bar.
- [x] **Review Checkpoint:** We will check if the mobile layout feels premium, simple, and not like a generic template.

### 💻 PHASE 3: Desktop Scaling & Animations
**Goal:** Ensure the mobile design expands beautifully to desktop and add micro-interactions.
- [ ] Scale the Homepage layout for Tablet and Desktop (multi-column grids).
- [ ] Add smooth scroll animations (fade up, slow image reveals).
- [ ] Implement hover states for buttons and cards on desktop.
- [ ] **Review Checkpoint:** Ensure nothing breaks on large screens and the animations feel natural.

### 📦 PHASE 4: Core Pages & "Ask Before You Visit" (Completed)
**Goal:** Build the product browsing experience and connect it to WhatsApp.
- [x] Build the Product Listing Page with live category filters.
- [x] Build the Product Detail Page.
- [x] Implement the **"Ask Before You Visit"** button (Generates pre-filled WhatsApp message).
- [x] Build Services, Branches, Contact, and About pages.
- [x] Build global **Preferences Bottom Sheet** (Language/Branch switching without reloading).
- [x] **Review Checkpoint:** Test the complete customer journey from Homepage ➔ Product ➔ WhatsApp.

### ⚙️ PHASE 5: Backend & Database (Making it Dynamic)
**Goal:** Connect the beautiful UI to a real database so you can manage it.
- [ ] Setup PostgreSQL Database (Products, Categories, Services, Branches).
- [ ] Build the Admin CMS Dashboard.
- [ ] Implement **Live Preview Mode** in the CMS.
- [ ] Connect Cloudflare R2 for Image Storage.
- [ ] Wire the frontend to fetch real data instead of placeholders.
- [ ] **Review Checkpoint:** Test adding a product via the CMS and seeing it appear on the website.

### 🚀 PHASE 6: Polish, SEO & Launch
**Goal:** Make it fast, secure, and ready for customers.
- [ ] Configure Progressive Web App (PWA) so customers can "Add to Home Screen".
- [ ] Setup SEO (Dynamic Meta tags, Google Business Integration).
- [ ] Performance Optimization (WebP images, lazy loading, Cloudflare CDN).
- [ ] Final deployment to Vercel (Frontend) and Railway (Backend).
- [ ] **Review Checkpoint:** Final Live Launch Celebration! 🎉

---
*This plan is designed to be flexible. We build a piece, we check it, and if it's perfect, we move to the next.*

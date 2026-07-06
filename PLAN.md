# SASI VIDEO — MASTER BUILD PLAN
## Digital Transformation Project
**Version:** 2.0  
**Prepared for:** Sasi Video, Kalawana & Ratnapura  
**Status:** 🟡 IN PROGRESS  
**Last Updated:** 2026-07-06  
**Document Authority:** This file is the SINGLE SOURCE OF TRUTH for the entire build.  

---

## 🎨 BRAND IDENTITY ✅
- **Brand Name:** SASI VIDEO
- **Tagline:** Entertainment • Electronics • Mobile Accessories
- **Theme:** Modern • Premium • Minimal • Mobile-first
- **Colors:**
  - Primary: Sasi Red `#E50914`
  - Secondary: Graphite Black `#111111`
  - Accent: Silver `#C9CDD2`
  - Background: Light Grey `#F8F9FA`
  - Cards: White `#FFFFFF`
  - Text: Dark `#1A1A1A`
- **Typography:** Plus Jakarta Sans (English), Noto Sans Sinhala (Sinhala), Noto Sans Tamil (Tamil). Lucide Icons.
- **Logo:** Hero Logo (3D for Splash), Flat Brand Logo (Vector for header/UI)

## 🏢 BUSINESS DETAILS ✅
- **Kalawana Branch:** No. 27, Bus Stand, Kalawana, Sri Lanka. | 070 480 1560
- **Ratnapura Branch:** No. 45, Bus Stand, Ratnapura, Sri Lanka. | 076 417 7746
- **Hours:** Open Daily | 8:00 AM – 6:00 PM

## ⚙️ SYSTEM ARCHITECTURE & TECH STACK
- **Frontend:** Next.js (App Router), Progressive Web App (PWA) Enabled
- **Backend/API:** Node.js / Next.js API Routes
- **Database:** PostgreSQL
- **Image Storage:** Cloudflare R2 + Cloudflare CDN (No DB Image Storage)
- **Hosting:** Vercel (Frontend), Railway/Render (Backend/DB)

## ⭐ KEY SIGNATURE FEATURES (MUST IMPLEMENT)
1. **The "Digital Entrance":** 2-3 second cinematic door opening animation using CSS. Black screen ➔ matte doors ➔ red light ➔ open ➔ logo ➔ branch ➔ homepage.
2. **"Ask Before You Visit":** Pre-filled WhatsApp inquiry button (e.g., "Hello, I'd like to know if the 64GB Kingston USB is available at the Kalawana branch."). No e-commerce checkout.
3. **Live Preview CMS:** Split-screen CMS where edits immediately update the live preview on the right.
4. **Scheduled Publishing:** Ability to schedule products/announcements to go live at a specific date/time.
5. **Context Awareness:** The entire site (Hero, Contact, Products) dynamically updates based on the selected branch without reloading the page.

## 🗄️ DATABASE ARCHITECTURE (PHASE 9)
Tables to create:
`Users`, `Roles`, `Branches`, `Staff`, `Categories`, `Products`, `Product Images`, `Brands`, `Services`, `Gallery`, `Homepage`, `Announcements`, `Settings`, `Languages`, `Visitor Analytics`, `Messages`, `Activity Logs`, `SEO`.

---

## 🚀 THE 18 BUILD PHASES — EXECUTION TRACKER

> 🔴 = Not Started | 🟡 = In Progress | 🟢 = Complete | ⏸ = Blocked

### PHASE 1: Brand Identity 🟢
- [x] Finalize Name, Tagline, Theme, Colors, Typography, Logo styles.

### PHASE 2: Website Structure 🟢
- [x] Navigation hierarchy: Welcome ➔ Language ➔ Branch ➔ Home.
- [x] Sub-pages: Products, Services, Gallery, About Us, Our Team, Contact.

### PHASE 3: Product Categories 🟢
- [x] Defined: Movies & Music, Storage, Mobile Accessories, Electronics, Religious Frames, Toys.

### PHASE 4: Services 🟢
- [x] Defined: Mobile Phone Repair, Display Replacement, Tempered Glass Installation, Speaker & Microphone Check, Mobile Reload Services.

### PHASE 5: Branch Information 🟢
- [x] Set addresses, hours, phones, Google Maps placeholders.

### PHASE 6: Team & Story 🟢
- [x] Founder Story, Kalawana Team, Ratnapura Team placeholders.

### PHASE 7: Homepage Experience & Customer Journey 🔴
- [ ] Build Splash Screen (Door animation) ➔ Language Selection ➔ Branch Selection.
- [ ] Build Dynamic Hero (background changes per branch).
- [ ] Build large Search Bar with instant suggestions.
- [ ] Build Quick Actions (Call, WhatsApp, Directions, Services).
- [ ] Implement Smooth Scrolling.

### PHASE 8: Sasi Video CMS (Admin Dashboard) 🔴
- [ ] Build Dashboard UI (Welcome, Stats, Notifications).
- [ ] Implement **Live Preview Mode** (split-screen editing).
- [ ] Implement **Scheduled Publishing**.
- [ ] Build CRUD for Products, Categories, Services, Branches, Appearance.

### PHASE 9: Database Architecture 🔴
- [ ] Setup PostgreSQL schema (18 tables defined in plan).
- [ ] Integrate **Cloudflare R2** for image storage (do not store images in DB).

### PHASE 10: Features & Functionality 🔴
- [ ] Implement "Ask Before You Visit" WhatsApp integration.
- [ ] Build Smart Sticky Header.
- [ ] Build Quick Contact Bar (mobile sticky).
- [ ] Multi-language translation loading.

### PHASE 11: Animation & Micro Interactions 🔴
- [ ] Implement CSS-based signature Door Animation (2-3s).
- [ ] Implement page transitions, scroll animations, subtle button scales.

### PHASE 12: Responsive Design & Mobile Experience 🔴
- [ ] Setup Progressive Web App (PWA) & Add to Home Screen.
- [ ] Optimize Mobile-first layout & touch targets.

### PHASE 13: Performance Optimization 🔴
- [ ] Integrate Cloudflare CDN.
- [ ] Implement Image Optimization (WebP, Adaptive Quality).
- [ ] Implement Smart Prefetching & Lazy Loading.

### PHASE 14: SEO, Local Presence & Discoverability 🔴
- [ ] Setup Dynamic titles & meta descriptions.
- [ ] Setup Local SEO (schema.org) for Kalawana/Ratnapura.
- [ ] Generate XML sitemap.

### PHASE 15: Security, Reliability & Business Continuity 🔴
- [ ] Implement 2FA for Admin.
- [ ] Setup Activity Logs & Soft Delete.
- [ ] Configure Automatic Backups & Rate Limiting.

### PHASE 16: Deployment, Infrastructure & Operations 🔴
- [ ] Domain & SSL setup.
- [ ] Vercel/Railway production deployment.
- [ ] Configure environment variables securely.

### PHASE 17: Testing, QA & Launch Checklist 🔴
- [ ] Visual, Functional, and Mobile Testing.
- [ ] Language switching testing.
- [ ] Performance & Security audits (Lighthouse).

### PHASE 18: Master AI Blueprint & Release 🔴
- [ ] Final launch celebration.
- [ ] System Health Dashboard active.
- [ ] Project Handover.

---
*PLAN.md — Sasi Video Digital Transformation Project v2.0*  
*This document must be updated after every completed phase.*  
*Never restart from Phase 1. Always resume from the last incomplete phase.*

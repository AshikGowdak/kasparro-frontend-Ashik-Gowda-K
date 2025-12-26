# Kasparro – Frontend Engineering Assignment (V1)

Kasparro is an AI-native SEO & Brand Intelligence platform designed for the AI-first search era (ChatGPT, Gemini, Perplexity, etc.).

This repository contains a **fully mocked, production-quality frontend** that demonstrates how a complex, data-dense AI product can be communicated clearly through UI, architecture, and state modeling.

---

## 🚀 Live Demo
🔗 **Deployed on Vercel:**
https://kasparro-frontend-ashik-gowda-k-i6ol-dgvw0770x.vercel.app/

---

## 🧠 Product Surfaces Implemented

### 1️⃣ Public Website (Marketing + Product Narrative)
Routes:
- `/` — Home
- `/platform` — Product Overview
- `/about` — Mission & Product Philosophy

Purpose:
- Clearly explain Kasparro’s value proposition in under 10 seconds
- Bridge marketing → product understanding
- Communicate AI-SEO concepts clearly (not sales-heavy)

---

### 2️⃣ Product Dashboard (Mocked, Authenticated Shell)
Routes:
- `/app/dashboard` — Brand snapshot
- `/app/audit` — Core AI audit experience
- `/app/architecture` — System-level understanding

Purpose:
- Demonstrate system thinking
- Model structured AI audit data
- Present dense information with clarity

> **Note:** No authentication is implemented. The user is assumed to be logged in.

---

## 🧱 Tech Stack (Strictly Followed)

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (state management)
- **shadcn/ui** (lightly customized components)


All product content is driven via **typed, structured mock data**.

---

## 📁 Folder Structure
src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── platform/page.tsx
│ ├── about/page.tsx
│ └── app/
│ ├── layout.tsx
│ ├── dashboard/page.tsx
│ ├── audit/page.tsx
│ └── architecture/page.tsx
│
├── components/
│ ├── layout/ # Navbar, Footer, App Sidebar
│ ├── marketing/ # Hero, Pipeline, Module Overview
│ ├── dashboard/ # Audit UI, Snapshot Cards, Selectors
│ └── ui/ # shadcn/ui primitives
│
├── data/
│ ├── brands.json
│ └── audit-modules.json
│
├── store/
│ └── useAppStore.ts
│
├── types/
│ └── index.ts
│
└── lib/
└── utils.ts

🎯 UX Principles Applied

Clear information hierarchy
Readable typography for dense data
Subtle micro-interactions (hover states, transitions)
Focus on clarity over visual noise


This project demonstrates:

System-level frontend thinking.
Clean component boundaries.
Typed, structured data modeling.
Clear communication of a complex AI product.
Strong engineering discipline.

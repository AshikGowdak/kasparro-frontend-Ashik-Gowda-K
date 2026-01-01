# Kasparro  
### AI-Native Brand Intelligence Platform

An engineering-first frontend for visualizing brand visibility inside the latent space of Large Language Models (LLMs).

## 🚀 Live Demo
**Deployed on Vercel:**  
https://kasparro-frontend-ashik-gowda-k-i6ol-8dvquf7bq.vercel.app/

## 🧩 Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** Zustand
- **UI:** Shadcn/UI + Tailwind CSS
- **Architecture:** Feature-Sliced Design (FSD)
- **Data Modeling:** Strict TypeScript interfaces

## 🏗️ System Architecture & Design Decisions

Kasparro is designed with a strong emphasis on **engineering quality, scalability, and system thinking**.  
The project follows **Feature-Sliced Design (FSD)** to enforce clear boundaries and predictable data flow.

### Component Layering Strategy

- **UI Layer (`/components/ui`)**  
  Stateless, reusable design primitives focused on accessibility and visual consistency.

- **Feature Layer (`/components/features`)**  
  Logic-heavy components such as `AuditContent` and `ArchitectureDiagram` that connect UI with application state.

- **Layout Layer (`/components/layout`)**  
  Persistent structural components (Navbar, Footer) implemented using **Next.js App Router layouts**.

> **Design Goal:**  
> Maintain separation of concerns while keeping the UI scalable and easy to reason about.

## 🧠 State Management & Data Modeling

- **Zustand (Global State)**  
  Handles brand selection and neural module switching using a simple, one-way data flow.

- **Strict Type Safety**  
  All audit data is defined in `src/types/audit.ts`.  
  Recommendations are modeled as structured objects with **impact levels**, not flat strings.

- **Single Source of Truth (SSOT)**  
  The UI is a direct reflection of `audit-data.json`, ensuring consistency across the system.

## 🧠 Technical Implementation Highlights

This platform intentionally explains the **"Physics of Inference"** used by modern AI systems:

- **Inference Visualization**  
  Terminal-style UI showing how LLMs traverse high-dimensional latent space.

- **Vector Metric Comparison**  
  Clear contrast between traditional **Inverted Index search (Google)** and **Neural Latent Space retrieval (LLMs)**.

- **RAG Pipeline Alignment**  
  Structured data designed to integrate cleanly with **Retrieval-Augmented Generation** workflows.

---

## 📁 Folder Structure (Next.js App Router)

```plaintext
src/
├── app/
│   ├── layout.tsx            # Root layout (Navbar, Footer)
│   ├── page.tsx              # Technical landing page
│   ├── about/                # Philosophy & mission
│   ├── platform/             # Architecture deep-dive
│   └── audit/                # Core AI-SEO audit experience
│
├── components/
│   ├── layout/               # Persistent layout components
│   ├── features/             # Feature-level business logic
│   ├── marketing/            # Marketing & narrative sections
│   ├── shared/               # Shared non-UI utilities
│   └── ui/                   # Reusable UI primitives
│
├── store/
│   └── useAuditStore.ts      # Zustand global store
│
├── types/
│   └── audit.ts              # TypeScript data contracts
│
└── data/
    └── audit-data.json       # Centralized audit data
```
🎯 UX Principles Applied
Data Density Management
Clear typography, spacing, and summaries to make complex neural data readable.

Founder–Engineer Tone
Uses precise technical terms such as cosine similarity, stochastic sampling, and log probability.

Predictable Flow
Actionable optimizations are highlighted using color-coded impact levels.

🧪 Engineering Focus
This project prioritizes:

Deterministic state flow

Type safety

Scalable frontend architecture

Clear separation of concerns

Production-ready code quality

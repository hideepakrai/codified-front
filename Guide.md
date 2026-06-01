# Business Site CMS Architecture (Strict Specification v2.6 — Cinematic Edition)

This document is the **single source of truth** for building high-fidelity, multilingual business websites (pages, projects, case studies, forms) using our modular CMS pattern. This architecture ensures that any website can be dynamically constructed from JSON while maintaining a premium, cinematic design and robust dynamic routing.

---


## 1. Technology Stack

- **Frontend Framework**: Next.js (Latest Version, App Router)
- **Routing**: Dynamic `[locale]` segments for URL-based language switching (e.g., `/en`, `/hi`).
- **Styling**: Tailwind CSS + Vanilla CSS Tokens (Cinematic Aesthetics)
- **Animation**: Framer Motion (for all entry and interactive animations)
- **State Management**: Redux Toolkit (for cinematic state and UI synchronization)
- **Data Persistence**: MongoDB (via FastAPI backend) or localized JSON configuration.
- **CMS Logic**: Dynamic, configuration-driven rendering based on prompt-ready schemas.

---

## 2. Core Pattern: `{ type, value }`

Every editable prop in a component is wrapped in a self-describing object.

```json
"title": {
  "type": "text",
  "value": { "en": "Modern Solutions", "hi": "आधुनिक समाधान" }
}
```

- `type` declares **which input renderer** the CMS uses.
- `value` holds the actual content. Localized fields use the `{ "en": "...", "hi": "..." }` shape; non-localized fields (image URL, link, icon name, boolean, number, select option) use a raw scalar.

---

## 3. Multilingual Routing Protocol

1.  **Dynamic Segment**: All routes must be wrapped in a `[locale]` dynamic segment in the `src/app` directory.
2.  **Root Redirect**: The root `page.tsx` at `src/app/page.tsx` must redirect to the default locale (e.g., `/en`).
3.  **Prop Resolution**: Components must use a `t(field, locale)` utility (or `<LocalizedText />`) to serve the correct localized string.
4.  **Language Switcher**: The `Navigation` must include a switcher that updates the URL locale segment.

---

## 4. Mandatory Folder Structure

To maintain clarity and scalability, follow this structure strictly:

```
src/
├── app/                         # App Router Root (The "Data" Layer)
│   └── [locale]/                # Dynamic locale segment (e.g., /en, /hi)
│       ├── layout.tsx           # Primary root layout (html/body tags)
│       ├── page.tsx             # Home Route - Proxies to src/logic/home/page.tsx
│       └── [...slug]/           # Catch-all for dynamic pages
│
├── middleware.ts                # Handles root redirect to /en and locale routing
│
├── logic/                       # Page-specific entries (The "Logic" Layer)
│   └── <PageName>/              # e.g., "home", "about", "services"
│       ├── page.tsx             # Main page component & section mapper
│       └── sections/            # Sections specific to THIS page (Flat folder)
│           ├── HeroSection.tsx
│           ├── ProjectGridSection.tsx
│           └── ContactFormSection.tsx
│
├── components/                  # Global reusable UI
│   ├── blocks/                  # Reusable UI Blocks (Hero, Grid, Card)
│   ├── layout/                  # Shared Layout (Navigation, Footer)
│   ├── shared/                  # Small UI units (Buttons, Inputs, Badges)
│   └── cms/                     # CMS Core (PageRenderer, BlockRenderer)
│
├── lib/                         # Utilities & Logic
│   ├── store/                   # Redux Store & Slices
│   ├── i18n.ts                  # Localization Helpers (t, tHtml)
│   └── cms.ts                   # CMS Fetching Logic
│
├── data/                        # JSON content files (Mock data / Fallbacks)
└── styles/
    └── globals.css              # The ONLY source of truth for colors and typography
```

---

## 5. Styling & Design Tokens (Cinematic)

### 5.1 The "Global Only" Rule for Text & Color
Tailwind CSS is allowed **only for layout and spacing** (e.g., `flex`, `grid`, `p-8`, `gap-4`).

**STRICT RESTRICTION**: All colors and typography MUST use global CSS variables defined in `globals.css`.

### 5.2 Cinematic Tokens (Sample)
```css
:root {
  --bg-0: #04060d;
  --bg-1: #070b18;
  --panel: rgba(12, 18, 34, 0.55);
  --cyan: #1DC3F3;
  --magenta: #F300A6;
  --text: #e9eefb;
  --font-display: "Space Grotesk", sans-serif;
}
```

### 5.3 Typography Classes
- `.display-h1`: Large cinematic heading with letter-spacing.
- `.lede`: Subtitle/intro text with soft colors.
- `.grad-text`: Gradient text effect for high-impact titles.

---

## 6. Component Whitelist (Cinematic Blocks)

### `hero`
High-impact intro with WebGL background, large display text, and cinematic CTAs.
### `logo-strip`
Marquee of trusted partner logos with glassmorphism styling.
### `core-orbit`
Interactive AI/Core engine visualization with orbiting nodes.
### `service-grid`
Glowing glass cards representing business services or capabilities.
### `ai-workflow`
Step-by-step pipeline visualization with animated connecting lines.
### `command-center`
Dashboard-style KPI grid with real-time counters and glowing borders.

---

## 7. Implementation Workflow

1.  **Route Definition**: Create the route in `src/app/[locale]/...`.
2.  **Page Mapping**: Create the logic in `src/pages/<PageName>/page.tsx`.
3.  **Sectioning**: Break the page into `sections/` if it's complex.
4.  **Data Binding**: Use `t(field, locale)` to ensure multi-language support.
5.  **Cinematic Polish**: Apply Framer Motion and cinematic CSS classes for the "WOW" effect.

---

## 8. Example Page JSON (home-page.json)

```json
{
  "slug": "home",
  "title": { "en": "Codified | AI Solutions", "hi": "कोडिफाइड | एआई समाधान" },
  "content": [
    {
      "type": "hero",
      "props": {
        "title": { "type": "text", "value": { "en": "Architecting the Future", "hi": "भविष्य की वास्तुकला" } },
        "badge": { "type": "text", "value": { "en": "Next-Gen AI", "hi": "अगली पीढ़ी का एआई" } }
      }
    }
  ]
}
```

---

## 9. Versioning
Version 2.6 — May 2026 (Cinematic Structure)

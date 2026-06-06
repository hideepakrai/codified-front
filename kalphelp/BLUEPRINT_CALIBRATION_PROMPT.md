# Blueprint Calibration Prompt — KALP CMS Platform
**Version**: 1.0 | Reusable for any tenant on the Kalp CMS

---

## HOW TO USE THIS PROMPT

Fill in the `VARIABLE CONFIGURATION` block below, then paste the entire prompt into your AI assistant. The AI will generate a fully Blueprint-calibrated Next.js 15 CMS website that:
- Reads all content from per-page JSON files
- Applies theme tokens dynamically from the Blueprint API
- Follows the established Redux + EditableText architecture
- Is ready to drop into `codified-front` or any Kalp CMS tenant project

---

## VARIABLE CONFIGURATION (INPUT JIG)

```yaml
# ── TENANT IDENTITY ─────────────────────────────────────────────
COMPANY_NAME:         "{COMPANY_NAME}"          # e.g. "Luxora Hotels"
PROJECT_SLUG:         "{PROJECT_SLUG}"           # e.g. "luxora-hotels"
TENANT_DB_HEADER:     "{TENANT_DB_HEADER}"       # e.g. "kp_luxora_hotels"
BUSINESS_TYPE:        "{BUSINESS_TYPE}"          # e.g. "Hotel & Hospitality"
VERTICAL:             "{VERTICAL}"               # e.g. "hotel", "cms", "ecommerce"
INDUSTRY:             "{INDUSTRY}"               # e.g. "Hospitality"
BUSINESS_GOAL:        "{BUSINESS_GOAL}"          # e.g. "Build Trust", "Drive Bookings"

# ── CONTACT INFORMATION ──────────────────────────────────────────
COMPANY_ADDRESS:      "{COMPANY_ADDRESS}"
COMPANY_PHONE:        "{COMPANY_PHONE}"
COMPANY_EMAIL:        "{COMPANY_EMAIL}"
COMPANY_WHATSAPP:     "{COMPANY_WHATSAPP}"
COMPANY_WEBSITE:      "{COMPANY_WEBSITE}"

# ── LOCALIZATION ─────────────────────────────────────────────────
ACTIVE_LANGUAGES:     ["en"]                     # Extend later: ["en", "hi"]
DEFAULT_LANGUAGE:     "en"
# NOTE: All JSON text fields use { en, hi } structure.
#       Both fields contain IDENTICAL English text — no Hindi translation needed.

# ── BLUEPRINT API ────────────────────────────────────────────────
BLUEPRINT_API_URL:    "https://kalptree.xyz/api/platform/business-blueprint"
# The Blueprint will be fetched at runtime via BlueprintProvider — no hardcoding colors.

# ── PAGES TO GENERATE ────────────────────────────────────────────
PAGES:
  - home
  - about
  - contact
  # Add more: services, faq, blog, portfolio, team, careers
```

---

## SYSTEM PROMPT FOR AI

```
Act as an Elite Full-Stack Next.js 15 Architect, CMS Specialist, and Design System Expert.

Generate a complete, production-ready CMS website for {COMPANY_NAME} ({BUSINESS_TYPE}).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITICAL NON-NEGOTIABLE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. NO `.data.ts` files — EVER. All page content lives in per-page JSON files only.
2. EACH PAGE HAS ITS OWN JSON — src/lib/pages/{slug}Page.json (e.g. homePage.json)
3. ALL PAGES RENDER FROM JSON via Redux pagesSlice (no hardcoded content in components)
4. NO CMS DATABASE COLLECTION — page content is NOT in MongoDB; only in local JSON
5. LOCALE ROUTES — use [locale] folder: /en/*, /hi/*
6. ALL TEXT → EditableText — every user-facing string MUST use the EditableText component
7. PAGES ARE CLIENT COMPONENTS — 'use client' required for any page using EditableText
8. BLUEPRINT THEME — colors, typography, spacing come from the Blueprint API at runtime.
   NEVER hardcode colors. Use CSS custom properties (var(--primary), var(--background)) only.
9. NO DARK MODE — light mode only (or dark mode only if Blueprint public_theme specifies dark)
10. NO PLACEHOLDER COMMENTS — all code must be complete and production-ready

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLUEPRINT INTEGRATION (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The project uses a runtime Blueprint calibration system. The following files are
ALREADY PRESENT in the project — do NOT recreate them:

• src/redux/slices/blueprint/blueprintType.ts   — All TypeScript types
• src/redux/slices/blueprint/blueprintThunk.ts  — Fetch & CRUD thunks
• src/redux/slices/blueprint/blueprintSlice.ts  — Slice + selectors
• src/lib/applyTheme.ts                         — CSS variable injector
• src/components/providers/BlueprintProvider.tsx — Fetches & applies theme

BlueprintProvider is already wrapped in the root layout at:
  src/app/[locale]/layout.tsx

This means ALL CSS custom properties (--primary, --background, --card, etc.)
are dynamically injected from the API at runtime. Your components MUST use
CSS variables exclusively for colors, typography, and spacing.

Available CSS variables (injected from Blueprint):
  Colors: --primary, --primary-light, --primary-dark, --primary-hover,
          --secondary, --accent, --background, --surface, --card,
          --text, --text-secondary, --text-muted,
          --border, --border-hover, --success, --warning, --danger, --info

  Typography: --font-body, --font-heading, --font-mono,
              --text-xs through --text-5xl, --fw-light through --fw-extrabold,
              --leading-tight, --leading-normal, --leading-relaxed

  Spacing: --space-1 through --space-24
  Radius: --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-2xl, --radius-full
  Shadows: --shadow-sm, --shadow-md, --shadow-lg, --shadow-hover
  Layout: --container, --navbar-height, --section-padding
  Buttons: --btn-height, --btn-padding-x, --btn-radius
  Forms: --input-height, --input-padding-x, --input-padding-y, --input-radius,
         --input-bg, --input-text, --input-border, --input-placeholder,
         --input-focus-border, --input-focus-shadow
  Modal: --modal-sm, --modal-md, --modal-lg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOCALIZED STRING TYPE (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ALL text content in JSON files MUST use this structure:
  { "en": "English text", "hi": "English text" }
Both en AND hi fields contain the SAME English text. Do NOT translate to Hindi.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REDUX PAGES ARCHITECTURE (EXISTING — DO NOT RECREATE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following Redux infrastructure ALREADY EXISTS:
  • src/redux/slices/pages/pageType.ts     — Page, PageBlock, ContentItem types
  • src/redux/slices/pages/pagesSlice.ts  — Slice with updateContentField, setEditMode
  • src/redux/slices/pages/pageThunk.ts   — fetchFastApiPagesThunk, updatePageThunk
  • src/redux/hooks.ts                    — useAppDispatch, useAppSelector
  • src/redux/store.ts                    — Configured store with all reducers

The UpdateCurrentPage component reads pathname → extracts slug → sets currentPages in Redux.
Each page component reads from: state.pages.currentPages

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGE COMPONENT PATTERN (MANDATORY — USE EXACTLY THIS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every page view (src/views/{slug}/page.tsx) MUST follow this pattern:

```tsx
'use client';
import { useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { updateContentField } from '@/redux/slices/pages/pagesSlice';
import EditableText from '@/components/shared/EditableText';

export default function {PageName}Page({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  // Find section by adminTitle
  const heroSection = useMemo(() =>
    currentPages?.content?.find((s: any) => s?.adminTitle === 'Hero'), [currentPages]);

  // Resolve localized text
  const t = (val: any, fallback = '') =>
    typeof val === 'string' ? val : val?.[locale] || val?.en || fallback;

  // Save handler
  const handle = (sectionId: string, path: string) => (value: string) =>
    dispatch(updateContentField({ sectionId, fieldPath: path, value }));

  const p = heroSection?.props || {};

  return (
    <section>
      <EditableText
        value={t(p.heading)}
        isEditable={isEditable}
        onSave={handle(heroSection?.id || '', 'props.heading.en')}
        tag="h1"
        className="..."
        dangerouslySetInnerHTML
      />
    </section>
  );
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON FILE STRUCTURE (CONTRACT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Location: src/lib/pages/{slug}Page.json

Required structure:
{
  "title": { "en": "Page Title", "hi": "Page Title" },
  "slug": "{slug}",
  "isPublished": true,
  "metaTitle": { "en": "SEO Title | {COMPANY_NAME}", "hi": "SEO Title | {COMPANY_NAME}" },
  "metaDescription": { "en": "SEO description.", "hi": "SEO description." },
  "content": [
    {
      "id": "unique-kebab-id",
      "type": "section",
      "layout": "full | split | grid | timeline | faq | marquee | cards",
      "adminTitle": "Human Readable Section Name",
      "props": {
        "heading": { "en": "...", "hi": "..." },
        "description": { "en": "...", "hi": "..." }
      },
      "content": [
        {
          "id": "item-id",
          "type": "item",
          "props": {
            "title": { "en": "...", "hi": "..." },
            "description": { "en": "...", "hi": "..." }
          }
        }
      ]
    }
  ]
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APP ROUTE STRUCTURE (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

src/app/[locale]/
  ├── layout.tsx              ← ALREADY EXISTS with BlueprintProvider
  ├── page.tsx                ← imports from @/views/home/page
  ├── about/page.tsx          ← imports from @/views/about/page
  ├── contact/page.tsx        ← imports from @/views/contact/page
  └── {page}/page.tsx         ← same pattern for each page

src/views/{slug}/
  ├── page.tsx                ← Client component, reads from Redux
  └── sections/
      ├── HeroSection.tsx     ← imports from @/components/blocks/...
      ├── {Section}.tsx       ← uses currentPages from Redux
      └── ...

src/lib/pages/
  ├── homePage.json
  ├── aboutPage.json
  ├── contactPage.json
  └── {slug}Page.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERATE THESE TARGETS FOR {COMPANY_NAME}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For each page listed in PAGES above, generate:

1. src/lib/pages/{slug}Page.json
   - All sections appropriate for {BUSINESS_TYPE} and {BUSINESS_GOAL}
   - Realistic, brand-appropriate content for {COMPANY_NAME}
   - All text in { en, hi } localized object format
   - Contact info: {COMPANY_EMAIL}, {COMPANY_PHONE}, {COMPANY_ADDRESS}

2. src/views/{slug}/page.tsx
   - 'use client' directive
   - Reads currentPages from Redux
   - isEditable from Redux
   - Each section rendered as <SectionName /> component
   - NO hardcoded content

3. src/views/{slug}/sections/{SectionName}.tsx (one per section)
   - Reads from: currentPages?.content?.find(s => s.adminTitle === '{Section Name}')
   - ALL text via EditableText with onSave dispatching updateContentField
   - CSS: ONLY CSS custom properties (var(--primary) etc.) — no hardcoded colors
   - Responsive: mobile-first, use grid/flex
   - Full fallback values if section data is null/missing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY GATES (CHECK BEFORE FINISHING)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ No hardcoded hex colors anywhere in components
□ No hardcoded text — everything uses EditableText
□ Every page JSON has correct adminTitle values matching section components
□ No .data.ts files created
□ No new Blueprint/theme Redux files (they exist already)
□ All section components have both: Redux data path AND fallback values
□ All pages are 'use client' components
□ Contact info uses {COMPANY_EMAIL}, {COMPANY_PHONE}, {COMPANY_ADDRESS}
□ JSON files saved to src/lib/pages/ NOT src/lib/data/pages/
   (check actual project path — this project uses src/lib/pages/)
```

---

## BLUEPRINT SYSTEM — IMPLEMENTATION REFERENCE

### Architecture Overview

```
fetchBlueprintThunk (GET /api/platform/business-blueprint)
        │
        ▼  (via Next.js catch-all proxy at app/api/[[...slug]]/route.ts)
FastAPI Backend ──→ BlueprintApiResponse
        │
        ▼
blueprintThunk.ts — returns json.data (the API wrapper)
        │
        ▼
blueprintSlice.ts — fulfilled handler stores action.payload.payload into state.blueprint.payload
        │
        ▼
BlueprintProvider.tsx — reads selectActiveTheme, calls applyTheme()
        │
        ▼
applyTheme.ts — injects CSS custom properties onto document.documentElement
        │
        ▼
Components use var(--primary), var(--background), etc. in CSS/className
```

### File-by-File Breakdown

#### 1. `blueprintType.ts`
**Path:** `src/redux/slices/blueprint/blueprintType.ts`

Defines ALL TypeScript interfaces mirroring the backend API shape:
- `ThemeColors`, `ThemeTypography`, `ThemeSpacing`, `ThemeRadius`, `ThemeShadow`, `ThemeLayout`, `ThemeButtons`, `ThemeForms`, `ThemeModal`, `ThemeDarkMode` — sub-types
- `Theme` — composite of all theme sub-types
- `NavItem`, `RouteDefinition` — navigation & routing
- `BrandValue`, `BrandTaglines`, `SocialLink` — brand data
- `BusinessProfile`, `BusinessInfo`, `BusinessCommunications`, `BusinessContactInfo`, `BusinessLegalRegulatory` — business info
- `Commerce`, `Localization`, `MediaConfiguration`, `DashboardWidget`, `Vocabulary`, `Template`, `ToneTag`, `PrimaryGoal` — config types
- `BlueprintPayload` — the full payload object stored in Redux
- `BlueprintApiResponse` — the API response wrapper `{ message, success, data: { id, document_key, payload: BlueprintPayload } }`
- `BlueprintState` — Redux slice state shape `{ payload, activeThemeContext, loading, updating, error, lastFetched }`
- `ThemeContext` — `'public' | 'admin'`

#### 2. `blueprintThunk.ts`
**Path:** `src/redux/slices/blueprint/blueprintThunk.ts`

Six async thunks using `createAsyncThunk`:

| Thunk | Method | URL | Purpose |
|-------|--------|-----|---------|
| `fetchBlueprintThunk` | GET | `/api/platform/business-blueprint` | Fetch full blueprint payload |
| `updateBlueprintThunk` | PUT | `/api/platform/business-blueprint` | Full replace of payload |
| `updateThemeThunk` | PUT | `/api/platform/business-blueprint` | Merge theme (reads state via `getState()`) |
| `updateBrandValueThunk` | PUT | `/api/platform/business-blueprint` | Merge brand value |
| `updateBusinessProfileThunk` | PUT | `/api/platform/business-blueprint` | Merge business profile |
| `updateNavigationThunk` | PUT | `/api/platform/business-blueprint` | Merge navigation |

**Key details:**
- Endpoint is a **relative URL** (`/api/platform/business-blueprint`) — routes through the Next.js catch-all proxy at `app/api/[[...slug]]/route.ts` for server-side forwarding
- Passes `x-tenant-db` header (from `NEXT_PUBLIC_TENANT_DB` env var) for multi-tenant routing
- Update thunks use `getState()` to read current Redux state, merge with partial updates, then PUT entire payload (PATCH-style via full replace)
- `API_BASE_URL` is defined but NOT used — all requests go through the relative URL / Next.js proxy

**Where it's called:**
- `fetchBlueprintThunk` — dispatched by `BlueprintProvider.tsx` on mount (stale-while-revalidate, 5-min threshold)
- Update thunks — dispatched from admin UI components when user edits theme/brand/profile/nav

#### 3. `blueprintSlice.ts`
**Path:** `src/redux/slices/blueprint/blueprintSlice.ts`

**Initial state:**
```typescript
{
  payload: null,            // BlueprintPayload | null
  activeThemeContext: 'public',  // 'public' | 'admin'
  loading: false,
  updating: false,
  error: null,
  lastFetched: null,        // ISO timestamp
}
```

**Reducers:**
- `setThemeContext(context)` — switch between `'public'` and `'admin'` theme
- `applyColorOverride({ context, colors })` — optimistic local color override (without API call)
- `clearBlueprintError()` — clear error state
- `resetBlueprint()` — reset to initial state

**Extra reducers** (handle thunk lifecycle):
- `fetchBlueprintThunk.fulfilled` → sets `state.payload = action.payload.payload` (note: double `.payload` — API wrapper → data → payload)
- `updateBlueprintThunk.fulfilled` → same as fetch
- Other update thunks merge their specific section into `state.payload`

**Selectors (20+):**
`selectBlueprint`, `selectThemeContext`, `selectPublicTheme`, `selectAdminTheme`, `selectActiveTheme`, `selectBrandValue`, `selectBusinessProfile`, `selectPublicNavigation`, `selectAdminNavigation`, `selectRoutes`, `selectEnabledModules`, `selectVocabulary`, `selectLocalization`, `selectCommerce`, `selectDashboardWidgets`, `selectTemplates`, `selectToneTags`, `selectMediaConfiguration`, `selectBlueprintLoading`, `selectBlueprintUpdating`, `selectBlueprintError`, `selectBlueprintLastFetched`.

**Critical selector:** `selectActiveTheme` — reads `activeThemeContext` and returns the corresponding `public_theme` or `admin_theme`. This is what `BlueprintProvider` uses to inject CSS variables.

#### 4. `BlueprintProvider.tsx`
**Path:** `src/components/providers/BlueprintProvider.tsx`

**What it does:**
1. On mount, checks if blueprint is stale (>5 min since `lastFetched`) and dispatches `fetchBlueprintThunk()` if so
2. Whenever `activeTheme` (from `selectActiveTheme`) or `themeContext` changes, calls `applyTheme(activeTheme, themeContext)` to inject CSS variables

**Where it's called:**
- `src/app/[locale]/layout.tsx` — wrapped around the entire page content:
  ```tsx
  <ReduxProvider>
    <BlueprintProvider context="public">
      <UpdateCurrentPage />
      {children}
    </BlueprintProvider>
  </ReduxProvider>
  ```
- The `context` prop defaults to `'public'`; pass `context="admin"` for admin dashboard layouts

#### 5. `applyTheme.ts`
**Path:** `src/lib/applyTheme.ts`

**What it does — CSS variable injection:**

Reads every section of the Blueprint `Theme` object and sets CSS custom properties on `document.documentElement` (`:root`):

| Theme Section | CSS Variables | Example |
|--------------|---------------|---------|
| `colors` | `--primary`, `--background`, `--text`, `--accent`, etc. (18 vars) | `--primary: #2563eb` |
| `typography.bodyFont` | `--font-body` | `--font-body: "Inter", system-ui, sans-serif` |
| `typography.headingFont` | `--font-heading` | `--font-heading: "Space Grotesk", "Inter", ...` |
| `typography.monoFont` | `--font-mono` | `--font-mono: "JetBrains Mono", ui-monospace, monospace` |
| `typography.text` | `--text-xs` through `--text-5xl` (10 sizes) | `--text-base: 1rem` |
| `typography.fw` | `--fw-light` through `--fw-extrabold` (6 weights) | `--fw-bold: 700` |
| `typography.lineHeight` | `--leading-tight`, `--leading-normal`, `--leading-relaxed` | `--leading-normal: 1.5` |
| `spacing` | `--space-1` through `--space-24` (12 values) | `--space-4: 1rem` |
| `radius` | `--radius-sm` through `--radius-full` (6 radii) | `--radius-md: 0.5rem` |
| `shadow` | `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-hover` | `--shadow-md: 0 4px 6px ...` |
| `layout` | `--container`, `--navbar-height`, `--section-padding` | `--container: 1280px` |
| `buttons` | `--btn-height`, `--btn-padding-x`, `--btn-radius`, etc. (10 vars) | `--btn-height: 2.75rem` |
| `forms` | `--input-height`, `--input-padding-x`, `--input-bg`, etc. (14 vars) | `--input-height: 2.5rem` |
| `modal` | `--modal-sm`, `--modal-md`, `--modal-lg` (3 vars) | `--modal-md: 640px` |
| `darkMode` | Injected into `.dark { ... }` block via `<style>` tag | Overrides for background, text, border, inputs |

**Additional features:**
- Dynamic Google Fonts injection — adds/updates a `<link>` tag for body, heading, and mono fonts
- SSR safety — checks `typeof document === 'undefined'` before running
- Dark mode — writes a `<style id="blueprint-dark-vars">` tag targeting `.dark` class

### CSS Variable Naming Convention

All blueprint CSS variables follow the `--{group}-{name}` pattern:
- Colors: `--primary`, `--text-secondary`, `--border-hover`, etc.
- Typography: `--font-body`, `--text-lg`, `--fw-bold`, `--leading-normal`
- Spacing: `--space-4`, `--space-8`, `--space-16` (matches Tailwind scale)
- Radius: `--radius-md`, `--radius-lg`, `--radius-full`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-hover`
- Layout: `--container`, `--navbar-height`, `--section-padding`
- Buttons: `--btn-height`, `--btn-padding-x`, `--btn-radius`, `--btn-primary-bg`
- Forms: `--input-height`, `--input-bg`, `--input-border`, `--input-focus-shadow`
- Modal: `--modal-sm`, `--modal-md`, `--modal-lg`

### Component Usage Example

```tsx
// Any component can use blueprint CSS variables:
<div className="bg-[var(--surface)] text-[var(--text)] p-[var(--space-4)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)]">
  <h2 className="font-[var(--font-heading)] text-[var(--text-xl)]">Hello</h2>
</div>
```

Or via Tailwind (configure `globals.css` with the CSS variables):
```css
/* globals.css */
@layer base {
  :root {
    /* Skeleton defaults — overridden at runtime by BlueprintProvider */
    --primary: #2563eb;
    --background: #ffffff;
    --text: #0f172a;
  }
}
```

### Data Flow Summary

```
Backend API ──► fetchBlueprintThunk ──► blueprintSlice (Redux)
                                              │
                                              ▼
                                     BlueprintProvider (reads selectActiveTheme)
                                              │
                                              ▼
                                     applyTheme(theme, context)
                                              │
                                              ▼
                              document.documentElement.style.setProperty(...)
                                              │
                                              ▼
                          All Components using var(--*) update reactively
```

---

## QUICK EXAMPLE: Filling in the JIG

```yaml
COMPANY_NAME:         "Luxora Hotels"
PROJECT_SLUG:         "luxora-hotels"
TENANT_DB_HEADER:     "kp_luxora_hotels"
BUSINESS_TYPE:        "Hotel & Hospitality"
VERTICAL:             "hotel"
INDUSTRY:             "Hospitality"
BUSINESS_GOAL:        "Drive Bookings"
COMPANY_ADDRESS:      "Palm Boulevard, Dubai, UAE"
COMPANY_PHONE:        "+971 4 123 4567"
COMPANY_EMAIL:        "reservations@luxora.com"
COMPANY_WHATSAPP:     "+971 50 123 4567"
PAGES:
  - home
  - about
  - contact
  - rooms
  - dining
```

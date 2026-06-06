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
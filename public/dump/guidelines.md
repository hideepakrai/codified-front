# Component Architecture Guidelines
 
This document outlines the **Do's and Don'ts** for creating page-based section components in our Next.js architecture. Following these guidelines ensures that components remain highly reusable, compatible with dynamic vertical data from the onboarding process, and aligned with our state management and internationalization patterns.
 
## 🏗️ 1. Structure & Data Separation
 
**DO:**
- **Separate UI from Data:** Always maintain the strict split between `[Section].tsx` (UI rendering) and `[Section].ts` (default data/schema).
- **Use Generic Models:** Rely on `models/section.model.ts` for typing your component props. Your components must accept a standardized data structure to remain vertical-agnostic.
- **Design for Dynamic Content:** Assume that *all* text, images, colors, and layout variants will be injected via data. The App will swap this data based on the vertical selected during onboarding.
 
**DON'T:**
- **Hardcode Content:** Never hardcode text strings, image URLs, or specific layout classes inside the `.tsx` file.
- **Create Monolithic Components:** Avoid building massive components. Break them down into smaller sub-components if a section becomes too complex.
 
## 🌍 2. Internationalization (i18n) & Locales
 
**DO:**
- **Respect Locale Routing:** Since the app uses `app/[locale]/`, ensure your components can handle RTL (right-to-left) layouts if required by the locale.
- **Format Dynamically:** Use locale-aware formatters for dates, times, and currencies (e.g., `Intl.NumberFormat`, `Intl.DateTimeFormat`) using the active locale.
 
**DON'T:**
- **Hardcode Formats:** Do not assume a specific date format (like `MM/DD/YYYY`) or currency symbol.
 
## 🔄 3. State Management (Redux & Local)
 
**DO:**
- **Use Typed Hooks:** Always use the custom typed hooks from `redux/hooks.ts` (e.g., `useAppSelector`, `useAppDispatch`) when accessing the global store.
- **Isolate Global State:** Use Redux for truly global state (auth, user details, current vertical, global layout settings).
- **Keep UI State Local:** Use standard React `useState` for purely local UI interactions (e.g., toggling a dropdown, active tab in a section) that don't need to be persisted globally.
 
**DON'T:**
- **Fetch Data in Components:** Avoid fetching API data directly inside a section component. Data should be fetched at the page level (Server Components) or via Redux Thunks (`*Thunk.ts`) and passed down.
- **Overcomplicate Redux:** Do not put local component states into Redux slices.
 
## 🎨 4. Styling & Theming
 
**DO:**
- **Use Global Theme Variables:** Rely on CSS variables defined in `styles/theme.css` and `styles/globals.css`. This ensures the UI can seamlessly re-theme itself when a different vertical is active.
- **Ensure Responsive Design:** Build mobile-first. Ensure all sections adapt gracefully to different screen sizes.
 
**DON'T:**
- **Use Ad-Hoc Colors/Fonts:** Avoid inline styles with hardcoded hex codes or font families. Always pull from the design system/theme variables.
 
## 🔌 5. Utilities & Network Requests
 
**DO:**
- **Use Shared Fetcher:** Always use `lib/fetcher.ts` for any client-side network requests to ensure consistent error handling, auth header injection, and base URL resolution.
- **Utilize Shared Utils:** Check `lib/utils.ts` for common formatting or data-manipulation functions before writing your own.
 
**DON'T:**
- **Use Raw Fetch/Axios:** Do not bypass the `fetcher.ts` wrapper.
    
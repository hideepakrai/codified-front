# Pages Data Architecture (`lib -> store -> pages`)

## Folder structure

```text
src/
  lib/
    store/
      index.ts                # Redux store setup
      hooks.ts                # Typed Redux hooks
      pages/
        pageType.ts           # TypeScript types for page JSON
        pageThunk.ts          # API thunks (fetch/create/update/delete pages)
        pagesSlice.ts         # Redux slice + state transitions
        homePage.json         # Local fallback page JSON
        aboutPage.json
        servicesPage.json
        technologiesPage.json
        industriesPage.json
        contactPage.json
```

## Data flow (how JSON moves)

1. Local JSON files are imported in `pagesSlice.ts` and used as initial fallback data.
2. `pagesSlice.ts` initializes:
   - `allPages` from local JSON array
   - `currentPages` as page with `slug === "home"`
3. `GetAllPage.tsx` dispatches `fetchFastApiPagesThunk()` to load pages from API.
4. `pageThunk.ts` gets API JSON and returns `data.data` (Fast API) or `data.pages` (main API).
5. `pagesSlice.ts` updates `allPages` with API result and re-selects `home` for `currentPages`.
6. Route/page components (home/about/services/...) set `currentPages` by slug or direct local JSON.
7. UI section components read `state.app.currentPages.content` and map blocks by `adminTitle`.

## Main state shape (`state.app`)

```ts
{
  allPages: Page[];
  currentPages: Page | null;
  isAllPageFetched: boolean;
  isError: boolean;
  isLoading: boolean;
}
```

## Core JSON contract (`Page`)

From `pageType.ts`:

- `title`: localized text object (`{ en?: string; hi?: string; ... }`)
- `slug`: unique page key (`home`, `about`, etc.)
- `content`: array of section blocks
- `metaTitle`, `metaDescription`, `isPublished`

Each section block normally uses:

- `adminTitle` (section identifier used by UI)
- `type`, `layout`, `props`, `content`

## Example lookup pattern in UI

Most components use this pattern:

```ts
const section = currentPages?.content?.find((s: any) => s?.adminTitle === 'Hero');
```

That means your JSON must keep stable `adminTitle` values for each section.

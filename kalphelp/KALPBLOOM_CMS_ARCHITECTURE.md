# KalpBloom CMS — Architecture & Schema

**Status:** FINAL DRAFT (v2)
**Replaces:** `COMPLETE_DOCS.md` (NestCraft v1)
**Companion file:** `kalpbloom_schema.v2.json`
**Reference site studied:** [gaurik.com](https://gaurik.com/) — a digital-services agency built on a CMS with Home, About, Services list, Service Detail, and Contact pages. The patterns observed there have been generalized so the same schema can power **any business website** (agency, SaaS, hotel, e‑commerce, real estate, manufacturing, professional services, etc.).

---

## 1. Concept in One Page

KalpBloom is the **page-composition layer** of the KalpTree multi‑tenant SaaS. Every public-facing page on a tenant site is **a JSON document** stored in MongoDB. Each document is an ordered list of **sections**; each section is an ordered list of **blocks**. Every editable value on a block is a **self-describing `{ type, value }` object**, which is what lets the CMS Admin render the right input control automatically (text field vs media picker vs reference picker, etc.) and what lets the Next.js frontend render the right React component with the right data.

The model is intentionally **content-shape agnostic**: a "Service" and a "Case Study" and a "Blog Post" are all just typed documents in their own collections. A Page can either be built section-by-section in the Admin, or be a **template** that auto-renders any item from a collection via dynamic routes.

```
Tenant ──► Settings ──► Menus ──► Pages ──► Sections ──► Blocks ──► Fields { type, value }
                                       ▲
                       Collections (Services, CaseStudies, Blog, Testimonials, FAQs, Team)
                                       │
                              referenced by reference-type fields
                                       │
                              auto-listed by collection-grid blocks
                                       │
                              auto-detail-rendered by page templates
```

---

## 2. Technology Stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend Framework | **Next.js** (App Router, 15+) | Server Components by default, RSC streaming for fast TTFB |
| Styling | **Tailwind CSS** | Plus a tokens layer in `globals.css` for brand theming per tenant |
| State / Forms | React Server Actions + minimal client islands | Forms use Server Actions; carousels/accordions are client components |
| Backend API | **FastAPI** | Exposes `/api/v1/pages/:slug`, `/api/v1/collections/:type`, `/api/v1/settings` |
| Data Persistence | **MongoDB** | One collection per content type; one collection for `pages` |
| Media | S3-compatible object store + image CDN (e.g. Cloudflare Images / Imgix) | URLs stored as strings; the CMS Admin's media library wraps S3 |
| Search | MongoDB Atlas Search (or Meilisearch) | Indexes Pages and Collection items |
| Cache & Revalidation | Next.js ISR + on-demand `revalidateTag` on CMS publish | Webhook from FastAPI → `/api/revalidate` |
| Auth (Admin) | NextAuth / Clerk against FastAPI | Tenants scoped by `tenantId` claim |
| i18n | Built-in: locale-keyed values in field objects; routes prefixed `/[locale]/...` | Default + fallback locale declared per tenant in Settings |

---

## 3. The `{ type, value }` Field Pattern — v2

Every editable field in a block's `props` is wrapped in a self-describing object. v2 generalizes v1 so that:

1. Localization is **multi-locale** (any number of ISO codes, not hard-coded `{en, hi}`).
2. **Reference fields** can point at other collection items (services, case-studies, etc.).
3. Fields carry optional **validation hints** (`required`, `min`, `max`, `pattern`, `placeholder`, `help`) used by the Admin to generate a correct input form.

### 3.1 Field shape

```jsonc
{
  "type": "<field-type>",          // see catalog below
  "value": <typed value>,           // shape depends on type
  "localized": true,                // optional, default true for text-like types
  "required": false,                // optional, default false
  "help": "Short hint shown in Admin UI",   // optional
  "validation": { /* type-specific, optional */ }
}
```

### 3.2 Field type catalog

| Type | `value` shape | Admin control | Notes |
|---|---|---|---|
| `text` | localized string map | single-line text input | `{ "en": "Hello", "hi": "नमस्ते" }` |
| `textarea` | localized string map | multi-line text area | long copy |
| `richtext` | localized HTML/Markdown map | rich-text editor (TipTap) | sanitized on render |
| `image` | URL string (or `{src, alt, focalX, focalY}` object) | media library picker | not localized |
| `media` | `{type: 'image'\|'video'\|'pdf', src, alt, ...}` | media library picker | unified asset |
| `link` | `{ href: string, target?: '_self'\|'_blank', rel?: string }` | link picker (internal/external) | href can be `/path` or `https://...` |
| `icon` | string identifier | icon picker | Lucide icon name, e.g. `"Truck"` |
| `boolean` | `true \| false` | toggle | |
| `number` | number | number input | optional `min`/`max`/`step` |
| `select` | string | dropdown | requires `options: [{label, value}]` in field def |
| `multiselect` | string[] | multi-checkbox / chips | |
| `list` | array of localized maps or objects | repeater | used for bullet lists, tags |
| `color` | hex/rgba string | color picker | for theming overrides |
| `date` | ISO 8601 string | date picker | |
| `reference` | id string OR id[] | collection picker | see §3.3 |
| `code` | string | code editor | for embeds, custom HTML |

### 3.3 Reference fields

A reference field points at items in another collection. The Next.js renderer hydrates the reference at build/request time so the block receives the full item, not just its id.

```jsonc
{
  "type": "reference",
  "collection": "services",         // services | case-studies | blog | testimonials | faqs | team
  "multiple": false,                 // true for one-to-many
  "value": "svc_uiux_design",
  "filter": { "status": "published" },  // optional CMS-applied filter
  "sort": { "order": 1 }             // optional CMS-applied sort
}
```

When `multiple: true`, the CMS may also offer **query mode** (no fixed `value`, instead a filter+sort+limit), so a "Recent Case Studies" grid auto-populates.

### 3.4 Localization

A localized value is `{ <localeCode>: <string> }`. The set of supported locales per tenant lives in **Settings**:

```jsonc
{
  "locales": ["en", "hi", "ar"],
  "defaultLocale": "en",
  "fallbackLocale": "en"
}
```

If a translation is missing for a locale, the renderer falls back to `defaultLocale`. Non-localized field types (`image`, `link`, `icon`, etc.) store a plain value and ignore locale.

---

## 4. Document Hierarchy

```
Settings           ── one per tenant; site identity, locales, theme tokens, integrations
Menu               ── one or more per tenant; named navigation trees
Page               ── many per tenant; ordered sections; canonical for slug routes
Section            ── inside Page; layout container
Block              ── inside Section; visual unit; props use {type, value}
Collection Item    ── many per tenant; Service / CaseStudy / BlogPost / etc.
Media Asset        ── reusable; referenced by URL or media id
```

### 4.1 Page document

```jsonc
{
  "_id": "page_home",
  "tenantId": "t_kalpbloom_demo",
  "slug": "home",
  "title": { "en": "Home", "hi": "होम" },
  "isPublished": true,
  "publishedAt": "2026-05-11T10:00:00Z",
  "metaTitle":       { "en": "KalpBloom | Modern Business CMS" },
  "metaDescription": { "en": "..." },
  "metaImage": "https://cdn.example.com/og/home.jpg",
  "template": null,                 // null = built page; or "service-detail" / "case-study-detail"
  "parentSlug": null,                // for nested pages
  "content": [ /* Sections */ ]
}
```

### 4.2 Section document (inline inside Page)

```jsonc
{
  "id": "sec_hero",
  "type": "section",
  "adminTitle": "Main Hero",         // label shown in Admin tree
  "layout": "fullwidth",             // fullwidth | contained | grid-2 | grid-3 | grid-4 | split | carousel | accordion | tabs
  "theme": "dark",                   // optional: light | dark | brand | inherit
  "spacing": "lg",                   // optional: none | sm | md | lg | xl
  "props": { /* section-level fields, e.g. autoplay, speed */ },
  "content": [ /* Blocks, OR */ ],
  "columns": [ [ /* Blocks col 1 */ ], [ /* Blocks col 2 */ ] ]   // when layout requires explicit columns
}
```

### 4.3 Block document (inline inside Section)

```jsonc
{
  "id": "blk_uniqueId",
  "type": "hero-slide",              // see Block Catalog §6
  "props": {
    "title": { "type": "text", "value": { "en": "Build Anything" } },
    "image": { "type": "image", "value": "https://..." }
  }
}
```

---

## 5. Section Layouts

| `layout` | Meaning | Typical uses |
|---|---|---|
| `fullwidth` | edge-to-edge; children stack | hero, banners, CTA, full-bleed media |
| `contained` | max-width container; children stack | text blocks, intros |
| `grid-2` / `grid-3` / `grid-4` | responsive CSS grid with N columns | feature grids, USP strips, case-study cards |
| `split` | two columns (image\|text) with configurable ratio | "Who we are", craft & quality, image + checklist |
| `carousel` | horizontally scrolling client component | hero slider, testimonial carousel, product slider |
| `accordion` | expandable items | FAQ section |
| `tabs` | tabbed content groups | comparison, multi-tab service details |
| `marquee` | continuous-scroll strip | logo strips, integrations |

A section optionally specifies `theme` (light/dark/brand), `spacing`, and `background` (color/image/video) as section-level fields under `props`.

---

## 6. Block / Component Catalog

Every block below is a React component in `apps/web/components/blocks/` and is registered in a single `blockRegistry` map. The CMS Admin reads the catalog metadata to generate the editing form automatically.

### 6.1 Hero family

**`hero`** — single hero panel
- `eyebrow` (text), `title` (text), `highlight` (text), `description` (textarea), `image` (image), `primaryCta` (link + text), `secondaryCta` (link + text), `alignment` (select: left/center/right)

**`hero-slide`** — one slide inside a `carousel` layout. Same fields as `hero` plus `product` / `price` overlays (optional).

**`hero-split`** — text on one side, media on the other.

**`hero-video`** — autoplaying muted background video with overlay copy.

### 6.2 Text & structure

**`heading`** — `text` (text), `level` (select: h1..h6), `align` (select), `eyebrow` (text, optional)
**`paragraph`** — `text` (textarea)
**`richtext`** — `body` (richtext)
**`divider`** — `style` (select: line/dots/space)
**`spacer`** — `size` (select)

### 6.3 Marketing modules

**`feature-card`** — `icon`, `title`, `description`, `link`
**`feature-grid`** — section-level layout `grid-2/3/4` of `feature-card` blocks; used for *Why Choose Us*, *Values*, *Capabilities*.
**`usp-item`** — `icon`, `title`, `description` — narrow horizontal strip (free delivery, secure checkout, 24×7 support).
**`stat-item`** — `value` (text or number), `suffix` (text), `label` (text); used in counters and KPI strips.
**`process-step`** — `number`, `title`, `description`; used inside a timeline/process section.
**`checklist-block`** — `items` (list of `{label, description}`); the gaurik "Our Approach" / "What We Do" pattern.
**`list-block`** — plain bullet list; `items` (list).

### 6.4 Service blocks

**`service-card`** — `icon`, `title`, `summary`, `link`, optional `image`. Either authored inline OR populated from a `reference` to a Service item.
**`service-grid`** — section block bound to the Services collection; props: `source` (reference, multiple, collection=`services`), `cardVariant` (select), `showCta` (boolean).
**`service-detail-hero`** — used by the Service Detail template; pulls fields from the Service item.

### 6.5 Case-study blocks

**`case-study-card`** — `image`, `client`, `title`, `summary`, `tags` (list), `link`. Either authored or referenced.
**`case-study-grid`** — section bound to the CaseStudies collection; props: `source`, `filterByTag`, `featuredOnly`, `pagination`.
**`project-hero`** — case-study hero with `client`, `industry`, `year`, `services` (multiselect), `coverImage`, `liveUrl`.
**`challenge-solution-result`** — three column or stacked: `challenge` (richtext), `solution` (richtext), `result` (richtext).
**`metrics-block`** — array of `stat-item` for project KPIs ("+120% organic traffic", "−40% bounce").
**`tech-stack-strip`** — `items` (list of `{name, logo}`) — the technologies used.
**`gallery-block`** — `images` (list of media); displays as masonry, grid, or carousel by `variant`.

### 6.6 Social proof

**`logo-strip`** — `items` (list of media), `title` (text, optional), `marquee` (boolean) — "Trusted by", "Integrations".
**`testimonial-item`** — `quote` (textarea), `authorName`, `authorRole`, `authorAvatar` (image), `rating` (number 1–5).
**`testimonial-carousel`** — section-level carousel binding to the Testimonials collection.

### 6.7 FAQ

**`faq-item`** — `question` (text), `answer` (textarea or richtext).
**`faq-accordion`** — section binding to FAQs collection (filterable by `tag`).

### 6.8 CTA & forms

**`cta-banner`** — `eyebrow`, `title`, `description`, `primaryCta`, `secondaryCta`, `background` (image or color).
**`newsletter-block`** — `title`, `description`, `placeholder`, `submitLabel`, `successMessage`.
**`form-block`** — generic form; `fields` (list of `{name, label, type, required}`), `submitLabel`, `successRedirect`, `webhookUrl`.

### 6.9 Contact

**`contact-info`** — `address`, `phone`, `email`, `hours`, `socialLinks` (list of `{platform, url}`).
**`map-block`** — `embedUrl` (text) OR `lat`+`lng`+`zoom`; `height` (number).

### 6.10 Team

**`team-card`** — `name`, `role`, `bio`, `photo`, `socialLinks`.
**`team-grid`** — bound to Team collection or inline.

### 6.11 Blog

**`blog-card`** — `title`, `excerpt`, `coverImage`, `author`, `publishedAt`, `link`. Usually referenced from BlogPost collection.
**`blog-grid`** — bound to BlogPost collection.

### 6.12 Media

**`image`** — `image`, `caption`, `link` (optional).
**`media-block`** — wrapper for image OR video; `media`, `aspectRatio` (select), `caption`.
**`video-block`** — `src` (link), `poster` (image), `controls` (boolean), `autoplay` (boolean), `loop` (boolean).
**`embed-block`** — `provider` (select: youtube/vimeo/spotify/twitter/custom), `url` or `code` (code).

### 6.13 Navigation utilities

**`breadcrumbs`** — auto-rendered from page hierarchy; no props or `homeLabel`.
**`category-item`** — `name`, `image`, `link` — used in "Shop by Room"/"Browse by Category" grids.

---

## 7. Collections

Collections are top-level Mongo collections. Each item has a `tenantId`, a `slug`, status fields, and a typed body. Listing pages and detail pages reference them.

### 7.1 Service

```jsonc
{
  "_id": "svc_uiux_design",
  "tenantId": "t_demo",
  "slug": "ui-ux-design",
  "status": "published",
  "order": 1,
  "title":       { "en": "UI/UX Design" },
  "summary":     { "en": "Engaging, user-centric designs that..." },
  "icon": "Palette",
  "coverImage": "https://cdn/.../ui.jpg",
  "tags": ["design", "ux"],
  "highlights": [                            // checklist shown on service detail
    { "en": "User Research & Strategy" },
    { "en": "Wireframing & Prototyping" }
  ],
  "approach": [                              // process steps
    { "title": {"en":"Discover"}, "description": {"en":"..."} }
  ],
  "whyUs": [                                 // feature cards on detail page
    { "icon":"BadgeCheck", "title":{"en":"Cross-Industry Expertise"}, "description":{"en":"..."} }
  ],
  "faqs": ["faq_uiux_1", "faq_uiux_2"],       // references to FAQ items
  "ctaTitle":   { "en": "Let's create something exceptional" },
  "ctaButton":  { "label": {"en":"Get Started"}, "href":"/contact" },
  "seo": { "metaTitle": {...}, "metaDescription": {...} }
}
```

### 7.2 CaseStudy

```jsonc
{
  "_id": "cs_acme_rebrand",
  "tenantId": "t_demo",
  "slug": "acme-rebrand",
  "status": "published",
  "featured": true,
  "client": "Acme Co.",
  "industry": "E-commerce",
  "year": 2026,
  "services": ["svc_uiux_design", "svc_web_development"],
  "title":       { "en": "Rebuilding Acme's storefront for scale" },
  "summary":     { "en": "..." },
  "coverImage": "https://cdn/.../acme-cover.jpg",
  "gallery": [ "https://cdn/.../1.jpg", "https://cdn/.../2.jpg" ],
  "challenge": { "en": "..." },
  "solution":  { "en": "..." },
  "result":    { "en": "..." },
  "metrics": [
    { "value": "120%", "label": {"en":"Increase in organic traffic"} },
    { "value": "-40%", "label": {"en":"Bounce rate reduction"} }
  ],
  "techStack": [ {"name":"Next.js","logo":"..."}, {"name":"FastAPI","logo":"..."} ],
  "testimonial": "tst_acme_emma",            // reference
  "liveUrl": "https://acme.example.com",
  "tags": ["rebrand", "ecommerce", "performance"],
  "seo": { "metaTitle": {...}, "metaDescription": {...} }
}
```

### 7.3 BlogPost, Testimonial, FAQ, TeamMember

Shapes follow the same pattern: `tenantId`, `slug` (where relevant), `status`, localized fields, tags, and a `seo` block.

---

## 8. Page Templates

A **template** is a special Page document whose `template` field names a template handler. The handler knows how to render any item from a collection by combining the item's data with a reusable section layout.

| Template id | Bound collection | Used by route |
|---|---|---|
| `service-detail` | `services` | `/services/[slug]` |
| `case-study-detail` | `case-studies` | `/case-studies/[slug]` |
| `blog-detail` | `blog-posts` | `/blog/[slug]` |
| `team-detail` | `team-members` | `/team/[slug]` |

A template Page's `content[]` may reference the bound item via `"$item"` placeholders in field values, which the renderer substitutes at request time:

```jsonc
{
  "id": "sec_hero",
  "type": "section",
  "layout": "fullwidth",
  "content": [
    {
      "id": "blk_hero",
      "type": "project-hero",
      "props": {
        "title":     { "type": "text",   "value": "$item.title" },
        "client":    { "type": "text",   "value": "$item.client" },
        "coverImage":{ "type": "image",  "value": "$item.coverImage" }
      }
    }
  ]
}
```

Editors who want bespoke detail pages can either (a) edit the template (affects all items), or (b) create a per-item Page override at `/case-studies/[slug]` slug.

---

## 9. Reference Pages

Generic IA distilled from gaurik.com — but every keyword below is generic and works for any business:

### 9.1 Home page sections (recommended order)

1. `hero` or `hero-slider` — primary message
2. `service-grid` (bound to `services`) — what you offer
3. `cta-banner` or intro text — value statement
4. `logo-strip` — trusted by / partners
5. `feature-grid` — why choose us (4–6 cards)
6. `logo-strip` (marquee variant) — integrations / tech
7. `service-grid` (detailed cards variant) — repeat with longer copy + checklists
8. `case-study-grid` (featuredOnly: true, limit: 3) — proof
9. `testimonial-carousel` — social proof
10. `faq-accordion` — common questions
11. `cta-banner` — final conversion
12. `newsletter-block` — capture intent

### 9.2 About page

`hero` → `split` (Who we are: image + paragraph) → `checklist-block` (What we do) → `feature-grid` (Vision & Values) → `cta-banner` → `faq-accordion`.

### 9.3 Services listing page

`hero` (short) → `service-grid` (full collection) → `cta-banner` → `faq-accordion`.

### 9.4 Service Detail page (template = `service-detail`)

`service-detail-hero` → `split` (Our Approach: media + checklist) → `checklist-block` (Our Services / Capabilities) → `feature-grid` (Why Choose Us) → `cta-banner` → `faq-accordion` (filtered by service tag).

### 9.5 Case Studies listing page

`hero` (short) → `case-study-grid` (paginated, filterable by tag/service/industry) → `cta-banner`.

### 9.6 Case Study Detail page (template = `case-study-detail`)

`project-hero` → `challenge-solution-result` → `metrics-block` → `gallery-block` → `tech-stack-strip` → `testimonial-item` (referenced) → `case-study-grid` (related, limit: 3) → `cta-banner`.

### 9.7 Contact page

`hero` (short) → `split` (form on one side, contact-info on the other) → `map-block` → `faq-accordion` (optional).

### 9.8 Blog listing and detail

Listing: `hero` (short) → `blog-grid` (paginated) → `newsletter-block`.
Detail: `breadcrumbs` → `heading` (title) → meta (`author`, `date`) → `richtext` (body) → `cta-banner` → `blog-grid` (related).

---

## 10. Next.js Architecture

### 10.1 App Router file layout

```
apps/web/
├── app/
│   ├── layout.tsx                       # root: html, providers, fonts
│   ├── [locale]/
│   │   ├── layout.tsx                   # locale-scoped: Header + Footer pulled from Settings
│   │   ├── page.tsx                     # resolves Page slug = "home"
│   │   ├── [...slug]/page.tsx           # catch-all for arbitrary Pages (e.g. /about, /privacy)
│   │   ├── services/
│   │   │   ├── page.tsx                 # listing  ─► Page slug = "services"
│   │   │   └── [slug]/page.tsx          # detail   ─► template "service-detail" + Service item
│   │   ├── case-studies/
│   │   │   ├── page.tsx                 # listing  ─► Page slug = "case-studies"
│   │   │   └── [slug]/page.tsx          # detail   ─► template "case-study-detail" + CaseStudy item
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/page.tsx             # resolves Page slug = "contact"
│   ├── api/
│   │   ├── revalidate/route.ts          # POST from CMS webhook → revalidateTag
│   │   ├── preview/route.ts             # enable draft mode
│   │   └── forms/[id]/route.ts          # form-block submission handler
│   └── not-found.tsx
├── components/
│   ├── layout/                          # Header, Footer, LocaleSwitcher
│   ├── blocks/                          # one folder per block type
│   │   ├── hero/Hero.tsx
│   │   ├── service-grid/ServiceGrid.tsx
│   │   ├── case-study-grid/CaseStudyGrid.tsx
│   │   └── ...
│   └── cms/
│       ├── BlockRenderer.tsx            # dispatcher
│       ├── SectionRenderer.tsx          # wraps a section's layout class
│       ├── PageRenderer.tsx             # iterates page.content
│       └── LocalizedText.tsx            # picks the active-locale value
├── lib/
│   ├── cms.ts                           # fetchPage, fetchCollection, fetchSettings
│   ├── registry.ts                      # blockRegistry: { [type]: ReactComponent }
│   ├── i18n.ts                          # locale resolution + fallback
│   ├── seo.ts                           # generateMetadata helpers
│   └── tags.ts                          # cache-tag conventions
└── content/                             # optional: tenant-specific overrides
```

### 10.2 Rendering pipeline

1. **Request** `/en/case-studies/acme-rebrand` arrives at Next.js.
2. **Route handler** resolves to `app/[locale]/case-studies/[slug]/page.tsx`.
3. **`generateStaticParams`** prebuilt the slug list at build (or first request); the route uses ISR.
4. The page component calls `lib/cms.ts` → `fetchTemplate('case-study-detail')` and `fetchCollectionItem('case-studies', slug)`, both with cache tags `page:case-study-detail` and `case-study:acme-rebrand`.
5. **Template substitution**: the template's content is walked; any field whose value is a `$item.xxx` token is replaced with the matching field from the case-study item, preserving the `{type, value}` wrapper.
6. **`<PageRenderer />`** iterates `page.content[]` and emits a `<SectionRenderer />` per section.
7. **`<SectionRenderer />`** picks a wrapper based on `section.layout` (e.g. `<div className="grid grid-cols-3">`), then iterates `section.content[]` (or `section.columns[][]`) and emits a `<BlockRenderer />` per block.
8. **`<BlockRenderer />`** looks up `blockRegistry[block.type]` and renders the React component, passing `props` along with the resolved locale.
9. Each block component uses **`<LocalizedText />`** (or a `t()` helper) to pick the active-locale value from a localized field map.
10. **Metadata** is produced by `generateMetadata` from `page.metaTitle/metaDescription/metaImage`.

### 10.3 Caching & revalidation

- All CMS reads use `fetch(..., { next: { tags: [...] } })` so they can be revalidated by tag.
- A CMS publish/unpublish event POSTs to `/api/revalidate` with the affected tag(s):
  - Page published → `page:<slug>`
  - Service item updated → `collection:services`, `case-study:<slug>` (if related)
  - Settings updated → `settings` (forces full re-render of layouts).
- For preview, `/api/preview` enables Next.js draft mode and reads from the `?draft=true` API which returns unpublished documents.

### 10.4 i18n

- Routes are prefixed with `[locale]`. Middleware redirects `/` → `/<defaultLocale>`.
- `LocalizedText` reads the current locale from React context and falls back to `defaultLocale` per Settings.
- `<link rel="alternate" hrefLang="...">` tags are emitted from `generateMetadata`.

### 10.5 Block registry pattern

```ts
// lib/registry.ts
import Hero from '@/components/blocks/hero/Hero';
import ServiceGrid from '@/components/blocks/service-grid/ServiceGrid';
// ...
export const blockRegistry = {
  'hero': Hero,
  'hero-slide': HeroSlide,
  'service-grid': ServiceGrid,
  'case-study-grid': CaseStudyGrid,
  // ...
} as const;
export type BlockType = keyof typeof blockRegistry;
```

```tsx
// components/cms/BlockRenderer.tsx
export function BlockRenderer({ block, locale }: Props) {
  const C = blockRegistry[block.type];
  if (!C) return <UnknownBlock type={block.type} />;
  return <C {...block.props} locale={locale} />;
}
```

### 10.6 Performance

- All hero images use `next/image` with `priority` on first viewport block.
- Carousels, accordions, tabs, and forms are isolated as **client islands** (`'use client'`); everything else stays server-rendered.
- Lists bound to collections (service-grid, case-study-grid, blog-grid) are **streamed** with `<Suspense>` so above-the-fold renders even if the listing is slow.
- The `media` field supports a `focalX/Y` so the renderer can crop dynamically without layout shift.

### 10.7 SEO

- Per-page `metaTitle`, `metaDescription`, `metaImage`, `canonicalUrl`.
- JSON-LD generated per page type: `Organization` (Settings), `Service` (Service item), `CaseStudy` → `CreativeWork`, `BlogPosting`, `BreadcrumbList`, `FAQPage`.
- `sitemap.xml` and `robots.txt` are dynamic routes that enumerate all published Pages + collection slugs.

---

## 11. CMS Admin UX (what the schema enables)

- **Dynamic form generation**: because each field is `{type, value}` plus optional metadata, the Admin renders inputs without per-block code. Adding a new block type only requires a registry entry + props metadata.
- **Section drag-reorder**: pages are an array, sections are reorderable by index.
- **Block drag-reorder** inside a section.
- **Localization toggle**: the editor switches active locale; only the active locale's value is shown for `text`/`textarea`/`richtext` fields.
- **Reference picker**: when a field's `type` is `reference`, the Admin opens a typeahead bound to the field's `collection`, with optional filter chips.
- **Media library**: `image` and `media` fields open the shared library; uploads are uploaded to S3 and saved with focal-point metadata.
- **Preview**: every page has a "Preview" link that opens the Next.js draft route in a new tab.
- **Version history**: each Page and Collection item keeps prior versions; "Restore" replaces the current document.

---

## 12. Migration from v1 (NestCraft → KalpBloom)

| v1 | v2 | Action |
|---|---|---|
| Hard-coded `{en, hi}` | Locale map keyed by ISO code | Wrap every `value` in a script that copies `{en, hi}` into the same map; expand to N locales as needed. |
| Inline `usp-item`, `product-item`, etc. | Same shape, plus optional reference fields | No data change required. |
| No page templates | `template` field on Page | New optional field; defaults to `null`. |
| No collections (everything inline) | Services, CaseStudies, Blog, etc. extracted | One-time migration: read existing inline items → upsert into the right collection → replace inline blocks with `reference` blocks. |
| No `tenantId` discipline | `tenantId` required on every doc | Backfill from current tenant. |
| Settings + Menus implicit | Separate documents | Backfill from layout components. |

---

## 13. Authoring Checklist for a New Tenant

1. Create **Settings** doc: locales, theme tokens, brand assets, integrations.
2. Create **Menu** docs: `primary`, `footer`.
3. Seed **Collections**: Services (3–6 items), CaseStudies (3–10 items), Testimonials (5–10), FAQs (10–20), TeamMembers (optional).
4. Create **Page Templates**: `service-detail`, `case-study-detail`, `blog-detail`.
5. Build **Pages**: Home, About, Services (listing), Case Studies (listing), Blog (listing), Contact, plus any legal/utility pages.
6. Set **SEO** per page; verify JSON-LD in production.
7. Configure **revalidation webhook** from FastAPI to Next.js.
8. Run **Lighthouse** + accessibility pass.

---

## Appendix A — Minimal field-shape cheat sheet

```jsonc
// Localized short text
{ "type": "text", "value": { "en": "Hello", "hi": "नमस्ते" } }

// Localized long text
{ "type": "textarea", "value": { "en": "Long copy...", "hi": "..." } }

// Media URL
{ "type": "image", "value": "https://cdn/.../hero.jpg" }

// Internal link
{ "type": "link", "value": { "href": "/services", "target": "_self" } }

// Icon (Lucide id)
{ "type": "icon", "value": "ShieldCheck" }

// Reference
{ "type": "reference", "collection": "services", "multiple": false, "value": "svc_uiux_design" }

// Collection query (no fixed value)
{ "type": "reference", "collection": "case-studies", "multiple": true,
  "filter": { "featured": true, "status": "published" },
  "sort": { "publishedAt": -1 },
  "limit": 3 }

// List of localized labels
{ "type": "list", "value": [
  { "en": "Solid Oak", "hi": "सॉलिड ओक" },
  { "en": "Handcrafted", "hi": "हस्तनिर्मित" }
]}
```

## Appendix B — Sample data

A runnable companion file `kalpbloom_schema.v2.json` accompanies this document. It contains a complete tenant snapshot: Settings, Menus, a Home page, a Services listing page, a `service-detail` template, a Case Studies listing page, a `case-study-detail` template, plus sample Service and CaseStudy collection items used by the templates above.

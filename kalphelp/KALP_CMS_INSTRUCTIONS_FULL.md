## INSTRUCTIONS FOR AI

Act as an **Elite Full-Stack Next.js 15 Architect**, **CMS Specialist**, and **Design System Expert**. Generate a complete, production-ready CMS website for corporate/portfolio/marketing/blog purposes.

**CRITICAL REQUIREMENT:** 
- **NO `.data.ts` files** - Do not create any `.data.ts` files anywhere in the project
- **SINGLE PAGE JSON** - Each page has its own JSON configuration file
- **ALL PAGES RENDER FROM JSON** - Every page (Home, About, Services, Contact, FAQ, Blog) renders its content from its dedicated JSON file
- **NO CMS DATABASE COLLECTION** - Page content is NOT stored in MongoDB, only in local JSON files
- **LOCALE SUPPORT** - Routes use [locale] folder structure: `/en/*`, `/hi/*` (hi routes exist but content is English for now)
- **EDITABLE TEXT** - All text content must be wrapped in `EditableText` component for inline editing capability

---

========================================
VARIABLE CONFIGURATION (INPUT JIG)
========================================

```yaml
# COMPANY IDENTITY
COMPANY_NAME: {YOUR COMPANY NAME}
PROJECT_SLUG: {PROJECT_SLUG}
BUSINESS_TYPE: {BUSINESS_TYPE}
VERTICAL: {VERTICAL}
INDUSTRY: {INDUSTRY}
BUSINESS_GOAL: {BUSINESS_GOAL}
CURRENT_TENANT DB HEADER: {DB_HEADER}

# LOCALIZATION PRIMITIVES
ACTIVE_LANGUAGES: [{LANGUAGES}]
DEFAULT_LANGUAGE: {DEFAULT_LANGUAGE}
ACTIVE_CURRENCIES: {CURRENCIES}
DEFAULT_CURRENCY: {DEFAULT_CURRENCY}
NOTE: Localized objects use { en, hi } structure with BOTH fields having English text (no Hindi translation needed)
NOTE: Routes use [locale] folder structure: /en/*, /hi/* (hi routes exist but content is English)
NOTE: hi field contains SAME English text as en field - no Hindi translation required

# CONTACT INFORMATION
COMPANY_ADDRESS: {COMPANY_ADDRESS}
COMPANY_PHONE: {COMPANY_PHONE}
COMPANY_EMAIL: {COMPANY_EMAIL}
COMPANY_WHATSAPP: {COMPANY_WHATSAPP}
========================================
DESIGN SYSTEM & INTERACTIVE GUIDELINES
========================================

THEME DESIGN TOKENS (LIGHT MODE ONLY):
THEME DESIGN TOKENS (LIGHT MODE ONLY):

These tokens are user-configurable placeholders — replace with your values:

--bs-bg: {BS_BG}

--bs-surface: {BS_SURFACE}

--bs-primary: {BS_PRIMARY}

--bs-primary-light: {BS_PRIMARY_LIGHT}

--bs-accent: {BS_ACCENT}

--bs-accent-hover: {BS_ACCENT_HOVER}

--bs-accent-soft: {BS_ACCENT_SOFT}

--bs-secondary: {BS_SECONDARY}

--bs-secondary-hover: {BS_SECONDARY_HOVER}

--bs-muted: {BS_MUTED}

--bs-subtle: {BS_SUBTLE}

--bs-border: {BS_BORDER}

--bs-success: {BS_SUCCESS}

--bs-error: {BS_ERROR}

--bs-warning: {BS_WARNING}

--bs-info: {BS_INFO}

--bs-overlay: {BS_OVERLAY}

--bs-radius-sm: {BS_RADIUS_SM}

--bs-radius-md: {BS_RADIUS_MD}

--bs-radius-lg: {BS_RADIUS_LG}

--bs-radius-xl: {BS_RADIUS_XL}

--bs-shadow-sm: {BS_SHADOW_SM}

--bs-shadow-md: {BS_SHADOW_MD}

--bs-shadow-lg: {BS_SHADOW_LG}

--bs-shadow-xl: {BS_SHADOW_XL}

TYPOGRAPHY & TEXT RULES:

--bs-font-heading: 'Outfit', sans-serif (Use for headers, modern/bold feel, weights: 400-700)

--bs-font-body: 'Inter', sans-serif (Use for body, clean/readable, weights: 300-600)

FONT LOADING: next/font only (Outfit + Inter)

TAILWIND CSS V4 @theme CONFIGURATION:
Ensure all custom tokens are registered under @theme inside globals.css:

css
@import "tailwindcss";
@theme {
  --color-bg: var(--bs-bg);
  --color-surface: var(--bs-surface);
  --color-primary: var(--bs-primary);
  --color-accent: var(--bs-accent);
  --color-accent-hover: var(--bs-accent-hover);
  --color-accent-soft: var(--bs-accent-soft);
  --color-secondary: var(--bs-secondary);
  --color-secondary-hover: var(--bs-secondary-hover);
  --color-muted: var(--bs-muted);
  --color-subtle: var(--bs-subtle);
  --color-border: var(--bs-border);
  --color-success: var(--bs-success);
  --color-error: var(--bs-error);
  --color-warning: var(--bs-warning);
  --color-info: var(--bs-info);
  --color-overlay: var(--bs-overlay);
  --radius-sm: var(--bs-radius-sm);
  --radius-md: var(--bs-radius-md);
  --radius-lg: var(--bs-radius-lg);
  --radius-xl: var(--bs-radius-xl);
  --font-heading: var(--bs-font-heading);
  --font-body: var(--bs-font-body);
  --shadow-sm: var(--bs-shadow-sm);
  --shadow-md: var(--bs-shadow-md);
  --shadow-lg: var(--bs-shadow-lg);
  --shadow-xl: var(--bs-shadow-xl);
}
INTERACTION & MOTION PATTERNS:

Micro-animations: Add ease-in-out transitions on all buttons, navigation links, and form inputs

Image Hover Effects: Zoom/scale transition on cards

Modal/Drawer: Slide-in animations with backdrop blurs

Focus States: Force clear focus rings using --bs-accent

Edit Mode: When isEditable is true, text fields become clickable and transform into input fields with style preservation

========================================
LOCALIZED STRING TYPE
========================================

All text content in JSON files MUST use the localized object structure:

typescript
type LocalizedString = {
  en: string;  // English
  hi: string;  // English text (same as en) - no Hindi translation needed
};
Example:

json
{
  "heading": {
    "en": "Welcome to YourCompany",
    "hi": "Welcome to YourCompany"
  }
}
NOTE: Both en and hi fields contain the SAME English text. The structure exists for future scalability but no Hindi translation is required now.

========================================
EDITABLE TEXT COMPONENT ARCHITECTURE
========================================

TARGET A: src/components/shared/EditableText.tsx
The EditableText component is a reusable React component designed to allow seamless inline editing of text on your website.

Key Features:
Toggleable Editing Mode: When isEditable is false, it behaves like a normal HTML element (e.g., <span>, <h1>, <p>). When isEditable is true, clicking the text transforms it into an <input> field or <textarea>.

Style Preservation: When switching to editing mode, the component extracts the computed CSS styles of the display element and applies them to the input element. This ensures that the text looks identical while editing as it does when simply viewing it.

Save Mechanisms: The editing mode ends, and the onSave callback is triggered when the user:

Clicks outside the input field (onBlur).

Presses the Enter key.

Cancel Mechanism: Pressing the Escape key reverts the text back to its original state without saving.

Multi-line Support: Supports textarea for multi-line text editing via the multiline prop.

Component Interface:
typescript
interface EditableTextProps {
  value: string;                    // Current text value
  onSave: (value: string) => void; // Callback when text is saved
  isEditable?: boolean;             // Whether editing is enabled (default: false)
  tag?: keyof JSX.IntrinsicElements; // HTML tag to use (default: 'span')
  className?: string;               // CSS classes
  placeholder?: string;             // Placeholder text when empty
  multiline?: boolean;              // Use textarea instead of input (default: false)
  rows?: number;                    // Number of rows for textarea
  dangerouslySetInnerHTML?: boolean; // Render HTML content (default: false)
}
Usage Example:
tsx
<EditableText
  value={heading.en}
  isEditable={isEditable}
  onSave={(newValue) => saveField('props.heading.en', newValue)}
  tag="h1"
  className="text-4xl font-bold"
  dangerouslySetInnerHTML
/>
========================================
JSON EDITING FLOW WITH REDUX
========================================

How JSON Data is Displayed on EditableText
The architecture of the page is deeply integrated with Redux and the JSON configuration files. Here is the step-by-step flow of how data from homePage.json reaches the screen and becomes editable:

Step A: Loading the JSON into State
The homePage.json data is loaded into the Redux store. In any component, this data is accessed using:

typescript
const currentPages = useAppSelector((state: RootState) => state.pages.currentPages);
const isEditable = useAppSelector((state: RootState) => state.pages.isEditablePage);
Step B: Finding the Specific Section Data
The JSON is structured as an array of sections. Components search for their specific data block by matching the adminTitle:

typescript
const section = useMemo(() => {
  if (!currentPages) return null;
  return currentPages.content?.find((s: any) => s?.adminTitle === 'Hero');
}, [currentPages]);
Step C: Rendering with EditableText
Once the component has its specific section data, it reads the properties (e.g., section.props.heading.en) and passes them into <EditableText> components.

Example rendering the Hero Heading:

tsx
<EditableText
  value={p.heading?.en || ""}
  isEditable={isEditable}
  onSave={handle('props.heading.en')}
  className="display reveal"
  tag="h1"
  dangerouslySetInnerHTML
/>
value: Pulls the initial text from the JSON structure

tag="h1": Tells the component to render the text inside an <h1> tag when not editing

onSave: If the user edits this text, the handle function determines exactly where in the JSON tree to save the new value (props.heading.en)

Step D: Saving Changes Back to State
When the user finishes typing and saves, the onSave handler fires the saveField utility:

typescript
const handle = (fieldPath: string) => (value: string) => 
  saveField(dispatch, currentPages, section.id, fieldPath, value);
This utility dispatches an action to Redux, updating the specific property path (fieldPath) within that specific section (section.id) with the new value. The UI then instantly re-renders to reflect the new state.

Summary Flow
JSON Data (homePage.json) -> Redux State.

Component reads its slice of the state.

Component renders <EditableText> passing the text and a path updater.

User clicks text -> turns into input -> user types -> user hits Enter.

<EditableText> fires onSave -> dispatches update to Redux State.

Component re-renders with the newly saved text.

========================================
REDUX PAGES SLICE (FOR EDITABLE CONTENT)
========================================

TARGET B: src/lib/store/pages/pageType.ts
typescript
// Localized string type
export type LocalizedString = {
  en: string;
  hi: string;
};

// Content item interface
export interface ContentItem {
  id: string;
  type: string;
  props: Record<string, any>;
}

// Page block interface
export interface PageBlock {
  id: string;
  type: string;
  layout: string;
  adminTitle: string;
  props?: Record<string, any>;
  content?: ContentItem[];
}

// Page interface
export interface Page {
  title: LocalizedString;
  slug: string;
  isPublished: boolean;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  content: PageBlock[];
}

// Pages state interface
export interface PagesState {
  allPages: Page[];
  currentPages: Page | null;
  isAllPageFetched: boolean;
  isError: boolean;
  isLoading: boolean;
  isEditablePage: boolean;  // Controls edit mode for all pages
}
TARGET C: src/lib/store/pages/pagesSlice.ts
typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PagesState, Page, PageBlock } from './pageType';
import homePageData from '@/lib/data/pages/homePage.json';
import aboutPageData from '@/lib/data/pages/aboutPage.json';
import servicesPageData from '@/lib/data/pages/servicesPage.json';
import contactPageData from '@/lib/data/pages/contactPage.json';
import faqPageData from '@/lib/data/pages/faqPage.json';
import blogPageData from '@/lib/data/pages/blogPage.json';
// ... import all other page JSON files

const initialState: PagesState = {
  allPages: [homePageData, aboutPageData, servicesPageData, contactPageData, faqPageData, blogPageData /* ... all pages */],
  currentPages: null,
  isAllPageFetched: false,
  isError: false,
  isLoading: false,
  isEditablePage: false,  // Default: not editable
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setCurrentPageBySlug: (state, action: PayloadAction<string>) => {
      const slug = action.payload;
      state.currentPages = state.allPages.find(page => page.slug === slug) || null;
    },
    setEditableMode: (state, action: PayloadAction<boolean>) => {
      state.isEditablePage = action.payload;
    },
    updatePageField: (state, action: PayloadAction<{
      sectionId: string;
      fieldPath: string;
      value: string;
      locale?: string;
    }>) => {
      const { sectionId, fieldPath, value, locale = 'en' } = action.payload;
      if (!state.currentPages) return;
      
      const section = state.currentPages.content.find(s => s.id === sectionId);
      if (!section) return;
      
      // Navigate the field path (e.g., "props.heading.en")
      const pathParts = fieldPath.split('.');
      let current: any = section;
      
      for (let i = 0; i < pathParts.length - 1; i++) {
        current = current[pathParts[i]];
        if (!current) return;
      }
      
      const lastKey = pathParts[pathParts.length - 1];
      if (lastKey === locale || (locale && pathParts.includes(locale))) {
        current[lastKey] = value;
      } else {
        current[lastKey] = value;
      }
      
      // Also update in allPages for persistence
      const pageIndex = state.allPages.findIndex(p => p.slug === state.currentPages?.slug);
      if (pageIndex !== -1) {
        const pageSection = state.allPages[pageIndex].content.find(s => s.id === sectionId);
        if (pageSection) {
          let target = pageSection;
          for (let i = 0; i < pathParts.length - 1; i++) {
            target = target[pathParts[i]];
            if (!target) return;
          }
          target[pathParts[pathParts.length - 1]] = value;
        }
      }
    },
    // ... other reducers
  },
});

export const { setCurrentPageBySlug, setEditableMode, updatePageField } = pagesSlice.actions;
export default pagesSlice.reducer;
TARGET D: src/lib/store/pages/saveField.ts
typescript
import { Dispatch } from '@reduxjs/toolkit';
import { updatePageField } from './pagesSlice';
import { Page, PageBlock } from './pageType';

export const saveField = (
  dispatch: Dispatch,
  currentPages: Page | null,
  sectionId: string,
  fieldPath: string,
  value: string,
  locale: string = 'en'
) => {
  if (!currentPages) return;
  
  dispatch(updatePageField({
    sectionId,
    fieldPath,
    value,
    locale,
  }));
  
  // Optionally: Save to API/backend for persistence
  // saveToAPI(currentPages.slug, sectionId, fieldPath, value, locale);
};
========================================
JSON FILE ARCHITECTURE (SINGLE PAGE JSON)
========================================

CRITICAL: Each page has its OWN JSON file - NO blueprint.json, NO .data.ts files

text
Folder Structure for JSON Files:

src/lib/data/pages/
├── homePage.json           # Homepage content
├── aboutPage.json          # About page content
├── servicesPage.json       # Services page content
├── contactPage.json        # Contact page content
├── faqPage.json            # FAQ page content
├── blogPage.json           # Blog listing page config
├── blogPostPage.json       # Blog post page template
├── portfolioPage.json      # Portfolio page config (if applicable)
├── teamPage.json           # Team page config (if applicable)
├── careersPage.json        # Careers page config (if applicable)
├── footerData.json         # Footer configuration (global)
└── headerData.json         # Header configuration (global)
========================================
JSON FILE STRUCTURE (CONTRACT)
========================================

All page JSON files follow this structure with LOCALIZED strings (English only for both fields):

json
{
  "pageType": "home | about | services | contact | faq | blog | portfolio | team | careers",
  "slug": "home",
  "isPublished": true,
  "seo": {
    "title": {
      "en": "YourCompany | Professional Digital Solutions",
      "hi": "YourCompany | Professional Digital Solutions"
    },
    "description": {
      "en": "YourCompany provides innovative digital solutions for modern businesses.",
      "hi": "YourCompany provides innovative digital solutions for modern businesses."
    },
    "keywords": {
      "en": ["digital solutions", "web development", "consulting"],
      "hi": ["digital solutions", "web development", "consulting"]
    },
    "ogImage": "/images/og-image.jpg"
  },
  "sections": [
    {
      "id": "unique-section-id",
      "type": "hero | features | grid | carousel | form | map | gallery | testimonials | cta | text | image | metrics | accordion",
      "adminTitle": "Hero Section",
      "props": {
        "heading": {
          "en": "Welcome to <span class=\"grad-text\">YourCompany</span>",
          "hi": "Welcome to <span class=\"grad-text\">YourCompany</span>"
        },
        "subheading": {
          "en": "Innovative solutions for modern businesses",
          "hi": "Innovative solutions for modern businesses"
        },
        "backgroundColor": "primary | secondary | accent | white | gray",
        "paddingTop": "4",
        "paddingBottom": "4",
        "alignment": "left | center | right"
      },
      "content": [
        {
          "id": "content-item-id",
          "type": "item",
          "props": {
            "title": {
              "en": "Item title",
              "hi": "Item title"
            },
            "description": {
              "en": "Item description",
              "hi": "Item description"
            },
            "image": "/path/to/image.jpg",
            "ctaText": {
              "en": "Button text",
              "hi": "Button text"
            },
            "ctaLink": "/button-link",
            "icon": "icon-name"
          }
        }
      ]
    }
  ]
}
========================================
PAGE LOOKUP PATTERN WITH EDITABLE TEXT (MANDATORY)
========================================

ALL page components MUST use this pattern to render content from JSON with EditableText support:

typescript
// For static pages (Home, About, Services, Contact, FAQ)
'use client'; // Required for Redux hooks and EditableText

import { useAppSelector } from '@/lib/store/hooks';
import { saveField } from '@/lib/store/pages/saveField';
import { useDispatch } from 'react-redux';
import EditableText from '@/components/shared/EditableText';
import homePageData from '@/lib/data/pages/homePage.json';
import { useEffect } from 'react';
import { setCurrentPageBySlug } from '@/lib/store/pages/pagesSlice';

interface PageProps {
  params: { locale: string };
}

export default function HomePage({ params }: PageProps) {
  const { locale } = params;
  const dispatch = useDispatch();
  
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);
  
  // Load page data on mount
  useEffect(() => {
    if (!currentPages || currentPages.slug !== 'home') {
      dispatch(setCurrentPageBySlug('home'));
    }
  }, [dispatch, currentPages]);
  
  // Helper to get localized text
  const getLocalized = (obj: any) => obj?.[locale] || obj?.en || '';
  
  // Find section by adminTitle
  const heroSection = (currentPages?.content || homePageData.sections).find(
    (section) => section.adminTitle === "Hero"
  );
  
  const featuresSection = (currentPages?.content || homePageData.sections).find(
    (section) => section.adminTitle === "Features"
  );
  
  // Handle save function for EditableText
  const handleSave = (sectionId: string, fieldPath: string) => (value: string) => {
    saveField(dispatch, currentPages, sectionId, fieldPath, value, locale);
  };
  
  // Use props and content with localization
  const heroProps = heroSection?.props || {};
  const heroHeading = getLocalized(heroProps.heading);
  const heroSubheading = getLocalized(heroProps.subheading);
  
  return (
    <main>
      {/* Hero Section with EditableText */}
      <section className="hero-section">
        <EditableText
          value={heroHeading}
          isEditable={isEditable}
          onSave={handleSave(heroSection?.id || '', 'props.heading.en')}
          tag="h1"
          className="text-5xl font-bold"
          dangerouslySetInnerHTML
        />
        <EditableText
          value={heroSubheading}
          isEditable={isEditable}
          onSave={handleSave(heroSection?.id || '', 'props.subheading.en')}
          tag="p"
          className="text-xl"
        />
        <EditableText
          value={getLocalized(heroProps.primaryButtonText)}
          isEditable={isEditable}
          onSave={handleSave(heroSection?.id || '', 'props.primaryButtonText.en')}
          tag="span"
          className="btn-primary"
        />
      </section>
    </main>
  );
}
========================================
ROUTE STRUCTURE WITH LOCALE
========================================

text
src/app/
├── [locale]/
│   ├── layout.tsx              # Locale-aware root layout
│   ├── page.tsx                # Homepage (/en, /hi) - Client component with EditableText
│   ├── about/
│   │   └── page.tsx            # About page (/en/about, /hi/about) - Client component
│   ├── services/
│   │   └── page.tsx            # Services page - Client component
│   ├── contact/
│   │   └── page.tsx            # Contact page - Client component
│   ├── faq/
│   │   └── page.tsx            # FAQ page - Client component
│   ├── blog/
│   │   ├── page.tsx            # Blog listing - Client component
│   │   └── [slug]/
│   │       └── page.tsx        # Blog post - Server component (no editable text)
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page - Client component
│   ├── team/
│   │   └── page.tsx            # Team page - Client component
│   └── careers/
│       └── page.tsx            # Careers page - Client component
└── admin/
    └── ...                     # Admin routes (no locale)
NOTE: Pages that use EditableText MUST be Client Components ('use client') because they use Redux hooks and DOM interactions.

========================================
GENERATION TARGETS (Full List)
========================================

STYLES & CONFIGURATION (Targets 1-3)
TARGET 1: src/styles/globals.css
Complete global stylesheet with CMS color scheme (navy/orange/slate), Outfit + Inter fonts, Tailwind v4 @theme configuration, focus styles, skip-to-content link, reduced motion support, and .grad-text class with orange gradient.

TARGET 2: src/middleware.ts
Middleware for locale handling. Supports /en/* and /hi/* routes. Redirects root to /en. No authentication redirect for public pages.

TARGET 3: src/lib/db/mongodb.ts (Optional - if using API routes)
MongoDB connection utility with connection pooling. Uses MONGODB_URI and MONGODB_DB environment variables. Exports connectToDatabase(), getDb(), getCollection() functions.

TYPES (Targets 4-5)
TARGET 4: src/lib/db/types.ts (Optional)
Complete TypeScript interfaces for CMS data models: BlogPost, PortfolioItem, TeamMember, CareerListing, ContactSubmission, NewsletterSubscriber.

TARGET 5: src/lib/i18n/locale.ts
Locale utilities: LOCALES, DEFAULT_LOCALE, getLocalizedString(), getLocalizedObject(), generateStaticParams().

EDITABLE TEXT & REDUX PAGES (Targets 6-9)
TARGET 6: src/components/shared/EditableText.tsx
Complete EditableText component with:

Toggleable editing mode

Style preservation (copies computed styles to input)

Save on blur or Enter key

Cancel on Escape key

Multi-line support with textarea

HTML content support with dangerouslySetInnerHTML

Proper TypeScript typing

TARGET 7: src/lib/store/pages/pageType.ts
TypeScript interfaces for Pages state including LocalizedString, ContentItem, PageBlock, Page, PagesState.

TARGET 8: src/lib/store/pages/pagesSlice.ts
Redux slice for page state management including:

setCurrentPageBySlug - Select current page

setEditableMode - Toggle edit mode globally

updatePageField - Update nested field in page JSON

State initialization from all JSON files

TARGET 9: src/lib/store/pages/saveField.ts
Utility function that dispatches updatePageField and optionally saves to API for persistence.

REDUX STORE SETUP (Targets 10-11)
TARGET 10: src/lib/store/hooks.ts
Typed Redux hooks: useAppDispatch, useAppSelector with proper TypeScript types.

TARGET 11: src/lib/store/index.ts
Redux store setup with configureStore. Combines pagesSlice, cmsSlice (for dynamic content).

PAGE JSON FILES (Targets 12-20)
TARGET 12: src/lib/data/pages/homePage.json
Complete homepage JSON with Hero, Features, Services, Testimonials, CTA, Blog Preview, FAQ sections. ALL text uses { en, hi } structure with identical English values. Each section has a unique id.

TARGET 13: src/lib/data/pages/aboutPage.json
About page JSON with Hero, History, Mission/Vision, Values, Team, Stats sections.

TARGET 14: src/lib/data/pages/servicesPage.json
Services page JSON with Hero, Services Grid, Process, Pricing, CTA sections.

TARGET 15: src/lib/data/pages/contactPage.json
Contact page JSON with Hero, Contact Info, Contact Form, Google Map, FAQ sections.

TARGET 16: src/lib/data/pages/faqPage.json
FAQ page JSON with Hero, FAQ Categories (accordion), Contact Support sections.

TARGET 17: src/lib/data/pages/blogPage.json
Blog listing page JSON with Hero, Filters, Blog Grid, Sidebar sections.

TARGET 18: src/lib/data/pages/blogPostPage.json
Blog post page JSON template with Hero, Content, Author Bio, Related Posts, Comments sections.

TARGET 19: src/lib/data/pages/footerData.json
Footer configuration JSON with brand block, quick links, support links, social links, bottom bar.

TARGET 20: src/lib/data/pages/headerData.json
Header configuration JSON with navigation items, dropdowns, CTA button, mobile menu settings.

API ROUTES (Targets 21-26) - Optional CMS API Routes
TARGET 21: src/app/api/cms/blog/route.ts
GET: Fetch blog posts with pagination and filters. POST: Create new blog post (admin). PUT: Update blog post. DELETE: Delete blog post.

TARGET 22: src/app/api/cms/portfolio/route.ts
GET: Fetch portfolio items with category filters. POST/PUT/DELETE: Admin only CRUD operations.

TARGET 23: src/app/api/cms/team/route.ts
GET: Fetch team members. POST/PUT/DELETE: Admin only CRUD operations.

TARGET 24: src/app/api/cms/contact/route.ts
POST: Submit contact form. GET: Fetch submissions (admin only).

TARGET 25: src/app/api/cms/newsletter/route.ts
POST: Subscribe to newsletter. GET: Fetch subscribers (admin only).

TARGET 26: src/app/api/cms/careers/route.ts
GET: Fetch job listings. POST: Submit job application. POST/PUT/DELETE: Admin only CRUD for listings.

UI COMPONENTS (Targets 27-33)
TARGET 27: src/components/ui/LoadingSkeleton.tsx
Reusable skeleton loading component with shimmer animation effect.

TARGET 28: src/components/ui/EmptyState.tsx
Reusable empty state component that accepts title, description, ctaText, ctaAction props.

TARGET 29: src/components/ui/Card.tsx
Reusable card component with image, title, description, CTA. Uses EditableText.

TARGET 30: src/components/ui/Button.tsx
Reusable button component with variants (primary, secondary, outline, ghost), sizes (sm, md, lg).

TARGET 31: src/components/ui/Modal.tsx
Reusable modal component with backdrop blur, close on escape, focus trap.

TARGET 32: src/components/ui/FormInput.tsx
Reusable form input component with label, error message, validation.

TARGET 33: src/components/ui/Accordion.tsx
Reusable accordion component for FAQ sections.

WEBSITE PAGES (Targets 34-40)
TARGET 34: src/app/[locale]/layout.tsx
Root layout with Redux Provider, Header and Footer components. Reads from headerData.json and footerData.json. Accepts params: { locale }.

TARGET 35: src/app/[locale]/page.tsx
Homepage - Client component (for EditableText). Reads from homePage.json. Renders Hero, Features, Services, Testimonials, CTA, Blog Preview, FAQ sections. Uses EditableText for all text content.

TARGET 36: src/app/[locale]/about/page.tsx
About page - Client component (for EditableText). Reads from aboutPage.json. Uses EditableText for all text content.

TARGET 37: src/app/[locale]/services/page.tsx
Services page - Client component. Reads from servicesPage.json. Uses EditableText for text content.

TARGET 38: src/app/[locale]/contact/page.tsx
Contact page - Client component. Reads from contactPage.json. Renders Hero, Contact Info cards, Contact Form, Google Map.

TARGET 39: src/app/[locale]/faq/page.tsx
FAQ page - Client component. Reads from faqPage.json. Renders Hero and Accordion sections.

TARGET 40: src/app/[locale]/blog/page.tsx
Blog listing page - Client component. Reads from blogPage.json. Fetches blog posts from API.

ADMIN PAGES (Targets 41-46) - Optional
TARGET 41: src/app/admin/layout.tsx
Admin layout with admin sidebar navigation. Protected by middleware requiring admin role.

TARGET 42: src/app/admin/dashboard/page.tsx
Admin dashboard with stats, recent posts, contact submissions.

TARGET 43: src/app/admin/blog/page.tsx
Admin blog management - Client component. CRUD operations for blog posts.

TARGET 44: src/app/admin/portfolio/page.tsx
Admin portfolio management - Client component. CRUD operations for portfolio items.

TARGET 45: src/app/admin/team/page.tsx
Admin team management - Client component. CRUD operations for team members.

TARGET 46: src/app/admin/settings/page.tsx
Admin settings page for editing global site settings and JSON content.

========================================
ENVIRONMENT VARIABLES
========================================

env
# MongoDB (optional - for API routes)
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=yourcompany_cms

# Authentication (optional - for admin)
JWT_SECRET=your-super-secret-jwt-key-min-32-chars

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Admin Emails (comma separated)
ADMIN_EMAILS=admin@yourcompany.com

# Default Locale
NEXT_PUBLIC_DEFAULT_LOCALE=en
========================================
CRITICAL RULES (MUST FOLLOW)
========================================

NO DARK MODE - Light mode only throughout codebase

NO .data.ts FILES - Do NOT create any .data.ts files anywhere

SINGLE PAGE JSON - Each page has its own JSON file in src/lib/data/pages/

LOCALE ROUTES - Routes use [locale] folder: /en/*, /hi/*

ENGLISH ONLY FOR NOW - Both en and hi fields contain identical English text

EDITABLE TEXT - All text content MUST be wrapped in EditableText component

PAGES ARE CLIENT COMPONENTS - Pages using EditableText must have 'use client' directive

STATIC CONTENT FROM JSON - Pages read from local JSON via Redux

DYNAMIC DATA FROM API - Blog posts, portfolio, team from MongoDB via API routes

PAGE LOOKUP PATTERN - Always use sections.find(s => s.adminTitle === "SectionName")

SAVE FIELD UTILITY - Always use saveField() for EditableText onSave callbacks

NO CMS DATABASE COLLECTION - Page content NOT stored in MongoDB, only in local JSON files

ACCESSIBILITY FIRST - Semantic HTML5, ARIA labels, focus rings, skip-to-content link

TYPE SAFETY - No any types

IMAGE OPTIMIZATION - Next.js next/image with priority for hero images

RESPONSIVE DESIGN - Mobile-first with Tailwind breakpoints

API RESPONSE FORMAT - { success: boolean; data?: T; error?: string; message?: string; pagination?: object }

NO PLACEHOLDER COMMENTS - All generated code must be complete and production-ready

LIGHT MODE ONLY VARIABLES - No dark mode media queries, no dark mode classes

REDUCED MOTION SUPPORT - Respect prefers-reduced-motion: reduce media query

========================================
EDITABLE TEXT USAGE EXAMPLES
========================================

tsx
// Single line text
<EditableText
  value={heading}
  isEditable={isEditable}
  onSave={handleSave('props.heading.en')}
  tag="h1"
  className="text-4xl font-bold"
/>

// Multi-line text with HTML support
<EditableText
  value={description}
  isEditable={isEditable}
  onSave={handleSave('props.description.en')}
  tag="p"
  multiline
  rows={4}
  dangerouslySetInnerHTML
/>

// Button text
<EditableText
  value={buttonText}
  isEditable={isEditable}
  onSave={handleSave('props.primaryButtonText.en')}
  tag="span"
  className="btn-primary"
/>

// With placeholder for empty fields
<EditableText
  value={subheading || ''}
  isEditable={isEditable}
  onSave={handleSave('props.subheading.en')}
  tag="p"
  placeholder="Click to add subheading..."
/>
========================================
OUTPUT REQUIREMENT
========================================

Generate ALL 46 targets listed above.

CRITICAL:

NO .data.ts files anywhere

Each page has its own JSON file in src/lib/data/pages/

All pages render content from their JSON file using adminTitle lookup

All text content uses EditableText component for inline editing

Both en and hi fields contain identical English text - NO Hindi translation needed

Routes use [locale] folder structure: /en/*, /hi/*

Pages with EditableText must be Client Components ('use client')

No placeholder comments - all code must be complete and production-ready

Follow the single page JSON architecture and EditableText pattern exactly as specified.
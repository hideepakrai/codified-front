src/
├── app/                                        # Next.js App Router
│   ├── [locale]/                               # Dynamic Locale Routing
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── page.tsx                                # Redirect → default locale
│
├── pages/                                      # Page Composition Layer
│   ├── home/
│   │   └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   └── contact/
│       └── page.tsx
│
├── components/                                 # Page-Based Section Components
│   ├── home/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx                        # Section UI Renderer
│   │   │   └── Hero.ts                         # JSON / Const Data
│   │   │
│   │   ├── FeaturedProducts/
│   │   │   ├── FeaturedProducts.tsx
│   │   │   └── FeaturedProducts.ts
│   │   │
│   │   └── Testimonials/
│   │       ├── Testimonials.tsx
│   │       └── Testimonials.ts
│   │
│   ├── about/
│   └── contact/
│
├── redux/                                      # Redux Toolkit
│   ├── store.ts
│   ├── hooks.ts                                # Typed Redux Hooks
│   │
│   └── slices/
│       ├── auth/
│       │   ├── authSlice.ts
│       │   ├── authThunk.ts
│       │   ├── authType.ts
│       │   └── index.ts
│       │
│       ├── product/
│       │   ├── productSlice.ts
│       │   ├── productThunk.ts
│       │   ├── productType.ts
│       │   └── index.ts
│       │
│       ├── user/
│       │   ├── userSlice.ts
│       │   ├── userThunk.ts
│       │   ├── userType.ts
│       │   └── index.ts
│       │
│       └── layout/
│           ├── layoutSlice.ts
│           ├── layoutThunk.ts
│           ├── layoutType.ts
│           └── index.ts
│
├── models/                                     # Shared Generic Models
│   └── section.model.ts
│
├── lib/
│   ├── fetcher.ts                              # Shared Fetch Wrapper
│   └── utils.ts
│
├── data/                                       # Static JSON Data
│   ├── navigation.json
│   ├── footer.json
│   └── seo.json
│
├── providers/
│   ├── ReduxProvider.tsx
│   └── ThemeProvider.tsx
│
├── middleware/
│   └── auth.middleware.ts
│
├── styles/
│   ├── globals.css
│   └── theme.css
│
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
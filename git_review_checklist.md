# Git Review Checklist

Based on the recent refactor to a JSON-driven page architecture using Redux, here is the checklist of files that were modified or created.

### 📦 Configuration & Dependencies
- [ ] `package.json`

### 🧠 State Management (Store & Pages)
**New Files:**
- [ ] `src/lib/store/pages/ARCHITECTURE.md`
- [ ] `src/lib/store/pages/pagesSlice.ts`
- [ ] `src/lib/store/pages/pageThunk.ts`
- [ ] `src/lib/store/pages/homePage.json`
- [ ] `src/lib/store/pages/aboutPage.json`
- [ ] `src/lib/store/pages/contactPage.json`
- [ ] `src/lib/store/pages/industriesPage.json`
- [ ] `src/lib/store/pages/servicesPage.json`
- [ ] `src/lib/store/pages/technologiesPage.json`

**Modified Files:**
- [ ] `src/lib/store/index.ts` 
- [ ] `src/lib/store/pages/pageType.ts`

### 🧩 Components & App Layout
- [ ] `src/app/[locale]/layout.tsx`
- [ ] `src/components/blocks/Hero/Hero.tsx`
- [ ] `src/components/blocks/FeatureGrid/FeatureGrid.tsx`
- [ ] `src/components/getallData/`

### 📄 Page Logic & Sections
**Home Page:**
- [ ] `src/logic/home/page.tsx`
- [ ] `src/logic/home/sections/CoreOrbitSection.tsx`
- [ ] `src/logic/home/sections/FeatureGridSection.tsx`
- [ ] `src/logic/home/sections/LogoStripSection.tsx`
- [ ] `src/logic/home/sections/ServiceGridSection.tsx`

**About Page:**
- [ ] `src/logic/about/page.tsx`
- [ ] `src/logic/about/sections/AboutHeroSection.tsx`
- [ ] `src/logic/about/sections/AboutStorySection.tsx`

**Contact Page:**
- [ ] `src/logic/contact/page.tsx`
- [ ] `src/logic/contact/sections/ContactHeroSection.tsx`
- [ ] `src/logic/contact/sections/DeploymentSequenceSection.tsx`
- [ ] `src/logic/contact/sections/TechnicalCapabilitiesSection.tsx`
- [ ] `src/logic/contact/sections/TechnicalFAQSection.tsx`

**Other Pages:**
- [ ] `src/logic/industries/page.tsx`
- [ ] `src/logic/services/page.tsx`
- [ ] `src/logic/technologies/page.tsx`

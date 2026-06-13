'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import IndustryHeroSection from './sections/IndustryHeroSection';
import IndustryGridSection from './sections/IndustryGridSection';
import IndustryCTASection from './sections/IndustryCTASection';

// Page slug "industries" is matched & set in Redux by UpdateCurrentPage (global).
// No local JSON import needed — content comes from state.pages.currentPages.

export default function IndustriesPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main>
        <IndustryHeroSection />
        <IndustryGridSection />
        <IndustryCTASection />
      </main>
      <Footer />
    </>
  );
}

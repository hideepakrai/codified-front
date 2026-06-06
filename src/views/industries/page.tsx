'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import IndustryMarqueeSection from './sections/IndustryMarqueeSection';

// Page slug "industries" is matched & set in Redux by UpdateCurrentPage (global).
// No local JSON import needed — content comes from state.pages.currentPages.

export default function IndustriesPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <IndustryMarqueeSection />
      </main>
      <Footer />
    </>
  );
}

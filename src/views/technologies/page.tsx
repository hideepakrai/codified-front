'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';

import TechHeroSection from './sections/TechHeroSection';
import TechLogoStripSection from './sections/TechLogoStripSection';
import TechNetworkSection from './sections/TechNetworkSection';
import TechStackGridSection from './sections/TechStackGridSection';
import TechWorkflowSection from './sections/TechWorkflowSection';
import TechCommandCenterSection from './sections/TechCommandCenterSection';

// Page slug "technologies" is matched & set in Redux by UpdateCurrentPage (global).
// No local JSON import needed — content comes from state.pages.currentPages.

export default function TechnologiesPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <TechHeroSection />
        <TechLogoStripSection />
        <TechNetworkSection />
        <TechStackGridSection />
        <TechWorkflowSection />
        <TechCommandCenterSection />
      </main>
      <Footer />
    </>
  );
}

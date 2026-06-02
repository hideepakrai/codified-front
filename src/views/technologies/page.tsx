'use client';
import { useEffect } from 'react';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';

import technologiesPageData from '@/redux/slices/pages/technologiesPage.json';
import TechHeroSection from './sections/TechHeroSection';
import TechLogoStripSection from './sections/TechLogoStripSection';
import TechNetworkSection from './sections/TechNetworkSection';
import TechStackGridSection from './sections/TechStackGridSection';
import TechWorkflowSection from './sections/TechWorkflowSection';
import TechCommandCenterSection from './sections/TechCommandCenterSection';
import { useAppDispatch } from '@/redux/hooks';

export default function TechnologiesPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();


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

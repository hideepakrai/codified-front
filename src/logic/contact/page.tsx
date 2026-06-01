'use client';
import { useEffect } from 'react';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import { useAppDispatch } from '@/lib/store/hooks';
import { setCurrentPages } from '@/lib/store/pages/pagesSlice';
import type { Page } from '@/lib/store/pages/pageType';
import contactPageData from '@/lib/store/pages/contactPage.json';
import ContactHeroSection from './sections/ContactHeroSection';
import TechnicalCapabilitiesSection from './sections/TechnicalCapabilitiesSection';
import DeploymentSequenceSection from './sections/DeploymentSequenceSection';
import TechnicalFAQSection from './sections/TechnicalFAQSection';

export default function ContactPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPages(contactPageData as Page));
  }, [dispatch]);

  return (
    <>
      <CinematicInit />
      <Navigation />
      
      <main className="relative min-h-screen pt-24 overflow-hidden">
        {/* Cinematic Background */}
        <div style={{ 
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'url(/images/contact-bg.png) no-repeat center center',
          backgroundSize: 'cover', opacity: 0.25, filter: 'grayscale(0.5) blur(40px)'
        }} />
        <div style={{ 
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'radial-gradient(circle at 70% 30%, rgba(29,195,243,0.05) 0%, transparent 70%)'
        }} />

        <ContactHeroSection />
        <TechnicalCapabilitiesSection />
        <DeploymentSequenceSection />
        <TechnicalFAQSection />
      </main>

      <Footer />
    </>
  );
}

'use client';
import { useEffect }            from 'react';
import CinematicInit           from '@/components/providers/CinematicInit/CinematicInit';
import Navigation              from '@/components/layout/Navigation/Navigation';
import Footer                  from '@/components/layout/Footer/Footer';
import { useAppDispatch }      from '@/lib/store/hooks';
import { setCurrentPages }     from '@/lib/store/pages/pagesSlice';
import type { Page }           from '@/lib/store/pages/pageType';
import homePageData            from '@/lib/store/pages/homePage.json';
import HeroSection             from './sections/HeroSection';
import LogoStripSection        from './sections/LogoStripSection';
import CoreOrbitSection        from './sections/CoreOrbitSection';
import FeatureGridSection      from './sections/FeatureGridSection';
import ServiceGridSection      from './sections/ServiceGridSection';
import TechNetworkSection      from './sections/TechNetworkSection';
import IndustryMarqueeSection  from './sections/IndustryMarqueeSection';
import AIWorkflowSection       from './sections/AIWorkflowSection';
import TestimonialCarouselSection from './sections/TestimonialCarouselSection';
import CommandCenterSection    from './sections/CommandCenterSection';

/**
 * HomePage Component (Logic Layer)
 * 
 * Following Guide.md v2.6 strictly with page-specific sections.
 */
export default function HomePage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();

  // Legacy API-driven initializer kept for reference.
  // const initializeHomePage = async () => {
  //   // Previously this page depended on remote API data thunks.
  // };

  const initializeHomePageFromJson = () => {
    dispatch(setCurrentPages(homePageData as Page));
  };

  useEffect(() => {
    initializeHomePageFromJson();
  }, []);

  return (
    <>
      <CinematicInit />
      <Navigation />
      <main>
        <HeroSection />
        <LogoStripSection />
        <CoreOrbitSection />
        <FeatureGridSection />
        <ServiceGridSection />
        <TechNetworkSection />
        <IndustryMarqueeSection />
        <AIWorkflowSection />
        <TestimonialCarouselSection />
        <CommandCenterSection />
      </main>
      <Footer />
    </>
  );
}

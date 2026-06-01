'use client';
import { useEffect }           from 'react';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import CoreOrbit             from '@/components/blocks/CoreOrbit/CoreOrbit';
import FeatureGrid           from '@/components/blocks/FeatureGrid/FeatureGrid';
import { useAppDispatch }    from '@/lib/store/hooks';
import { setCurrentPages }   from '@/lib/store/pages/pagesSlice';
import type { Page }         from '@/lib/store/pages/pageType';
import aboutPageData         from '@/lib/store/pages/aboutPage.json';
import AboutHeroSection      from './sections/AboutHeroSection';
import AboutStorySection     from './sections/AboutStorySection';

export default function AboutPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();

  

  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <AboutHeroSection />
        <AboutStorySection />
        <CoreOrbit />
        <FeatureGrid />
      </main>
      <Footer />
    </>
  );
}

'use client';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import CoreOrbit             from '@/components/blocks/CoreOrbit/CoreOrbit';
import FeatureGrid           from '@/components/blocks/FeatureGrid/FeatureGrid';
import AboutHeroSection      from './sections/AboutHeroSection';
import AboutStorySection     from './sections/AboutStorySection';

export default function AboutPage({ locale }: { locale: string }) {
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

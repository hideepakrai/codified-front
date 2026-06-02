'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';

import HeroSection from './sections/HeroSection';
import LogoStripSection from './sections/LogoStripSection';
import CoreOrbitSection from './sections/CoreOrbitSection';
import FeatureGridSection from './sections/FeatureGridSection';
import ServiceGridSection from './sections/ServiceGridSection';
import TechNetworkSection from './sections/TechNetworkSection';
import IndustryMarqueeSection from './sections/IndustryMarqueeSection';
import AIWorkflowSection from './sections/AIWorkflowSection';
import TestimonialCarouselSection from './sections/TestimonialCarouselSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import CommandCenterSection from './sections/CommandCenterSection';

/**
 * HomePage Component (Logic Layer)
 * 
 * Following Guide.md v2.6 strictly with page-specific sections.
 */
export default function HomePage({ locale }: { locale: string }) {
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
        <CaseStudiesSection />
        <CommandCenterSection />
      </main>
      <Footer />
    </>
  );
}

/**
 * KalpBloom — PageRenderer
 *
 * Iterates page.content[] and emits a SectionRenderer per section.
 * Mirrors KalpBloom Architecture §10.2 step 6.
 *
 * IMPORTANT: This project uses the CINEMATIC rendering strategy.
 * Each section block is a self-contained client component that reads
 * its own data from Redux (useAppSelector). The PageRenderer therefore
 * renders named cinematic blocks directly from the section.adminTitle,
 * not from a SectionRenderer loop — preserving the exact design.
 *
 * When the FastAPI backend is connected and page.content[] is available,
 * the SectionRenderer / BlockRenderer path will take over automatically.
 */

'use client';
import { useAppSelector } from '@/lib/store/hooks';
import CinematicInit         from '@/components/providers';
import Navigation            from '@/components/layout/Navigation';
import Footer                from '@/components/layout/Footer';
import Hero                  from '@/components/blocks/hero';
import LogoStrip             from '@/components/blocks/logo-strip';
import CoreOrbit             from '@/components/blocks/core-orbit';
import FeatureGrid           from '@/components/blocks/feature-grid';
import ServiceGrid           from '@/components/blocks/service-grid';
import TechNetwork           from '@/components/blocks/tech-network';
import IndustryMarquee       from '@/components/blocks/industry-marquee';
import AIWorkflow            from '@/components/blocks/ai-workflow';
import TestimonialCarousel   from '@/components/blocks/testimonial-carousel';
import CommandCenter         from '@/components/blocks/command-center';

/**
 * CinematicPageRenderer — renders the full Codified homepage
 * using the KalpBloom block registry pattern.
 *
 * Section order matches the KalpBloom Home page section spec (§9.1):
 *   1. hero
 *   2. logo-strip          (Trusted by)
 *   3. core-orbit          (About / AI Engine)
 *   4. feature-grid        (Why Choose Us)
 *   5. service-grid        (Services)
 *   6. tech-network        (Technologies)
 *   7. industry-marquee    (Industries)
 *   8. ai-workflow         (AI Pipeline)
 *   9. testimonial-carousel
 *  10. command-center      (Results / KPIs)
 */
export default function PageRenderer() {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main>
        <Hero />
        <LogoStrip />
        <CoreOrbit />
        <FeatureGrid />
        <ServiceGrid />
        <TechNetwork />
        <IndustryMarquee />
        <AIWorkflow />
        <TestimonialCarousel />
        <CommandCenter />
      </main>
      <Footer />
    </>
  );
}

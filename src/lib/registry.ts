/**
 * KalpBloom — Block Registry
 *
 * Maps KalpBloom block `type` (and legacy `adminTitle`) to the cinematic
 * React components already built for the Codified homepage.
 */

import type { ComponentType } from 'react';

// ── Layout blocks ───────────────────────────────────────────
import Hero               from '@/components/blocks/Hero/Hero';
import LogoStrip          from '@/components/blocks/LogoStrip/LogoStrip';
import CoreOrbit          from '@/components/blocks/CoreOrbit/CoreOrbit';
import FeatureGrid        from '@/components/blocks/FeatureGrid/FeatureGrid';
import ServiceGrid        from '@/components/blocks/ServiceGrid/ServiceGrid';
import TechNetwork        from '@/components/blocks/TechNetwork/TechNetwork';
import IndustryMarquee    from '@/components/blocks/IndustryMarquee/IndustryMarquee';
import AIWorkflow         from '@/components/blocks/AIWorkflow/AIWorkflow';
import TestimonialCarousel from '@/components/blocks/TestimonialCarousel/TestimonialCarousel';
import CommandCenter      from '@/components/blocks/CommandCenter/CommandCenter';
import FAQAccordion       from '@/components/blocks/FAQAccordion/FAQAccordion';

// ── Block type registry ─────────────────────────────────────
export const blockRegistry: Record<string, ComponentType<any>> = {
  // Standard KalpBloom types
  'hero':                   Hero,
  'logo-strip':             LogoStrip,
  'feature-grid':           FeatureGrid,
  'service-grid':           ServiceGrid,
  'testimonial-carousel':   TestimonialCarousel,

  // Cinematic Codified extensions
  'core-orbit':             CoreOrbit,
  'tech-network':           TechNetwork,
  'industry-marquee':       IndustryMarquee,
  'ai-workflow':            AIWorkflow,
  'command-center':         CommandCenter,
  'faq-accordion':          FAQAccordion,

  // adminTitle aliases (for legacy CMS data compatibility)
  'Hero':                   Hero,
  'Client Logos':           LogoStrip,
  'Core':                   CoreOrbit,
  'Why Choose Us':          FeatureGrid,
  'Services':               ServiceGrid,
  'Technologies':           TechNetwork,
  'Industries':             IndustryMarquee,
  'AI Workflow':            AIWorkflow,
  'Testimonials':           TestimonialCarousel,
  'Results':                CommandCenter,
  'FAQ':                    FAQAccordion,
};

export type BlockType = keyof typeof blockRegistry;

/**
 * KalpBloom — Block Registry
 *
 * Maps KalpBloom block `type` (and legacy `adminTitle`) to the cinematic
 * React components already built for the Codified homepage.
 *
 * Pattern from KalpBloom Architecture §10.5 — block registry.
 * The CMS renderer calls blockRegistry[block.type] to get the component.
 *
 * Cinematic block types added beyond the standard KalpBloom catalog:
 *   core-orbit         — AI neural-orbit visualization (Core section)
 *   tech-network       — Interactive API network graph (Technologies section)
 *   industry-marquee   — Horizontal card marquee (Industries section)
 *   ai-workflow        — 5-step pipeline with live readout (AI Workflow)
 *   command-center     — KPI metric tiles (Results section)
 */

import type { ComponentType } from 'react';

// ── Layout blocks ───────────────────────────────────────────
import Hero               from '@/components/blocks/hero';
import LogoStrip          from '@/components/blocks/logo-strip';
import CoreOrbit          from '@/components/blocks/core-orbit';
import FeatureGrid        from '@/components/blocks/feature-grid';
import ServiceGrid        from '@/components/blocks/service-grid';
import TechNetwork        from '@/components/blocks/tech-network';
import IndustryMarquee    from '@/components/blocks/industry-marquee';
import AIWorkflow         from '@/components/blocks/ai-workflow';
import TestimonialCarousel from '@/components/blocks/testimonial-carousel';
import CommandCenter      from '@/components/blocks/command-center';
import FAQAccordion       from '@/components/blocks/faq-accordion';

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

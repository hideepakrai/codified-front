/**
 * KalpBloom — Home Page
 *
 * Renders via PageRenderer which follows the KalpBloom §9.1 section order:
 * hero → logo-strip → core-orbit → feature-grid → service-grid →
 * tech-network → industry-marquee → ai-workflow → testimonial-carousel →
 * command-center
 *
 * SEO metadata is generated from the page document's metaTitle/metaDescription.
 */
import type { Metadata } from 'next';
import PageRenderer from '@/components/cms/PageRenderer';

export const metadata: Metadata = {
  title: 'Codified Web Solutions | AI · Web · Mobile Development',
  description:
    'From LLM integration to production web apps — Codified delivers AI-powered digital solutions: iOS, Android, Web, AI/ML, Cloud, and Digital Transformation.',
  openGraph: {
    title: 'Codified Web Solutions | AI · Web · Mobile',
    description: 'Production-grade AI and web development — shipped fast.',
    url: 'https://codifiedweb.com',
    siteName: 'Codified Web Solutions',
    images: [{ url: 'https://codifiedweb.com/og-home.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codified Web Solutions',
    description: 'Production-grade AI and web development — shipped fast.',
  },
};

export default function HomePage() {
  return <PageRenderer />;
}

import type { Metadata } from 'next';
import CinematicInit         from '@/components/providers';
import Navigation            from '@/components/layout/Navigation';
import Footer                from '@/components/layout/Footer';
import IndustryMarquee       from '@/components/blocks/industry-marquee';

export const metadata: Metadata = {
  title: 'Industries | Codified Web Solutions',
  description: 'See the specialized domains and industries we empower with production-grade AI and custom software solutions.',
};

export default function IndustriesPage() {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <IndustryMarquee />
      </main>
      <Footer />
    </>
  );
}

'use client';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import TechNetworkSection    from './sections/TechNetworkSection';

export default function TechnologiesPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <TechNetworkSection />
      </main>
      <Footer />
    </>
  );
}

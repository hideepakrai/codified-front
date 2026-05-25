'use client';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import ServiceGridSection    from './sections/ServiceGridSection';
import AIWorkflowSection     from './sections/AIWorkflowSection';

export default function ServicesPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <ServiceGridSection />
        <AIWorkflowSection />
      </main>
      <Footer />
    </>
  );
}

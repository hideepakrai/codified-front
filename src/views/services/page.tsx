'use client';
import { useEffect } from 'react';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';

import ServiceGridSection from './sections/ServiceGridSection';
import AIWorkflowSection from './sections/AIWorkflowSection';
import { useAppDispatch } from '@/redux/hooks';

export default function ServicesPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();



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

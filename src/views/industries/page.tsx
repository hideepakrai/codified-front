'use client';
import { useEffect } from 'react';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';

import { setCurrentPages } from '@/redux/slices/pages/pagesSlice';
import type { Page } from '@/redux/slices/pages/pageType';
import industriesPageData from '@/redux/slices/pages/industriesPage.json';
import IndustryMarqueeSection from './sections/IndustryMarqueeSection';
import { useAppDispatch } from '@/redux/hooks';

export default function IndustriesPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();


  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <IndustryMarqueeSection />
      </main>
      <Footer />
    </>
  );
}

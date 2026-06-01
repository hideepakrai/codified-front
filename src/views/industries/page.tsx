'use client';
import { useEffect }          from 'react';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import { useAppDispatch }    from '@/lib/store/hooks';
import { setCurrentPages }   from '@/lib/store/pages/pagesSlice';
import type { Page }         from '@/lib/store/pages/pageType';
import industriesPageData    from '@/lib/store/pages/industriesPage.json';
import IndustryMarqueeSection from './sections/IndustryMarqueeSection';

export default function IndustriesPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPages(industriesPageData as Page));
  }, [dispatch]);

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

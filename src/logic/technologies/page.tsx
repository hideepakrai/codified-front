'use client';
import { useEffect }         from 'react';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import { useAppDispatch }    from '@/lib/store/hooks';
import { setCurrentPages }   from '@/lib/store/pages/pagesSlice';
import type { Page }         from '@/lib/store/pages/pageType';
import technologiesPageData  from '@/lib/store/pages/technologiesPage.json';
import TechNetworkSection    from './sections/TechNetworkSection';

export default function TechnologiesPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPages(technologiesPageData as Page));
  }, [dispatch]);

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

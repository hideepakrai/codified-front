'use client';
import { useEffect }         from 'react';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import { useAppDispatch }    from '@/lib/store/hooks';
import { setCurrentPages }   from '@/lib/store/pages/pagesSlice';
import type { Page }         from '@/lib/store/pages/pageType';
import servicesPageData      from '@/lib/store/pages/servicesPage.json';
import ServiceGridSection    from './sections/ServiceGridSection';
import AIWorkflowSection     from './sections/AIWorkflowSection';

export default function ServicesPage({ locale }: { locale: string }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPages(servicesPageData as Page));
  }, [dispatch]);

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

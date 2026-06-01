'use client';
import { useEffect }         from 'react';
import CinematicInit         from '@/components/providers/CinematicInit/CinematicInit';
import Navigation            from '@/components/layout/Navigation/Navigation';
import Footer                from '@/components/layout/Footer/Footer';
import { useAppDispatch }    from '@/lib/store/hooks';
import { setCurrentPages }   from '@/lib/store/pages/pagesSlice';
import type { Page }         from '@/lib/store/pages/pageType';
import technologiesPageData  from '@/lib/store/pages/technologiesPage.json';
import TechHeroSection       from './sections/TechHeroSection';
import TechLogoStripSection  from './sections/TechLogoStripSection';
import TechNetworkSection    from './sections/TechNetworkSection';
import TechStackGridSection  from './sections/TechStackGridSection';
import TechWorkflowSection   from './sections/TechWorkflowSection';
import TechCommandCenterSection from './sections/TechCommandCenterSection';

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
        <TechHeroSection />
        <TechLogoStripSection />
        <TechNetworkSection />
        <TechStackGridSection />
        <TechWorkflowSection />
        <TechCommandCenterSection />
      </main>
      <Footer />
    </>
  );
}

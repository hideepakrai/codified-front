'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import LoginFormSection from './sections/LoginFormSection';

export default function LoginPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <LoginFormSection />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import CinematicInit         from '@/components/providers';
import Navigation            from '@/components/layout/Navigation';
import Footer                from '@/components/layout/Footer';
import CommandCenter         from '@/components/blocks/command-center';

export const metadata: Metadata = {
  title: 'Contact Us & Free Consultation | Codified Web Solutions',
  description: 'Get in touch with Codified Web Solutions for a free consultation on your AI integration or custom software development project.',
};

export default function ContactPage() {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <CommandCenter />
      </main>
      <Footer />
    </>
  );
}

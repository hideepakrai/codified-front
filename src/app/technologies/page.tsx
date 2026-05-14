import type { Metadata } from 'next';
import CinematicInit         from '@/components/providers';
import Navigation            from '@/components/layout/Navigation';
import Footer                from '@/components/layout/Footer';
import TechNetwork           from '@/components/blocks/tech-network';

export const metadata: Metadata = {
  title: 'Technologies & Tech Stack | Codified Web Solutions',
  description: 'Dive into our cutting-edge technology stack, including React, Next.js, PyTorch, TensorFlow, LLMs, and cloud infrastructure.',
};

export default function TechnologiesPage() {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <TechNetwork />
      </main>
      <Footer />
    </>
  );
}

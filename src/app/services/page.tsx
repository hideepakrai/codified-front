import type { Metadata } from 'next';
import CinematicInit         from '@/components/providers';
import Navigation            from '@/components/layout/Navigation';
import Footer                from '@/components/layout/Footer';
import ServiceGrid           from '@/components/blocks/service-grid';
import AIWorkflow            from '@/components/blocks/ai-workflow';

export const metadata: Metadata = {
  title: 'Services & AI Workflow | Codified Web Solutions',
  description: 'Explore our software development services, AI integrations, mobile apps, and robust AI delivery pipelines.',
};

export default function ServicesPage() {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <ServiceGrid />
        <AIWorkflow />
      </main>
      <Footer />
    </>
  );
}

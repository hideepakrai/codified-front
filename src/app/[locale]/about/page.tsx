import type { Metadata } from 'next';
import AboutPage from '@/logic/about/page';

export const metadata: Metadata = {
  title: 'About Us | Codified Web Solutions',
  description: 'At Codified Web Solutions, we are a collective of developers, designers, and strategists dedicated to building world-class digital products.',
};

export default async function AppAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}

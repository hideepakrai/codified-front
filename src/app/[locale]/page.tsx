import type { Metadata } from 'next';
import HomePage from '@/views/home/page';

export const metadata: Metadata = {
  title: 'Codified Web Solutions | AI · Web · Mobile Development',
  description:
    'From LLM integration to production web apps — Codified delivers AI-powered digital solutions.',
};

export default async function AppHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}

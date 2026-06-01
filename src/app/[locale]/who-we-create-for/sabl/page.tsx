import type { Metadata } from 'next';
import SablView from '@/views/who-we-create-for/sabl/page';

export const metadata: Metadata = {
  title: 'SABL Case Study | Codified Web Solutions',
  description: 'Strengthening Agriculture-based Livelihoods: A digital transformation case study by Codified.',
};

export default async function SablPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <SablView locale={locale} />;
}

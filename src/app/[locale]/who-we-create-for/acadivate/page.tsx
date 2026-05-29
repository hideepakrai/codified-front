import type { Metadata } from 'next';
import AcadivateView from '@/views/who-we-create-for/acadivate/page';

export const metadata: Metadata = {
  title: 'Acadivate Case Study | Codified Web Solutions',
  description: 'Advancing Academic Research & Innovation: A digital platform case study for Acadivate.',
};

export default async function AcadivatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AcadivateView locale={locale} />;
}

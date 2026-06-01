import type { Metadata } from 'next';
import PeekeeperView from '@/views/who-we-create-for/peekeeper/page';

export const metadata: Metadata = {
  title: 'PeeKeeper Case Study | Codified Web Solutions',
  description: 'Revitalizing the PeeKeeper Shopping Experience: A digital platform case study.',
};

export default async function PeekeeperPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PeekeeperView locale={locale} />;
}

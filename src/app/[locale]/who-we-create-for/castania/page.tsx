import type { Metadata } from 'next';
import CastaniaView from '@/views/who-we-create-for/castania/page';

export const metadata: Metadata = {
  title: 'Castania — From Commodity to Premium Boutique Brand | Hrescic Agency',
  description: 'Building Castania into a scalable boutique honey brand through strategy, naming, packaging, and a complete sales ecosystem.',
};

export default async function CastaniaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <CastaniaView locale={locale} />;
}

import type { Metadata } from 'next';
import AlliedSurplusView from '@/views/who-we-create-for/allied-surplus/page';

export const metadata: Metadata = {
  title: 'Allied Surplus — Military E-Commerce Platform | Hrescic Agency',
  description: 'How we built Allied Surplus into a high-performance military and tactical gear e-commerce store serving the US market with 1000+ products.',
};

export default async function AlliedSurplusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AlliedSurplusView locale={locale} />;
}

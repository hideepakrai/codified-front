import type { Metadata } from 'next';
import NestCraftView from '@/views/who-we-create-for/nestcraft-living/page';

export const metadata: Metadata = {
  title: 'NestCraft Living — Sculpting Premium Furniture E-Commerce | Hrescic Agency',
  description: 'How we built NestCraft Living into a design-led premium furniture brand with a scalable e-commerce platform, visual identity, and content system.',
};

export default async function NestCraftPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <NestCraftView locale={locale} />;
}

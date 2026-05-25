import type { Metadata } from 'next';
import HireDevelopersPage from '@/views/hire-developers/page';

export const metadata: Metadata = {
  title: 'Hire Developers | Codified Web Solutions',
  description: 'Scale your team with vetted developers experienced in building modern, scalable, and reliable web, mobile, and enterprise solutions.',
};

export default async function AppHireDevelopersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HireDevelopersPage locale={locale} />;
}

import IndustriesPage from '@/views/industries/page';

export default async function AppIndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <IndustriesPage locale={locale} />;
}

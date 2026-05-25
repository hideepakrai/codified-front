import TechnologiesPage from '@/views/technologies/page';

export default async function AppTechnologiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TechnologiesPage locale={locale} />;
}

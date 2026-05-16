import TechnologiesPage from '@/logic/technologies/page';

export default async function AppTechnologiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TechnologiesPage locale={locale} />;
}

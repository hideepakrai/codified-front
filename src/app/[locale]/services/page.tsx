import ServicesPage from '@/views/services/page';

export default async function AppServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicesPage locale={locale} />;
}

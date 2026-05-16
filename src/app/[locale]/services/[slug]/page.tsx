import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import ServiceDetailPage from '@/logic/services/detail-page';

interface Props {
  params: Promise<{ slug: string, locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Codified Web Solutions`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug, locale } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} slug={slug} />;
}

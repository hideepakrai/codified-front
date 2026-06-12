import type { Metadata } from 'next';
import CareersPage from '@/views/careers/page';

export const metadata: Metadata = {
  title: 'Careers | Codified Web Solutions',
  description: 'Join our team of passionate engineers, designers, and thinkers. Explore open positions and build the future of digital innovation at Codified Web Solutions.',
};

export default async function AppCareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <CareersPage />;
}

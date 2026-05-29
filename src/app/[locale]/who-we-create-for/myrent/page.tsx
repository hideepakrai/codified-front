import type { Metadata } from 'next';
import MyRentView from '@/views/who-we-create-for/myrent/page';

export const metadata: Metadata = {
  title: 'MyRent — Building Clarity at Scale | Hrescic Agency',
  description: 'How MyRent transformed a complex property management platform into a growth system through UX, SEO, and content strategy.',
};

export default async function MyRentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MyRentView locale={locale} />;
}

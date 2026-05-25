import type { Metadata } from 'next';
import ContactPage from '@/views/contact/page';

export const metadata: Metadata = {
  title: 'Contact Us | Codified Web Solutions',
  description: 'Connect with our core team for AI integration, enterprise web scaling, or UI/UX design systems.',
};

export default async function AppContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ContactPage locale={locale} />;
}

import type { Metadata } from 'next';
import KarloBanView from '@/views/who-we-create-for/karlo-ban/page';

export const metadata: Metadata = {
  title: 'Karlo Ban — When Craft Meets Collaboration | Hrescic Agency',
  description: 'A true partnership forged in trust, precision, and shared vision, resulting in a brand that honors the quality of every blade Karlo Ban creates.',
};

export default async function KarloBanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <KarloBanView locale={locale} />;
}

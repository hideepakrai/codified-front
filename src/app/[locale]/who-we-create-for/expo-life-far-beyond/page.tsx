import type { Metadata } from 'next';
import ExpoLifeView from '@/views/who-we-create-for/expo-life-far-beyond/page';

export const metadata: Metadata = {
  title: 'EXO — Life and Beyond | Hrescic Agency',
  description: 'Creative & video direction, and storyboard in cooperation with HrvojeKF.',
};

export default async function ExpoLifePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ExpoLifeView locale={locale} />;
}

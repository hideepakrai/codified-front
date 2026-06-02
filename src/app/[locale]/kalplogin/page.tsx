import LoginPage from '@/views/login/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Codified Web Solutions',
  description: 'Sign in to your Codified Web Solutions account.',
};

export default async function AppLoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LoginPage locale={locale} />;
}

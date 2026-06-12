import type { Metadata } from 'next';
import InternshipPage from '@/views/internship/page';

export const metadata: Metadata = {
  title: 'Internship Programme | Codified Web Solutions',
  description: 'Join Codified Web Solutions as an intern and work on live AI, web, and mobile projects. Apply for internships in Full Stack, AI/ML, UI/UX, Mobile, SEO and more.',
};

export default async function AppInternshipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <InternshipPage />;
}

import type { Metadata } from 'next';
import '../../styles/globals.css';
import ReduxProvider from '@/providers/ReduxProvider';
import SessionProvider from '@/providers/SessionProvider';
import { SupportedLocale } from '@/lib/i18n';
import UpdateCurrentPage from '@/components/getallData/pageData/UpdateCurrentPage';
import { BlueprintProvider } from '@/components/providers/BlueprintProvider';
import GlobalLoader from '@/components/shared/GlobalLoader/GlobalLoader';
import AdminBar from '@/components/layout/AdminBar/AdminBar';

export const metadata: Metadata = {
  title: 'Codified Web Solutions — Digital Infrastructure for Modern Businesses',
  description:
    'Codified Web Solutions turns fragmented business operations into scalable digital infrastructure.',
  icons: {
    icon: [
      { url: '/img/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/img/favicon.svg',
    apple: '/img/favicon.svg',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
    
  return (
    <html lang={locale || 'en'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body>
         <ReduxProvider>
          <SessionProvider>
            <BlueprintProvider context="public">
              <AdminBar />
              <GlobalLoader />
              <UpdateCurrentPage />
              {children}
            </BlueprintProvider>
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

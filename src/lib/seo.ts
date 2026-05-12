/**
 * KalpBloom — SEO helpers
 * Generates Next.js Metadata from KalpBloom page documents.
 */
import type { Metadata } from 'next';
import { t, type LocaleMap } from './i18n';

interface PageSeoInput {
  metaTitle?:       LocaleMap | string;
  metaDescription?: LocaleMap | string;
  metaImage?:       string;
  canonicalUrl?:    string;
  slug?:            string;
}

const SITE_NAME = 'Codified Web Solutions';
const BASE_URL  = process.env.NEXT_PUBLIC_APP_URL ?? 'https://codifiedweb.com';

export function generatePageMetadata(
  page: PageSeoInput,
  locale = 'en'
): Metadata {
  const title       = t(page.metaTitle, locale)       || SITE_NAME;
  const description = t(page.metaDescription, locale) || '';
  const imageUrl    = page.metaImage ?? `${BASE_URL}/og-default.jpg`;
  const canonical   = page.canonicalUrl
    ?? `${BASE_URL}/${page.slug && page.slug !== 'home' ? page.slug : ''}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

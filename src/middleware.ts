import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localePrefix = SUPPORTED_LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!localePrefix) {
    // No locale prefix — treat as default locale, rewrite internally
    request.nextUrl.pathname = `/en${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(request.nextUrl);
  }

  if (localePrefix === DEFAULT_LOCALE) {
    // /en prefix — redirect to strip it
    const pathWithoutLocale = pathname.replace(/^\/en/, '') || '/';
    request.nextUrl.pathname = pathWithoutLocale;
    return NextResponse.redirect(request.nextUrl);
  }

  // Non-default locale (/hi) — pass through as-is
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static, images, logos, img, etc.)
    '/((?!api|_next/static|_next/image|images|logos|img|favicon.ico|icon.svg).*)',
  ],
};

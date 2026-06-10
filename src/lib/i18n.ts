/**
 * KalpBloom — i18n helpers
 * Picks the correct locale value from a localized field map: { en: "...", hi: "..." }
 */

export type LocaleMap = Record<string, string>;
export type SupportedLocale = 'en' | string;

export const DEFAULT_LOCALE: SupportedLocale = 'en';
export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'hi'];

/**
 * Resolve a localized value — returns the locale string, falls back to defaultLocale, then first available.
 */
export function t(
  field: LocaleMap | string | undefined | null,
  locale: SupportedLocale = DEFAULT_LOCALE
): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[locale] ?? field[DEFAULT_LOCALE] ?? Object.values(field)[0] ?? '';
}

/**
 * Resolve a localized value with HTML (for dangerouslySetInnerHTML use-cases).
 */
export function tHtml(
  field: LocaleMap | string | undefined | null,
  locale: SupportedLocale = DEFAULT_LOCALE
): string {
  return t(field, locale);
}

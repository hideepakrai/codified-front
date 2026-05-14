'use client';
import React from 'react';
import { t, type LocaleMap } from '@/lib/i18n';

interface LocalizedTextProps {
  field: LocaleMap | string | undefined | null;
  locale?: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  html?: boolean;
}

/**
 * KalpBloom — LocalizedText
 * Renders the active-locale value from a localized field map { en: "...", hi: "..." }.
 * Mirrors the KalpBloom Architecture §10.2 step 9.
 *
 * @example
 * <LocalizedText field={props.title.value} />
 * <LocalizedText field={props.description.value} as="p" className="lede" />
 * <LocalizedText field={props.heading.value} as="h2" html className="display" />
 */
export function LocalizedText({
  field,
  locale = 'en',
  as: Tag = 'span',
  className,
  html = false,
}: LocalizedTextProps) {
  const text = t(field, locale);
  if (html) {
    return (
      <Tag
        className={className}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
  return <Tag className={className}>{text}</Tag>;
}

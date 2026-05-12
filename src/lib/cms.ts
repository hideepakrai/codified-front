/**
 * KalpBloom — CMS data layer
 *
 * In production this wraps fetch() calls to the FastAPI backend.
 * In this Next.js project the data flows through Redux (StoreProvider → useAppSelector).
 * This module provides typed helpers and default fallbacks that mirror the
 * KalpBloom { type, value } field schema.
 *
 * API routes expected (FastAPI):
 *   GET /api/v1/pages/:slug
 *   GET /api/v1/collections/:type
 *   GET /api/v1/settings
 */

import { tags } from './tags';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';

/* ─── Field helpers ─────────────────────────────────────── */

/** Unwrap a KalpBloom { type, value } field to its raw value. */
export function fieldValue<T = string>(field: any): T | undefined {
  if (!field) return undefined;
  if (typeof field === 'object' && 'value' in field) return field.value as T;
  return field as T;
}

/** Pick the localized string from a KalpBloom text field for a given locale. */
export function fieldText(
  field: any,
  locale = 'en'
): string {
  const val = fieldValue<Record<string, string> | string>(field);
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[locale] ?? val['en'] ?? '';
}

/* ─── Page fetch ─────────────────────────────────────────── */

export interface KalpPage {
  _id: string;
  slug: string;
  tenantId: string;
  isPublished: boolean;
  title: Record<string, string>;
  metaTitle?: Record<string, string>;
  metaDescription?: Record<string, string>;
  metaImage?: string;
  template?: string | null;
  content: KalpSection[];
}

export interface KalpSection {
  id: string;
  type: 'section';
  adminTitle: string;
  layout: string;
  theme?: string;
  spacing?: string;
  props: Record<string, any>;
  content?: KalpBlock[];
  columns?: KalpBlock[][];
  metrics?: any[];
}

export interface KalpBlock {
  id: string;
  type: string;
  props: Record<string, any>;
}

/**
 * Fetch a published page by slug from the FastAPI backend.
 * Falls back gracefully — returns null so the caller can use defaultData.
 */
export async function fetchPage(slug: string): Promise<KalpPage | null> {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}/api/v1/pages/${slug}`, {
      next: { tags: [tags.page(slug)] },
    });
    if (!res.ok) return null;
    return res.json() as Promise<KalpPage>;
  } catch {
    return null;
  }
}

/**
 * Fetch all items from a collection (services, case-studies, blog-posts, etc.)
 */
export async function fetchCollection<T = unknown>(
  type: string,
  filter?: Record<string, string>
): Promise<T[]> {
  if (!API_BASE) return [];
  const params = new URLSearchParams(filter ?? {});
  try {
    const res = await fetch(
      `${API_BASE}/api/v1/collections/${type}?${params}`,
      { next: { tags: [tags.collection(type)] } }
    );
    if (!res.ok) return [];
    return res.json() as Promise<T[]>;
  } catch {
    return [];
  }
}

/**
 * Fetch tenant settings (site name, theme tokens, socials, locales, etc.)
 */
export async function fetchSettings() {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}/api/v1/settings`, {
      next: { tags: [tags.settings()] },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

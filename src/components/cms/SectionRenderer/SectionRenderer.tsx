import { BlockRenderer } from '../BlockRenderer/BlockRenderer';
import type { KalpSection } from '@/lib/cms';

interface SectionRendererProps {
  section: KalpSection;
  locale?: string;
}

/**
 * KalpBloom — SectionRenderer
 * Wraps a section's layout class and iterates content[] (or columns[][]).
 * Mirrors KalpBloom Architecture §10.2 step 7.
 *
 * Layout → CSS class mapping:
 *   fullwidth   → section section--fullwidth
 *   contained   → section section--contained
 *   grid-2/3/4  → section section--grid-N
 *   split       → section section--split
 *   carousel    → section section--carousel   (client component handles animation)
 *   marquee     → section section--marquee
 *   accordion   → section section--accordion
 *
 * For cinematic blocks the section wrapper is intentionally minimal —
 * each block component owns its own layout, spacing, and animations.
 */
export function SectionRenderer({ section, locale = 'en' }: SectionRendererProps) {
  const layoutClass = `section--${section.layout ?? 'fullwidth'}`;
  const themeClass  = section.theme ? `theme-${section.theme}` : '';

  // columns[][] layout (split / multi-column)
  if (section.columns) {
    return (
      <div
        className={`section ${layoutClass} ${themeClass}`.trim()}
        id={section.id}
        data-admin-title={section.adminTitle}
        data-layout={section.layout}
      >
        {section.columns.map((col, ci) => (
          <div key={ci} className="section__col">
            {col.map(block => (
              <BlockRenderer key={block.id} block={block} locale={locale} />
            ))}
          </div>
        ))}
      </div>
    );
  }

  // content[] layout (standard)
  return (
    <div
      className={`section ${layoutClass} ${themeClass}`.trim()}
      id={section.id}
      data-admin-title={section.adminTitle}
      data-layout={section.layout}
    >
      {(section.content ?? []).map(block => (
        <BlockRenderer key={block.id} block={block} locale={locale} />
      ))}
    </div>
  );
}

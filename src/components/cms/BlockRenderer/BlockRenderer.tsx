'use client';
import { blockRegistry } from '@/lib/registry';
import type { KalpBlock } from '@/lib/cms';

interface BlockRendererProps {
  block: KalpBlock;
  locale?: string;
}

/**
 * KalpBloom — BlockRenderer
 * Looks up blockRegistry[block.type] and renders the React component.
 * Mirrors KalpBloom Architecture §10.5.
 *
 * The block's props are spread directly — each component reads its own
 * CMS data via useAppSelector (Redux) so props here are supplemental.
 */
export function BlockRenderer({ block, locale = 'en' }: BlockRendererProps) {
  const Component = blockRegistry[block.type];

  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div style={{
          border: '1px dashed rgba(243,0,166,0.4)',
          padding: '16px',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'rgba(243,0,166,0.8)',
          borderRadius: '8px',
          margin: '8px 0',
        }}>
          ⚠ Unknown block type: <strong>{block.type}</strong> (id: {block.id})
        </div>
      );
    }
    return null;
  }

  return <Component {...block.props} locale={locale} blockId={block.id} />;
}

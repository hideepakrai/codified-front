'use client';
import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

const GridCard = ({ c, isEditable, onSave, contentIdx }: { c: any; isEditable: boolean; onSave: (fieldPath: string) => (value: string) => void; contentIdx: number }) => (
  <div
    className="group relative overflow-hidden rounded-2xl"
    style={{
      background: '#08121e',
      border: '1px solid rgba(140,180,240,0.18)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: '340px'
    }}
  >
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
      background: 'radial-gradient(circle at center, rgba(29,195,243,0.15) 0%, transparent 70%)',
      zIndex: 1
    }} />

    {/* Top Image */}
    <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={c.props?.image || '/images/industries/general-premium.png'}
        alt={c.props?.title?.en}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        style={{
          display: 'block',
          filter: 'brightness(0.85) saturate(1.1)',
        }}
      />
      {/* Gradient fade from image into card body */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, transparent 0%, #08121e 100%)',
        pointerEvents: 'none',
        zIndex: 2
      }} />
      
      {/* Tag badge top-right */}
      <div style={{
        position: 'absolute',
        top: '16px', right: '16px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.14em',
        color: '#9adcff',
        background: 'rgba(4,6,13,0.85)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(29,195,243,0.25)',
        borderRadius: '6px',
        padding: '5px 10px',
        textTransform: 'uppercase',
        zIndex: 3
      }}>
        <EditableText value={c.props?.tag || ''} isEditable={isEditable} onSave={onSave(`content.${contentIdx}.props.tag`)} tag="span" />
      </div>
    </div>

    {/* Text Content */}
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', zIndex: 2, position: 'relative' }}>
      <EditableText value={c.props?.title?.en || ''} isEditable={isEditable} onSave={onSave(`content.${contentIdx}.props.title.en`)} tag="h4" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        fontWeight: 600,
        color: '#e9eefb',
        margin: '0 0 10px',
        lineHeight: 1.2,
      }} />
      <EditableText value={c.props?.desc?.en || ''} isEditable={isEditable} onSave={onSave(`content.${contentIdx}.props.desc.en`)} tag="p" style={{
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        color: '#6e7c9a',
        margin: 0,
        lineHeight: 1.6,
      }} />
      
      {/* Footer "Learn More" Arrow */}
      <div className="mt-auto pt-6 flex items-center gap-2" style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--cyan-soft)', textTransform: 'uppercase'
      }}>
        <span className="group-hover:translate-x-1 transition-transform">Explore Solutions →</span>
      </div>
    </div>

    {/* Bottom accent line */}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(29,195,243,0.8), transparent)',
      zIndex: 3
    }} />
  </div>
);

export default function IndustryGridSection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Industry Grid');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const content = section.content || [];
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="industry-grid" style={{ paddingTop: '40px', paddingBottom: '120px' }}>
      <div className="inner">
        {p.heading?.en && (
          <EditableText
            value={p.heading.en}
            isEditable={isEditable}
            onSave={handle('props.heading.en')}
            className="display"
            tag="h2"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: '60px', textAlign: 'center' }}
            dangerouslySetInnerHTML
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {content.map((c: any, i: number) => (
            <div key={c.id || i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <GridCard c={c} isEditable={isEditable} onSave={handle} contentIdx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

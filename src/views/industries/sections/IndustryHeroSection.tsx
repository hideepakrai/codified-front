'use client';
import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function IndustryHeroSection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Industry Hero');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="industry-hero" style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: 'auto', position: 'relative' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80vw', height: '600px',
        background: 'radial-gradient(ellipse at top, rgba(29,195,243,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="inner" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto', zIndex: 1, position: 'relative' }}>
        <span className="label" style={{ marginBottom: '24px' }}>
          <EditableText value={p.label?.en || ''} isEditable={isEditable} onSave={handle('props.label.en')} tag="span" />
        </span>
        
        <EditableText
          value={p.heading?.en || ""}
          isEditable={isEditable}
          onSave={handle('props.heading.en')}
          className="display"
          tag="h1"
          style={{ fontSize: 'clamp(44px, 6vw, 84px)', marginBottom: '24px', fontWeight: 500 }}
          dangerouslySetInnerHTML
        />

        <EditableText
          value={p.description?.en || ""}
          isEditable={isEditable}
          onSave={handle('props.description.en')}
          className="lede"
          tag="p"
          style={{ margin: '0 auto', maxWidth: '700px', fontSize: '18px', color: 'var(--text-soft)' }}
        />

        <div className="status-bar" style={{ justifyContent: 'center', marginTop: '40px' }}>
          {p.metaItems?.map((item: any, i: number) => (
            <span key={i} className={`pill ${item.type !== 'default' ? item.type : ''}`}>
              <i /> <EditableText value={item.text?.en || ''} isEditable={isEditable} onSave={handle(`props.metaItems.${i}.text.en`)} tag="span" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

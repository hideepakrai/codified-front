'use client';
import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function IndustryCTASection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Command Center');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="industry-cta" style={{ paddingTop: '80px', paddingBottom: '160px', position: 'relative' }}>
      <div className="inner" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          padding: '60px 40px',
          background: 'linear-gradient(180deg, rgba(14,22,42,0.85), rgba(8,12,24,0.7))',
          border: '1px solid var(--line-strong)',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Glow */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle at center, rgba(29,195,243,0.1) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />

          <EditableText
            value={p.title?.en || "Ready to build your industry solution?"}
            isEditable={isEditable}
            onSave={handle('props.title.en')}
            className="display"
            tag="h2"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px', position: 'relative', zIndex: 1 }}
          />

          <EditableText
            value={p.subtitle?.en || "Contact our experts today."}
            isEditable={isEditable}
            onSave={handle('props.subtitle.en')}
            className="lede"
            tag="p"
            style={{ fontSize: '16px', color: 'var(--text-soft)', marginBottom: '40px', position: 'relative', zIndex: 1, marginLeft: 'auto', marginRight: 'auto' }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <a href="/contact" className="btn" style={{
              padding: '16px 32px',
              fontSize: '14px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              <EditableText value={p.buttonText?.en || "START A PROJECT"} isEditable={isEditable} onSave={handle('props.buttonText.en')} tag="span" />
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

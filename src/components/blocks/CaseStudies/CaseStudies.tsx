'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function CaseStudies() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Case Studies');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const caseStudies = section.content || [];
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="case-studies" style={{ padding: '80px 6vw' }}>
      <div className="inner" style={{ maxWidth: 'none' }}>
        <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
        <div className="head" style={{ marginTop: '24px', marginBottom: '40px' }}>
          <div className="copy">
            <EditableText value={p.heading?.en || ''} isEditable={isEditable} onSave={handle('props.heading.en')} className="display" tag="h2" dangerouslySetInnerHTML />
            <EditableText value={p.description?.en || ''} isEditable={isEditable} onSave={handle('props.description.en')} className="lede" tag="p" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {caseStudies.map((cs: any, i: number) => (
            <Link href={cs.props?.href?.en || cs.props?.href || '#'} key={cs.id || i} style={{ textDecoration: 'none' }}>
              <div 
                className="card group" 
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--line)',
                  background: 'var(--bg-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  height: '220px', 
                  width: '100%',
                  background: 'var(--bg-2)',
                  borderBottom: '1px solid var(--line)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={cs.props?.image} 
                    alt={cs.props?.title?.en || cs.props?.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, var(--bg-1), var(--bg-2))';
                    }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <EditableText value={cs.props?.tag || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.tag`)} tag="span" style={{ fontSize: '12px', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }} />
                    <span style={{ fontSize: '18px', color: 'var(--text)', transition: 'color 0.3s ease' }} className="group-hover:text-[var(--cyan)]">→</span>
                  </div>
                  <EditableText value={cs.props?.title?.en || cs.props?.title || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.title.en`)} tag="h3" style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }} />
                  <EditableText value={cs.props?.desc?.en || cs.props?.desc || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.desc.en`)} tag="p" style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-soft)', margin: 0 }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

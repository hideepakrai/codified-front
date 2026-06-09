'use client';
import { useMemo } from 'react';

import { RootState } from '@/redux/store';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function Hero() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state: RootState) => state.pages.currentPages);
  const isEditable = useAppSelector((state: RootState) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Hero');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="signal" data-mood="signal" data-annotate-id={`${currentPages?.slug || 'home'}-hero-section`}>
      <div className="inner">
        <div className="grid lg:!grid-cols-[6fr_4fr]">
          <div>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
            <EditableText
              value={p.heading?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              className="display reveal"
              tag="h1"
              dangerouslySetInnerHTML
            />
            <EditableText
              value={p.description?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              className="lede reveal"
              tag="p"
            />
            <div className="ctas reveal">
              <a className="btn" href={p.primaryButtonLink || "#core"}>
                <EditableText value={p.primaryButton?.en || ''} isEditable={isEditable} onSave={handle('props.primaryButton.en')} tag="span" />
                <span className="arr">→</span>
              </a>
              <a className="btn ghost" href={p.secondaryButtonLink || "#command"}>
                <EditableText value={p.secondaryButton?.en || ''} isEditable={isEditable} onSave={handle('props.secondaryButton.en')} tag="span" />
              </a>
            </div>
            <div className="meta reveal">
              {p.metaItems?.map((item: any, i: number) => (
                <span key={i}>{item.hasDot && <i />}{" "}<EditableText value={item.text?.en || ''} isEditable={isEditable} onSave={handle(`props.metaItems.${i}.text.en`)} tag="span" /></span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-0 reveal">
            {section.content?.map((item: any, idx: number) => (
              <div 
                key={item.id} 
                className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(29,195,243,0.04) 0%, rgba(14,22,42,0.5) 100%)',
                  borderColor: 'rgba(29,195,243,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: `radial-gradient(circle at center, ${idx % 2 === 0 ? 'rgba(29,195,243,0.12)' : 'rgba(154,123,255,0.12)'} 0%, transparent 70%)`
                }} />

                {/* Animated Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] opacity-40 group-hover:opacity-100 transition-all duration-300" style={{
                  background: idx % 2 === 0 ? 'linear-gradient(90deg, #1DC3F3, transparent)' : 'linear-gradient(90deg, #9a7bff, transparent)'
                }} />

                <EditableText 
                  value={item.props?.key?.en || ''} 
                  isEditable={isEditable} 
                  onSave={handle(`content.${idx}.props.key.en`)} 
                  tag="span" 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-mute)',
                    marginBottom: '20px',
                    display: 'block'
                  }} 
                />
                
                <EditableText 
                  value={item.props?.value?.en || ''} 
                  isEditable={isEditable} 
                  onSave={handle(`content.${idx}.props.value.en`)} 
                  tag="span" 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3.5vw, 42px)',
                    fontWeight: 600,
                    lineHeight: 1.1,
                    background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    filter: `drop-shadow(0 0 12px ${idx % 2 === 0 ? 'rgba(29,195,243,0.25)' : 'rgba(154,123,255,0.25)'})`
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <EditableText value={p.scrollHint?.en || ''} isEditable={isEditable} onSave={handle('props.scrollHint.en')} tag="span" />
        <span className="bar"></span>
      </div>
    </section>
  );
}

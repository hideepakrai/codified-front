'use client';
import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

const IndustryCard = ({ c, isEditable, onSave, contentIdx }: { c: any; isEditable: boolean; onSave: (fieldPath: string) => (value: string) => void; contentIdx: number }) => (
  <div
    className="engine-card"
    style={{
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      background: '#08121e',
      border: '1px solid rgba(140,180,240,0.18)',
    }}
  >
    {/* Full-bleed image — top 55% of card */}
    <div style={{ position: 'relative', width: '100%', height: '170px', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={c.props?.image}
        alt={c.props?.title?.en}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
          filter: 'brightness(0.85) saturate(1.1)',
        }}
      />
      {/* Gradient fade from image into card body */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '60px',
        background: 'linear-gradient(to bottom, transparent 0%, #08121e 100%)',
        pointerEvents: 'none',
      }} />
      {/* Tag badge top-right */}
      <div style={{
        position: 'absolute',
        top: '12px', right: '12px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.14em',
        color: '#9adcff',
        background: 'rgba(4,6,13,0.75)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(29,195,243,0.2)',
        borderRadius: '6px',
        padding: '4px 8px',
        textTransform: 'uppercase',
      }}>
        <EditableText value={c.props?.tag || ''} isEditable={isEditable} onSave={onSave(`content.${contentIdx}.props.tag`)} tag="span" />
      </div>
      {/* ACTIVE pill top-left */}
      <div style={{
        position: 'absolute',
        top: '12px', left: '12px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.12em',
        color: '#27c93f',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f', display: 'inline-block', boxShadow: '0 0 6px #27c93f' }} />
        ACTIVE
      </div>
    </div>

    {/* Text content below image */}
    <div style={{ padding: '18px 20px 20px' }}>
      <EditableText value={c.props?.title?.en || ''} isEditable={isEditable} onSave={onSave(`content.${contentIdx}.props.title.en`)} tag="h4" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        fontWeight: 600,
        color: '#e9eefb',
        margin: '0 0 8px',
        lineHeight: 1.2,
      }} />
      <EditableText value={c.props?.desc?.en || ''} isEditable={isEditable} onSave={onSave(`content.${contentIdx}.props.desc.en`)} tag="p" style={{
        fontFamily: 'var(--font-body)',
        fontSize: '12.5px',
        color: '#6e7c9a',
        margin: 0,
        lineHeight: 1.55,
      }} />
    </div>

    {/* Bottom cyan accent line */}
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(29,195,243,0.4), transparent)',
    }} />
  </div>
);

export default function Industries() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Industries');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const content = section.content;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="engine" data-mood="engine" data-annotate-id={`${currentPages?.slug || 'home'}-industries-section`}>
      <div className="inner" style={{ maxWidth: 'none' }}>
        <div className="head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px' }}>
          <div style={{ maxWidth: '900px' }}>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
            <EditableText
              value={p.heading?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              className="display"
              tag="h2"
              dangerouslySetInnerHTML
            />
            <EditableText
              value={p.description?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              className="lede"
              tag="p"
            />
          </div>
          <div className="status-bar">
            {p.metaItems?.map((item: any, i: number) => (
              <span key={i} className={`pill ${item.type !== 'default' ? item.type : ''}`}>
                <i /> <EditableText value={item.text?.en || ''} isEditable={isEditable} onSave={handle(`props.metaItems.${i}.text.en`)} tag="span" />
              </span>
            ))}
          </div>
        </div>

        <div className="engine-track-wrap overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          {/* Row 1 */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max" style={{ animationDuration: '40s' }}>
            <div className="flex gap-6 pr-6 shrink-0">
              {content.map((c: any, i: number) => (
                <IndustryCard key={`r1-1-${i}`} c={c} isEditable={isEditable} onSave={handle} contentIdx={i} />
              ))}
            </div>
            <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
              {content.map((c: any, i: number) => (
                <IndustryCard key={`r1-2-${i}`} c={c} isEditable={isEditable} onSave={handle} contentIdx={i} />
              ))}
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max mt-6" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
            <div className="flex gap-6 pr-6 shrink-0">
              {content.slice().reverse().map((c: any, i: number) => (
                <IndustryCard key={`r2-1-${i}`} c={c} isEditable={isEditable} onSave={handle} contentIdx={content.indexOf(c)} />
              ))}
            </div>
            <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
              {content.slice().reverse().map((c: any, i: number) => (
                <IndustryCard key={`r2-2-${i}`} c={c} isEditable={isEditable} onSave={handle} contentIdx={content.indexOf(c)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

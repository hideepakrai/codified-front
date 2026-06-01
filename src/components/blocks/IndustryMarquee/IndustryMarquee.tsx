'use client';
import React, { useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { defaultIndustriesData } from './IndustriesData';

const IndustryCard = ({ c }: { c: any }) => (
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
        {c.props?.tag}
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
      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        fontWeight: 600,
        color: '#e9eefb',
        margin: '0 0 8px',
        lineHeight: 1.2,
      }}>
        {c.props?.title?.en}
      </h4>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '12.5px',
        color: '#6e7c9a',
        margin: 0,
        lineHeight: 1.55,
      }}>
        {c.props?.desc?.en}
      </p>
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
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Industries');
  }, [currentPages]);

  const { p, content } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultIndustriesData.props,
      content: (section as any)?.content || defaultIndustriesData.content,
    };
  }, [section]);

  const sequence1 = [...content, ...content];
  const sequence2 = [...content.slice().reverse(), ...content.slice().reverse()];

  return (
    <section className="section" id="engine" data-mood="engine" data-annotate-id={`${currentPages?.slug || 'home'}-industries-section`}>
      <div className="inner" style={{ maxWidth: 'none' }}>
        <div className="head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px' }}>
          <div style={{ maxWidth: '560px' }}>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> {p.label?.en?.split('·')[1]}</span>
            <h2
              className="display"
              dangerouslySetInnerHTML={{ __html: p.heading?.en || "" }}
            />
            <p className="lede">{p.description?.en}</p>
          </div>
          <div className="status-bar">
            {p.metaItems?.map((item: any, i: number) => (
              <span key={i} className={`pill ${item.type !== 'default' ? item.type : ''}`}>
                <i /> {item.text?.en}
              </span>
            ))}
          </div>
        </div>

        <div className="engine-track-wrap">
          <div className="engine-track" id="engineTrack1">
            {sequence1.map((c: any, i) => (
              <IndustryCard key={`s1-${i}`} c={c} />
            ))}
          </div>
          <div className="engine-track row2" id="engineTrack2">
            {sequence2.map((c: any, i) => (
              <IndustryCard key={`s2-${i}`} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

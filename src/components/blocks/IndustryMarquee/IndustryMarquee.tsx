'use client';
import React, { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { defaultIndustriesData } from './IndustriesData';

const renderVis = (i: number) => {
  // Use deterministic values based on index to avoid hydration mismatches
  const bars = Array.from({ length: 14 }, (_, k) => ({
    y1: 20 + ((i * 7 + k * 3) % 40),
    y2: 100 + ((i * 5 + k * 7) % 30),
  }));
  const wave = Array.from({ length: 18 }, (_, k) =>
    `L${k * 16},${60 + Math.sin(k * 0.6 + i) * 22}`
  ).join(' ');

  return (
    <svg className="vis" viewBox="0 0 280 140" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`eg${i}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1DC3F3" stopOpacity="0"/>
          <stop offset="0.5" stopColor="#1DC3F3" stopOpacity="0.6"/>
          <stop offset="1" stopColor="#F300A6" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <g stroke={`url(#eg${i})`} strokeWidth="0.6" fill="none" opacity="0.9">
        {bars.map((b, k) => (
          <line key={k} x1={20 + k * 18} y1={b.y1} x2={20 + k * 18} y2={b.y2} />
        ))}
      </g>
      <path d={`M0,120 ${wave} L280,140 L0,140 Z`} fill="rgba(29,195,243,0.08)" stroke="rgba(29,195,243,0.6)" strokeWidth="0.8" />
    </svg>
  );
};


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
              <div key={`s1-${i}`} className="engine-card">
                <div className="num">{c.props?.tag}</div>
                <div className="tag">Active</div>
                <h4>{c.props?.title?.en}</h4>
                <p>{c.props?.desc?.en}</p>
                {renderVis(i)}
              </div>
            ))}
          </div>
          <div className="engine-track row2" id="engineTrack2">
            {sequence2.map((c: any, i) => (
              <div key={`s2-${i}`} className="engine-card">
                <div className="num">{c.props?.tag}</div>
                <div className="tag">Active</div>
                <h4>{c.props?.title?.en}</h4>
                <p>{c.props?.desc?.en}</p>
                {renderVis(i + 100)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

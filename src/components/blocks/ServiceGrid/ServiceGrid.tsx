"use client";
import React, { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { defaultServicesData } from './ServicesData';

export default function Services() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Services');
  }, [currentPages]);

  const { p, content } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultServicesData.props,
      content: (section as any)?.content || defaultServicesData.content,
    };
  }, [section]);

  return (
    <section className="section" id="data-grid" data-mood="data" data-annotate-id={`${currentPages?.slug || 'home'}-services-section`}>
      <div className="inner">
        <div className="head">
          <div className="copy">
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
        <div className="module-grid" id="moduleGrid">
          {content.map((m: any, i: number) => (
            <div key={m.id} className={`glow-card group flex flex-col justify-start items-start ${i % 5 === 0 ? 'glow' : ''}`}>
              <div className="ico">{m.props?.code}</div>
              <h4>{m.props?.name?.en}</h4>
              <p>{m.props?.desc?.en}</p>
              <a href={`/services/${m.props?.name?.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[10px] uppercase tracking-wider text-cyan mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn More →</a>
              <div className="meta">S{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

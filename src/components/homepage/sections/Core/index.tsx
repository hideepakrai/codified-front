"use client";
import React, { useMemo } from 'react';
import CodifiedLogo from '../CodifiedLogo';
import { useAppSelector } from '@/lib/store/hooks';
import { defaultCoreData } from './CoreData';

export default function Core() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Core');
  }, [currentPages]);

  const { p, content } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultCoreData.props,
      content: (section as any)?.content || defaultCoreData.content,
    };
  }, [section]);

  return (
    <section className="section" id="core" data-mood="core" data-annotate-id={`${currentPages?.slug || 'home'}-core-section`}>
      <div className="inner">
        <div className="layout">
          <div className="core-stage" id="coreStage">
            <CodifiedLogo />
            {p.tags?.map((tag: any, i: number) => (
              <span key={i} className={`core-tag t${i + 1}`}><i /> {tag.text?.en}</span>
            ))}
          </div>
          <div>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> {p.label?.en?.split('·')[1]}</span>
            <h2
              className="display"
              dangerouslySetInnerHTML={{ __html: p.heading?.en || "" }}
            />
            <p className="lede">
              {p.description?.en || ""}
            </p>
            <div className="core-spec">
              {content.map((item: any) => (
                <div className="spec-cell" key={item.id}>
                  <div className="k">{item.props?.key?.en}</div>
                  <div className="v">{item.props?.value?.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { defaultTechnologiesData } from './TechnologiesData';

export default function Technologies() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Technologies');
  }, [currentPages]);

  const { p, content, nodes } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultTechnologiesData.props,
      content: (section as any)?.content || defaultTechnologiesData.content,
      nodes: (section as any)?.nodes || defaultTechnologiesData.nodes,
    };
  }, [section]);

  return (
    <section className="section" id="api" data-mood="api" data-annotate-id={`${currentPages?.slug || 'home'}-technologies-section`}>
      <div className="inner">
        <div className="layout">
          <div>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> {p.label?.en?.split('·')[1]}</span>
            <h2
              className="display"
              dangerouslySetInnerHTML={{ __html: p.heading?.en || "" }}
            />
            <p className="lede">{p.description?.en}</p>
            <div className="core-spec" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              {content.map((item: any) => (
                <div className="spec-cell" key={item.id}>
                  <div className="k">{item.props?.key?.en}</div>
                  <div className="v">{item.props?.value?.en}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="net-stage" id="netStage">
            <svg id="netSvg" viewBox="0 0 600 600" preserveAspectRatio="none"></svg>
            {nodes?.map((n: any) => (
              <div
                key={n.id}
                className={`net-node ${n.props?.isCenter ? 'center' : ''}`}
                style={{ left: n.props?.left, top: n.props?.top }}
                data-id={n.id}
                data-desc={n.props?.desc?.en}
                data-endpoint={n.props?.endpoint}
              >
                <i /> {n.props?.label?.en}
              </div>
            ))}

            <div className="node-modal" id="netModal">
              <span className="close" id="netClose">×</span>
              <h4 id="netTitle">Node</h4>
              <p id="netDesc">Description</p>
              <span className="endpoint" id="netEndpoint">LAYER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { defaultAIWorkflowData } from './AIWorkflowData';

export default function AIWorkflow() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'AI Workflow');
  }, [currentPages]);

  const { p, content, metrics } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultAIWorkflowData.props,
      content: (section as any)?.content || defaultAIWorkflowData.content,
      metrics: (section as any)?.metrics || defaultAIWorkflowData.metrics,
    };
  }, [section]);

  return (
    <section className="section" id="ai" data-mood="ai" style={{ padding: 0 }} data-annotate-id={`${currentPages?.slug || 'home'}-aiworkflow-section`}>
      <div className="ai-stage">
        <div className="head">
          <div style={{ maxWidth: '800px' }}>
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

        <div className="pipeline" id="pipeline">
          <div className="pipeline-line"></div>
          <div className="pipe-progress" id="pipeProgress"></div>

          {content.map((step: any, i: number) => (
            <div className="pipe-step" data-step={i} key={step.id}>
              <div className="top"><span className="num">S · {String(i + 1).padStart(2, '0')}</span><span className="badge">Active</span></div>
              <div>
                <div className="ico">{step.props?.icon}</div>
                <h4>{step.props?.title?.en}</h4>
                <p>{step.props?.desc?.en}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ai-readout">
          {metrics?.map((m: any, i: number) => (
            <div className="read-cell" key={i}>
              <span>{m.label?.en}</span>
              <span className="v" id={m.id}>{m.value?.en}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

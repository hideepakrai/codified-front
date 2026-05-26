"use client";
import React, { useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { defaultAIWorkflowData } from './AIWorkflowData';
import { Brain, Bot, TrendingUp, RefreshCw, MessageSquare } from 'lucide-react';

const AI_ICONS: Record<string, React.ReactNode> = {
  s1: <Brain     size={22} strokeWidth={1.5} />,   // Cognitive AI
  s2: <Bot       size={22} strokeWidth={1.5} />,   // Autonomous
  s3: <TrendingUp size={22} strokeWidth={1.5} />,  // Predictive
  s4: <RefreshCw  size={22} strokeWidth={1.5} />,  // Self-Learning
  s5: <MessageSquare size={22} strokeWidth={1.5} />, // Conversational
};

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
              <div className="top">
                <span className="num">S · {String(i + 1).padStart(2, '0')}</span>
                <span className="badge">Active</span>
              </div>
              <div>
                {/* Lucide icon inside the existing .ico container */}
                <div className="ico" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(29,195,243,0.08)',
                  border: '1px solid rgba(29,195,243,0.2)',
                  color: 'var(--cyan)',
                  marginBottom: '16px',
                  transition: 'all 0.3s ease',
                }}>
                  {AI_ICONS[step.id] ?? <Brain size={22} strokeWidth={1.5} />}
                </div>
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

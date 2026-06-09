"use client";
import React, { useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';
import { Brain, Bot, TrendingUp, RefreshCw, MessageSquare } from 'lucide-react';

const AI_ICONS: Record<string, React.ReactNode> = {
  w1: <Brain     size={22} strokeWidth={1.5} />,   // Cognitive AI
  w2: <Bot       size={22} strokeWidth={1.5} />,   // Autonomous
  w3: <TrendingUp size={22} strokeWidth={1.5} />,  // Predictive
  w4: <RefreshCw  size={22} strokeWidth={1.5} />,  // Self-Learning
  w5: <MessageSquare size={22} strokeWidth={1.5} />, // Conversational
};

export default function AIWorkflow() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const sectionRef = useRef<HTMLElement>(null);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'AI Workflow');
  }, [currentPages]);

  useEffect(() => {
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('#pipeProgress', 
        { width: '0%' },
        {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '#pipeline',
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: 1
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [section]);

  if (!section) return null;

  const p = section.props;
  const content = section.content;
  const metrics = section.metrics;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section ref={sectionRef} className="section" id="ai" data-mood="ai" style={{ padding: 0 }} data-annotate-id={`${currentPages?.slug || 'home'}-aiworkflow-section`}>
      <div className="ai-stage">
        <div className="head">
          <div style={{ maxWidth: '800px' }}>
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

        <div className="pipeline" id="pipeline">
          <div className="pipeline-line"></div>
          <div className="pipe-progress" id="pipeProgress"></div>

          {content.map((step: any, i: number) => (
            <div className="pipe-step reveal" data-step={i} key={step.id}>
              <div className="top">
                <span className="num">S · {String(i + 1).padStart(2, '0')}</span>
                <span className="badge"><EditableText value={step.props?.badge || ''} isEditable={isEditable} onSave={handle(`content.${content.indexOf(step)}.props.badge`)} tag="span" /></span>
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
                <EditableText value={step.props?.title?.en || ''} isEditable={isEditable} onSave={handle(`content.${content.indexOf(step)}.props.title.en`)} tag="h4" />
                <EditableText value={step.props?.desc?.en || ''} isEditable={isEditable} onSave={handle(`content.${content.indexOf(step)}.props.desc.en`)} tag="p" />
              </div>
            </div>
          ))}
        </div>

        <div className="ai-readout">
          {metrics?.map((m: any, i: number) => (
            <div className="read-cell reveal" key={i}>
              <EditableText value={m.label?.en || ''} isEditable={isEditable} onSave={handle(`metrics.${i}.label.en`)} tag="span" />
              <EditableText value={m.value?.en || ''} isEditable={isEditable} onSave={handle(`metrics.${i}.value.en`)} className="v" tag="span" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

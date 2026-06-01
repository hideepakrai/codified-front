'use client';
import { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';

const getText = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function DeploymentSequenceSection() {
  const currentPages = useAppSelector((state) => state.app.currentPages);
  const section = useMemo(() => currentPages?.content?.find((s: any) => s?.adminTitle === 'Deployment Sequence'), [currentPages]);

  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)', background: 'rgba(29, 195, 243, 0.02)' }}>
      <div className="inner">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="label" style={{ justifyContent: 'center' }}>{getText(section?.props?.label, 'DEPLOYMENT SEQUENCE')}</span>
          <h2 className="display" style={{ fontSize: '48px', marginTop: '16px' }}>
            <span dangerouslySetInnerHTML={{ __html: getText(section?.props?.heading, 'Path to <span class="grad-text">Kickoff.</span>') }} />
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {(Array.isArray(section?.content) && section.content.length ? section.content : [
            { step: "01", title: "Technical Brief", desc: "Submit your requirements via the secure form." },
            { step: "02", title: "Expert Review", desc: "Our lead architects audit your current tech stack." },
            { step: "03", title: "Strategy Session", desc: "60-minute deep dive into solution architecture." },
            { step: "04", title: "Project Start", desc: "Legal onboarding and dedicated team assignment." }
          ]).map((item: any, i: number) => (
            <div key={i} className="reveal relative">
              <div style={{ fontSize: '64px', fontWeight: 900, opacity: 0.05, position: 'absolute', top: '-40px', left: '-10px' }}>
                {getText(item?.props?.step, item.step)}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{getText(item?.props?.title, item.title)}</h4>
                <p style={{ fontSize: '14px', opacity: 0.5, lineHeight: 1.6 }}>{getText(item?.props?.desc, item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useMemo } from 'react';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

const t = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function DeploymentSequenceSection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(
    () => currentPages?.content?.find((s: any) => s?.adminTitle === 'Deployment Sequence'),
    [currentPages]
  );

  const handle = (path: string) => (value: string) =>
    saveField(dispatch, currentPages, section?.id || '', path, value);

  const p = section?.props || {};
  const steps = Array.isArray(section?.content) && section.content.length
    ? section.content
    : [
        { id: 'step-fb-1', props: { step: '01', title: { en: 'Technical Brief' }, desc: { en: 'Submit your requirements via the secure form.' } } },
        { id: 'step-fb-2', props: { step: '02', title: { en: 'Expert Review' }, desc: { en: 'Our lead architects audit your current tech stack.' } } },
        { id: 'step-fb-3', props: { step: '03', title: { en: 'Strategy Session' }, desc: { en: '60-minute deep dive into solution architecture.' } } },
        { id: 'step-fb-4', props: { step: '04', title: { en: 'Project Start' }, desc: { en: 'Legal onboarding and dedicated team assignment.' } } },
      ];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)', background: 'rgba(29, 195, 243, 0.02)' }}>
      <div className="inner">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <EditableText
            value={t(p.label, 'DEPLOYMENT SEQUENCE')}
            isEditable={isEditable}
            onSave={handle('props.label.en')}
            tag="span"
            className="label"
            style={{ justifyContent: 'center' } as React.CSSProperties}
          />
          <h2 className="display" style={{ fontSize: '48px', marginTop: '16px' }}>
            <EditableText
              value={t(p.heading, 'Path to <span class="grad-text">Kickoff.</span>')}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              tag="span"
              dangerouslySetInnerHTML
            />
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((item: any, i: number) => (
            <div key={item.id || i} className="reveal relative">
              <div style={{ fontSize: '64px', fontWeight: 900, opacity: 0.05, position: 'absolute', top: '-40px', left: '-10px' }}>
                {t(item?.props?.step, String(i + 1).padStart(2, '0'))}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <EditableText
                  value={t(item?.props?.title, '')}
                  isEditable={isEditable}
                  onSave={handle(`content.${i}.props.title.en`)}
                  tag="h4"
                  style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' } as React.CSSProperties}
                />
                <EditableText
                  value={t(item?.props?.desc, '')}
                  isEditable={isEditable}
                  onSave={handle(`content.${i}.props.desc.en`)}
                  tag="p"
                  style={{ fontSize: '14px', opacity: 0.5, lineHeight: 1.6 } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

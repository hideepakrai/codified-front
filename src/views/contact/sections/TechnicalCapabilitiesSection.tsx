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

export default function TechnicalCapabilitiesSection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(
    () => currentPages?.content?.find((s: any) => s?.adminTitle === 'Technical Capabilities'),
    [currentPages]
  );

  const handle = (path: string) => (value: string) =>
    saveField(dispatch, currentPages, section?.id || '', path, value);

  const p = section?.props || {};
  const capabilities = Array.isArray(section?.content) && section.content.length
    ? section.content
    : [
        { id: 'cap-fb-1', props: { icon: '01', title: { en: 'Enterprise Architecture' }, desc: { en: 'Building resilient, high-availability systems that grow with your business.' } } },
        { id: 'cap-fb-2', props: { icon: '02', title: { en: 'AI-First Integration' }, desc: { en: 'Seamless deployment of LLMs and machine learning models into production.' } } },
        { id: 'cap-fb-3', props: { icon: '03', title: { en: 'Security by Design' }, desc: { en: 'End-to-end encryption and compliance protocols baked into the core.' } } },
        { id: 'cap-fb-4', props: { icon: '04', title: { en: 'Rapid Prototyping' }, desc: { en: 'Turning complex concepts into functional MVPs in record time.' } } },
      ];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)', background: 'rgba(0,0,0,0.2)' }}>
      <div className="inner">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <EditableText
            value={t(p.label, 'TECHNICAL CAPABILITIES')}
            isEditable={isEditable}
            onSave={handle('props.label.en')}
            tag="span"
            className="label"
            style={{ justifyContent: 'center' } as React.CSSProperties}
          />
          <h2 className="display" style={{ fontSize: '48px', marginTop: '16px' }}>
            <EditableText
              value={t(p.heading, 'Engineered for <span class="grad-text">Scale.</span>')}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              tag="span"
              dangerouslySetInnerHTML
            />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap: any, i: number) => (
            <div key={cap.id || i} className="reveal glow-card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', marginBottom: '16px', opacity: 0.6 }}>
                CODE_{t(cap?.props?.icon, String(i + 1).padStart(2, '0'))}
              </div>
              <EditableText
                value={t(cap?.props?.title, '')}
                isEditable={isEditable}
                onSave={handle(`content.${i}.props.title.en`)}
                tag="h4"
                style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px' } as React.CSSProperties}
              />
              <EditableText
                value={t(cap?.props?.desc, '')}
                isEditable={isEditable}
                onSave={handle(`content.${i}.props.desc.en`)}
                tag="p"
                style={{ fontSize: '14px', opacity: 0.5, lineHeight: 1.6 } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export default function TechnicalFAQSection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(
    () => currentPages?.content?.find((s: any) => s?.adminTitle === 'Technical FAQ'),
    [currentPages]
  );

  const handle = (path: string) => (value: string) =>
    saveField(dispatch, currentPages, section?.id || '', path, value);

  const p = section?.props || {};
  const faqs = Array.isArray(section?.content) && section.content.length
    ? section.content
    : [
        { id: 'faq-fb-1', props: { q: { en: 'How long does the initial audit take?' }, a: { en: 'Typically, our team provides a technical feedback loop within 24-48 hours of your submission.' } } },
        { id: 'faq-fb-2', props: { q: { en: 'Do you sign Mutual NDAs?' }, a: { en: 'Yes. All technical consultations are covered under a strictly enforced NDA to protect your IP.' } } },
        { id: 'faq-fb-3', props: { q: { en: 'Can we hire for dedicated long-term teams?' }, a: { en: 'Absolutely. We specialize in building dedicated pods for scaling enterprises and startups.' } } },
      ];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="inner">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT: Heading + CTA */}
          <div className="reveal">
            <EditableText
              value={t(p.label, 'TECHNICAL_FAQ')}
              isEditable={isEditable}
              onSave={handle('props.label.en')}
              tag="span"
              className="label"
            />
            <h2 className="display" style={{ fontSize: '42px', marginTop: '16px' }}>
              <EditableText
                value={t(p.heading, 'Common <span class="grad-text">Queries.</span>')}
                isEditable={isEditable}
                onSave={handle('props.heading.en')}
                tag="span"
                dangerouslySetInnerHTML
              />
            </h2>
            <EditableText
              value={t(p.description, 'Quick answers to standard operational questions. For detailed inquiries, please use the main transmission form.')}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              tag="p"
              className="lede"
              style={{ marginTop: '24px' } as React.CSSProperties}
            />
            <div style={{ marginTop: '40px' }}>
              <a href={p.ctaHref || 'mailto:info@codifiedweb.com'} className="btn btn-outline" style={{ padding: '14px 30px' }}>
                <EditableText
                  value={t(p.ctaText, 'Email Support Directly')}
                  isEditable={isEditable}
                  onSave={handle('props.ctaText.en')}
                  tag="span"
                />
              </a>
            </div>
          </div>

          {/* RIGHT: FAQ items */}
          <div className="reveal grid gap-8">
            {faqs.map((faq: any, i: number) => (
              <div key={faq.id || i} style={{ paddingBottom: '24px', borderBottom: '1px solid var(--line)' }}>
                <EditableText
                  value={t(faq?.props?.q, '')}
                  isEditable={isEditable}
                  onSave={handle(`content.${i}.props.q.en`)}
                  tag="h4"
                  style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: 'var(--cyan-soft)' } as React.CSSProperties}
                />
                <EditableText
                  value={t(faq?.props?.a, '')}
                  isEditable={isEditable}
                  onSave={handle(`content.${i}.props.a.en`)}
                  tag="p"
                  style={{ fontSize: '14px', opacity: 0.6, lineHeight: 1.6 } as React.CSSProperties}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

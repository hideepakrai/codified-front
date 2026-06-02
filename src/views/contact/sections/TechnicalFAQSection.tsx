'use client';
import { useAppSelector } from '@/redux/hooks';
import { useMemo } from 'react';


const getText = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function TechnicalFAQSection() {
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const section = useMemo(() => currentPages?.content?.find((s: any) => s?.adminTitle === 'Technical FAQ'), [currentPages]);

  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="inner">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="reveal">
            <span className="label">{getText(section?.props?.label, 'TECHNICAL_FAQ')}</span>
            <h2 className="display" style={{ fontSize: '42px', marginTop: '16px' }}>
              <span dangerouslySetInnerHTML={{ __html: getText(section?.props?.heading, 'Common <span class="grad-text">Queries.</span>') }} />
            </h2>
            <p className="lede" style={{ marginTop: '24px' }}>
              {getText(section?.props?.description, 'Quick answers to standard operational questions. For detailed inquiries, please use the main transmission form.')}
            </p>
            <div style={{ marginTop: '40px' }}>
              <a href={section?.props?.ctaHref || 'mailto:info@codifiedweb.com'} className="btn btn-outline" style={{ padding: '14px 30px' }}>
                {getText(section?.props?.ctaText, 'Email Support Directly')}
              </a>
            </div>
          </div>
          <div className="reveal grid gap-8">
            {(Array.isArray(section?.content) && section.content.length ? section.content : [
              { q: "How long does the initial audit take?", a: "Typically, our team provides a technical feedback loop within 24-48 hours of your submission." },
              { q: "Do you sign Mutual NDAs?", a: "Yes. All technical consultations are covered under a strictly enforced NDA to protect your IP." },
              { q: "Can we hire for dedicated long-term teams?", a: "Absolutely. We specialize in building dedicated pods for scaling enterprises and startups." }
            ]).map((faq: any, i: number) => (
              <div key={i} style={{ paddingBottom: '24px', borderBottom: '1px solid var(--line)' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: 'var(--cyan-soft)' }}>
                  {getText(faq?.props?.q, faq.q)}
                </h4>
                <p style={{ fontSize: '14px', opacity: 0.6, lineHeight: 1.6 }}>{getText(faq?.props?.a, faq.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

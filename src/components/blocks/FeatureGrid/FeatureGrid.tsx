import { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';

const getText = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function WhyChooseUs() {
  const currentPages = useAppSelector((state) => state.app.currentPages);
  const section = useMemo(() => {
    return currentPages?.content?.find((s: any) => s?.adminTitle === 'Why Us');
  }, [currentPages]);

  const specs = section?.content || [];
  const cards = section?.columns?.[0] || [];

  return (
    <section className="section" id="why" data-mood="why">
      <div className="inner">
        <div className="layout">
          <div>
            <span className="label" dangerouslySetInnerHTML={{ __html: getText(section?.props?.label, '03 · Why Us') }} />
            <h2 className="display" dangerouslySetInnerHTML={{ __html: getText(section?.props?.heading, 'Built on <span class="grad-text">trust and quality.</span>') }} />
            <p className="lede">
              {getText(section?.props?.description, 'We go beyond coding. We provide a comprehensive approach to product development, ensuring your infrastructure is built for long-term scalability and security.')}
            </p>
            <div className="core-spec" style={{ gridTemplateColumns: '1fr' }}>
              {(specs.length ? specs : [
                { props: { key: { en: 'Agile Delivery' }, value: { en: 'Rapid iterations and transparent milestones to keep you involved at every stage.' } } },
                { props: { key: { en: 'Secure by Design' }, value: { en: 'Enterprise-grade security standards embedded into our CI/CD pipelines.' } } },
                { props: { key: { en: 'Scalable Architecture' }, value: { en: 'Microservices and serverless solutions that grow seamlessly with your user base.' } } }
              ]).map((spec: any, idx: number) => (
                <div key={idx} className="spec-cell">
                  <div className="k">{getText(spec?.props?.key, '')}</div>
                  <div className="v" style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginTop: '6px' }}>{getText(spec?.props?.value, '')}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="core-stage" style={{ height: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {(cards.length ? cards : [
               { props: { code: 'QA-01', title: { en: 'Automated Testing' }, desc: { en: 'Every commit triggers rigorous testing suites ensuring zero downtime.' } } },
               { props: { code: 'DE-02', tag: { en: 'Proprietary' }, title: { en: 'DevOps CI/CD' }, desc: { en: 'Seamless deployments across environments with one-click rollbacks and container orchestration.' } } }
             ]).map((card: any, index: number) => (
              <div key={index} className={`card ${index === 1 ? 'glow' : ''}`} style={index === 1 ? { padding: '32px', borderColor: 'rgba(29,195,243,0.3)', boxShadow: '0 0 30px rgba(29,195,243,0.1)' } : { padding: '32px' }}>
                <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
                <div className="engine-card" style={{ height: 'auto', flex: 'none', border: 'none', padding: 0, background: 'none' }}>
                  <div className="num">{getText(card?.props?.code, '')}</div>
                  {card?.props?.tag ? <div className="tag" style={{ position: 'relative', top: 0, right: 0, marginTop: '12px', display: 'inline-block' }}>{getText(card?.props?.tag, '')}</div> : null}
                  <h4 style={{ fontSize: '20px' }}>{getText(card?.props?.title, '')}</h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{getText(card?.props?.desc, '')}</p>
                </div>
             </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import AboutConstellation from '@/components/blocks/AboutVisual/AboutVisual';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useMemo } from 'react';


const getText = (value: any, fallback: string) => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function AboutHeroSection() {
  const currentPages = useAppSelector((state:RootState) => state.pages.currentPages);
  const section = useMemo(() => {
    return currentPages?.content?.find((s: any) => s?.adminTitle === 'About Hero');
  }, [currentPages]);
  const stats = Array.isArray(section?.content) ? section.content : [];

  return (
    <section className="section" id="about-hero" data-mood="about" style={{ minHeight: 'auto', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="inner">
        <div className="grid lg:!grid-cols-[6fr_4fr] gap-12 items-center">
          <div>
            <span className="label" dangerouslySetInnerHTML={{ __html: getText(section?.props?.label, '01 · Who We Are') }} />
            <h1 className="display reveal" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: '16px' }}>
              <span dangerouslySetInnerHTML={{ __html: getText(section?.props?.heading, 'Building <span class="grad-text">World-Class</span> Digital Products.') }} />
            </h1>
            <p className="lede reveal" style={{ marginTop: '24px' }}>
              {getText(section?.props?.description, 'At Codified Web Solutions, we are a collective of developers, designers, and strategists dedicated to building world-class digital products. We empower businesses to innovate through clean code, scalable architecture, and intuitive design. Our mission is to transform complex business challenges into seamless digital experiences.')}
            </p>
            
            <div className="status-bar reveal" style={{ marginTop: '32px', flexWrap: 'wrap' }}>
              {(section?.props?.pills || [
                { text: { en: 'Driven by Purpose & Impact' } },
                { text: { en: 'User-First Solutions' } },
                { text: { en: 'Engineering with Empathy' } },
                { text: { en: 'Built to Scale from Day One' } }
              ]).map((pill: any, index: number) => (
                <span key={index} className={`pill ${index === 1 ? 'pulse' : ''}`}><i /> {getText(pill?.text, '')}</span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <AboutConstellation />
          </div>
        </div>

        <div className="card reveal" style={{ marginTop: '64px', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
          {(stats.length ? stats : [
            { props: { value: { en: '15+' }, label: { en: 'Expert Developers' }, accent: 'var(--cyan)' } },
            { props: { value: { en: '10+' }, label: { en: 'Countries Served Global' }, accent: 'var(--pink)' } },
            { props: { value: { en: '100%' }, label: { en: 'Custom Architecture' }, accent: 'var(--purple)' } },
            { props: { value: { en: 'AI / ML' }, label: { en: 'Specialized Tech Stack' }, accent: 'var(--cyan)' } }
          ]).map((item: any, index: number) => (
            <div key={index}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: item?.props?.accent || 'var(--cyan)', fontWeight: 'bold' }}>{getText(item?.props?.value, '')}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '8px' }}>{getText(item?.props?.label, '')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

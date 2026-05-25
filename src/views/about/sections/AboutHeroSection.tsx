'use client';
import AboutConstellation from '@/components/blocks/AboutVisual/AboutVisual';

export default function AboutHeroSection() {
  return (
    <section className="section" id="about-hero" data-mood="about" style={{ minHeight: 'auto', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="inner">
        <div className="grid lg:!grid-cols-[6fr_4fr] gap-12 items-center">
          <div>
            <span className="label">
              <span className="num">01 ·</span> Who We Are
            </span>
            <h1 className="display reveal" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: '16px' }}>
              Building <span className="grad-text">World-Class</span> Digital Products.
            </h1>
            <p className="lede reveal" style={{ marginTop: '24px' }}>
              At Codified Web Solutions, we are a collective of developers, designers, and strategists dedicated to building world-class digital products. We empower businesses to innovate through clean code, scalable architecture, and intuitive design. Our mission is to transform complex business challenges into seamless digital experiences.
            </p>
            
            <div className="status-bar reveal" style={{ marginTop: '32px', flexWrap: 'wrap' }}>
              <span className="pill"><i /> Driven by Purpose & Impact</span>
              <span className="pill pulse"><i /> User-First Solutions</span>
              <span className="pill"><i /> Engineering with Empathy</span>
              <span className="pill"><i /> Built to Scale from Day One</span>
            </div>
          </div>

          <div className="reveal">
            <AboutConstellation />
          </div>
        </div>

        <div className="card reveal" style={{ marginTop: '64px', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: 'var(--cyan)', fontWeight: 'bold' }}>15+</div>
            <div style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '8px' }}>Expert Developers</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: 'var(--pink)', fontWeight: 'bold' }}>10+</div>
            <div style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '8px' }}>Countries Served Global</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: 'var(--purple)', fontWeight: 'bold' }}>100%</div>
            <div style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '8px' }}>Custom Architecture</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: 'var(--cyan)', fontWeight: 'bold' }}>AI / ML</div>
            <div style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '8px' }}>Specialized Tech Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}

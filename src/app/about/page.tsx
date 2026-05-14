import type { Metadata } from 'next';
import CinematicInit         from '@/components/providers';
import Navigation            from '@/components/layout/Navigation';
import Footer                from '@/components/layout/Footer';
import CoreOrbit             from '@/components/blocks/core-orbit';
import FeatureGrid           from '@/components/blocks/feature-grid';
import AboutConstellation    from '@/components/blocks/about-visual';

export const metadata: Metadata = {
  title: 'About Us | Codified Web Solutions',
  description: 'At Codified Web Solutions, we are a collective of developers, designers, and strategists dedicated to building world-class digital products.',
};

export default function AboutPage() {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        {/* Custom Premium About Header */}
        <section className="section" id="about-hero" data-mood="about">
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

              {/* Custom Constellation Animation right side */}
              <div className="reveal">
                <AboutConstellation />
              </div>
            </div>

            {/* Glassmorphism Metric Grid */}
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

            {/* Additional Story Sections */}
            <div className="reveal" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div className="card" style={{ padding: '32px' }}>
                <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>What Drives Us</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
                  We believe technology should solve real problems, not create new ones. We focus on user-first solutions, building with precision and technical excellence to create long-term value for our clients. Whether it is AI integration or custom web development, we build tech that delivers powerful results.
                </p>
              </div>
              <div className="card" style={{ padding: '32px' }}>
                <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>How We Work</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
                  We follow a transparent, agile, and collaborative development process to keep our clients involved every step of the way. From idea validation to deployment, we ensure speed, quality, and flexibility. Your vision becomes our mission, every sprint, every line of code.
                </p>
              </div>
              <div className="card" style={{ padding: '32px' }}>
                <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>What Sets Us Apart</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
                  We don’t just code — we co-create. Our focus is on deep partnerships and custom-built solutions that align with your business DNA. Whether it’s launching an MVP or scaling an enterprise app, we tailor every project for maximum impact. We’re not a vendor. We’re your long-term tech partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CoreOrbit />
        <FeatureGrid />
      </main>
      <Footer />
    </>
  );
}

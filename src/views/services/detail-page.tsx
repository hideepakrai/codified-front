'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import TechStack from '@/components/shared/TechStack/TechStack';

export default function ServiceDetailPage({ service, slug }: { service: any, slug: string }) {
  const techs = [
    { name: 'Next.js', color: '#fff' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'OpenAI', color: '#74aa9c' },
    { name: 'Docker', color: '#2496ED' }
  ];

  return (
    <>
      <CinematicInit />
      <Navigation />
      
      <main style={{ paddingTop: '80px' }}>
        <section className="section" id="service-hero" data-mood={service.mood}>
          <div className="inner">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="copy reveal py-8">
                <span className="label">
                  <span className="num">S_{slug.toUpperCase()} ·</span> {service.title}
                </span>
                <h1 className="display" style={{ fontSize: 'clamp(42px, 5.5vw, 84px)', marginTop: '24px', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                  {service.tagline.split(' ').map((word: string, i: number) => (
                    <span key={i} className={i % 3 === 0 ? 'grad-text' : ''}>{word} </span>
                  ))}
                </h1>
                <p className="lede" style={{ marginTop: '30px', fontSize: '18px', maxWidth: '600px' }}>
                  {service.description}
                </p>
                
                <div className="status-bar" style={{ marginTop: '42px' }}>
                  <span className="pill pulse"><i /> SOTA CORE</span>
                  <span className="pill"><i /> 99.9% Uptime</span>
                  <span className="pill"><i /> Enterprise Security</span>
                </div>
              </div>

              <div className="service-hero-img reveal relative w-full h-full min-h-[400px]" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src={service.heroImage || '/images/services/web-hero.png'} alt={service.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="capabilities" data-mood="data" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="inner">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span className="label" style={{ justifyContent: 'center' }}>CORE CAPABILITIES</span>
              <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginTop: '16px' }}>
                Engineered for <span className="grad-text">Performance.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 reveal">
              {service.features.map((feat: any, i: number) => (
                <div key={i} className="glow-card relative group">
                  <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cyan)', marginBottom: '20px', letterSpacing: '0.2em' }}>
                    [ CAP_0{i+1} ]
                  </div>
                  <h3 className="display" style={{ fontSize: '24px', marginBottom: '14px' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-soft)', fontSize: '15px', lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tech-stack" data-mood="core">
          <div className="inner">
            <div className="card reveal" style={{ padding: '80px 60px', overflow: 'hidden', position: 'relative' }}>
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <span className="label">TECHNICAL BLUEPRINT</span>
                  <h2 className="display" style={{ fontSize: '38px', marginTop: '18px' }}>{service.techStack.title}</h2>
                  <p className="lede" style={{ marginTop: '22px' }}>{service.techStack.desc}</p>
                  <TechStack techs={techs} />
                </div>
                <div className="reveal">
                   <img src="/images/services/tech-orbit.png" alt="Tech Orbit" style={{ width: '100%', borderRadius: '20px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

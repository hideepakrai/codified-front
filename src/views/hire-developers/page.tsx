'use client';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';

export default function HireDevelopersPage({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />

      <Navigation />

      
      <main className="relative min-h-screen overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Cinematic Background */}
        <div style={{ 
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'url(/images/contact-bg.png) no-repeat center center',
          backgroundSize: 'cover', opacity: 0.15, filter: 'grayscale(0.5) blur(40px)'
        }} />
        <div style={{ 
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'radial-gradient(circle at 30% 70%, rgba(29,195,243,0.05) 0%, transparent 70%)'
          
        }} />

        {/* Hero Section */}
        <section className="section" id="hire-hero" style={{ minHeight: 'auto', paddingTop: '120px', paddingBottom: '60px' }}>
          <div className="inner text-center max-w-4xl mx-auto">
            <span className="label mb-6">
              <span className="num">01 ·</span> Hire TechAhead Developers
            </span>
            <h1 className="display reveal" style={{ fontSize: ' clamp(36px, 5vw, 64px)', marginTop: '16px' }}>
              Scale your team with <span className="grad-text">vetted developers</span>.
            </h1>
            <p className="lede reveal mx-auto" style={{ marginTop: '24px', maxWidth: '800px' }}>
              Unlock business growth with software that’s built for scale, security, and lasting impact. We provide experienced developers for modern web, mobile, and enterprise solutions.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section" style={{ paddingTop: '0', minHeight: 'auto', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Scalable Solutions", desc: "Custom-built apps grow with your business—you’ll never outgrow your software." },
                { title: "Future-Proof Tech", desc: "We use the latest frameworks for flexibility, performance, and security." },
                { title: "Enterprise-Grade Security", desc: "Built-in protections and compliance ensure your data stays safe." },
                { title: "UX-Focused Design", desc: "We deliver app–like experiences that delight users and drive engagement." },
                { title: "Dedicated Team", desc: "Collaborative, expert developers aligned to your goals—no freelancers, no gaps." },
                { title: "Faster Time-to-Market", desc: "Our streamlined processes help you launch quicker and smarter." }
              ].map((item, i) => (
                <div key={i} className="card reveal" style={{ padding: '32px' }}>
                  <h3 className="display" style={{ fontSize: '20px', color: 'var(--cyan)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="text-center mb-16">
              <h2 className="display" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Our Process</h2>
              <p className="lede mx-auto mt-4">We guide you through digital creation to unlock new avenues of growth.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Product Research", desc: "To lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase." },
                { title: "Product Design", desc: "By putting user's need at the forefront, we tell a unique story of your company, juggling with fancy visual elements." },
                { title: "Product Development", desc: "The motto of our development process is creating digital experiences that are both appealing and functional." },
                { title: "Product Growth & Care", desc: "With various tools, our experts can help you expand the target audience and increase brand awareness." }
              ].map((step, i) => (
                <div key={i} className="reveal relative" style={{ padding: '24px', borderLeft: '2px solid var(--line-strong)' }}>
                  <div style={{ position: 'absolute', left: '-6px', top: '24px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--cyan)' }}></div>
                  <h3 className="display" style={{ fontSize: '18px', color: 'var(--text)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-soft)', fontSize: '14px', marginTop: '12px' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '120px' }}>
          <div className="inner text-center">
            <h2 className="display mb-12" style={{ fontSize: '32px' }}>Trusted by Top Technologies</h2>
            <div className="card reveal" style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px' }}>
              {[
                { value: "500+", label: "Happy Clients", color: "var(--cyan)" },
                { value: "50+", label: "Team Members", color: "var(--pink)" },
                { value: "15+", label: "Years Experience", color: "var(--purple)" },
                { value: "1000+", label: "Projects Completed", color: "var(--cyan)" },
                { value: "24/7", label: "Support", color: "var(--pink)" }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: stat.color, fontWeight: 'bold' }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-soft)', marginTop: '8px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

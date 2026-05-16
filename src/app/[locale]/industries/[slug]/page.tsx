import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industriesData } from '@/data/industriesData';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import { ShieldCheck, Globe, Zap, Cpu, Lock, BarChart3 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `${industry.title} | Codified Industry Solutions`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const roadmapSteps = industry.roadmap || [
    { title: "Technical Audit", desc: "Security and compliance evaluation." },
    { title: "Arch Blueprint", desc: "System architecture and data flow design." },
    { title: "Core Build", desc: "Enterprise development sprints." },
    { title: "Scale Phase", desc: "Global rollout and optimization." }
  ];

  return (
    <>
      <CinematicInit />
      <Navigation />

      <main>
        {/* ── IMMERSIVE FULL-SCREEN HERO ── */}
        <section className="section" id="industry-hero" data-mood={industry.mood} style={{
          minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', inset: 0, zIndex: -1,
            background: `url(${industry.heroImage}) no-repeat center center`,
            backgroundSize: 'cover', opacity: 0.35, transform: 'scale(1.1)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: -1,
            background: 'radial-gradient(circle at center, transparent 0%, var(--bg) 95%)'
          }} />

          <div className="inner" style={{ textAlign: 'center', zIndex: 10 }}>
            <div className="reveal">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
                <span style={{ width: '40px', height: '1px', background: 'var(--cyan)' }}></span>
                <span className="label" style={{ margin: 0 }}>VERTICAL / 0{Object.keys(industriesData).indexOf(slug) + 1}</span>
                <span style={{ width: '40px', height: '1px', background: 'var(--cyan)' }}></span>
              </div>
              <h1 className="display" style={{ fontSize: 'clamp(56px, 10vw, 110px)', lineHeight: 0.85, letterSpacing: '-0.05em' }}>
                {industry.title.split(' ').map((word, i) => (
                  <span key={i} style={{ display: 'inline-block' }}>
                    {word === '&' ? <span className="grad-text" style={{ fontStyle: 'italic' }}>&</span> : word}{' '}
                  </span>
                ))}
              </h1>
              <p className="lede" style={{ marginTop: '40px', fontSize: '22px', maxWidth: '800px', margin: '40px auto 0', lineHeight: 1.4 }}>
                {industry.tagline}
              </p>

              <div style={{ marginTop: '80px' }}>
                <div className="mouse-icon"><div className="wheel"></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUCCESS METRICS BAR (Premium) ── */}
        <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)' }}>
          <div className="inner" style={{ padding: '20px 0' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {(industry.metrics || []).map((m, i) => (
                <div key={i} className="reveal relative group">
                  <div style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                    <span className="grad-text">{m.value}</span>
                  </div>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{m.label}</div>
                  {i < (industry.metrics?.length || 0) - 1 && (
                    <div className="hidden md:block" style={{ position: 'absolute', top: '20%', right: '-40px', height: '60%', width: '1px', background: 'var(--line-strong)' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHALLENGE & AUDIT ── */}
        <section className="section" id="overview" data-mood="data" style={{ padding: '50px 0' }}>
          <div className="inner">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <span className="label">THE CORE CHALLENGE</span>
                <h2 className="display" style={{ fontSize: '52px', marginTop: '24px', lineHeight: 1.1 }}>
                  Engineering for the <span className="grad-text">Extreme.</span>
                </h2>
                <p className="lede" style={{ marginTop: '32px', fontSize: '18px', opacity: 0.8 }}>
                  {industry.description}
                </p>
                <div style={{ marginTop: '56px', display: 'flex', gap: '20px' }}>
                  <a href="/contact" className="btn btn-primary" style={{ padding: '18px 40px' }}>Initiate Technical Audit</a>
                </div>
              </div>

              <div className="reveal">
                <div style={{
                  padding: '60px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)',
                  borderRadius: '40px', backdropFilter: 'blur(30px)', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--cyan)', opacity: 0.05, filter: 'blur(80px)' }}></div>
                  <div style={{ position: 'absolute', top: '30px', right: '40px', fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.3, letterSpacing: '0.2em' }}>
                    SOTA_VALIDATED_0x3F
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {industry.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: '24px' }}>
                        <div style={{
                          width: '40px', height: '40px', borderRadius: '12px', border: '1px solid var(--line-strong)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(29, 195, 243, 0.05)', color: 'var(--cyan)', flexShrink: 0
                        }}>
                          {i === 0 ? <Zap size={18} /> : i === 1 ? <Cpu size={18} /> : <BarChart3 size={18} />}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '19px', marginBottom: '6px', letterSpacing: '-0.01em' }}>{f.title}</div>
                          <div style={{ fontSize: '15px', opacity: 0.6, lineHeight: 1.6 }}>{f.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEW SECTION 1: TRUST & COMPLIANCE ── */}
        <section className='max-w-7xl mx-auto'  id="compliance" data-mood="core" style={{ padding: '100px 0', borderTop: '1px solid var(--line)' }}>
          <div className="inner">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 text-center">
              {[
                { icon: <ShieldCheck size={32} />, title: "HIPAA / PCI-DSS", desc: "Enterprise compliance." },
                { icon: <Lock size={32} />, title: "End-to-End Encryption", desc: "Military grade security." },
                { icon: <Globe size={32} />, title: "GDPR Compliant", desc: "Global data privacy." },
                { icon: <Zap size={32} />, title: "99.99% Uptime", desc: "Mission critical reliability." }
              ].map((item, i) => (
                <div key={i} className="reveal glow-card" style={{ padding: '40px' }}>
                  <div style={{ color: 'var(--cyan)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                  <h4 style={{ fontWeight: 600, marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ fontSize: '13px', opacity: 0.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REDESIGNED GLOBAL INFRASTRUCTURE ── */}
        <section className="section" id="infra" data-mood="data" style={{ padding: '50px 0', overflow: 'hidden' }}>
          <div className="inner">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 reveal">
                <div style={{
                  position: 'relative', borderRadius: '40px', overflow: 'hidden',
                  border: '1px solid var(--line-strong)', background: 'rgba(0,0,0,0.4)',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
                }}>
                  <img src="/images/industries/global-map.png" alt="Global Network" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--bg) 95%)' }}></div>

                  {/* Floating Pings */}
                  <div className="pulse" style={{ position: 'absolute', top: '30%', left: '20%', width: '10px', height: '10px', background: 'var(--cyan)', borderRadius: '50%' }}></div>
                  <div className="pulse" style={{ position: 'absolute', top: '50%', left: '70%', width: '10px', height: '10px', background: 'var(--magenta)', borderRadius: '50%', animationDelay: '1s' }}></div>
                  <div className="pulse" style={{ position: 'absolute', top: '65%', left: '40%', width: '10px', height: '10px', background: 'var(--cyan)', borderRadius: '50%', animationDelay: '0.5s' }}></div>
                </div>
              </div>

              <div className="lg:col-span-5 reveal">
                <span className="label">DISTRIBUTED INFRASTRUCTURE</span>
                <h2 className="display" style={{ fontSize: '48px', marginTop: '20px', lineHeight: 1.1 }}>
                  Deployed on <span className="grad-text">Global Edge</span> Nodes.
                </h2>
                <p className="lede" style={{ marginTop: '24px', opacity: 0.8 }}>
                  Our industrial solutions are served from 200+ edge locations globally, ensuring sub-50ms latency for users in every continent.
                </p>

                <div style={{ marginTop: '48px', padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-strong)', borderRadius: '20px', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                  <div style={{ color: 'var(--cyan)', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>// LIVE_NETWORK_STATUS</span>
                    <span className="pulse">ACTIVE</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.5 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>AWS_US_EAST_1</span> <span>CONNECTED / 14ms</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>GCP_EUROPE_WEST</span> <span>CONNECTED / 22ms</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>AZURE_ASIA_SOUTH</span> <span>CONNECTED / 38ms</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--cyan)' }}><span>EDGE_CACHE_HIT_RATE</span> <span>98.4%</span></div>
                  </div>
                </div>

                <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['AWS Global', 'Cloudflare Edge', 'GCP Antos'].map(t => (
                    <span key={t} style={{ padding: '6px 14px', border: '1px solid var(--line-strong)', borderRadius: '999px', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.6 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STRATEGIC SOLUTIONS (Refined) ── */}
        <section className="section" id="solutions" data-mood="signal" style={{ padding: '50px 0', borderTop: '1px solid var(--line)' }}>
          <div className="inner">
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <span className="label" style={{ justifyContent: 'center' }}>STRATEGIC SOLUTIONS</span>
              <h2 className="display" style={{ fontSize: '56px', marginTop: '16px' }}>Industrial <span className="grad-text">Innovation.</span></h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {industry.solutions.map((s, i) => (
                <div key={i} className="reveal glow-card" style={{ padding: '80px 60px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '40px', opacity: 0.05, fontWeight: 900, fontFamily: 'var(--font-mono)' }}>0{i + 1}</div>
                  <h3 className="display" style={{ fontSize: '38px', marginBottom: '24px' }}>{s.title}</h3>
                  <p className="lede" style={{ fontSize: '17px', lineHeight: 1.8, opacity: 0.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROADMAP SECTION ── */}
        <section className="section" id="roadmap" data-mood="engine" style={{ padding: '50px 0', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid var(--line)' }}>
          <div className="inner">
            <div style={{ marginBottom: '100px' }}>
              <span className="label">TRANSFORMATION ROADMAP</span>
              <h2 className="display" style={{ fontSize: '52px', marginTop: '16px' }}>Path to <span className="grad-text">Production.</span></h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">
              {roadmapSteps.map((step, i) => (
                <div key={i} className="reveal relative">
                  <div style={{ fontSize: '100px', fontWeight: 900, WebkitTextStroke: '1px rgba(255,255,255,0.05)', color: 'transparent', position: 'absolute', top: '-60px', left: '-20px', zIndex: 0 }}>
                    0{i + 1}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4 className="display" style={{ fontSize: '24px', marginBottom: '16px' }}>{step.title}</h4>
                    <p style={{ fontSize: '15px', opacity: 0.5, lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW SECTION 3: EXPERT CTA ── */}
        <section className="section" id="expert-cta" data-mood="signal" style={{ padding: '50px 0', borderTop: '1px solid var(--line)' }}>
          <div className="inner">
            <div className="reveal" style={{
              padding: '40px', borderRadius: '30px',
              background: 'linear-gradient(135deg, rgba(14,22,42,0.8), rgba(8,12,28,0.9))',
              border: '1px solid var(--line-strong)', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'var(--cyan)', opacity: 0.05, filter: 'blur(150px)', borderRadius: '50%' }}></div>

              <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div style={{ textAlign: 'left' }}>
                  <span className="label">EXPERT CONSULTATION</span>
                  <h2 className="display" style={{ fontSize: '56px', marginTop: '24px', lineHeight: 1 }}>
                    Talk to our <span className="grad-text">Lead Architects.</span>
                  </h2>
                  <p className="lede" style={{ marginTop: '32px', marginBottom: '48px', opacity: 0.8 }}>
                    Skip the sales pitch. Book a technical deep-dive with our senior engineering team to discuss your specific industrial requirements.
                  </p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="/contact" className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '16px' }}>Schedule Call</a>
                    <a href="/contact" className="btn btn-outline" style={{ padding: '20px 50px', fontSize: '16px' }}>Download Whitepaper</a>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div style={{
                    aspectRatio: '1', borderRadius: '50%', border: '1px solid var(--line-strong)',
                    padding: '40px', background: 'rgba(255,255,255,0.02)'
                  }}>
                    <div style={{
                      width: '100%', height: '100%', borderRadius: '50%',
                      background: 'url(/images/industries/general-premium.png) no-repeat center center',
                      backgroundSize: 'cover', border: '1px solid var(--line-strong)'
                    }}></div>
                  </div>
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

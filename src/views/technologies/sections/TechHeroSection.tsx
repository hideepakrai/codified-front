'use client';
import React from 'react';
import { Shield, Zap, Globe, Code2, Cpu, Server, BrainCircuit, CloudLightning } from 'lucide-react';

const techBadges = [
  { icon: <Code2 size={14} strokeWidth={1.5} />, label: 'Next.js 15' },
  { icon: <BrainCircuit size={14} strokeWidth={1.5} />, label: 'OpenAI' },
  { icon: <CloudLightning size={14} strokeWidth={1.5} />, label: 'AWS' },
  { icon: <Cpu size={14} strokeWidth={1.5} />, label: 'TensorFlow' },
  { icon: <Server size={14} strokeWidth={1.5} />, label: 'Kubernetes' },
];

export default function TechHeroSection() {
  return (
    <section className="section" id="tech-hero" data-mood="signal" style={{ paddingTop: '160px' }}>
      <div className="inner">

        {/* Two-column layout matching the site's standard hero pattern */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center' }}
          className="lg:!grid-cols-2"
        >
          {/* ── Left: Copy ── */}
          <div>
            <span className="label">
              <span className="num">01·</span> Technology Platform
            </span>

            <h1 className="display reveal">
              Built for <span className="grad-text">Enterprise</span><br />Scale &amp; Speed.
            </h1>

            <p className="lede reveal">
              We engineer high-performance platforms using modern, battle-tested technologies — delivering applications that are secure, scalable, and built to handle millions of users.
            </p>

            <div className="ctas reveal" style={{ marginTop: '32px' }}>
              <a className="btn" href="#tech-stack">Explore Stack <span className="arr">→</span></a>
              <a className="btn ghost" href="/contact">Hire Developers</a>
            </div>

            {/* Meta pills */}
            <div className="meta reveal" style={{ marginTop: '32px' }}>
              <span><i /> SOC 2 Compliant</span>
              <span><i /> 99.99% Uptime SLA</span>
              <span><i /> Sub-50ms APIs</span>
            </div>

            {/* Stats */}
            <div className="reveal" style={{
              display: 'flex', gap: '32px', marginTop: '40px',
              paddingTop: '32px', borderTop: '1px solid var(--line)',
              flexWrap: 'wrap',
            }}>
              {[
                { val: '10M+', sub: 'API Calls / Day' },
                { val: '< 50ms', sub: 'P99 Latency' },
                { val: '150+', sub: 'Engineers' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.4vw, 34px)',
                    fontWeight: 700, color: 'var(--cyan)', letterSpacing: '-0.02em',
                  }}>{s.val}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image card ── */}
          <div className="reveal" style={{ position: 'relative' }}>

            {/* Floating tech badges — positioned absolutely around the card */}
            {techBadges.map((b, i) => {
              const positions = [
                { top: '-18px', left: '20%' },
                { top: '15%', right: '-20px' },
                { bottom: '30%', right: '-24px' },
                { bottom: '-18px', right: '25%' },
                { top: '45%', left: '-24px' },
              ];
              return (
                <div key={i} style={{
                  position: 'absolute',
                  ...positions[i],
                  display: 'flex', alignItems: 'center', gap: '7px',
                  padding: '7px 13px',
                  borderRadius: '999px',
                  background: 'rgba(7, 11, 24, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--line-strong)',
                  color: 'var(--cyan-soft)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  animation: `tech-float 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}>
                  <span style={{ color: 'var(--cyan)' }}>{b.icon}</span>
                  {b.label}
                </div>
              );
            })}

            {/* Main image card using existing .card + .corner system */}
            <div className="card" style={{ padding: 0, borderRadius: '20px', overflow: 'hidden' }}>
              <span className="corner tl"></span>
              <span className="corner tr"></span>
              <span className="corner bl"></span>
              <span className="corner br"></span>

              {/* Window chrome bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 18px',
                borderBottom: '1px solid var(--line)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', flexShrink: 0 }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', flexShrink: 0 }} />
                <span style={{
                  marginLeft: '10px', fontSize: '11px', color: 'var(--text-mute)',
                  fontFamily: 'var(--font-mono)', letterSpacing: '0.06em',
                }}>
                  codified@stack:~/production <span style={{ color: 'var(--cyan)' }}>●</span>
                </span>
              </div>

              {/* Image */}
              <div style={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85"
                  alt="Engineering at Scale"
                  style={{ display: 'block', width: '100%', height: '360px', objectFit: 'cover', filter: 'brightness(0.7) saturate(1.2)' }}
                />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(4,6,13,0.85) 0%, rgba(4,6,13,0.2) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Bottom status bar inside image */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '16px 20px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>
                    <span style={{ color: '#27c93f', fontSize: '8px' }}>⬤</span> All systems operational
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--cyan)', letterSpacing: '0.1em',
                    background: 'rgba(29,195,243,0.08)',
                    padding: '4px 10px', borderRadius: '6px',
                    border: '1px solid rgba(29,195,243,0.2)',
                  }}>
                    v4.2.1 · PROD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — reusing site-native class */}
      <div className="scroll-hint">
        <span>Scroll to explore</span><span className="bar"></span>
      </div>

      <style>{`
        @keyframes tech-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
    </section>
  );
}

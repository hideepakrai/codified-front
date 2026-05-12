'use client';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Zap, Brain, Shield, Globe } from 'lucide-react';

const AI_STACK = [
  { name: 'GPT-4o',       icon: '🧠', color: '#1DC3F3' },
  { name: 'LangChain',    icon: '🔗', color: '#9a7bff' },
  { name: 'TensorFlow',   icon: '⚡', color: '#F300A6' },
  { name: 'PyTorch',      icon: '🔥', color: '#f1c27a' },
  { name: 'Vertex AI',    icon: '☁️', color: '#5b8cff' },
  { name: 'Hugging Face', icon: '🤗', color: '#9adcff' },
  { name: 'OpenCV',       icon: '👁️', color: '#1DC3F3' },
  { name: 'CUDA',         icon: '⬡',  color: '#9a7bff' },
];

const STATS = [
  { value: '99.9%', label: 'Uptime SLA',   icon: <Shield size={14} /> },
  { value: '< 80ms', label: 'API Latency', icon: <Zap size={14} /> },
  { value: '500M+',  label: 'AI Inferences', icon: <Brain size={14} /> },
  { value: '40+',    label: 'Countries',    icon: <Globe size={14} /> },
];

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(4,6,13,0) 0%, rgba(4,6,13,0.98) 8%)',
      borderTop: '1px solid rgba(29,195,243,0.12)',
    }}>

      {/* ── Neural grid background ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(29,195,243,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(29,195,243,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, transparent 20%, black 100%)',
      }} />

      {/* ── Glow blobs ── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(29,195,243,0.06) 0%, transparent 70%)',
      }} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[250px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(154,123,255,0.05) 0%, transparent 70%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-[6vw]">

        {/* ── AI CTA Banner ── */}
        <div style={{
          margin: '0 0 60px',
          padding: '48px 48px',
          borderRadius: '20px',
          border: '1px solid rgba(29,195,243,0.2)',
          background: 'linear-gradient(135deg, rgba(14,22,42,0.9) 0%, rgba(8,12,28,0.95) 50%, rgba(20,10,36,0.9) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Banner glow */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '20px', pointerEvents: 'none',
            background: 'linear-gradient(135deg, rgba(29,195,243,0.06) 0%, transparent 50%, rgba(243,0,166,0.04) 100%)',
          }} />
          <div style={{
            position: 'absolute', top: '-1px', left: '10%', right: '10%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(29,195,243,0.6), rgba(154,123,255,0.4), transparent)',
          }} />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div style={{ maxWidth: '540px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.22em',
                color: 'var(--cyan-soft)', textTransform: 'uppercase',
                padding: '5px 12px', border: '1px solid rgba(29,195,243,0.25)',
                borderRadius: '999px', background: 'rgba(29,195,243,0.06)', marginBottom: '20px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1DC3F3', boxShadow: '0 0 8px #1DC3F3', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                AI-Powered Solutions Ready
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(24px, 3vw, 40px)',
                letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--text)', margin: '0 0 12px',
              }}>
                Ready to build with <span style={{
                  background: 'linear-gradient(120deg, #1DC3F3, #9a7bff)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}>intelligence?</span>
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-mute)', lineHeight: 1.6, margin: 0 }}>
                From LLM integration to real-time computer vision — we deploy production-grade AI in weeks, not months.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
              <a href="#command" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.04em',
                padding: '14px 28px', borderRadius: '999px',
                background: 'linear-gradient(135deg, rgba(29,195,243,0.2), rgba(154,123,255,0.15))',
                border: '1px solid rgba(29,195,243,0.4)',
                color: '#dff5ff', transition: 'all .25s ease',
                textDecoration: 'none',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)', e.currentTarget.style.boxShadow = '0 12px 40px rgba(29,195,243,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.transform = '', e.currentTarget.style.boxShadow = '')}
              >
                Start a Project <span>→</span>
              </a>
              <a href="mailto:info@codifiedweb.com" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em',
                padding: '10px 22px', borderRadius: '999px',
                border: '1px solid var(--line-strong)',
                color: 'var(--text-soft)', transition: 'color .2s',
                textDecoration: 'none',
              }}>
                <Mail size={13} /> info@codifiedweb.com
              </a>
            </div>
          </div>
        </div>

        {/* ── AI Tech Stack Bar ── */}
        <div style={{ marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: '18px',
          }}>AI &amp; Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {AI_STACK.map((tech) => (
              <span key={tech.name} style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em',
                color: tech.color, padding: '6px 14px',
                border: `1px solid ${tech.color}33`,
                borderRadius: '999px',
                background: `${tech.color}0d`,
                transition: 'all .2s ease', cursor: 'default',
              }}>
                <span>{tech.icon}</span> {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── Live Stats Row ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '60px',
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{
              padding: '18px 20px', borderRadius: '12px',
              border: '1px solid var(--line-strong)',
              background: 'linear-gradient(180deg, rgba(14,22,42,0.7), rgba(8,12,24,0.6))',
              display: 'flex', flexDirection: 'column', gap: '6px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--cyan)', fontSize: '11px' }}>
                {s.icon} <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>{s.label}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Links Grid ── */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px', marginBottom: '48px' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--text)', marginBottom: '20px', letterSpacing: '0.04em' }}>About</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Our Company', 'Core Team', 'Career', 'CSR', 'How We Work'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: 'var(--text-mute)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)')}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--text)', marginBottom: '20px', letterSpacing: '0.04em' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['iOS App Dev', 'Android App Dev', 'AI Solutions', 'Web Development', 'Cloud & DevOps', 'Digital Transform'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: 'var(--text-mute)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)')}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--text)', marginBottom: '20px', letterSpacing: '0.04em' }}>AI &amp; Tech</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Generative AI', 'Computer Vision', 'NLP & LLMs', 'ML Pipelines', 'Edge AI', 'IoT & Sensors'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: 'var(--text-mute)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)')}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--text)', marginBottom: '20px', letterSpacing: '0.04em' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Fintech', 'Healthcare AI', 'E-Commerce', 'EdTech', 'Real Estate'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: 'var(--text-mute)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)')}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'var(--text)', marginBottom: '20px', letterSpacing: '0.04em' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="mailto:info@codifiedweb.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-mute)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)')}>
                  <Mail size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} /> info@codifiedweb.com
                </a>
                <a href="tel:+919982000105" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-mute)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)')}>
                  <Phone size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} /> (+91) 99 820 001 05
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: 'var(--text-mute)' }}>
                  <MapPin size={13} style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Jagatpura, Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid var(--line)', paddingTop: '28px', paddingBottom: '28px',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px',
        }}>
          {/* Logo + tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src="https://www.codifiedweb.com/Image/codified-white-logo.webp" alt="Codified" style={{ height: '38px', objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em',
              color: 'var(--text-mute)', borderLeft: '1px solid var(--line-strong)', paddingLeft: '14px',
            }}>AI · WEB · MOBILE</span>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {[
              { Icon: Facebook, hoverColor: 'var(--cyan)' },
              { Icon: Instagram, hoverColor: 'var(--magenta)' },
              { Icon: Linkedin, hoverColor: 'var(--cyan)' },
              { Icon: Twitter, hoverColor: 'var(--text)' },
            ].map(({ Icon, hoverColor }, i) => (
              <a key={i} href="#" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--line)', color: 'var(--text-mute)',
                background: 'rgba(255,255,255,0.02)', transition: 'all .2s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = hoverColor, e.currentTarget.style.borderColor = 'rgba(29,195,243,0.3)', e.currentTarget.style.background = 'rgba(29,195,243,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mute)', e.currentTarget.style.borderColor = 'var(--line)', e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--text-mute)' }}>
            © 2025–2026 Codified Web Solutions
          </p>
        </div>

      </div>
    </footer>
  );
}

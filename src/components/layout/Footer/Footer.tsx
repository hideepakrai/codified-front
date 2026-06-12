'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Zap, Brain, Shield, Globe } from 'lucide-react';
import DynamicLogoSlider from '@/components/blocks/DynamicLogoSlider/DynamicLogoSlider';

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

      <div className="relative px-12 mx-auto pt-16">

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
              <a href="mailto:hello@codifiedweb.com" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em',
                padding: '10px 22px', borderRadius: '999px',
                border: '1px solid var(--line-strong)',
                color: 'var(--text-soft)', transition: 'color .2s',
                textDecoration: 'none',
              }}>
                <Mail size={13} /> hello@codifiedweb.com
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

        {/* ── Links & Contact Grid (New Design) ── */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '60px', paddingBottom: '60px' }}>
          
          {/* Top row: Logo & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div>
              <img src="/img/white-logo.svg" alt="Codified Web" style={{ height: '62px', marginBottom: '16px' }} />
              <p style={{ color: '#a0aab8', fontSize: '15px', maxWidth: '500px' }}>
                Build Smarter. Better. Faster. We build world-class digital products that empower innovation and growth.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '16px', color: '#fff', fontWeight: 500 }}>Follow us:</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { Icon: Linkedin, link: 'https://www.linkedin.com/company/codified-web-solutions/?utm_source=website' },
                  { Icon: Facebook, link: 'https://www.facebook.com/codifiedweb/?utm_source=website' },
                  { Icon: Instagram, link: 'https://www.instagram.com/codified_web/?utm_source=website' },
                ].map(({ Icon, link }, i) => (
                  <a key={i} href={link} target={link !== '#' ? "_blank" : undefined} rel={link !== '#' ? "noopener noreferrer" : undefined} style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)', color: '#fff', transition: 'all .2s ease',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Contact Boxes */}
            <div style={{ flex: '0 0 380px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '18px 24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5c5c' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ color: '#f1c27a', fontSize: '13px', marginBottom: '4px' }}>Our email</div>
                  <a href="mailto:hello@codifiedweb.com" style={{ color: '#fff', fontSize: '15px', textDecoration: 'none' }}>hello@codifiedweb.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '18px 24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f1c27a' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ color: '#f1c27a', fontSize: '13px', marginBottom: '4px' }}>Call to our sales department</div>
                  <a href="tel:+919982000105" style={{ color: '#fff', fontSize: '15px', textDecoration: 'none' }}>+91 99 820 001 05</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '18px 24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1DC3F3' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ color: '#f1c27a', fontSize: '13px', marginBottom: '4px' }}>Head Office</div>
                  <div style={{ color: '#fff', fontSize: '14px', lineHeight: 1.5 }}>
                    #105, Mohan Nagar, Ramnagariya,<br/>
                    Jagatpura, Jaipur, Rajasthan 302017
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Links Columns */}
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '40px' }}>
              
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16px', color: '#fff', marginBottom: '24px' }}>About</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'About Us',         href: '/about' },
                    { label: 'Hire Developers',  href: '/hire-developers' },
                    { label: 'Technologies',     href: '/technologies' },
                    { label: 'Internship',       href: '/internship' },
                    { label: 'Careers',          href: '/careers' },
                    { label: 'Contact',          href: '/contact' },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} style={{ fontSize: '14px', color: '#a0aab8', textDecoration: 'none', transition: 'color .2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#a0aab8')}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16px', color: '#fff', marginBottom: '24px' }}>Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'AI Consulting',     href: '/services/ai-consulting' },
                    { label: 'AI Chatbot',        href: '/services/ai-chatbot' },
                    { label: 'Generative AI',     href: '/services/gen-ai' },
                    { label: 'UI/UX Design',      href: '/services/ui-ux-design' },
                    { label: 'Full Stack Dev',    href: '/services/full-stack-development' },
                    { label: 'Mobile App Dev',    href: '/services/mobile-app-development' },
                    { label: 'SEO / SMM / PPC',   href: '/services/seo-smm-amo-ppc' },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} style={{ fontSize: '14px', color: '#a0aab8', textDecoration: 'none', transition: 'color .2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#a0aab8')}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16px', color: '#fff', marginBottom: '24px' }}>AI &amp; Tech</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'AI Agent',          href: '/services/ai-agent' },
                    { label: 'CMS Development',   href: '/services/cms-development' },
                    { label: 'ERP & CRM',         href: '/services/erp-crm' },
                    { label: 'iOS Development',   href: '/services/mobile-app-development' },
                    { label: 'Paid Marketing',    href: '/services/paid-marketing' },
                    { label: 'Analytics',         href: '/services/analytics-reporting' },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} style={{ fontSize: '14px', color: '#a0aab8', textDecoration: 'none', transition: 'color .2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#a0aab8')}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16px', color: '#fff', marginBottom: '24px' }}>Industries</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Fintech',           href: '/industries/fintech' },
                    { label: 'Healthcare',        href: '/industries/healthcare' },
                    { label: 'E-Commerce',        href: '/industries/e-commerce' },
                    { label: 'Education',         href: '/industries/edtech' },
                    { label: 'Real Estate',       href: '/industries/realestate' },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} style={{ fontSize: '14px', color: '#a0aab8', textDecoration: 'none', transition: 'color .2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#a0aab8')}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>

        {/* ── Client Logos Slider (Moved to Bottom) ── */}
        <div style={{ margin: '20px 0 60px' }}>
          <DynamicLogoSlider />
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid var(--line)', paddingTop: '28px', paddingBottom: '28px',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px',
        }}>
          {/* Copyright */}
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#a0aab8' }}>
            Copyright © 2026 Codified Web Solutions. All Rights Reserved.
          </p>

          {/* Policy Links */}
          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#a0aab8' }}>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a0aab8')}>Terms and privacy</Link>
            <span>|</span>
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a0aab8')}>Privacy policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

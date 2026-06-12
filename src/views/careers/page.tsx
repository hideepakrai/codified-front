'use client';
import { useState } from 'react';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Code2, Brain, MonitorPlay, PenTool, TrendingUp, Server, HeartPulse, Clock, Globe2, BookOpen, Plane } from 'lucide-react';

const OPEN_POSITIONS = [
  { icon: <Brain size={22} />, title: 'Senior AI / ML Engineer', desc: 'Design and deploy scalable machine learning models and LLM-based solutions.', tag: 'Full-Time · Hybrid', color: '#1DC3F3' },
  { icon: <Code2 size={22} />, title: 'Full Stack Developer', desc: 'Build and maintain end-to-end web applications using modern tech stacks.', tag: 'Full-Time · Remote', color: '#9a7bff' },
  { icon: <MonitorPlay size={22} />, title: 'Frontend Engineer (React)', desc: 'Craft exceptional user experiences with React, Next.js, and TailwindCSS.', tag: 'Full-Time · Hybrid', color: '#F300A6' },
  { icon: <PenTool size={22} />, title: 'UI/UX Product Designer', desc: 'Lead the design of beautiful, intuitive, and conversion-focused digital products.', tag: 'Full-Time · Remote', color: '#f1c27a' },
  { icon: <Server size={22} />, title: 'DevOps / Cloud Engineer', desc: 'Manage scalable cloud infrastructure, CI/CD pipelines, and server security.', tag: 'Full-Time · Hybrid', color: '#1DC3F3' },
  { icon: <TrendingUp size={22} />, title: 'Growth Marketing Manager', desc: 'Drive customer acquisition, lead generation, and brand visibility strategies.', tag: 'Full-Time · Remote', color: '#9a7bff' },
];

const BENEFITS = [
  { icon: <HeartPulse size={22} />, color: '#F300A6', title: 'Comprehensive Healthcare', desc: 'Top-tier medical insurance for you and your dependents.' },
  { icon: <Globe2 size={22} />, color: '#1DC3F3', title: 'Remote-First Culture', desc: 'Work from anywhere with our flexible remote work policies.' },
  { icon: <Clock size={22} />, color: '#9a7bff', title: 'Flexible Working Hours', desc: 'We value outcomes over hours. Work when you are most productive.' },
  { icon: <BookOpen size={22} />, color: '#f1c27a', title: 'Learning & Development', desc: 'Annual budget for courses, conferences, and certifications.' },
  { icon: <Plane size={22} />, color: '#1DC3F3', title: 'Paid Time Off', desc: 'Generous vacation days, sick leaves, and public holidays.' },
  { icon: <MonitorPlay size={22} />, color: '#9a7bff', title: 'Home Office Setup', desc: 'Stipend to upgrade your workspace and hardware.' },
];

const TIMELINE = [
  { step: '01', title: 'Apply Online', desc: 'Submit your resume and portfolio through our simple online form.' },
  { step: '02', title: 'Screening Call', desc: 'A brief introductory call to discuss your background and align expectations.' },
  { step: '03', title: 'Technical Interview', desc: 'A deep dive into your technical skills or a short take-home assignment.' },
  { step: '04', title: 'Offer & Onboarding', desc: 'Final culture fit interview followed by an offer and smooth onboarding.' },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', role: 'Senior AI / ML Engineer', experience: '', link: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          requirement: `Job Application — ${form.role}`,
          message: `Experience: ${form.experience}\nPortfolio/LinkedIn: ${form.link}\n\nMessage:\n${form.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setForm({ name: '', email: '', role: 'Senior AI / ML Engineer', experience: '', link: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
    }
  };

  return (
    <>
      <CinematicInit />
      <Navigation />

      <main className="relative min-h-screen overflow-hidden" style={{ paddingTop: '80px' }}>

        {/* Background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'radial-gradient(circle at 80% 20%, rgba(243,0,166,0.05) 0%, transparent 60%)' }} />
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'radial-gradient(circle at 20% 80%, rgba(29,195,243,0.06) 0%, transparent 60%)' }} />

        {/* ── HERO ── */}
        <section className="section" id="careers-hero" style={{ minHeight: 'auto', paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="inner text-center max-w-4xl mx-auto">
            <span className="label mb-6">
              <span className="num">CAREERS ·</span> Codified Web Solutions
            </span>
            <h1 className="display reveal" style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', marginTop: '20px', lineHeight: 1 }}>
              Build the future of <span className="grad-text">digital innovation.</span>
            </h1>
            <p className="lede reveal mx-auto" style={{ marginTop: '28px', maxWidth: '660px' }}>
              We are a team of passionate engineers, designers, and thinkers building high-performance web, mobile, and AI solutions. Come join us.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#positions" className="btn" style={{ padding: '14px 32px', background: 'var(--cyan)', color: '#04060d', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', borderRadius: '999px' }}>
                View Open Positions <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section className="section" id="positions" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="text-center mb-16">
              <span className="label">JOIN THE TEAM</span>
              <h2 className="display reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '16px' }}>
                Current <span className="grad-text">Openings.</span>
              </h2>
              <p className="lede mx-auto mt-4">Find your next big opportunity. We are always looking for exceptional talent.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OPEN_POSITIONS.map((role, i) => (
                <div key={i} className="card reveal" style={{ padding: '32px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => {
                    setForm(prev => ({ ...prev, role: role.title }));
                    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${role.color}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line-strong)')}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${role.color}14`, border: `1px solid ${role.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: role.color, marginBottom: '20px' }}>
                    {role.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px', color: 'var(--text)', marginBottom: '10px' }}>{role.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-mute)', lineHeight: 1.7, marginBottom: '20px' }}>{role.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: role.color, background: `${role.color}12`, border: `1px solid ${role.color}25`, padding: '4px 10px', borderRadius: '999px' }}>
                      {role.tag}
                    </span>
                    <ArrowRight size={16} style={{ color: role.color, opacity: 0.7 }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 reveal">
              <p style={{ color: 'var(--text-soft)', fontSize: '14px' }}>
                Don't see a perfect fit? Send your resume to <a href="mailto:careers@codifiedweb.com" style={{ color: 'var(--cyan)' }}>careers@codifiedweb.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="text-center mb-16">
              <span className="label">LIFE AT CODIFIED</span>
              <h2 className="display reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '16px' }}>
                Perks & <span className="grad-text">Benefits.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((p, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: '16px', padding: '24px', borderRadius: '16px', border: '1px solid var(--line-strong)', background: 'linear-gradient(135deg, rgba(14,22,42,0.6), rgba(8,12,24,0.5))' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${p.color}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line-strong)')}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${p.color}14`, border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text)', marginBottom: '6px' }}>{p.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-mute)', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="text-center mb-16">
              <span className="label">INTERVIEW PROCESS</span>
              <h2 className="display reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '16px' }}>
                What to <span className="grad-text">expect.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TIMELINE.map((t, i) => (
                <div key={i} className="reveal relative" style={{ padding: '24px', borderLeft: '2px solid var(--line-strong)' }}>
                  <div style={{ position: 'absolute', left: '-6px', top: '24px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cyan)', letterSpacing: '0.15em', marginBottom: '12px' }}>{t.step}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px', color: 'var(--text)', marginBottom: '10px' }}>{t.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-mute)', lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLY FORM ── */}
        <section className="section" id="apply" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '120px' }}>
          <div className="inner">
            <div className="grid lg:grid-cols-2 gap-20 items-start">

              {/* Left */}
              <div className="reveal">
                <span className="label">APPLY FOR A ROLE</span>
                <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: '16px', lineHeight: 1.1 }}>
                  Ready to make an <span className="grad-text">impact?</span>
                </h2>
                <p className="lede" style={{ marginTop: '20px', maxWidth: '440px' }}>
                  Submit your application below. We read every single application and will get back to you within a few business days.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Fast interview process', 'Competitive compensation', 'Fully remote options available'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-soft)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="reveal">
                <div className="card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
                  <div className="corner tl" /><div className="corner tr" />
                  <div className="corner bl" /><div className="corner br" />

                  {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      <CheckCircle size={52} style={{ color: '#1DC3F3' }} />
                      <h4 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)' }}>Application Submitted! 🎉</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-mute)', lineHeight: 1.6 }}>
                        Thank you for applying. Our team will review your application and be in touch soon.
                      </p>
                      <button onClick={() => setStatus('idle')} style={{ marginTop: '8px', padding: '10px 24px', borderRadius: '999px', border: '1px solid rgba(29,195,243,0.4)', background: 'transparent', color: 'var(--cyan)', cursor: 'pointer', fontSize: '13px' }}>
                        Apply for Another Role
                      </button>
                    </div>
                  ) : (
                    <form className="grid gap-5" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name *</label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required
                            style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '14px' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email *</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@gmail.com" required
                            style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '14px' }} />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Position *</label>
                          <select name="role" value={form.role} onChange={handleChange} required
                            style={{ width: '100%', background: 'var(--bg-1)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', appearance: 'none', fontSize: '14px' }}>
                            {OPEN_POSITIONS.map(r => <option key={r.title} style={{ background: '#070b18', color: '#fff' }}>{r.title}</option>)}
                            <option style={{ background: '#070b18', color: '#fff' }}>Open Application</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Experience *</label>
                          <input type="text" name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 3 years" required
                            style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '14px' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LinkedIn / Portfolio URL</label>
                        <input type="text" name="link" value={form.link} onChange={handleChange} placeholder="https://..."
                          style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '14px' }} />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cover Letter / Message *</label>
                        <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Tell us why you are a great fit..." required
                          style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', resize: 'none', fontSize: '14px' }} />
                      </div>

                      {status === 'error' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5', fontSize: '13px' }}>
                          <AlertCircle size={15} style={{ flexShrink: 0 }} /> {errorMsg}
                        </div>
                      )}

                      <button type="submit" disabled={status === 'loading'}
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px', borderRadius: '999px', background: status === 'loading' ? 'rgba(29,195,243,0.5)' : 'var(--cyan)', color: '#04060d', fontWeight: 700, fontSize: '15px', cursor: status === 'loading' ? 'not-allowed' : 'pointer', border: 'none', marginTop: '4px' }}>
                        {status === 'loading' ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...</> : <>Submit Application <ArrowRight size={18} /></>}
                      </button>
                    </form>
                  )}
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

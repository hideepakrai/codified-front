'use client';
import { useState } from 'react';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Code2, Brain, Smartphone, PenTool, TrendingUp, Megaphone, Award, FolderGit2, Users, Banknote, BadgeCheck, Globe2 } from 'lucide-react';

const ROLES = [
  { icon: <Brain size={22} />, title: 'AI / ML Engineering', desc: 'Work on LLM pipelines, computer vision and real-world AI product integrations.', tag: 'AI · Python · LangChain', color: '#1DC3F3' },
  { icon: <Code2 size={22} />, title: 'Full Stack Development', desc: 'Build production-grade web apps using Next.js, Node.js and modern databases.', tag: 'React · Node · Postgres', color: '#9a7bff' },
  { icon: <Smartphone size={22} />, title: 'Mobile App Development', desc: 'Develop iOS & Android apps using React Native or Flutter on live client projects.', tag: 'React Native · Flutter', color: '#F300A6' },
  { icon: <PenTool size={22} />, title: 'UI/UX Design', desc: 'Design stunning, user-centric interfaces for web and mobile products.', tag: 'Figma · Prototyping', color: '#f1c27a' },
  { icon: <TrendingUp size={22} />, title: 'SEO & Digital Marketing', desc: 'Drive organic growth, manage campaigns and analyse performance data.', tag: 'SEO · Google Ads · Analytics', color: '#1DC3F3' },
  { icon: <Megaphone size={22} />, title: 'Content & Social Media', desc: 'Create compelling content strategy and manage brand presence across platforms.', tag: 'Copywriting · Social Media', color: '#9a7bff' },
];

const PERKS = [
  { icon: <Award size={22} />, color: '#1DC3F3', title: 'Certificate of Internship', desc: 'Official letter and certificate upon successful completion.' },
  { icon: <FolderGit2 size={22} />, color: '#9a7bff', title: 'Real Project Experience', desc: 'Work on live client projects — not dummy tasks.' },
  { icon: <Users size={22} />, color: '#F300A6', title: 'Mentorship', desc: 'One-on-one guidance from senior engineers and product leads.' },
  { icon: <Banknote size={22} />, color: '#f1c27a', title: 'Stipend (Performance)', desc: 'Performance-based stipend for standout interns.' },
  { icon: <BadgeCheck size={22} />, color: '#1DC3F3', title: 'Pre-Placement Offer', desc: 'Top performers get a direct full-time opportunity.' },
  { icon: <Globe2 size={22} />, color: '#9a7bff', title: 'Remote Friendly', desc: 'Work from anywhere — we support hybrid & remote modes.' },
];

const TIMELINE = [
  { step: '01', title: 'Apply Online', desc: 'Fill out the form below with your role preference and a short intro.' },
  { step: '02', title: 'Screening Call', desc: 'A 15-min call with our team to understand your goals and skills.' },
  { step: '03', title: 'Task Round', desc: 'A small real-world task relevant to your chosen domain.' },
  { step: '04', title: 'Onboarding', desc: 'Get assigned to a live project and start contributing from day one.' },
];

export default function InternshipPage() {
  const [form, setForm] = useState({ name: '', email: '', role: 'AI / ML Engineering', college: '', message: '' });
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
          requirement: `Internship Application — ${form.role}`,
          message: `College/University: ${form.college}\n\n${form.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setForm({ name: '', email: '', role: 'AI / ML Engineering', college: '', message: '' });
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
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'radial-gradient(circle at 20% 30%, rgba(154,123,255,0.06) 0%, transparent 60%)' }} />
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'radial-gradient(circle at 80% 70%, rgba(29,195,243,0.05) 0%, transparent 60%)' }} />

        {/* ── HERO ── */}
        <section className="section" id="internship-hero" style={{ minHeight: 'auto', paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="inner text-center max-w-4xl mx-auto">
            <span className="label mb-6">
              <span className="num">INTERN ·</span> Codified Web Solutions
            </span>
            <h1 className="display reveal" style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', marginTop: '20px', lineHeight: 1 }}>
              Launch your career with <span className="grad-text">real-world impact.</span>
            </h1>
            <p className="lede reveal mx-auto" style={{ marginTop: '28px', maxWidth: '620px' }}>
              Join our internship programme and work on live AI, web, and mobile projects alongside top engineers. Build skills. Ship products. Get noticed.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#apply" className="btn" style={{ padding: '14px 32px', background: 'var(--cyan)', color: '#04060d', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', borderRadius: '999px' }}>
                Apply Now <ArrowRight size={16} />
              </a>
              <a href="#roles" className="btn btn-outline" style={{ padding: '14px 32px', textDecoration: 'none', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                View Open Roles
              </a>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ── */}
        <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '40px 0' }}>
          <div className="inner">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px', textAlign: 'center' }}>
              {[
                { val: '3–6', unit: 'Months', label: 'Duration' },
                { val: '6+', unit: 'Domains', label: 'Specializations' },
                { val: '100%', unit: 'Live', label: 'Real Projects' },
                { val: 'PPO', unit: 'Available', label: 'Pre-Placement Offer' },
              ].map((s, i) => (
                <div key={i} className="reveal">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 600, color: 'var(--cyan)', letterSpacing: '-0.02em' }}>{s.val} <span style={{ fontSize: '16px', color: 'var(--text-mute)' }}>{s.unit}</span></div>
                  <div style={{ fontSize: '12px', color: 'var(--text-mute)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN ROLES ── */}
        <section className="section" id="roles" style={{ minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="text-center mb-16">
              <span className="label">OPEN ROLES</span>
              <h2 className="display reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '16px' }}>
                Pick your <span className="grad-text">domain.</span>
              </h2>
              <p className="lede mx-auto mt-4">We accept interns across 6 specializations. All roles are project-based with mentorship.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ROLES.map((role, i) => (
                <div key={i} className="card reveal" style={{ padding: '32px', position: 'relative', overflow: 'hidden', cursor: 'default' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${role.color}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${role.color}14`, border: `1px solid ${role.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: role.color, marginBottom: '20px' }}>
                    {role.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px', color: 'var(--text)', marginBottom: '10px' }}>{role.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-mute)', lineHeight: 1.7, marginBottom: '20px' }}>{role.desc}</p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: role.color, background: `${role.color}12`, border: `1px solid ${role.color}25`, padding: '4px 10px', borderRadius: '999px' }}>
                    {role.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PERKS ── */}
        <section className="section" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="inner">
            <div className="text-center mb-16">
              <span className="label">WHAT YOU GET</span>
              <h2 className="display reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '16px' }}>
                More than just <span className="grad-text">experience.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERKS.map((p, i) => (
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
              <span className="label">SELECTION PROCESS</span>
              <h2 className="display reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '16px' }}>
                How it <span className="grad-text">works.</span>
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
                <span className="label">APPLY NOW</span>
                <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: '16px', lineHeight: 1.1 }}>
                  Ready to <span className="grad-text">build?</span>
                </h2>
                <p className="lede" style={{ marginTop: '20px', maxWidth: '440px' }}>
                  Fill out the form and we'll get back to you within 48 hours. No lengthy process — just a quick chat and a task.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Applications open year-round', 'Response within 48 hours', 'Remote & hybrid both welcome', 'All streams & colleges accepted'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-soft)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '40px', padding: '24px', borderRadius: '16px', border: '1px solid rgba(29,195,243,0.2)', background: 'rgba(29,195,243,0.04)' }}>
                  <p style={{ fontSize: '13px', color: 'var(--text-mute)', lineHeight: 1.6 }}>
                    You can also directly email your resume to{' '}
                    <a href="mailto:hello@codifiedweb.com" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>hello@codifiedweb.com</a>
                    {' '}with subject line <strong style={{ color: 'var(--text)' }}>"Internship Application — [Your Role]"</strong>
                  </p>
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
                        Thank you! We've received your application and will reach out within 48 hours.
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

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>College / University</label>
                        <input type="text" name="college" value={form.college} onChange={handleChange} placeholder="e.g. SKIT, Jaipur"
                          style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '14px' }} />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Preferred Role *</label>
                        <select name="role" value={form.role} onChange={handleChange} required
                          style={{ width: '100%', background: 'var(--bg-1)', border: '1px solid var(--line-strong)', padding: '14px 18px', borderRadius: '10px', color: '#fff', outline: 'none', appearance: 'none', fontSize: '14px' }}>
                          {ROLES.map(r => <option key={r.title} style={{ background: '#070b18', color: '#fff' }}>{r.title}</option>)}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tell us about yourself *</label>
                        <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Brief intro, your skills, why you want to intern with us, any portfolio/GitHub link..." required
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

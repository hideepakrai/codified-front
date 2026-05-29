'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';

const scaleList = [
  "A fragmented and unclear user journey",
  "Content overload that obscured the value of the offer",
  "Weak logical connections between individual services",
  "The need for strong yet fast SEO optimization",
  "Lack of clear market positioning beyond functional descriptions",
];

const stats = [
  { value: "+85%", text: "website traffic within two months of launch" },
  { value: "+130%", text: "growth in comparison with pre-launch period" },
  { value: "100/100", text: "SEO score: 100 / 100, with long-term organic growth" },
  { value: "+78%", text: "content reduction while improving the user journey" },
];

const strategicRoles = [
  { title: "UX Design", text: "Designing the complete user journey and UX logic" },
  { title: "Service Structure", text: "Structuring the offer and defining relationships between services" },
  { title: "SEO Optimisation", text: "SEO architecture and optimization for a complex, multi-service platform" },
  { title: "Content Strategy", text: "Content strategy centered on understanding, trust, and conversion" },
];

const caseCards = [
  {
    title: "A Clear and Logical User Journey",
    text: "Users needed to immediately understand:",
    image: "/assets/Image/tourism-case-study.png",
    points: ["Where they are", "Who the platform is for", "How services connect to one another", "What the next step is for their specific business type"],
  },
  {
    title: "High-Performance Structural SEO",
    text: "Despite the platform's complexity, the website had to:",
    image: "/assets/Image/tourism-brand-img1.png",
    points: ["Load fast", "Be technically sound", "Support long-term organic growth across markets"],
  },
  {
    title: "Radical Content Reduction Without Value Loss",
    text: "Total content volume was reduced to approximately one fifth of the original, while preserving:",
    image: "/assets/Image/tourism-brand-img2.png",
    points: ["Informational clarity", "Market credibility", "SEO relevance"],
  },
];

const AlertDot = () => (
  <span style={{ marginTop: 3, display: 'flex', height: 21, width: 21, minWidth: 21, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#05C4D9', fontSize: 14, fontWeight: 700, color: '#fff' }}>!</span>
);

const PointIcon = () => (
  <span style={{ marginTop: 2, display: 'flex', height: 14, width: 14, minWidth: 14, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#49E000' }}>
    <svg viewBox="0 0 20 20" fill="none" style={{ height: 14, width: 14 }}>
      <path d="M6 10H14" stroke="#003C42" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 7L14 10L11 13" stroke="#003C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function MyRentView({ locale }: { locale: string }) {
  const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };

  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: 80, background: 'transparent', color: 'var(--text)', overflowX: 'hidden', position: 'relative', zIndex: 3 }}>

        {/* HERO */}
        <section style={{ padding: '12px 20px' }}>
          <div style={{ borderRadius: 22, background: 'var(--bg-1)', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 4rem', minHeight: 500 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>Case Study</span>
                  <span style={{ width: 1, height: 14, background: '#bcb5af', display: 'inline-block' }} />
                  <span style={{ fontSize: 14, color: '#fff', fontStyle: 'italic' }}>Tourism &amp; Travel</span>
                </div>
                <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                  <h1 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 400, lineHeight: 1.1, color: '#fff', margin: '0 0 1.5rem' }}>
                    <span style={{ color: 'var(--cyan)' }}>Building Clarity at Scale:</span><br />
                    How MyRent Transformed a Complex Platform into a Growth System
                  </h1>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', fontWeight: 300, margin: '0 0 2rem' }}>
                    The objective was not visibility alone, but positioning MyRent as a serious, credible player within the broader hospitality ecosystem.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {['The Challenge', 'The Goals of Collaboration', 'Our Strategic Role', 'The Results'].map(label => (
                      <button key={label} style={{ borderRadius: 999, background: 'var(--panel)', padding: '12px 20px', fontSize: 14, fontWeight: 500, color: 'var(--cyan)', border: '1px solid var(--line)', cursor: 'pointer' }}>{label}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative', minHeight: 500 }}>
                <img src="/images/services/my-rent-case-study.png" alt="MyRent" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
                  <a href="/who-we-create-for/myrent">
                    <button style={{ display: 'inline-flex', alignItems: 'center', gap: 12, borderRadius: 999, background: 'var(--cyan)', padding: '14px 28px', fontSize: 15, fontWeight: 500, color: '#000', border: 'none', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}>
                      Read the Case Study <span style={{ fontSize: 20 }}>→</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '0 2rem', borderRight: i < 3 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontSize: 'clamp(36px,3.5vw,52px)', fontWeight: 400, lineHeight: 0.95, color: 'var(--cyan)', ...serif }}>{s.value}</div>
                <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.5, color: 'var(--text-soft)', maxWidth: 210 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO PARA */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', background: 'var(--bg-1)', borderRadius: 14, border: '1px solid var(--line)', padding: '4rem 6rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,38px)', fontWeight: 400, lineHeight: 1.25, color: 'var(--text)', margin: '0 0 1.5rem', ...serif }}>
              MyRent is a property management platform serving private renters and professional agencies across multiple markets.
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.2vw,18px)', lineHeight: 1.6, color: 'var(--text-soft)', margin: 0, maxWidth: 860, marginLeft: 'auto', marginRight: 'auto' }}>
              This collaboration was not a one-off project, it was a long-term, partnership-based development model designed to support continuous growth, evolving market needs, and operational scalability. The work spanned strategy, structure, UX, SEO, content, and marketing delivered through multiple collaboration models depending on context and growth phase.
            </p>
          </div>
        </section>

        {/* CHALLENGE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', borderRadius: 14, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--bg-2)' }}>
              <div style={{ padding: '2.5rem 5rem 3.5rem 5rem' }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--cyan)', margin: '0 0 3rem' }}>The Challenge</h3>
                <p style={{ fontSize: 'clamp(18px,1.5vw,26px)', fontWeight: 400, lineHeight: 1.4, color: '#fff', margin: 0, ...serif }}>
                  MyRent operates within a highly complex ecosystem that includes multiple user types, a wide range of interconnected services, diverse market contexts, and a strong requirement for both scalability and operational speed.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 3rem' }}>
                <img src="/assets/Image/tourism-growth.png" alt="Growth chart" style={{ width: '100%', maxWidth: 410, objectFit: 'contain' }} />
              </div>
            </div>
            <div style={{ padding: '3.5rem 5rem' }}>
              <h3 style={{ fontSize: 'clamp(18px,1.5vw,24px)', fontWeight: 400, lineHeight: 1.35, color: 'var(--text)', margin: '0 0 1.5rem', ...serif }}>
                As the platform evolved, several structural issues emerged:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {scaleList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <AlertDot />
                    <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--text-soft)', margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ display: 'flex', height: 33, width: 35, minWidth: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: 'var(--panel)', fontSize: 20, fontWeight: 600, color: 'var(--cyan)' }}>!</span>
                <p style={{ fontSize: 'clamp(18px,1.5vw,22px)', fontWeight: 400, lineHeight: 1.4, color: 'var(--text)', margin: 0, ...serif }}>
                  The challenge was not building more. It was creating clarity within complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE CARDS */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', margin: '0 0 0.5rem', ...serif }}>
                How this works in real tourism businesses
              </h2>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--cyan)', margin: 0 }}>(My Rent - Case Study):</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {caseCards.map((card, i) => (
                <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: '0 0 1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--line)' }}>{card.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-soft)', margin: '0 0 1rem' }}>{card.text}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {card.points.map((pt, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <PointIcon />
                          <span style={{ fontSize: 14, lineHeight: 1.55, color: '#fff' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC ROLE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text)', margin: '0 0 0.75rem' }}>Our Strategic Role</h3>
            <p style={{ fontSize: 'clamp(18px,1.5vw,24px)', lineHeight: 1.4, color: 'var(--text-soft)', margin: '0 0 2rem', ...serif }}>
              We operated as an external strategic and operational partner, focused on clarity, structure, and scalability. Our role included:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: '2rem' }}>
              {strategicRoles.map((r, i) => (
                <div key={i} style={{ borderRadius: 16, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '1.5rem' }}>
                  <div style={{ width: 58, height: 58, borderRadius: 14, background: 'var(--panel)', marginBottom: '1.25rem' }} />
                  <h4 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', margin: '0 0 0.75rem' }}>{r.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-soft)', margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', backgroundImage: "url('/assets/Image/tourism-brand-img.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '4rem 3rem', textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(18px,1.5vw,26px)', fontWeight: 400, lineHeight: 1.4, color: '#fff', margin: 0, ...serif }}>
                Rather than optimizing isolated elements, we designed{' '}
                <span style={{ color: 'var(--cyan)' }}>a system where all components reinforce one another.</span>
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: '0 0 1rem', ...serif }}>Partnership Model &amp; Results</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-soft)', maxWidth: 720, margin: '0 auto 2rem' }}>
              Providing additional expertise MyRent did not require in-house, without expanding their internal team. This flexible model allowed MyRent to scale efficiently, maintain control, and ensure consistent quality across initiatives. The results:
            </p>
            <div style={{ borderRadius: 20, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '0 2.5rem', borderRight: i < 3 ? '1px solid var(--line)' : 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: 'clamp(36px,3.5vw,54px)', fontWeight: 400, lineHeight: 0.95, color: 'var(--cyan)', ...serif }}>{s.value}</div>
                  <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.45, color: 'var(--text-soft)', maxWidth: 200 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 1.5rem 5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: '0 0 1rem', ...serif }}>Marketing Excellence That Works On Your Terms</h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-soft)', margin: '0 auto 2rem', maxWidth: 640 }}>
              Because great marketing doesn't stop — it evolves. Whether you need a website that books guests, a video that tells your story, or a full creative system that scales with you — we're here to help your brand stay relevant, consistent and alive.
            </p>
            <a href="/lets-talk">
              <button style={{ borderRadius: 999, background: 'var(--cyan)', color: '#000', padding: '14px 36px', fontSize: 15, fontWeight: 500, border: 'none', cursor: 'pointer' }}>Let's Talk</button>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

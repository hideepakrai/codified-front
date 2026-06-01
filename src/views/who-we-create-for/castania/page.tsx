'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };

const challengeList = [
  'Strong product quality, but no brand',
  'No differentiation in a crowded market',
  'No story customers could connect to',
  'No pricing power',
  'No system for growth',
];

const goalCards = [
  { title: 'Creating a Brand Identity', text: "Castania's brand identity is developed around authentic origin, a subtle premium visual language, and a system that supports long-term growth without compromising trust or recognizability.", image: '/assets/Image/castania-business-img.png' },
  { title: 'Building a Story', text: 'Castania connects real origin, nature, and trust. Each type of honey is tied to a specific apiary location, creating an authentic link between the product and the customer.', image: '/assets/Image/castania-business-img1.png' },
  { title: 'Package Design & Photography', text: 'Packaging and photography are designed as sales tools. A clean visual language, natural tones, and a strong focus on the product increase perceived value and position it as a recognizable display and gift item.', image: '/assets/Image/castania-business-img2.png' },
  { title: 'Developing a Growth System', text: 'Brand growth is built on a system, not on campaigns. A consistent identity, modular product range, and clearly defined origin enable long-term expansion without loss of recognition.', image: '/assets/Image/castania-business-img3.png' },
];

const strategicBullets = ['Who the brand is for?', 'What makes it meaningfully different?', 'Why it deserves a premium position?'];

const roleCards = [
  { title: 'Brand Strategy & Naming', text: 'We created the brand name, positioning, and narrative, transforming a raw product into a brand with meaning, personality, and purpose.', image: '/assets/Image/castania-brand-img3.svg' },
  { title: 'Visual Identity & Packaging System', text: 'A complete visual identity and modular packaging system designed to support a growing product portfolio while maintaining consistency and recognition.', image: '/assets/Image/castania-brand-img.svg' },
  { title: 'Web & E-commerce', text: 'A brand platform and webshop that communicate quality, origin, and trust, and convert interest into direct-to-consumer sales.', image: '/assets/Image/castania-brand-img1.svg' },
  { title: 'Retail & POS Materials', text: 'In-store and point-of-sale materials designed to stand out on the shelf and support premium pricing without discounts or explanation.', image: '/assets/Image/castania-brand-img2.svg' },
];

const gallery = {
  topLeft: '/assets/Image/partner-model-img1.png',
  centerTall: '/assets/Image/partner-model-img2.png',
  topRight: '/assets/Image/partner-model-img3.png',
  statJar: '/assets/Image/partner-model-img9.png',
  midRight: '/assets/Image/partner-model-img4.png',
  bottomLeft: '/assets/Image/partner-model-img5.png',
  bottomCenterSmall: '/assets/Image/partner-model-img6.png',
  bottomCenterWide: '/assets/Image/partner-model-img7.png',
  bottomRight: '/assets/Image/partner-model-img8.png',
};

const AlertDot = () => (
  <span style={{ marginTop: 3, display: 'flex', height: 21, width: 21, minWidth: 21, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#5FC5D0', fontSize: 13, fontWeight: 700, color: '#fff' }}>!</span>
);

export default function CastaniaView({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: 80, background: 'transparent', color: 'var(--text)', overflowX: 'hidden', position: 'relative', zIndex: 3 }}>

        {/* HERO */}
        <section style={{ padding: '12px 20px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 22, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 4rem', minHeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '10px' }}>
                <span style={{ fontSize: 22, fontWeight: 600, color: 'var(--text)' }}>Case Study</span>
                <span style={{ width: 1, height: 14, background: '#bcb5af', display: 'inline-block' }} />
                <span style={{ fontSize: 14, color: 'var(--text)', fontStyle: 'italic' }}>Boutique Brands</span>
              </div>
              <div style={{ marginTop: '40px', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 400, lineHeight: "50px", color: 'var(--text)', margin: '0 0 1.5rem' }}>
                  <span style={{ color: 'var(--cyan)', fontSize: 'clamp(24px,2.5vw,36px)', }}>From Commodity to Premium:</span><br />
                  Building Castania into a Scalable Boutique Brand
                </h1>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text)', margin: '0 0 2rem' }}>
                  We created the brand name, positioning, and narrative, transforming a raw product into a brand with meaning, personality, and purpose.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {['The Challenge', 'The Goals of Collaboration', 'Our Strategic Role', 'The Results'].map(l => (
                    <button key={l} style={{ borderRadius: 999, background: 'var(--panel)', padding: '12px 20px', fontSize: 14, fontWeight: 500, color: 'var(--cyan)', border: '1px solid var(--line)', cursor: 'pointer' }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: 500 }}>
              <img src="/images/services/castania-hero-img.png" alt="Castania" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
                <a href="/who-we-create-for/castania">
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, background: 'var(--cyan)', padding: '12px 24px', fontSize: 15, fontWeight: 500, color: '#000', border: 'none', cursor: 'pointer' }}>
                    Read the Case Study <span style={{ fontSize: 20 }}>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ padding: '4rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.25, color: 'var(--text)', margin: '0 0 1.5rem', ...serif }}>
              Castania was built from zero to a premium honey brand.
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.2vw,18px)', lineHeight: 1.6, color: 'var(--text)', margin: 0 }}>
              What began as a small producer evolved into a scalable, recognizable, and commercially strong business through strategic positioning, storytelling, packaging, and a complete sales ecosystem. This was not a packaging refresh or a visual exercise — it was the deliberate creation of a brand, and the foundation of a sustainable business.
            </p>
          </div>
        </section>

        {/* CHALLENGE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 14, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
            <div style={{ background: 'var(--bg-2)', backgroundImage: "url('/assets/Image/castania-banner.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '3rem 5rem 3.5rem' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '0 0 4rem' }}>The Challenge</h3>
              <p style={{ fontSize: 'clamp(18px,1.5vw,26px)', fontWeight: 400, lineHeight: 1.4, color: '#fff', margin: 0, maxWidth: 620, ...serif }}>
                Castania started with an excellent product: high-quality honey and natural derivatives. What it lacked was everything else required to compete beyond the local, low-margin market.
              </p>
            </div>
            <div style={{ padding: '3.5rem 5rem' }}>
              <h3 style={{ fontSize: 'clamp(18px,1.5vw,24px)', fontWeight: 400, lineHeight: 1.35, color: 'var(--text)', margin: '0 0 1.5rem', ...serif }}>
                Like many small producers, Castania was trapped in a commodity position:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {challengeList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <AlertDot />
                    <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--text-soft)', margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ display: 'flex', height: 33, width: 35, minWidth: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: 'var(--panel)', fontSize: 20, fontWeight: 600, color: 'var(--cyan)' }}>!</span>
                <p style={{ fontSize: 'clamp(16px,1.3vw,22px)', fontWeight: 400, lineHeight: 1.4, color: 'var(--text-soft)', margin: 0, ...serif }}>
                  Without a clear identity, positioning, packaging, or sales strategy, scaling beyond local sales or basic distribution was impossible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GOALS */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', margin: '0 0 0.5rem', ...serif }}>The Goals of the Collaboration</h2>
              <p style={{ fontSize: 15, color: 'var(--text-soft)', margin: 0 }}>The objective was not simply to sell honey. It was to build a sustainable, scalable business.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {goalCards.map((card, i) => (
                <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: '0 0 1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--line)' }}>{card.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-soft)', margin: 0 }}>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC ROLE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', margin: '0 0 0.75rem' }}>Our Strategic Role</h3>
            <p style={{ fontSize: 'clamp(18px,1.5vw,24px)', lineHeight: 1.4, color: 'var(--text-soft)', margin: '0 0 1.5rem', ...serif }}>
              We designed Castania from the ground up as a complete brand system. Before any visuals, packaging, or marketing execution, we defined the fundamentals:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: '2rem' }}>
              {strategicBullets.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ display: 'flex', height: 40, width: 40, minWidth: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: 'var(--panel)' }}>
                    <svg viewBox="0 0 20 20" fill="none" style={{ height: 28, width: 28 }}>
                      <path d="M6 10H14" stroke="#5FC5D0" strokeWidth="2" strokeLinecap="round" />
                      <path d="M11 7L14 10L11 13" stroke="#5FC5D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-soft)', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 'clamp(14px,1.1vw,18px)', lineHeight: 1.65, color: 'var(--text-soft)', margin: '0 0 2rem', ...serif }}>
              Every decision that followed, from naming to packaging to e-commerce, was built to reinforce the same story, values, and market position. What We Delivered:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 12 }}>
              {roleCards.map((item, i) => (
                <div key={i} style={{ borderRadius: 14, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '1.25rem' }}>
                  <div style={{ width: 80, height: 80, borderRadius: 10, overflow: 'hidden', marginBottom: '1rem' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '0 0 0.75rem' }}>{item.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-soft)', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
            {/* Marketing card */}
            <div style={{ borderRadius: 14, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '1.25rem', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 16, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 80, height: 70, borderRadius: 10, overflow: 'hidden' }}>
                  <img src="/assets/Image/castania-brand-img1.svg" alt="Marketing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: 0 }}>Marketing &amp; Communication Framework</h4>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-soft)', margin: 0 }}>A clear tone of voice, storytelling framework, and messaging system used across all channels, ensuring the brand always speaks with one voice.</p>
            </div>
          </div>
        </section>

        {/* RESULTS GALLERY */}
        <section style={{ padding: '2rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: '0 0 0.75rem', ...serif }}>Partnership Model &amp; Results</h2>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-soft)', maxWidth: 620, margin: '0 auto' }}>Instead of competing on price, Castania competes on meaning, quality, and trust.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: 'repeat(4,112px)', gap: 12 }}>
              <div style={{ gridColumn: 'span 4', gridRow: 'span 2', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.topLeft} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 4', gridRow: 'span 3', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.centerTall} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 4', gridRow: 'span 1', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.topRight} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 4', gridRow: 'span 1', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.midRight} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 4', gridRow: 'span 2', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.statJar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: 16, padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 'clamp(32px,3vw,48px)', fontWeight: 400, lineHeight: 0.95, color: 'var(--cyan)', ...serif }}>+60%</div>
                <p style={{ marginTop: 8, fontSize: 11, lineHeight: 1.5, color: 'var(--text-soft)', maxWidth: 150 }}>After rebrand, company achieves steady annual growth of over 60%.</p>
              </div>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.bottomLeft} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.bottomRight} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 4', gridRow: 'span 1', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.bottomCenterWide} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: 16, overflow: 'hidden', background: '#F2F2F2' }}>
                <img src={gallery.bottomCenterSmall} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
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

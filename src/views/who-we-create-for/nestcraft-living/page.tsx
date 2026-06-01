'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';

// NestCraft Living brand tokens
const bg = 'transparent';
const dark = 'var(--bg-1)';
const textTheme = 'var(--text)';
const muted = 'var(--text-soft)';
const border = 'var(--line)';
const olive = 'var(--cyan)';
const serif = { fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", serif' };
const sans = { fontFamily: '"Inter", "Inter Fallback", sans-serif' };

const BrandIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="28" width="40" height="16" rx="2" stroke={textTheme} strokeWidth="2" />
    <path d="M4 28 L24 8 L44 28" stroke={textTheme} strokeWidth="2" strokeLinejoin="round" />
    <rect x="18" y="34" width="12" height="10" rx="1" fill={olive} />
  </svg>
);
const EcomIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M6 8h5l6 22h20l5-14H14" stroke={textTheme} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="38" r="3" fill={olive} />
    <circle cx="34" cy="38" r="3" fill={olive} />
  </svg>
);
const VisualIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={textTheme} strokeWidth="2" />
    <circle cx="16" cy="20" r="4" stroke={olive} strokeWidth="2" />
    <path d="M6 32 L16 22 L26 30 L34 22 L42 30" stroke={textTheme} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
const SeoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="22" cy="22" r="13" stroke={textTheme} strokeWidth="2" />
    <path d="M32 32 L42 42" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 22h12M22 16v12" stroke={olive} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const challengeList = [
  'No digital presence in a competitive online furniture market',
  'Products sold only locally with zero brand recognition beyond Jaipur',
  'No visual identity or consistent design language across touchpoints',
  'No e-commerce system to support direct-to-consumer sales',
  'Pricing underpowered relative to actual product quality',
];
const goalCards = [
  { title: 'Brand Identity & Naming', text: 'NestCraft Living was built to communicate warmth, craftsmanship, and elevated living. Every element — from the name to the palette — positions the brand at the premium end of the market.' },
  { title: 'E-Commerce Platform', text: 'A full D2C webshop with curated collections, product storytelling, and a seamless purchase flow — enabling NestCraft to sell premium furniture across India without intermediaries.' },
  { title: 'Visual & Content System', text: 'Photography direction, product styling, and a content system designed to make every piece feel aspirational. The visual language consistently communicates quality, texture, and craftsmanship.' },
  { title: 'Custom Furniture Service', text: 'A bespoke consultation and customization offering built into the platform, allowing customers to commission handcrafted pieces tailored to their exact specifications.' },
];
const roleCards = [
  { Icon: BrandIcon, title: 'Brand Strategy & Naming', text: 'Created NestCraft Living from scratch — name, positioning, brand story, and the visual identity system defining every customer touchpoint.' },
  { Icon: EcomIcon, title: 'Web & E-Commerce Build', text: 'Designed and developed a full e-commerce platform with collections, categories, product pages, cart, and a custom furniture inquiry system.' },
  { Icon: VisualIcon, title: 'Visual Direction & Photography', text: 'End-to-end art direction for product photography, lifestyle imagery, and visual storytelling that elevates the perceived value of every piece.' },
  { Icon: SeoIcon, title: 'SEO & Content Strategy', text: 'Built a content architecture and SEO foundation that supports long-term organic growth across furniture-related search categories.' },
];
const stats = [
  { value: '4+', label: 'Core collections: Living Room, Bedroom, Dining, Storage' },
  { value: '3', label: 'Bespoke services: Interior Design, Custom Furniture, Home Styling' },
  { value: '100%', label: 'Direct-to-consumer model — no marketplace dependency' },
  { value: '+60%', label: 'Estimated premium pricing lift post brand creation' },
];

const Divider = () => <span style={{ width: 1, height: 14, background: border, display: 'inline-block' }} />;
const AlertDot = () => (
  <span style={{ marginTop: 3, display: 'flex', height: 21, width: 21, minWidth: 21, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: olive, fontSize: 13, fontWeight: 700, color: '#fff', ...sans }}>!</span>
);

export default function NestCraftView({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: 80, background: bg, color: textTheme, overflowX: 'hidden', position: 'relative', zIndex: 3, ...sans }}>

        {/* HERO */}
        <section style={{ padding: '12px 20px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 20, overflow: 'hidden', background: dark, display: 'grid', gridTemplateColumns: '1fr 1fr', boxShadow: '0 20px 60px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 4rem', minHeight: 520 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>Case Study</span>
                <Divider />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>Boutique Brands / E-Commerce</span>
              </div>
              <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: 'clamp(24px,2.8vw,40px)', fontWeight: 400, lineHeight: 1.12, color: '#fff', margin: '0 0 1.25rem', ...serif }}>
                  <span style={{ color: olive }}>Sculpting Premium Living:</span><br />
                  How NestCraft Became a Design-Led Furniture Brand
                </h1>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', margin: '0 0 2rem', ...sans }}>
                  From a local Jaipur workshop to a nationally recognised premium furniture brand — built on craftsmanship, visual storytelling, and a direct-to-consumer platform.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                  {['The Challenge', 'The Goals', 'Our Role', 'The Results'].map(l => (
                    <button key={l} style={{ borderRadius: 999, background: olive, padding: '10px 18px', fontSize: 13, fontWeight: 500, color: '#000', border: 'none', cursor: 'pointer', ...sans }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: 520, background: '#1A1A0F' }}>
              <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=900" alt="NestCraft Living Hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                <a href="https://www.nestcraftliving.com" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, background: olive, padding: '12px 24px', fontSize: 14, fontWeight: 500, color: '#000', border: 'none', cursor: 'pointer', ...sans }}>Explore Our Process <span style={{ fontSize: 16 }}>→</span></button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '3.5rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '0 2rem', borderRight: i < 3 ? `1px solid ${border}` : 'none' }}>
                <div style={{ fontSize: 'clamp(30px,3vw,46px)', fontWeight: 400, lineHeight: 0.95, color: olive, ...serif }}>{s.value}</div>
                <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5, color: muted, maxWidth: 200, ...sans }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', background: 'var(--bg-2)', border: `1px solid ${border}`, borderRadius: 20, padding: '4rem 5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(20px,2.2vw,34px)', fontWeight: 400, lineHeight: 1.3, color: textTheme, margin: '0 0 1.25rem', ...serif }}>
              NestCraft Living was created to serve a clear gap in the Indian furniture market — premium, design-led pieces with a seamless buying experience.
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.7, color: muted, margin: 0, ...sans }}>
              What began as a Jaipur-based craftsman with exceptional skill and no digital presence evolved into a nationally positioned e-commerce furniture brand. The work spanned brand creation, platform development, visual direction, and a content system built for long-term growth.
            </p>
          </div>
        </section>

        {/* CHALLENGE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 20, overflow: 'hidden', border: `1px solid ${border}` }}>
            <div style={{ background: dark, padding: '3rem 5rem 3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: olive, margin: '0 0 2rem', letterSpacing: '0.1em', textTransform: 'uppercase', ...sans }}>The Challenge</h3>
                <p style={{ fontSize: 'clamp(18px,1.5vw,26px)', fontWeight: 400, lineHeight: 1.45, color: '#fff', margin: 0, ...serif }}>
                  NestCraft began with outstanding craftsmanship and zero market presence. The products deserved a premium position — but without a brand, platform, or digital strategy, that position was invisible.
                </p>
              </div>
              <div style={{ borderRadius: 16, border: '1px solid rgba(141,161,23,0.25)', padding: '2.5rem', textAlign: 'center' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ marginBottom: 16, margin: '0 auto' }}>
                  <rect x="8" y="38" width="48" height="18" rx="3" stroke={olive} strokeWidth="2" />
                  <path d="M8 38 L32 10 L56 38" stroke={olive} strokeWidth="2" strokeLinejoin="round" />
                  <rect x="24" y="46" width="16" height="10" rx="1" fill="rgba(141,161,23,0.2)" stroke={olive} strokeWidth="1.5" />
                  <circle cx="32" cy="28" r="5" stroke="rgba(141,161,23,0.5)" strokeWidth="1.5" />
                </svg>
                <p style={{ ...serif, fontSize: 16, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>"Handcrafted quality deserves a handcrafted brand."</p>
              </div>
            </div>
            <div style={{ background: 'var(--bg-2)', padding: '3.5rem 5rem' }}>
              <h3 style={{ fontSize: 'clamp(18px,1.5vw,22px)', fontWeight: 400, lineHeight: 1.35, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
                Without a brand and platform, several critical gaps limited growth:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                {challengeList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <AlertDot />
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: muted, margin: 0, ...sans }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: dark, borderRadius: 16, padding: '3rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `1px solid ${border}` }}>
                <p style={{ fontSize: 'clamp(16px,1.3vw,20px)', fontWeight: 400, lineHeight: 1.4, color: '#fff', margin: 0, ...serif }}>
                  The craft was premium. The brand had to become premium too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GOALS */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,38px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 0.5rem', ...serif }}>Goals of the Collaboration</h2>
              <p style={{ fontSize: 14, color: muted, margin: 0, ...sans }}>Build a brand, platform, and presence that matches the quality of every handcrafted piece.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {goalCards.map((card, i) => (
                <div key={i} style={{ borderRadius: 16, background: dark, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
                        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600',
                        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600',
                        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600',
                      ][i]}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }} />
                  </div>
                  <div style={{ padding: '1rem 1.5rem 1.5rem', flex: 1 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', margin: '0 0 0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', ...sans }}>{card.title}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', margin: 0, ...sans }}>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC ROLE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: olive, margin: '0 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', ...sans }}>Our Strategic Role</p>
            <p style={{ fontSize: 'clamp(16px,1.4vw,22px)', lineHeight: 1.5, color: muted, margin: '0 0 2rem', ...serif }}>
              We operated as NestCraft's complete brand and digital partner — from zero to launch and beyond. Every deliverable was designed to reinforce the same premium story:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: '2.5rem' }}>
              {roleCards.map(({ Icon, title, text }, i) => (
                <div key={i} style={{ borderRadius: 14, background: 'var(--bg-2)', border: `1px solid ${border}`, padding: '2rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}><Icon /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: textTheme, margin: '0 0 0.75rem', ...sans }}>{title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: muted, margin: 0, ...sans }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 16, background: dark, padding: '3.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(18px,1.6vw,24px)', fontWeight: 400, lineHeight: 1.45, color: '#fff', margin: 0, ...serif }}>
                Rather than building a website for a product, we built{' '}
                <span style={{ color: olive }}>a brand that a product deserves.</span>
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,38px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 0.5rem', ...serif }}>Our Strategic Role</h2>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: muted, maxWidth: 600, margin: '0 auto 2.5rem', ...sans }}>
              A complete brand system and e-commerce platform that positions NestCraft Living as a premium, design-led furniture destination — built for long-term growth.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Brand Identity', desc: 'Name, logo, color palette, typography, and brand guidelines', Icon: BrandIcon },
                { label: 'E-Commerce Platform', desc: 'Full webshop with 4 collections, cart, and product pages', Icon: EcomIcon },
                { label: 'Visual Direction', desc: 'Photography art direction and lifestyle content system', Icon: VisualIcon },
                { label: 'Custom Service Flow', desc: 'Bespoke furniture consultation and inquiry system', Icon: SeoIcon },
                { label: 'SEO Architecture', desc: 'Technical and content SEO for long-term organic growth', Icon: SeoIcon },
                { label: 'Blog & Journal', desc: 'Content series: Material Guide, Interior Tips, Craftsmanship', Icon: VisualIcon },
              ].map((item, i) => (
                <div key={i} style={{ borderRadius: 16, background: dark, padding: '2rem', border: `1px solid ${border}`, textAlign: 'center' }}>
                  <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}><item.Icon /></div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: '#fff', margin: '0 0 0.5rem', ...sans }}>{item.label}</h4>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0, ...sans }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 20, background: dark, padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '0 2rem', borderRight: i < 3 ? '1px solid rgba(141,161,23,0.2)' : 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 400, lineHeight: 0.95, color: olive, ...serif }}>{s.value}</div>
                  <p style={{ marginTop: 10, fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,0.6)', maxWidth: 200, ...sans }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 1.5rem 5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 660, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,38px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 1rem', maxWidth: 600, ...serif }}>Ready to Build Your Brand?</h2>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: muted, margin: '0 auto 2rem', maxWidth: 520, ...sans }}>
              Whether you're a craftsman, a boutique producer, or an established business ready to level up — we build brands that match the quality of what you make.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <a href="/lets-talk">
                <button style={{ borderRadius: 999, background: dark, color: '#fff', padding: '13px 32px', fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer', ...sans }}>Let's Talk</button>
              </a>
              <a href="https://www.nestcraftliving.com" target="_blank" rel="noopener noreferrer">
                <button style={{ borderRadius: 999, background: 'transparent', color: dark, padding: '13px 32px', fontSize: 14, fontWeight: 500, border: `1px solid ${dark}`, cursor: 'pointer', ...sans }}>Visit Site ↗</button>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

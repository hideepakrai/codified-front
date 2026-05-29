'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import { Layers, Target, Search, Palette, Heart, ShoppingBag, Truck, CheckCircle, Smartphone, LayoutTemplate } from 'lucide-react';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const dark = 'var(--bg-1)';
const mid = 'var(--text-soft)';
const textTheme = 'var(--text)';
const brandColor = '#38bdf8'; // Sky blue for friendly pet brand

const challengeList = [
  'Outdated e-commerce platform struggling to handle modern mobile shopping behaviors',
  'Complex sizing guide that confused customers, leading to higher return rates',
  'Need to clearly communicate a unique, patented product design (harness vs. standard diaper)',
  'Lack of an emotional, brand-driven narrative connecting with pet owners dealing with senior or special-needs dogs',
];

const roleCards = [
  { title: 'E-Commerce Architecture', text: 'Migrated and rebuilt the online store for speed, mobile responsiveness, and a frictionless checkout experience.', icon: <LayoutTemplate size={24} color={brandColor} /> },
  { title: 'UX & Sizing Flow', text: 'Redesigned the sizing and purchasing journey, implementing an interactive guide to drastically reduce order errors.', icon: <Target size={24} color={brandColor} /> },
  { title: 'Content Strategy', text: 'Restructured the educational content to clearly explain the patented "escape-proof" design and product care instructions.', icon: <Search size={24} color={brandColor} /> },
  { title: 'Brand Identity', text: 'Refined the visual identity to feel empathetic, trustworthy, and premium, honoring their family-owned legacy since 2009.', icon: <Palette size={24} color={brandColor} /> },
];

const impactAreas = [
  { name: 'Empathy-Driven Design', desc: 'A warm, supportive visual language tailored for pet parents in stressful situations', icon: <Heart size={32} color={brandColor} /> },
  { name: 'Frictionless Shopping', desc: 'Streamlined add-to-cart and simplified product variations for an easy mobile experience', icon: <ShoppingBag size={32} color={brandColor} /> },
  { name: 'Clear Logistics', desc: 'Transparent communication regarding shipping, sizing, and the 100% USA-made promise', icon: <Truck size={32} color={brandColor} /> },
  { name: 'Trust & Validation', desc: 'Integrated verified reviews and video testimonials to build immediate consumer trust', icon: <CheckCircle size={32} color={brandColor} /> },
];

export default function PeekeeperView({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: 80, background: 'transparent', color: textTheme, overflowX: 'hidden', position: 'relative', zIndex: 3 }}>

        {/* HERO */}
        <section style={{ padding: '12px 20px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 22, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 4rem', minHeight: 520 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'auto' }}>
                <span style={{ fontSize: 22, fontWeight: 600, color: textTheme }}>Case Study</span>
                <span style={{ width: 1, height: 14, background: 'var(--line)', display: 'inline-block' }} />
                <span style={{ fontSize: 14, color: mid, fontStyle: 'italic' }}>E-Commerce & Pet Care</span>
              </div>
              <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 400, lineHeight: 1.1, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
                  <span style={{ color: brandColor }}>Peace of Mind for Pet Parents:</span><br />
                  Revitalizing the PeeKeeper Shopping Experience
                </h1>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: mid, margin: '0 0 2rem' }}>
                  A complete digital overhaul for the patented "escape-proof" dog diaper, combining empathetic branding with high-converting e-commerce architecture.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '1.5rem' }}>
                  {['The Challenge', 'Our Role', 'Focus Areas', 'The Results'].map(l => (
                    <button key={l} style={{ borderRadius: 999, background: 'var(--panel)', border: '1px solid var(--line)', padding: '11px 20px', fontSize: 13, fontWeight: 500, color: brandColor, cursor: 'pointer' }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div style={{ position: 'relative', minHeight: 520, }}>
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" alt="PeeKeeper" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.4 }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #082f49 100%)'; }} />

              <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
                <a href="https://peekeeper.com/" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, background: brandColor, padding: '12px 24px', fontSize: 15, fontWeight: 500, color: '#000', border: 'none', cursor: 'pointer' }}>
                    Visit peekeeper.com <span style={{ fontSize: 18 }}>↗</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section style={{ padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 400, lineHeight: 1.15, color: textTheme, margin: '0 0 1.5rem', ...serif }}>The Challenge</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, margin: '0 0 1.5rem' }}>
                PeeKeeper LLC had a patented, highly effective product that solved a stressful problem for pet owners. However, their legacy website was difficult to navigate, causing friction during the sizing and checkout process.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, margin: 0 }}>
                They needed a modern e-commerce storefront that not only processed transactions smoothly but also educated customers clearly and empathetically about their unique harness design.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: textTheme, margin: '0 0 1.5rem' }}>Key Obstacles:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {challengeList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ display: 'flex', height: 21, width: 21, minWidth: 21, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: brandColor, fontSize: 14, fontWeight: 700, color: '#000', marginTop: 3 }}>!</span>
                    <p style={{ fontSize: 15, lineHeight: 1.5, color: mid, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC ROLE */}
        <section style={{ padding: '0 1.5rem 4rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: textTheme, margin: '0 0 0.75rem' }}>Our Strategic Role</h3>
            <p style={{ fontSize: 'clamp(16px,1.4vw,24px)', lineHeight: 1.45, color: mid, margin: '0 0 3rem', ...serif }}>
              We partnered with this family-owned business to elevate their digital storefront, combining conversion-focused UX with an empathetic brand narrative.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {roleCards.map((r, i) => (
                <div key={i} style={{ borderRadius: 14, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '1.5rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>{r.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: textTheme, margin: '0 0 0.75rem' }}>{r.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: mid, margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT AREAS */}
        <section style={{ padding: '0 1.5rem 4rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 1rem', ...serif }}>A Seamless E-Commerce Journey</h2>
              <p style={{ fontSize: 16, color: mid, margin: 0 }}>Removing friction from discovery to delivery.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {impactAreas.map((area, i) => (
                <div key={i} style={{ borderRadius: 16, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ marginBottom: '1.5rem' }}>{area.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: textTheme, margin: '0 0 0.75rem' }}>{area.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: mid, margin: 0 }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section style={{ padding: '0 1.5rem 4rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div style={{ borderRadius: 20, background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
                Higher Conversions, <span style={{ color: brandColor }}>Happier Customers</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, maxWidth: 800, margin: '0 0 3rem' }}>
                The modernized PeeKeeper storefront now provides an intuitive, supportive shopping experience. With a clarified sizing guide and a mobile-first architecture, the brand sees increased conversion rates and reduced customer service friction.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', width: '100%', maxWidth: 900 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <ShoppingBag size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Increased Sales</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Optimized checkout funnel</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <Target size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Fewer Returns</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Redesigned interactive sizing</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <Smartphone size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Mobile Growth</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Flawless responsive design</p>
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

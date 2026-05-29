'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import { Layers, Target, Search, Palette, Shirt, Footprints, Backpack, HardHat, Flashlight, Medal, Package, TrendingUp, Tag, Smartphone } from 'lucide-react';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const olive = 'var(--panel)';
const tan = 'var(--cyan)';
const dark = 'var(--bg-1)';
const mid = 'var(--text-soft)';
const textTheme = 'var(--text)';

const challengeList = [
  'Large, complex product catalog with 1,000+ SKUs across multiple categories',
  'No unified visual identity or brand consistency across the platform',
  'Poor mobile experience losing a significant share of potential buyers',
  'Weak SEO structure limiting organic discovery for tactical gear searches',
  'No clear hierarchy between product categories, brands, and military branches',
  'Outdated platform unable to handle modern e-commerce conversion flows',
];

const roleCards = [
  { title: 'E-Commerce Architecture', text: 'Restructured the full product catalog, category hierarchy, and navigation to support 1,000+ SKUs across 10+ categories and 12+ brands without overwhelming the user.', icon: <Layers size={24} color="var(--cyan)" /> },
  { title: 'UX & Conversion Design', text: 'Redesigned the user journey from homepage discovery to checkout — reducing friction at every step and increasing conversion rate for high-intent tactical gear buyers.', icon: <Target size={24} color="var(--cyan)" /> },
  { title: 'SEO & Content Strategy', text: 'Built a technical SEO foundation and category-level content strategy to capture organic traffic from military, law enforcement, and outdoor enthusiast search queries.', icon: <Search size={24} color="var(--cyan)" /> },
  { title: 'Brand & Visual System', text: 'Created a consistent visual identity system — military-inspired yet commercially clean — applied across product pages, banners, and promotional materials.', icon: <Palette size={24} color="var(--cyan)" /> },
];

const brands = ['5.11 Tactical', 'Propper', 'Rothco', 'Belleville', 'Condor', 'Tru Spec', 'Rapid Dominance', 'Erazor Bits', 'Grunt Style', 'Bates Footwear', 'Reebok Tactical', 'Trooper'];

const categories = [
  { name: 'Apparel & Uniforms', desc: 'ACUs, BDUs, ABUs, tactical shirts, pants & shorts', icon: <Shirt size={32} color="var(--cyan)" /> },
  { name: 'Footwear', desc: 'Combat boots, side-zip, waterproof, flight boots', icon: <Footprints size={32} color="var(--cyan)" /> },
  { name: 'Backpacks & Bags', desc: 'Tactical packs, duffle bags, ammo pouches, gun & range', icon: <Backpack size={32} color="var(--cyan)" /> },
  { name: 'Headwear', desc: 'Baseball caps, military covers, patches & hats', icon: <HardHat size={32} color="var(--cyan)" /> },
  { name: 'Emergency Supplies', desc: 'Knives, flashlights, self-defense, survival gear', icon: <Flashlight size={32} color="var(--cyan)" /> },
  { name: 'Gifts & Novelties', desc: 'Custom dog tags, military T-shirts, collectibles', icon: <Medal size={32} color="var(--cyan)" /> },
];

const stats = [
  { value: '1,000+', label: 'Product SKUs organized into a clean, navigable catalog structure' },
  { value: '12+', label: 'Premium tactical brands integrated with brand-specific category pages' },
  { value: '$99+', label: 'Free shipping threshold driving higher average order values' },
  { value: '100%', label: 'Money-back guarantee implemented as a trust-building conversion lever' },
];

const AlertDot = () => (
  <span style={{ marginTop: 3, display: 'flex', height: 21, width: 21, minWidth: 21, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: tan, fontSize: 13, fontWeight: 700, color: '#fff' }}>!</span>
);

export default function AlliedSurplusView({ locale }: { locale: string }) {
  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: 80, background: 'transparent', color: textTheme, overflowX: 'hidden', position: 'relative', zIndex: 3 }}>

        {/* HERO */}
        <section style={{ padding: '12px 20px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 22, overflow: 'hidden', background: dark, display: 'grid', gridTemplateColumns: '1fr 1fr', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 4rem', minHeight: 520 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'auto' }}>
                <span style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>Case Study</span>
                <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}>Military & Tactical E-Commerce</span>
              </div>
              <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 400, lineHeight: 1.1, color: '#fff', margin: '0 0 1.5rem', ...serif }}>
                  <span style={{ color: tan }}>Mission-Ready Commerce:</span><br />
                  Building Allied Surplus into a High-Performance Tactical Store
                </h1>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.68)', margin: '0 0 2rem' }}>
                  A complete e-commerce overhaul for one of the US market's most established military army/navy surplus retailers — restructured for scale, conversion, and long-term organic growth.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '1.5rem' }}>
                  {['The Challenge', 'Our Role', 'Categories', 'The Results'].map(l => (
                    <button key={l} style={{ borderRadius: 999, background: olive, padding: '11px 20px', fontSize: 13, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer' }}>{l}</button>
                  ))}
                </div>
                {/* Trust badges */}
                <div style={{ display: 'flex', gap: 16 }}>
                  {['🚚 Free Shipping $99+', '💰 100% Money Back', '🕐 24/7 Online Support'].map(b => (
                    <span key={b} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div style={{ position: 'relative', minHeight: 520, background: '#2A2E22' }}>
          
                <img src="/images/services/slide4.webp" alt="Allied Surplus"  /> 
             
              <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
                <a href="https://alliedsurplus.com" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, background: tan, padding: '12px 24px', fontSize: 15, fontWeight: 500, color: dark, border: 'none', cursor: 'pointer' }}>
                    Visit alliedsurplus.com <span style={{ fontSize: 18 }}>↗</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '3.5rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '0 2rem', borderRight: i < 3 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontSize: 'clamp(28px,3vw,46px)', fontWeight: 400, lineHeight: 0.95, color: tan, ...serif }}>{s.value}</div>
                <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.5, color: mid, maxWidth: 210 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 20, padding: '4rem 5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(20px,2.2vw,36px)', fontWeight: 400, lineHeight: 1.3, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
              Allied Surplus is a Phoenix, Arizona-based military surplus retailer with one of the most comprehensive tactical gear catalogs in the US market.
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.2vw,18px)', lineHeight: 1.65, color: mid, margin: 0 }}>
              Serving military personnel, law enforcement officers, outdoor enthusiasts, and civilian collectors, Allied Surplus carries 1,000+ products from 12+ premium brands including 5.11 Tactical, Propper, Rothco, Belleville, and Condor. The challenge was transforming a deeply stocked but structurally complex store into a high-conversion, SEO-optimized e-commerce platform built for the modern buyer.
            </p>
          </div>
        </section>

        {/* CHALLENGE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
            <div style={{ background: 'var(--bg-2)', padding: '3rem 5rem 3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: tan, margin: '0 0 3rem' }}>The Challenge</h3>
                <p style={{ fontSize: 'clamp(18px,1.5vw,26px)', fontWeight: 400, lineHeight: 1.45, color: '#fff', margin: 0, ...serif }}>
                  A catalog with over 1,000 products across dozens of subcategories is an asset — but only if customers can navigate it. Allied Surplus needed structure, clarity, and a platform that converts intent into purchase.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['ACUs · BDUs · ABUs', 'Tactical Footwear', 'Backpacks & Bags', 'Emergency Supplies', 'Gifts & Dog Tags'].map(cat => (
                  <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(181,147,58,0.12)', border: '1px solid rgba(181,147,58,0.2)', borderRadius: 8, padding: '10px 16px' }}>
                    <span style={{ fontSize: 18 }}>🎖️</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '3.5rem 5rem' }}>
              <h3 style={{ fontSize: 'clamp(18px,1.5vw,24px)', fontWeight: 400, lineHeight: 1.35, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
                Several structural and commercial gaps were limiting growth:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                {challengeList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <AlertDot />
                    <p style={{ fontSize: 15, lineHeight: 1.5, color: mid, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ display: 'flex', height: 33, width: 35, minWidth: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: 'var(--panel)', fontSize: 20, fontWeight: 600, color: tan }}>!</span>
                <p style={{ fontSize: 'clamp(16px,1.3vw,22px)', fontWeight: 400, lineHeight: 1.4, color: textTheme, margin: 0, ...serif }}>
                  The inventory was battle-ready. The platform needed to be too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 0.75rem', ...serif }}>Product Categories We Structured</h2>
              <p style={{ fontSize: 15, color: mid, margin: 0 }}>Six primary verticals, each with deep subcategories and brand-specific landing pages.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
              {categories.map((cat, i) => (
                <div key={i} style={{ borderRadius: 16, background: dark, padding: '1.75rem', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>{cat.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: '0 0 0.5rem' }}>{cat.name}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Brands bar */}
            <div style={{ borderRadius: 16, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '1.75rem 2rem' }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: mid, margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Featured Brands</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {brands.map(b => (
                  <span key={b} style={{ fontSize: 13, color: textTheme, background: 'var(--panel)', border: '1px solid var(--line)', borderRadius: 6, padding: '6px 14px', fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC ROLE */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: mid, margin: '0 0 0.75rem' }}>Our Strategic Role</h3>
            <p style={{ fontSize: 'clamp(16px,1.4vw,24px)', lineHeight: 1.45, color: mid, margin: '0 0 2rem', ...serif }}>
              We served as Allied Surplus's full-stack e-commerce and digital strategy partner — from platform architecture to conversion optimization and SEO. Every decision was guided by one objective: connect the right buyer with the right gear, faster.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: '1.5rem' }}>
              {roleCards.map((r, i) => (
                <div key={i} style={{ borderRadius: 14, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '1.25rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: '1rem' }}>{r.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: textTheme, margin: '0 0 0.75rem' }}>{r.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: mid, margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
            {/* Quote */}
            <div style={{ borderRadius: 16, background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '3.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(18px,1.6vw,26px)', fontWeight: 400, lineHeight: 1.45, color: '#fff', margin: 0, ...serif }}>
                A military surplus store needs more than products — it needs{' '}
                <span style={{ color: tan }}>a platform that earns the trust of those who served.</span>
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.15, color: textTheme, margin: '0 0 1rem', ...serif }}>Platform Delivered</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: mid, maxWidth: 680, margin: '0 auto 2.5rem' }}>
              A structured, high-performance military e-commerce platform built to support 1,000+ products, 12+ brands, and a growing base of military and tactical gear buyers across the United States.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Catalog Architecture', desc: '10+ categories, 30+ subcategories, brand pages for 12 tactical brands', icon: <Package size={32} color="var(--cyan)" /> },
                { label: 'Conversion Optimization', desc: 'Streamlined checkout, trust signals, and clear product hierarchy', icon: <TrendingUp size={32} color="var(--cyan)" /> },
                { label: 'SEO Foundation', desc: 'Category-level SEO, structured data, and targeted military keyword strategy', icon: <Search size={32} color="var(--cyan)" /> },
                { label: 'Brand Visual System', desc: 'Military-inspired, commercially clean design across all touchpoints', icon: <Palette size={32} color="var(--cyan)" /> },
                { label: 'Custom Dog Tags', desc: 'Dedicated personalization flow for the custom dog tag product line', icon: <Tag size={32} color="var(--cyan)" /> },
                { label: 'Mobile Commerce', desc: 'Fully responsive platform optimized for mobile tactical gear buyers', icon: <Smartphone size={32} color="var(--cyan)" /> },
              ].map((item, i) => (
                <div key={i} style={{ borderRadius: 16, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '2rem', textAlign: 'left' }}>
                  <div style={{ marginBottom: 12, display: 'flex' }}>{item.icon}</div>
                  <h4 style={{ fontSize: 17, fontWeight: 600, color: textTheme, margin: '0 0 0.5rem' }}>{item.label}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: mid, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Dark stat row */}
            <div style={{ borderRadius: 20, background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '0 2rem', borderRight: i < 3 ? '1px solid var(--line)' : 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: 'clamp(28px,3vw,46px)', fontWeight: 400, lineHeight: 0.95, color: tan, ...serif }}>{s.value}</div>
                  <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,0.65)', maxWidth: 200 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE LINK */}
        <section style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 20, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(20px,2vw,32px)', fontWeight: 400, color: textTheme, margin: '0 0 1rem', ...serif }}>See Allied Surplus Live</h2>
            <p style={{ fontSize: 15, color: mid, margin: '0 0 2rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Military Army Navy Surplus Store — Free shipping on orders over $99. 100% money-back guarantee.
            </p>
            <a href="https://alliedsurplus.com" target="_blank" rel="noopener noreferrer">
              <button style={{ borderRadius: 999, background: 'var(--panel)', color: '#fff', padding: '14px 36px', fontSize: 15, fontWeight: 500, border: '1px solid var(--line)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Visit alliedsurplus.com <span style={{ fontSize: 18 }}>↗</span>
              </button>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 1.5rem 5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,40px)', fontWeight: 400, lineHeight: 1.15, color: textTheme, margin: '0 0 1rem', ...serif }}>Ready to Scale Your E-Commerce?</h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: mid, margin: '0 auto 2rem', maxWidth: 580 }}>
              Whether you have 10 products or 10,000 — we build e-commerce platforms that convert, scale, and earn trust in competitive markets.
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

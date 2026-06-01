'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import { Layers, Target, Search, Palette, Leaf, Sprout, Handshake, Users, LineChart, Globe } from 'lucide-react';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const dark = 'var(--bg-1)';
const mid = 'var(--text-soft)';
const textTheme = 'var(--text)';
const brandColor = '#22c55e'; // Green for Agriculture

const challengeList = [
  'Need for a robust digital platform to connect with rural communities and farmers',
  'Lack of clear communication regarding agricultural methodologies and impact metrics',
  'Poor accessibility for non-technical users and varied device types',
  'No centralized system for publishing research, reports, and livelihood data',
];

const roleCards = [
  { title: 'Digital Architecture', text: 'Built a scalable, accessible platform designed for low-bandwidth environments and diverse user demographics.', icon: <Layers size={24} color={brandColor} /> },
  { title: 'UX & Accessibility', text: 'Designed an intuitive, multi-lingual interface focusing on clarity and ease-of-use for rural and urban users alike.', icon: <Target size={24} color={brandColor} /> },
  { title: 'Content Strategy', text: 'Organized agricultural data, reports, and success stories into a cohesive, easily navigable knowledge base.', icon: <Search size={24} color={brandColor} /> },
  { title: 'Brand Identity', text: 'Developed a visual language that communicates trust, growth, and sustainable agricultural practices.', icon: <Palette size={24} color={brandColor} /> },
];

const impactAreas = [
  { name: 'Sustainable Farming', desc: 'Resource optimization and eco-friendly agricultural methodologies', icon: <Leaf size={32} color={brandColor} /> },
  { name: 'Livelihood Growth', desc: 'Economic empowerment and income diversification strategies', icon: <Sprout size={32} color={brandColor} /> },
  { name: 'Community Outreach', desc: 'Direct engagement and skill development programs for rural farmers', icon: <Users size={32} color={brandColor} /> },
  { name: 'Strategic Partnerships', desc: 'Collaborations with NGOs, government bodies, and supply chains', icon: <Handshake size={32} color={brandColor} /> },
];

export default function SablView({ locale }: { locale: string }) {
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
                <span style={{ fontSize: 14, color: mid, fontStyle: 'italic' }}>Agriculture & Non-Profit</span>
              </div>
              <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 400, lineHeight: 1.1, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
                  <span style={{ color: brandColor }}>Empowering Rural Growth:</span><br />
                  Strengthening Agriculture-based Livelihoods
                </h1>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: mid, margin: '0 0 2rem' }}>
                  A comprehensive digital transformation for SABL, creating a platform that bridges the gap between modern agricultural science and grassroots farming communities.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '1.5rem' }}>
                  {['The Challenge', 'Our Role', 'Impact', 'The Results'].map(l => (
                    <button key={l} style={{ borderRadius: 999, background: 'var(--panel)', border: '1px solid var(--line)', padding: '11px 20px', fontSize: 13, fontWeight: 500, color: brandColor, cursor: 'pointer' }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div style={{ position: 'relative', minHeight: 520, background: '#0a1f11' }}>
              <img src="/images/services/improve.png" alt="SABL" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
                <a href="https://www.sabl.org.in/" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, background: brandColor, padding: '12px 24px', fontSize: 15, fontWeight: 500, color: '#000', border: 'none', cursor: 'pointer' }}>
                    Visit sabl.org.in <span style={{ fontSize: 18 }}>↗</span>
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
                SABL was doing incredible work on the ground, improving agricultural practices and supporting rural communities. However, their digital presence did not reflect the scale or impact of their operations.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, margin: 0 }}>
                They required a platform that could serve both as a knowledge repository for farmers and as a professional showcase for stakeholders and potential partners.
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
              We partnered with SABL to create a digital ecosystem that bridges the rural-urban divide, translating on-ground impact into a compelling, accessible online narrative.
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
              <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 1rem', ...serif }}>Focus Areas Highlighted</h2>
              <p style={{ fontSize: 16, color: mid, margin: 0 }}>Structuring SABL's core mission into navigable digital verticals.</p>
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
                A Digital Hub for <span style={{ color: brandColor }}>Sustainable Agriculture</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, maxWidth: 800, margin: '0 0 3rem' }}>
                The new SABL platform successfully unifies their diverse initiatives into a single, cohesive digital experience. It serves as an accessible resource for farmers, a transparent reporting tool for stakeholders, and a powerful voice for sustainable agricultural practices.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', width: '100%', maxWidth: 900 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <Globe size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Wider Reach</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Expanded digital footprint</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <Users size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Better Engagement</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Community-focused UX</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <LineChart size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Clear Impact</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Data-driven storytelling</p>
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

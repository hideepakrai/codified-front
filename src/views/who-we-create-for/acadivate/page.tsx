'use client';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';
import { Layers, Target, Search, Palette, BookOpen, GraduationCap, Globe, Trophy, Network, Award } from 'lucide-react';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const dark = 'var(--bg-1)';
const mid = 'var(--text-soft)';
const textTheme = 'var(--text)';
const brandColor = '#4F46E5'; // Indigo for Academics/Tech

const challengeList = [
  'Highly fragmented academic ecosystem with disconnected scholars, institutions, and conferences',
  'Lack of a unified, transparent platform for academic rankings and peer-reviewed journal publishing',
  'Complex submission flows for conference papers, nominations, and awards',
  'Need for a robust global networking infrastructure for interdisciplinary research collaboration',
];

const roleCards = [
  { title: 'Platform Architecture', text: 'Built a comprehensive digital ecosystem that integrates conference hosting, journal publishing, and academic rankings into a single scalable platform.', icon: <Layers size={24} color={brandColor} /> },
  { title: 'UX & User Journeys', text: 'Streamlined complex processes like award nominations, paper submissions, and institution ranking applications for a frictionless user experience.', icon: <Target size={24} color={brandColor} /> },
  { title: 'Content Strategy', text: 'Structured dense academic content into clear, navigable hierarchies focusing on Scopus and WoS indexed proceedings.', icon: <Search size={24} color={brandColor} /> },
  { title: 'Brand Identity', text: 'Developed a sophisticated, trustworthy visual identity that resonates with global academic institutions and elite researchers.', icon: <Palette size={24} color={brandColor} /> },
];

const impactAreas = [
  { name: 'Global Conferences', desc: 'Seamless management of international research conferences and paper submissions', icon: <Globe size={32} color={brandColor} /> },
  { name: 'Academic Rankings', desc: 'Transparent, data-driven institutional research rankings system', icon: <Trophy size={32} color={brandColor} /> },
  { name: 'Research Network', desc: 'Connecting scholars worldwide for interdisciplinary collaboration', icon: <Network size={32} color={brandColor} /> },
  { name: 'Excellence Awards', desc: 'Rigorous peer-reviewed evaluation systems for recognizing academic achievements', icon: <Award size={32} color={brandColor} /> },
];

export default function AcadivateView({ locale }: { locale: string }) {
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
                <span style={{ fontSize: 14, color: mid, fontStyle: 'italic' }}>Academic Tech & Publishing</span>
              </div>
              <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 400, lineHeight: 1.1, color: textTheme, margin: '0 0 1.5rem', ...serif }}>
                  <span style={{ color: '#818cf8' }}>Advancing Academic Research:</span><br />
                  Connecting Scholars and Institutions Globally
                </h1>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: mid, margin: '0 0 2rem' }}>
                  A transformative digital platform for Acadivate, designed to foster research breakthroughs and strategic global collaborations through a unified academic ecosystem.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '1.5rem' }}>
                  {['The Challenge', 'Our Role', 'Focus Areas', 'The Results'].map(l => (
                    <button key={l} style={{ borderRadius: 999, background: 'var(--panel)', border: '1px solid var(--line)', padding: '11px 20px', fontSize: 13, fontWeight: 500, color: '#a5b4fc', cursor: 'pointer' }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div style={{ position: 'relative', minHeight: 520, background: '#0f172a' }}>
              <img src="https://acadivate.com/assets/Image/research-innovation.jpg" alt="Acadivate" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',  }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #020617 100%)'; }} />
             
              <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
                <a href="https://acadivate.com/" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, background: brandColor, padding: '12px 24px', fontSize: 15, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Visit acadivate.com <span style={{ fontSize: 18 }}>↗</span>
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
                Acadivate's mission to advance global research and academic collaboration was hindered by a fragmented digital landscape. Scholars struggled to navigate between conference portals, journal submissions, and ranking applications.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, margin: 0 }}>
                They required a robust, highly professional platform capable of handling complex data structures while conveying the trust and credibility necessary for peer-reviewed academic excellence.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: textTheme, margin: '0 0 1.5rem' }}>Key Obstacles:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {challengeList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ display: 'flex', height: 21, width: 21, minWidth: 21, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: brandColor, fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 3 }}>!</span>
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
              We architected a unified digital hub for Acadivate, designed from the ground up to support high-stakes academic processes with clarity, security, and global accessibility.
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
              <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 400, lineHeight: 1.2, color: textTheme, margin: '0 0 1rem', ...serif }}>A Unified Academic Ecosystem</h2>
              <p style={{ fontSize: 16, color: mid, margin: 0 }}>Consolidating critical academic services into an intuitive user experience.</p>
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
                Empowering the Next Generation of <span style={{ color: '#818cf8' }}>Global Scholars</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: mid, maxWidth: 800, margin: '0 0 3rem' }}>
                The Acadivate platform now stands as a premier destination for researchers, academics, and institutions. By removing friction from the publication, recognition, and collaboration processes, the platform actively accelerates the pace of global innovation.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', width: '100%', maxWidth: 900 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <BookOpen size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Global Visibility</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Elevated Scopus/WoS indexing</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <GraduationCap size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Institutional Trust</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Data-driven ranking transparency</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <Network size={40} color={brandColor} />
                  <div style={{ fontSize: 24, fontWeight: 600, color: textTheme }}>Interdisciplinary Growth</div>
                  <p style={{ fontSize: 14, color: mid, margin: 0 }}>Expanded research collaboration</p>
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

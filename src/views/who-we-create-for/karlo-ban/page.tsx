'use client';

import { useState, useMemo, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';

/* ── Play icon ── */
const PlayIcon = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const dim = size === 'lg' ? 'h-16 w-16' : size === 'sm' ? 'h-9 w-9' : 'h-12 w-12';
  const svg = size === 'lg' ? 24 : size === 'sm' ? 12 : 18;
  return (
    <span className={`inline-flex ${dim} items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105`}>
      <svg width={svg} height={svg} viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}>
        <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.89l10.58-6.86a1.03 1.03 0 0 0 0-1.78L9.56 4.25A1.04 1.04 0 0 0 8 5.14Z" />
      </svg>
    </span>
  );
};

export default function KarloBanView({ locale }: { locale: string }) {
  const [loadVideo, setLoadVideo] = useState(false);
  const videoId = 'cflmfqt1zBg';

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#video-section') {
      setLoadVideo(true);
    }
  }, []);

  const scrollToVideo = () => {
    setLoadVideo(true);
    setTimeout(() => {
      document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: '80px', background: 'transparent', color: 'var(--text)', overflowX: 'hidden', position: 'relative', zIndex: 3 }}>

        {/* ── HERO ── */}
        <section style={{ padding: '2rem 1.5rem 0' }}>
          <div
            style={{
              position: 'relative',
              minHeight: 520,
              borderRadius: 24,
              overflow: 'hidden',
              backgroundImage: "url('/images/services/karoban-hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 20px 60px rgba(32,12,7,0.18)',
            }}
          >
            {/* overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg,rgba(20,10,5,0.72) 40%,rgba(20,10,5,0.25) 100%)' }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', minHeight: 520 }}>
              {/* left */}
              <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 3rem', maxWidth: 640 }}>
                {/* breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'auto' }}>
                  <span style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>Work</span>
                  <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    Branding, Web UX &amp; UI, Photography, Video Direction, and AI Video and Photo Postproduction
                  </span>
                </div>

                {/* headline */}
                <div style={{ marginTop: 'auto', paddingBottom: '1rem' }}>
                  <h1 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    lineHeight: 1.06,
                    letterSpacing: '-0.03em',
                    color: '#fff',
                    margin: 0,
                  }}>
                    When Craft Meets<br />Collaboration
                  </h1>
                  <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', maxWidth: 480 }}>
                    A true partnership forged in trust, precision, and shared vision, resulting in a brand that honors the quality of every blade Karlo Ban creates.
                  </p>
                  <button
                    onClick={scrollToVideo}
                    style={{
                      marginTop: 28,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 999,
                      padding: '10px 22px',
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: 'pointer',
                      backdropFilter: 'blur(8px)',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                  >
                    <PlayIcon size="sm" />
                    <span>Play Video</span>
                  </button>
                </div>
              </div>

              {/* right logo */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '2rem 4rem 2rem 2rem' }}>
                <img
                  src="/images/services/karlon-ban-logo.png"
                  alt="Karlo Ban logo"
                  style={{ width: 220, objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(255,160,120,0.3))' }}
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── STORY / INTRO ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 'clamp(16px,1.5vw,20px)', lineHeight: 1.6, color: 'var(--text-soft)', margin: 0 }}>
              From the very beginning, this project was built on alignment, between design, story, and structure. Working alongside Karlo Ban, a master bladesmith from the village of Jelenjak in Zagorje, we set out to create a brand that could stand shoulder to shoulder with the exceptional quality of his handmade knives.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.95fr', gap: 16 }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 36px rgba(0,0,0,0.1)' }}>
              <img src="/images/services/karloban-img.png" alt="Karlo Ban working" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 36px rgba(0,0,0,0.1)' }}>
              <img src="/images/services/karo-ban-img1.png" alt="Knife detail" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* ── THANKS CARD ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 4rem' }}>
          <div style={{
            background: 'var(--bg-1)',
            borderRadius: 22,
            padding: '3.5rem 4rem',
            textAlign: 'center',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(18px,1.8vw,26px)',
              lineHeight: 1.5,
              color: 'var(--text)',
              maxWidth: 740,
              margin: '0 auto',
            }}>
              Many thanks to Karlo for the trust, openness, and clarity of his craft, and to all creative partners that worked on the project: HrvojeFX, Doku Films, and Hrescic Agency for their professionalism and commitment throughout.
            </p>
          </div>
        </section>

        {/* ── VIDEO SECTION ── */}
        <section id="video-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 4rem' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', borderRadius: 20, overflow: 'hidden', background: '#000', boxShadow: '0 16px 36px rgba(0,0,0,0.12)' }}>
            {!loadVideo ? (
              <>
                <img
                  src="/images/services/karoban-hero.png"
                  alt="Video preview"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <button onClick={() => setLoadVideo(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <PlayIcon size="lg" />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            )}
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(28px,3vw,44px)',
            color: 'var(--text)',
            textAlign: 'center',
            margin: '0 0 2rem',
            fontWeight: 500,
          }}>
            Results
          </h2>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, gridAutoRows: '220px' }}>

            {/* Top left — branding image */}
            <div style={{ gridColumn: 'span 6', borderRadius: 18, overflow: 'hidden', background: '#4d3020' }}>
              <img src="/images/services/karo-ban-gallery-image.png" alt="Branding pattern" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Large portrait — spans 2 rows */}
            <div style={{ gridColumn: 'span 6', gridRow: 'span 2', borderRadius: 18, overflow: 'hidden', position: 'relative' }}>
              <img src="/images/services/karo-ban-gallery-image5.png" alt="Karlo Ban portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', top: 16, left: 16, width: 36 }}>
                <img src="/images/services/karoban-logo.svg" alt="Karlo Ban mark" style={{ width: '100%' }} onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <PlayIcon size="md" />
              </div>
            </div>

            {/* Branding text */}
            <div style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 18, padding: '1rem' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(18px,1.5vw,26px)', color: 'var(--text-soft)', textAlign: 'center', margin: 0, lineHeight: 1.35 }}>
                Branding / Web UX &amp; UI
              </p>
            </div>

            {/* Orange logo card */}
            <div style={{ gridColumn: 'span 3', borderRadius: 18, background: '#f77712', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
                <img src="/images/services/karlo-ban-white-logo.png" alt="Karlo Ban" style={{ width: 78, height: 58, objectFit: 'contain' }} onError={(e) => e.currentTarget.style.display = 'none'} />
                <span style={{ fontSize: 10, letterSpacing: '0.16em', marginTop: 8 }}>Carloban.com</span>
              </div>
            </div>

            {/* Bottom left mini stack */}
            <div style={{ gridColumn: 'span 2', gridRow: 'span 2', display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
              <div style={{ borderRadius: 18, overflow: 'hidden' }}>
                <img src="/images/services/karoban-gallery-images1.png" alt="Karlo Ban sitting" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 18, overflow: 'hidden' }}>
                <img src="/images/services/category-img.png" alt="Karlo Ban hoodie" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Phone mockup */}
            <div style={{ gridColumn: 'span 4', gridRow: 'span 2', borderRadius: 18, overflow: 'hidden', background: 'var(--bg-2)' }}>
              <img src="/images/services/karo-ban-gallery-image4.png" alt="Phone mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Bottom right text + image */}
            <div style={{ gridColumn: 'span 6', gridRow: 'span 2', borderRadius: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(18px,1.5vw,26px)', color: 'var(--text-soft)', margin: 0, lineHeight: 1.35, textAlign: 'center' }}>
                AI Supported Video Post-production.
              </p>
              <div style={{ borderRadius: 18, overflow: 'hidden', flex: 1 }}>
                <img src="/images/services/karo-ban-gallery-image1.png" alt="Knife on table" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

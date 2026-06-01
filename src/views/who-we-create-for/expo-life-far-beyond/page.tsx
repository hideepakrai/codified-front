'use client';
import { useState, useMemo, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation/Navigation';
import Footer from '@/components/layout/Footer/Footer';
import CinematicInit from '@/components/providers/CinematicInit/CinematicInit';

export default function ExpoLifeView({ locale }: { locale: string }) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoId = 't_Uk41--0Hw';

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#video-section') {
      setPlayVideo(true);
    }
  }, []);

  return (
    <>
      <CinematicInit />
      <Navigation />
      <main style={{ paddingTop: 80, minHeight: '100vh', background: '#1a1f26', padding: '80px 12px 12px', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'Inter, sans-serif', position: 'relative', zIndex: 3 }}>

        {/* TOP SECTION */}
        <section style={{ width: '100%', maxWidth: 1400, margin: '0 auto', background: '#242b33', borderRadius: 16, overflow: 'hidden', display: 'flex', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
          {/* Left */}
          <div style={{ flex: 1, padding: '4rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative', minHeight: 520 }}>
            {/* breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'auto' }}>
              <span style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>Work</span>
              <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.4)', display: 'inline-block' }} />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Creative &amp; video direction, and storyboard in cooperation with HrvojeKF</span>
            </div>

            <h1 style={{ fontSize: 'clamp(22px,2.5vw,35px)', lineHeight: 1.25, color: '#fff', fontWeight: 400, margin: '4rem 0 0', maxWidth: 480 }}>
              The packaging served as the initial reference point; the full visual direction and all supporting assets were developed and produced in my studio.
            </h1>
          </div>

          {/* Right image */}
          <div style={{ flex: 1, minHeight: 520, position: 'relative' }}>
            <img
              src="/assets/Image/Rectangle 1796.png"
              alt="Desert Structure"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section id="video-section" style={{ width: '100%', maxWidth: 1400, margin: '0 auto', background: '#242b33', borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '2rem', marginBottom: 40 }}>
          {/* Video player */}
          <div
            onClick={() => setPlayVideo(true)}
            style={{ position: 'relative', width: '100%', aspectRatio: '21/9', borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }}
          >
            {!playVideo ? (
              <>
                <img
                  src="/assets/Image/exo-bird-flight.png"
                  alt="Eagle taking flight"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.7s' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }} />
                {/* Play button */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3, opacity: 0.9 }}>
                      <path d="M4 2.69C4 1.93 4.81 1.44 5.48 1.81L22.4 11.12C23.09 11.5 23.09 12.5 22.4 12.88L5.48 22.18C4.81 22.55 4 22.07 4 21.31V2.69Z" />
                    </svg>
                  </div>
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

          {/* Caption */}
          <div style={{ marginTop: 20, paddingLeft: 8 }}>
            <h2 style={{ fontSize: 'clamp(18px,1.5vw,24px)', fontWeight: 400, color: '#fff', margin: '0 0 6px', letterSpacing: '0.02em' }}>
              EXO - Life and Beyond
            </h2>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, margin: 0 }}>
              Creative &amp; video direction, and storyboard in cooperation with HrvojeKF
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

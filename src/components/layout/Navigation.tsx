'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { initCinematic } from '@/lib/cinematic';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    initCinematic();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <canvas id="webgl"></canvas>
      <div className="vignette"></div>
      <div className="grain"></div>

      <div className="progress" id="progress"></div>

      <nav className="nav">
        <Link href="/">
          <img src="https://www.codifiedweb.com/Image/codified-white-logo.webp" alt="Logo" className="h-[55px]" />
        </Link>

        {/* Desktop menu */}
        <div className="menu">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/technologies">Technologies</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="nav-right">
          <Link className="cta" href="/contact">Free Consultation</Link>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <Link href="/about"        onClick={closeMenu}>About</Link>
        <Link href="/services"     onClick={closeMenu}>Services</Link>
        <Link href="/industries"   onClick={closeMenu}>Industries</Link>
        <Link href="/technologies" onClick={closeMenu}>Technologies</Link>
        <Link href="/contact"      onClick={closeMenu}>Contact</Link>
        <Link href="/contact" className="drawer-cta" onClick={closeMenu}>Free Consultation →</Link>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="drawer-overlay" onClick={closeMenu} />
      )}

      <aside className="rail" id="rail">
        <div className="item active" data-target="signal"><span>Signal</span><span className="dot"></span></div>
        <div className="item" data-target="core"><span>Core</span><span className="dot"></span></div>
        <div className="item" data-target="why"><span>Why Us</span><span className="dot"></span></div>
        <div className="item" data-target="data-grid"><span>Services</span><span className="dot"></span></div>
        <div className="item" data-target="api"><span>Technologies</span><span className="dot"></span></div>
        <div className="item" data-target="engine"><span>Industries</span><span className="dot"></span></div>
        <div className="item" data-target="ai"><span>AI Workflow</span><span className="dot"></span></div>
        <div className="item" data-target="testimonials"><span>Testimonials</span><span className="dot"></span></div>
        <div className="item" data-target="command"><span>Command</span><span className="dot"></span></div>
      </aside>
    </>
  );
}

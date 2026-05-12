'use client';
import { useState } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <canvas id="webgl"></canvas>
      <div className="vignette"></div>
      <div className="grain"></div>

      <div className="progress" id="progress"></div>

      <nav className="nav">
        {/* <div className="brand">
          <span className="brand-mark"></span>
          <span>codified.</span>
          <span className="nav-sub">Web Solutions</span>
        </div> */}

        <img src="https://www.codifiedweb.com/Image/codified-white-logo.webp" alt="Logo" className="h-[55px]" />


        {/* Desktop menu */}
        <div className="menu">
          <a href="#core">About</a>
          <a href="#data-grid">Services</a>
          <a href="#engine">Industries</a>
          <a href="#ai">Technologies</a>
          <a href="#command">Contact</a>
        </div>

        <div className="nav-right">
          <a className="cta" href="#command">Free Consultation</a>

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
        <a href="#core"    onClick={closeMenu}>About</a>
        <a href="#data-grid" onClick={closeMenu}>Services</a>
        <a href="#engine"  onClick={closeMenu}>Industries</a>
        <a href="#ai"      onClick={closeMenu}>Technologies</a>
        <a href="#command" onClick={closeMenu}>Contact</a>
        <a href="#command" className="drawer-cta" onClick={closeMenu}>Free Consultation →</a>
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

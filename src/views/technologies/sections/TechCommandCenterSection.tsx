'use client';
import React from 'react';

export default function TechCommandCenterSection() {
  return (
    <section className="section" id="command" data-mood="command">
      <div className="inner">
        <div className="cmd-interface">
          <div className="cmd-header">
            <span>Terminal</span>
            <div className="cmd-controls"><i></i><i></i><i></i></div>
          </div>
          <div className="cmd-body">
            <div className="cmd-line"><span className="prompt">codified ~/stack</span><span className="typing">npm install @codified/expertise</span></div>
            <div className="cmd-output" style={{ animationDelay: '2s' }}>
              <div>[+] Resolving dependencies...</div>
              <div>[+] Found scalable architects.</div>
              <div>[+] Found secure infrastructure.</div>
              <div className="success">✓ Ready to build.</div>
            </div>
          </div>
          <div className="cmd-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '24px', margin: '0 0 8px 0', color: '#fff' }}>Start Building</h3>
              <p style={{ color: 'var(--text-soft)', margin: 0, fontSize: '14px' }}>Hire our expert developers to scale your platform.</p>
            </div>
            <a href="/contact" className="btn">Get in Touch <span className="arr">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

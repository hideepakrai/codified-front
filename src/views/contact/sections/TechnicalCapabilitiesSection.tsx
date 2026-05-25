'use client';

export default function TechnicalCapabilitiesSection() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)', background: 'rgba(0,0,0,0.2)' }}>
      <div className="inner">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="label" style={{ justifyContent: 'center' }}>TECHNICAL CAPABILITIES</span>
          <h2 className="display" style={{ fontSize: '48px', marginTop: '16px' }}>
            Engineered for <span className="grad-text">Scale.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Enterprise Architecture", desc: "Building resilient, high-availability systems that grow with your business.", icon: "01" },
            { title: "AI-First Integration", desc: "Seamless deployment of LLMs and machine learning models into production.", icon: "02" },
            { title: "Security by Design", desc: "End-to-end encryption and compliance protocols baked into the core.", icon: "03" },
            { title: "Rapid Prototyping", desc: "Turning complex concepts into functional MVPs in record time.", icon: "04" }
          ].map((cap, i) => (
            <div key={i} className="reveal glow-card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', marginBottom: '16px', opacity: 0.6 }}>
                CODE_{cap.icon}
              </div>
              <h4 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px' }}>{cap.title}</h4>
              <p style={{ fontSize: '14px', opacity: 0.5, lineHeight: 1.6 }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

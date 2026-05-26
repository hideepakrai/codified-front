'use client';
import { Server, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
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
            { title: "Enterprise Architecture", desc: "Building resilient, high-availability systems that grow with your business.", icon: <Server size={32} strokeWidth={1.5} /> },
            { title: "AI-First Integration", desc: "Seamless deployment of LLMs and machine learning models into production.", icon: <BrainCircuit size={32} strokeWidth={1.5} /> },
            { title: "Security by Design", desc: "End-to-end encryption and compliance protocols baked into the core.", icon: <ShieldCheck size={32} strokeWidth={1.5} /> },
            { title: "Rapid Prototyping", desc: "Turning complex concepts into functional MVPs in record time.", icon: <Zap size={32} strokeWidth={1.5} /> }
          ].map((cap, i) => (
            <div key={i} className="reveal glow-card flex flex-col items-center text-center" style={{ padding: '40px' }}>
              <div className="ico flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgba(29,195,243,0.08)] border border-[rgba(29,195,243,0.2)] text-cyan mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(29,195,243,0.15)] group-hover:shadow-[0_0_20px_rgba(29,195,243,0.2)]">
                {cap.icon}
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

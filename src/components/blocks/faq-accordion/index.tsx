'use client';
import { useState } from 'react';

const QA = [
  {
    q: "What specialized services do you offer?",
    a: "We specialize in custom Software Development, AI/ML Integrations, Mobile App Development, E-Commerce, UX/UI Design, and SEO optimization to help brands achieve scalable growth."
  },
  {
    q: "Do you build custom AI models for specific industries?",
    a: "Yes. From predictive analytics in FinTech to healthcare compliance monitoring and custom enterprise chatbots, we train and integrate specialized AI models for your specific domain."
  },
  {
    q: "How long does a typical project take?",
    a: "A standard MVP (Minimum Viable Product) typically takes 4-8 weeks. Complex enterprise deployments or bespoke AI models may scale from 3-6 months depending on data readiness and architecture."
  },
  {
    q: "What is your typical technology stack?",
    a: "We are versatile, typically utilizing React, Next.js, or Vue for frontends; Node.js, Python, or Java for backends; and AWS or GCP for cloud infrastructure. For AI, we leverage PyTorch and TensorFlow alongside powerful LLM endpoints."
  },
  {
    q: "Can you take over existing codebases?",
    a: "Absolutely. We routinely evaluate, refactor, and stabilize legacy systems or transition them to modern, scalable microservice architectures seamlessly."
  }
];

export default function Accordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {QA.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div 
            key={i} 
            style={{ 
              borderBottom: '1px solid var(--line-strong)', 
              padding: '18px 0',
              cursor: 'pointer'
            }}
            onClick={() => setOpenIdx(isOpen ? null : i)}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              color: isOpen ? 'var(--text)' : 'var(--text-soft)',
              transition: 'color 0.3s ease'
            }}>
              {item.q}
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                color: 'var(--cyan)', 
                transform: isOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.3s ease'
              }}>
                +
              </span>
            </div>
            
            <div style={{
              maxHeight: isOpen ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease',
              opacity: isOpen ? 1 : 0,
              marginTop: isOpen ? '12px' : '0'
            }}>
              <p style={{ margin: 0, color: 'var(--text-mute)', fontSize: '14px', lineHeight: '1.6' }}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

'use client';

export default function TechnicalFAQSection() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="inner">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="reveal">
            <span className="label">TECHNICAL_FAQ</span>
            <h2 className="display" style={{ fontSize: '42px', marginTop: '16px' }}>
              Common <span className="grad-text">Queries.</span>
            </h2>
            <p className="lede" style={{ marginTop: '24px' }}>
              Quick answers to standard operational questions. For detailed inquiries, please use the main transmission form.
            </p>
            <div style={{ marginTop: '40px' }}>
              <a href="mailto:info@codifiedweb.com" className="btn btn-outline" style={{ padding: '14px 30px' }}>
                Email Support Directly
              </a>
            </div>
          </div>
          <div className="reveal grid gap-8">
            {[
              { q: "How long does the initial audit take?", a: "Typically, our team provides a technical feedback loop within 24-48 hours of your submission." },
              { q: "Do you sign Mutual NDAs?", a: "Yes. All technical consultations are covered under a strictly enforced NDA to protect your IP." },
              { q: "Can we hire for dedicated long-term teams?", a: "Absolutely. We specialize in building dedicated pods for scaling enterprises and startups." }
            ].map((faq, i) => (
              <div key={i} style={{ paddingBottom: '24px', borderBottom: '1px solid var(--line)' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px', color: 'var(--cyan-soft)' }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: '14px', opacity: 0.6, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

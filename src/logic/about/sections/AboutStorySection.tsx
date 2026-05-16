'use client';

export default function AboutStorySection() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="inner">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>What Drives Us</h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
              We believe technology should solve real problems, not create new ones. We focus on user-first solutions, building with precision and technical excellence to create long-term value for our clients. Whether it is AI integration or custom web development, we build tech that delivers powerful results.
            </p>
          </div>
          
          <div className="card" style={{ padding: '32px' }}>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>How We Work</h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
              We follow a transparent, agile, and collaborative development process to keep our clients involved every step of the way. From idea validation to deployment, we ensure speed, quality, and flexibility. Your vision becomes our mission, every sprint, every line of code.
            </p>
          </div>
          <div className="card" style={{ padding: '32px' }}>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>What Sets Us Apart</h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
              We don’t just code — we co-create. Our focus is on deep partnerships and custom-built solutions that align with your business DNA. Whether it’s launching an MVP or scaling an enterprise app, we tailor every project for maximum impact. We’re not a vendor. We’re your long-term tech partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

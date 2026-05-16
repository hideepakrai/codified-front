export default function WhyChooseUs() {
  return (
    <section className="section" id="why" data-mood="why">
      <div className="inner">
        <div className="layout">
          <div>
            <span className="label"><span className="num">03 ·</span> Why Us</span>
            <h2 className="display">Built on <span className="grad-text">trust and quality.</span></h2>
            <p className="lede">
              We go beyond coding. We provide a comprehensive approach to product development, ensuring your infrastructure is built for long-term scalability and security.
            </p>
            <div className="core-spec" style={{ gridTemplateColumns: '1fr' }}>
              <div className="spec-cell">
                <div className="k">Agile Delivery</div>
                <div className="v" style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginTop: '6px' }}>Rapid iterations and transparent milestones to keep you involved at every stage.</div>
              </div>
              <div className="spec-cell">
                <div className="k">Secure by Design</div>
                <div className="v" style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginTop: '6px' }}>Enterprise-grade security standards embedded into our CI/CD pipelines.</div>
              </div>
              <div className="spec-cell">
                <div className="k">Scalable Architecture</div>
                <div className="v" style={{ fontSize: '15px', color: 'var(--text-soft)', fontFamily: 'var(--font-body)', marginTop: '6px' }}>Microservices and serverless solutions that grow seamlessly with your user base.</div>
              </div>
            </div>
          </div>
          
          <div className="core-stage" style={{ height: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <div className="card" style={{ padding: '32px' }}>
                <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
                <div className="engine-card" style={{ height: 'auto', flex: 'none', border: 'none', padding: 0, background: 'none' }}>
                  <div className="num">QA-01</div>
                  <h4 style={{ fontSize: '20px' }}>Automated Testing</h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Every commit triggers rigorous testing suites ensuring zero downtime.</p>
                </div>
             </div>
             <div className="card glow" style={{ padding: '32px', borderColor: 'rgba(29,195,243,0.3)', boxShadow: '0 0 30px rgba(29,195,243,0.1)' }}>
                <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
                <div className="engine-card" style={{ height: 'auto', flex: 'none', border: 'none', padding: 0, background: 'none' }}>
                  <div className="num">DE-02</div>
                  <div className="tag" style={{ position: 'relative', top: 0, right: 0, marginTop: '12px', display: 'inline-block' }}>Proprietary</div>
                  <h4 style={{ fontSize: '20px' }}>DevOps CI/CD</h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Seamless deployments across environments with one-click rollbacks and container orchestration.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

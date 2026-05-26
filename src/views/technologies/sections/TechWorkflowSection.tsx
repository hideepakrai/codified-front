'use client';
import React from 'react';

const pipelineSteps = [
  { id: "pw1", icon: "GIT", title: "Version Control", desc: "Code is authored and pushed to secure Git repositories." },
  { id: "pw2", icon: "CI", title: "Continuous Integration", desc: "Automated test suites and linters run on every commit." },
  { id: "pw3", icon: "CD", title: "Continuous Delivery", desc: "Code is containerized and deployed to staging environments." },
  { id: "pw4", icon: "PR", title: "Production Release", desc: "Zero-downtime rolling updates to global production clusters." }
];

export default function TechWorkflowSection() {
  return (
    <section className="section" id="devops" data-mood="ai" style={{ padding: 0 }}>
      <div className="ai-stage">
        <div className="head">
          <div style={{ maxWidth: '800px' }}>
            <span className="label"><span className="num">03·</span> CI/CD</span>
            <h2 className="display">
              Enterprise <span className="grad-text">DevOps Pipeline.</span>
            </h2>
            <p className="lede">Our development workflow guarantees reliability, speed, and security from local machine to production deployment.</p>
          </div>
          <div className="status-bar">
            <span className="pill"><i /> Zero Downtime</span>
            <span className="pill violet"><i /> Automated Testing</span>
          </div>
        </div>

        <div className="pipeline" id="pipeline">
          <div className="pipeline-line"></div>
          <div className="pipe-progress" id="pipeProgress"></div>

          {pipelineSteps.map((step, i) => (
            <div className="pipe-step" data-step={i} key={step.id}>
              <div className="top"><span className="num">S · {String(i + 1).padStart(2, '0')}</span><span className="badge">Active</span></div>
              <div>
                <div className="ico">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ai-readout">
          <div className="read-cell">
            <span>Deployment Frequency</span>
            <span className="v">On-Demand</span>
          </div>
          <div className="read-cell">
            <span>Test Coverage Target</span>
            <span className="v">&gt; 90%</span>
          </div>
          <div className="read-cell">
            <span>Mean Time to Recovery</span>
            <span className="v">&lt; 5 mins</span>
          </div>
        </div>
      </div>
    </section>
  );
}

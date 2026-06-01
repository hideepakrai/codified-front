'use client';
import React from 'react';
import { Layers, Database, Cloud, BrainCircuit } from 'lucide-react';

const techStack = [
  {
    id: "ts1",
    icon: <Layers size={24} strokeWidth={1.5} />,
    title: "Frontend Engineering",
    desc: "React, Next.js, and modern CSS frameworks to deliver lightning-fast, accessible, and responsive user interfaces.",
  },
  {
    id: "ts2",
    icon: <Database size={24} strokeWidth={1.5} />,
    title: "Backend & APIs",
    desc: "Node.js, Go, and Python microservices built to handle massive scale, complex logic, and secure data processing.",
  },
  {
    id: "ts3",
    icon: <Cloud size={24} strokeWidth={1.5} />,
    title: "Cloud & DevOps",
    desc: "AWS, Kubernetes, and automated CI/CD pipelines ensuring zero-downtime deployments and resilient infrastructure.",
  },
  {
    id: "ts4",
    icon: <BrainCircuit size={24} strokeWidth={1.5} />,
    title: "Data & AI",
    desc: "PostgreSQL, Redis, and custom Machine Learning models integrated seamlessly into your core product.",
  }
];

export default function TechStackGridSection() {
  return (
    <section className="section" id="tech-stack" data-mood="data" style={{ minHeight: 'auto', overflow: 'visible', paddingBottom: '120px' }}>
      <div className="inner">
        <div className="head">
          <div className="copy">
            <span className="label"><span className="num">02·</span> Domains</span>
            <h2 className="display">
              Comprehensive <span className="grad-text">capabilities.</span>
            </h2>
            <p className="lede">
              Our engineering teams operate across the entire technology spectrum, seamlessly bridging the gap between elegant interfaces and powerful backend systems.
            </p>
          </div>
          <div className="status-bar">
            <span className="pill"><i /> 4 Core Pillars</span>
            <span className="pill violet"><i /> Full-Stack</span>
          </div>
        </div>
        
        <div className="module-grid" id="moduleGrid">
          {techStack.map((m, i) => (
            <div key={m.id} className={`glow-card group flex flex-col justify-start items-start ${i % 2 === 0 ? 'glow' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="ico">{m.icon}</div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
              <a href="/contact" className="text-[10px] uppercase tracking-wider text-cyan mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Discuss Stack →</a>
              <div className="meta">TS{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

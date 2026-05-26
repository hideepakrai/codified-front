'use client';
import React from 'react';
import { motion } from 'motion/react';

const techLogos = [
  { id: "tl1", name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { id: "tl2", name: "Next.js", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { id: "tl3", name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { id: "tl4", name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { id: "tl5", name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
  { id: "tl6", name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
  { id: "tl7", name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { id: "tl8", name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
];

export default function TechLogoStripSection() {
  return (
    <div className="overflow-hidden py-10 relative z-10">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-0)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-0)] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-fit animate-marquee hover:[animation-play-state:paused]"
      >
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {techLogos.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default">
              <img src={item.icon} alt={item.name} className="w-12 h-12 md:w-14 md:h-14 mb-2 md:mb-3 object-contain" />
              <span className="text-black font-semibold text-[10px] md:text-[12px] text-center tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {techLogos.map((item) => (
            <div key={`dup-${item.id}`} className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default">
              <img src={item.icon} alt={item.name} className="w-12 h-12 md:w-14 md:h-14 mb-2 md:mb-3 object-contain" />
              <span className="text-black font-semibold text-[10px] md:text-[12px] text-center tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

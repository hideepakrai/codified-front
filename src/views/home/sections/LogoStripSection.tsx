'use client';
import React from 'react';
import { motion } from 'motion/react';

const techLogos = [
  { id: "tl1", name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { id: "tl2", name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "tl3", name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { id: "tl4", name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
  { id: "tl5", name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { id: "tl6", name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { id: "tl7", name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { id: "tl8", name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { id: "tl9", name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { id: "tl10", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { id: "tl11", name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  // { id: "tl12", name: "Payload", icon: "https://avatars.githubusercontent.com/u/62968318?s=200&v=4" },
];

export default function LogoStripSection() {
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
        style={{ animationDuration: '60s' }}
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
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {techLogos.map((item) => (
            <div key={`dup2-${item.id}`} className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default">
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

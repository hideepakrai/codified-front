"use client";
import React from 'react';

interface Tech {
  name: string;
  color: string;
}

interface Props {
  techs: Tech[];
}

export default function TechStack({ techs }: Props) {
  return (
    <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
      {techs.map(tech => (
        <span 
          key={tech.name} 
          style={{ 
            padding: '10px 20px', border: '1px solid var(--line-strong)', 
            borderRadius: '12px', fontSize: '13px', fontFamily: 'var(--font-mono)',
            background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', gap: '10px',
            transition: 'all 0.3s ease', cursor: 'default'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = tech.color;
            e.currentTarget.style.background = `${tech.color}11`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--line-strong)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: tech.color }}></div>
          {tech.name}
        </span>
      ))}
    </div>
  );
}

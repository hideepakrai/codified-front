'use client';
import React, { useRef, useEffect } from 'react';

export default function AboutConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let t = 0;

    const nodes = [
      { x: 70, y: 90, label: 'STRATEGY', size: 20, color: '#1DC3F3' },
      { x: 240, y: 70, label: 'UI/UX', size: 24, color: '#F300A6' },
      { x: 410, y: 130, label: 'AI/ML', size: 28, color: '#9a7bff' },
      { x: 100, y: 280, label: 'FRONTEND', size: 25, color: '#5b8cff' },
      { x: 340, y: 300, label: 'BACKEND', size: 24, color: '#1DC3F3' },
      { x: 190, y: 410, label: 'DEVOPS', size: 22, color: '#F300A6' },
      { x: 400, y: 390, label: 'MOBILE', size: 25, color: '#9a7bff' },
    ];

    const connections = [
      [0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 6], [5, 6], [0, 3]
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Center coordinate
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw subtle orbital rings
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(29, 195, 243, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 210, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(243, 0, 166, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Animate nodes floating slightly
      const animatedNodes = nodes.map((n, i) => {
        const dx = Math.sin(t * 0.5 + i * 1.2) * 16;
        const dy = Math.cos(t * 0.6 + i * 0.8) * 16;
        return {
          ...n,
          x: n.x + dx,
          y: n.y + dy,
        };
      });

      // Draw connection lines
      connections.forEach(([from, to]) => {
        const n1 = animatedNodes[from];
        const n2 = animatedNodes[to];

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = 'rgba(154, 123, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Animated packet moving along line
        const f = (t * 0.4 + (from + to) * 0.2) % 1;
        const px = n1.x + (n2.x - n1.x) * f;
        const py = n1.y + (n2.y - n1.y) * f;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#1DC3F3';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      animatedNodes.forEach((n) => {
        // Outer glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = n.color + '22';
        ctx.fill();

        // Core circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.label, n.x, n.y);
      });

      t += 0.022;
      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas
        ref={canvasRef}
        width={480}
        height={480}
        style={{
          maxWidth: '100%',
          height: 'auto',
          aspectRatio: '1/1',
          filter: 'drop-shadow(0 0 40px rgba(243,0,166,0.25))',
        }}
      />
    </div>
  );
}

'use client';
import { useEffect, useRef } from 'react';

interface Node {
  x: number; y: number; label: string; color: string;
  icon: string; size: number; layer: number;
}

const TECH_NODES: Omit<Node, 'x' | 'y' | 'size'>[] = [
  // Layer 1 — core AI models
  { label: 'GPT-4o',      color: '#1DC3F3', icon: '⬡', layer: 1 },
  { label: 'Gemini',      color: '#9a7bff', icon: '◈', layer: 1 },
  { label: 'Claude',      color: '#F300A6', icon: '◉', layer: 1 },
  { label: 'LLaMA',       color: '#f1c27a', icon: '◇', layer: 1 },
  // Layer 2 — frameworks
  { label: 'LangChain',   color: '#9adcff', icon: '⬡', layer: 2 },
  { label: 'PyTorch',     color: '#5b8cff', icon: '◈', layer: 2 },
  { label: 'TensorFlow',  color: '#F300A6', icon: '◉', layer: 2 },
  { label: 'Hugging Face',color: '#f1c27a', icon: '◇', layer: 2 },
  { label: 'Vertex AI',   color: '#9a7bff', icon: '⬡', layer: 2 },
  { label: 'OpenCV',      color: '#1DC3F3', icon: '◈', layer: 2 },
];

export default function CodifiedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef  = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const S = 480; // always square
    canvas.width  = S;
    canvas.height = S;
    const cx = S / 2;
    const cy = S / 2;

    // Position nodes on orbits
    const nodes: Node[] = TECH_NODES.map((n, i) => {
      const layer1Count = TECH_NODES.filter(x => x.layer === 1).length;
      const layer1Idx   = TECH_NODES.filter(x => x.layer === 1).indexOf(n);
      const layer2Idx   = TECH_NODES.filter(x => x.layer === 2).indexOf(n);

      const r     = n.layer === 1 ? 105 : 185;
      const count = n.layer === 1 ? layer1Count : 6;
      const idx   = n.layer === 1 ? layer1Idx  : layer2Idx;
      const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;

      return { ...n, x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r, size: n.layer === 1 ? 7 : 5 };
    });

    // Particles along connections
    const particles: { t: number; speed: number; fromIdx: number; toIdx: number; color: string }[] = [];
    // Connect inner nodes to center + outer nodes to random inner
    for (let i = 0; i < 18; i++) {
      const inner = Math.floor(Math.random() * 4);
      const outer = 4 + Math.floor(Math.random() * 6);
      particles.push({ t: Math.random(), speed: 0.004 + Math.random() * 0.004, fromIdx: inner, toIdx: outer, color: nodes[inner].color });
    }
    for (let i = 0; i < 8; i++) {
      particles.push({ t: Math.random(), speed: 0.005 + Math.random() * 0.004, fromIdx: -1, toIdx: Math.floor(Math.random() * 4), color: '#1DC3F3' });
    }

    let t = 0;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

    const draw = () => {
      ctx.clearRect(0, 0, S, S);

      // ── Background glow ────────────────────────
      const bgGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.5);
      bgGrd.addColorStop(0, 'rgba(29,195,243,0.04)');
      bgGrd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bgGrd;
      ctx.fillRect(0, 0, S, S);

      // ── Orbit rings ─────────────────────────────
      const orbitData = [
        { r: 105, color: 'rgba(29,195,243,0.20)', dash: [5, 10], spin: 0.003  },
        { r: 185, color: 'rgba(154,123,255,0.15)', dash: [3, 14], spin: -0.002 },
        { r: 230, color: 'rgba(243,0,166,0.10)',   dash: [2, 18], spin: 0.0015 },
      ];

      orbitData.forEach(({ r, color, dash, spin }) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * spin);
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.setLineDash(dash);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Spinning arc accent
        const a0 = t * spin * 30;
        ctx.beginPath();
        ctx.arc(cx, cy, r, a0, a0 + 0.8);
        ctx.strokeStyle = color.replace('0.20', '0.9').replace('0.15', '0.7').replace('0.10', '0.6');
        ctx.lineWidth = 2.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // ── Connection lines ─────────────────────────
      const innerNodes = nodes.filter(n => n.layer === 1);
      const outerNodes = nodes.filter(n => n.layer === 2);

      // Inner to center
      innerNodes.forEach(n => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = n.color + '28';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Inner to outer
      outerNodes.forEach((on, oi) => {
        const target = innerNodes[oi % innerNodes.length];
        ctx.beginPath();
        ctx.moveTo(target.x, target.y);
        ctx.lineTo(on.x, on.y);
        ctx.strokeStyle = on.color + '20';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // ── Animated particles along connections ─────
      particles.forEach(p => {
        p.t = (p.t + p.speed) % 1;
        const f = p.t;

        let x0 = cx, y0 = cy;
        let x1: number, y1: number;

        if (p.fromIdx === -1) {
          // center to inner
          const target = nodes[p.toIdx];
          x1 = target.x; y1 = target.y;
        } else {
          const from = nodes[p.fromIdx];
          const to   = nodes[p.toIdx];
          x0 = from.x; y0 = from.y;
          x1 = to.x;   y1 = to.y;
        }

        const px = lerp(x0, x1, f);
        const py = lerp(y0, y1, f);
        const alpha = Math.sin(f * Math.PI);

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.9;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      // ── Tech nodes ───────────────────────────────
      nodes.forEach((n, i) => {
        const pulse = 1 + 0.12 * Math.sin(t * 1.8 + i * 0.9);
        const r = n.size * pulse;

        // Outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        grd.addColorStop(0, n.color + '55');
        grd.addColorStop(1, n.color + '00');
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Ring around node
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
        ctx.strokeStyle = n.color + '40';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        const lx = cx + (n.x - cx) * 1.38;
        const ly = cy + (n.y - cy) * 1.38;
        ctx.font = n.layer === 1
          ? 'bold 9.5px "JetBrains Mono", monospace'
          : '8.5px "JetBrains Mono", monospace';
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.9;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.label, lx, ly);
        ctx.globalAlpha = 1;
      });

      // ── Central AI core ──────────────────────────
      const corePulse = 1 + 0.05 * Math.sin(t * 2.2);
      const coreR = 38 * corePulse;

      // Big outer glow
      const outerGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80);
      outerGrd.addColorStop(0, 'rgba(29,195,243,0.25)');
      outerGrd.addColorStop(0.5, 'rgba(91,140,255,0.1)');
      outerGrd.addColorStop(1, 'rgba(29,195,243,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.fillStyle = outerGrd;
      ctx.fill();

      // Core body
      const coreGrd = ctx.createRadialGradient(cx - 8, cy - 8, 0, cx, cy, coreR);
      coreGrd.addColorStop(0, '#8ee8ff');
      coreGrd.addColorStop(0.45, '#2a60cc');
      coreGrd.addColorStop(1, '#060e24');
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fillStyle = coreGrd;
      ctx.shadowColor = '#1DC3F3';
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Core ring
      ctx.beginPath();
      ctx.arc(cx, cy, coreR + 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(29,195,243,0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Core text
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 14px "Space Grotesk", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('AI', cx, cy - 5);
      ctx.font = 'bold 7.5px "JetBrains Mono", monospace';
      ctx.fillStyle = '#1DC3F3';
      ctx.fillText('ENGINE', cx, cy + 9);

      // ── Scanning line ────────────────────────────
      const scanAngle = t * 0.8;
      const scanGrd = (ctx as any).createConicGradient ? null : null;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(scanAngle);
      const sweep = ctx.createLinearGradient(0, 0, 235, 0);
      sweep.addColorStop(0, 'rgba(29,195,243,0.0)');
      sweep.addColorStop(0.7, 'rgba(29,195,243,0.15)');
      sweep.addColorStop(1, 'rgba(29,195,243,0.0)');
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 235, -0.22, 0.22);
      ctx.closePath();
      ctx.fillStyle = sweep;
      ctx.fill();
      ctx.restore();

      t += 0.022;
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '480px',
          height: '480px',
          maxWidth: '100%',
          aspectRatio: '1 / 1',
          filter: 'drop-shadow(0 0 30px rgba(29,195,243,0.18))',
          display: 'block',
        }}
      />
    </div>
  );
}

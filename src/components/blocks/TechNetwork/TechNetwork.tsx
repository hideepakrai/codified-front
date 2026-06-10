"use client";
import React, { useRef, useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';
import { defaultTechnologiesData } from './TechnologiesData';

/* ─── Node color map ──────────────────────────────────────────── */
const COLORS: Record<string, string> = {
  core:       '#1DC3F3',
  admin:      '#5b8cff',
  storefront: '#9a7bff',
  ai:         '#F300A6',
  analytics:  '#1DC3F3',
  payments:   '#f1c27a',
  vendor:     '#9a7bff',
};

/* ─── Canvas network visual ───────────────────────────────────── */
function NetworkCanvas({ nodes }: { nodes: any[] }) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Always fall back to default nodes so the canvas is never empty
  const activeNodes = nodes.length > 0 ? nodes : defaultTechnologiesData.nodes;

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let t = 0;

    /* ── Resize to fill container (square) ── */
    const resize = () => {
      const size     = Math.max(container.clientWidth, 200);
      canvas.width   = size;
      canvas.height  = size;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    /* ── Helpers ── */
    const pos = (n: any, W: number, H: number) => ({
      x: (parseFloat(n.props?.left ?? '50%') / 100) * W,
      y: (parseFloat(n.props?.top  ?? '50%') / 100) * H,
    });

    const center = activeNodes.find((n: any) =>  n.props?.isCenter);
    const outer  = activeNodes.filter((n: any) => !n.props?.isCenter);

    /* ── Draw loop ── */
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      /* background glow */
      const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.55);
      bg.addColorStop(0, 'rgba(29,195,243,0.06)');
      bg.addColorStop(1, 'transparent');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      /* orbital rings */
      [0.30, 0.44].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, r * W, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0
          ? 'rgba(29,195,243,0.15)'
          : 'rgba(243,0,166,0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      if (!center) { t += 0.018; frameId = requestAnimationFrame(draw); return; }

      const cp  = pos(center, W, H);
      const cpx = cp.x + Math.sin(t * 0.4) * W * 0.008;
      const cpy = cp.y + Math.cos(t * 0.5) * H * 0.008;

      /* animated outer positions */
      const animated = outer.map((n: any, i: number) => {
        const b  = pos(n, W, H);
        const dx = Math.sin(t * 0.5 + i * 1.3) * W * 0.020;
        const dy = Math.cos(t * 0.6 + i * 0.9) * H * 0.020;
        return { ...n, ax: b.x + dx, ay: b.y + dy };
      });

      /* connection lines + packets */
      animated.forEach((n: any, i: number) => {
        const color = COLORS[n.id] ?? '#1DC3F3';

        /* dashed line */
        const lg = ctx.createLinearGradient(cpx, cpy, n.ax, n.ay);
        lg.addColorStop(0, 'rgba(29,195,243,0.40)');
        lg.addColorStop(1, color + '55');
        ctx.beginPath();
        ctx.moveTo(cpx, cpy);
        ctx.lineTo(n.ax, n.ay);
        ctx.strokeStyle = lg;
        ctx.lineWidth   = 1.2;
        ctx.setLineDash([5, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        /* travelling packet */
        const f  = (t * 0.38 + i * 0.18) % 1;
        const px = cpx + (n.ax - cpx) * f;
        const py = cpy + (n.ay - cpy) * f;
        ctx.beginPath();
        ctx.arc(px, py, W * 0.007, 0, Math.PI * 2);
        ctx.fillStyle   = '#fff';
        ctx.shadowColor = color;
        ctx.shadowBlur  = 10;
        ctx.fill();
        ctx.shadowBlur  = 0;
      });

      /* outer nodes */
      animated.forEach((n: any) => {
        const color = COLORS[n.id] ?? '#1DC3F3';
        const r     = W * 0.052;
        const label = (n.props?.label?.en ?? n.id).toUpperCase();

        /* halo */
        const halo = ctx.createRadialGradient(n.ax, n.ay, 0, n.ax, n.ay, r * 2.2);
        halo.addColorStop(0, color + '28');
        halo.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.ax, n.ay, r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        /* ring */
        ctx.beginPath();
        ctx.arc(n.ax, n.ay, r, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth   = 1.5;
        ctx.shadowColor = color;
        ctx.shadowBlur  = 14;
        ctx.stroke();
        ctx.shadowBlur  = 0;

        /* dark fill */
        ctx.beginPath();
        ctx.arc(n.ax, n.ay, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(8,14,28,0.88)';
        ctx.fill();

        /* text */
        const fs = Math.max(8, W * 0.021);
        ctx.font         = `600 ${fs}px "JetBrains Mono",monospace`;
        ctx.fillStyle    = color;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, n.ax, n.ay);
      });

      /* center node */
      const cr    = W * 0.078 + Math.sin(t * 1.8) * W * 0.005;
      const cCol  = '#1DC3F3';

      const cHalo = ctx.createRadialGradient(cpx, cpy, 0, cpx, cpy, cr * 2.8);
      cHalo.addColorStop(0, 'rgba(29,195,243,0.22)');
      cHalo.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cpx, cpy, cr * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = cHalo;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cpx, cpy, cr, 0, Math.PI * 2);
      ctx.strokeStyle = cCol;
      ctx.lineWidth   = 2;
      ctx.shadowColor = cCol;
      ctx.shadowBlur  = 22;
      ctx.stroke();
      ctx.shadowBlur  = 0;

      ctx.beginPath();
      ctx.arc(cpx, cpy, cr, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(8,14,28,0.92)';
      ctx.fill();

      /* center labels */
      const cLabel    = center.props?.label?.en ?? 'Core';
      const cEndpoint = center.props?.endpoint  ?? 'APP CORE';
      const cFs       = Math.max(9, W * 0.025);

      ctx.font         = `700 ${cFs}px "Space Grotesk",sans-serif`;
      ctx.fillStyle    = '#fff';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cLabel, cpx, cpy - cFs * 0.65);

      ctx.font         = `500 ${cFs * 0.72}px "JetBrains Mono",monospace`;
      ctx.fillStyle    = cCol;
      ctx.fillText(cEndpoint, cpx, cpy + cFs * 0.80);

      t += 0.018;
      frameId = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(frameId); ro.disconnect(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeNodes.length]);   // re-run if nodes switch from 0 → real data

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', minHeight: '320px' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          borderRadius: '16px',
          border: '1px solid rgba(120,160,220,0.10)',
          background: 'radial-gradient(ellipse at center, rgba(95,140,255,0.06) 0%, transparent 70%), linear-gradient(180deg, rgba(8,12,24,0.5), rgba(4,6,13,0.5))',
          filter: 'drop-shadow(0 0 24px rgba(29,195,243,0.14))',
        }}
      />
    </div>
  );
}

/* ─── Main Technologies section ───────────────────────────────── */
export default function Technologies() {
  const dispatch    = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable  = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Technologies');
  }, [currentPages]);

  if (!section) return null;

  const p       = section.props;
  const content = section.content ?? [];
  const nodes   = Array.isArray(section.nodes) ? section.nodes : [];
  const handle  = (fieldPath: string) => (value: string) =>
    saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section
      className="section"
      id="api"
      data-mood="api"
      data-annotate-id={`${currentPages?.slug || 'home'}-technologies-section`}
    >
      <div className="inner">
        {/* inline grid ensures column layout regardless of CSS specificity */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
          gap: '60px',
          alignItems: 'center',
        }}>

          {/* ── Left: text ── */}
          <div>
            <span className="label">
              <span className="num">{p.label?.en?.split('·')[0]}·</span>{' '}
              <EditableText
                value={(p.label?.en?.split('·')[1] || '').trim()}
                isEditable={isEditable}
                onSave={(val) =>
                  handle('props.label.en')(
                    `${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`
                  )
                }
                tag="span"
              />
            </span>

            <EditableText
              value={p.heading?.en || ''}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              className="display"
              tag="h2"
              dangerouslySetInnerHTML
            />

            <EditableText
              value={p.description?.en || ''}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              className="lede"
              tag="p"
            />

            <div
              className="core-spec"
              style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: '32px' }}
            >
              {content.map((item: any, idx: number) => (
                <div className="spec-cell" key={item.id ?? idx}>
                  <EditableText
                    value={item.props?.key?.en || ''}
                    isEditable={isEditable}
                    onSave={handle(`content.${idx}.props.key.en`)}
                    className="k"
                    tag="div"
                  />
                  <EditableText
                    value={item.props?.value?.en || ''}
                    isEditable={isEditable}
                    onSave={handle(`content.${idx}.props.value.en`)}
                    className="v"
                    tag="div"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: canvas network ── */}
          <div style={{ width: '100%' }}>
            <NetworkCanvas nodes={nodes} />
          </div>
        </div>
      </div>
    </section>
  );
}

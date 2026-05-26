"use client";
import React, { useMemo } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { defaultServicesData } from './ServicesData';
import { Brain, Bot, Network, Sparkles, PenTool, Code, FileText, LayoutTemplate, Smartphone, Apple, Cpu, TrendingUp, DollarSign, PieChart, Activity } from 'lucide-react';

const getServiceIcon = (code: string) => {
  const props = { size: 24, strokeWidth: 1.5 };
  switch (code) {
    case 'AI': return <Brain {...props} />;
    case 'CB': return <Bot {...props} />;
    case 'AG': return <Network {...props} />;
    case 'GA': return <Sparkles {...props} />;
    case 'UX': return <PenTool {...props} />;
    case 'FS': return <Code {...props} />;
    case 'CM': return <FileText {...props} />;
    case 'ER': return <LayoutTemplate {...props} />;
    case 'MB': return <Smartphone {...props} />;
    case 'AP': return <Apple {...props} />;
    case 'AD': return <Cpu {...props} />; // Using Cpu for Android fallback
    case 'GR': return <TrendingUp {...props} />;
    case 'PD': return <DollarSign {...props} />;
    case 'AN': return <PieChart {...props} />;
    default: return <Activity {...props} />;
  }
};

export default function Services() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Services');
  }, [currentPages]);

  const { p, content } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultServicesData.props,
      content: (section as any)?.content || defaultServicesData.content,
    };
  }, [section]);

  return (
    <section className="section" id="data-grid" data-mood="data" data-annotate-id={`${currentPages?.slug || 'home'}-services-section`} style={{ minHeight: 'auto', overflow: 'visible', paddingBottom: '120px' }}>
      <div className="inner">
        <div className="head">
          <div className="copy">
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> {p.label?.en?.split('·')[1]}</span>
            <h2
              className="display"
              dangerouslySetInnerHTML={{ __html: p.heading?.en || "" }}
            />
            <p className="lede">{p.description?.en}</p>
          </div>
          <div className="status-bar">
            {p.metaItems?.map((item: any, i: number) => (
              <span key={i} className={`pill ${item.type !== 'default' ? item.type : ''}`}>
                <i /> {item.text?.en}
              </span>
            ))}
          </div>
        </div>
        <div className="module-grid" id="moduleGrid">
          {content.map((m: any, i: number) => (
            <div key={m.id} className={`glow-card group flex flex-col justify-start items-start ${i % 5 === 0 ? 'glow' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="ico">{getServiceIcon(m.props?.code)}</div>
              <h4>{m.props?.name?.en}</h4>
              <p>{m.props?.desc?.en}</p>
              <a href={`/services/${m.props?.name?.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[10px] uppercase tracking-wider text-cyan mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn More →</a>
              <div className="meta">S{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


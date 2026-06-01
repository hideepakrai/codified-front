"use client";
import React, { useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Accordion from '@/components/blocks/FAQAccordion/FAQAccordion';
import { useAppSelector } from '@/redux/hooks';
import { defaultResultsData } from './ResultsData';

export default function Results() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Results');
  }, [currentPages]);

  const { p, content, cta } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultResultsData.props,
      content: (section as any)?.content || defaultResultsData.content,
      cta: (section as any)?.cta || defaultResultsData.cta,
    };
  }, [section]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0. Smooth Tile Stagger Reveal
      gsap.fromTo('.cc-tile', 
        { y: 60, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#ccGrid',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 1. Number Counters
      const nums = gsap.utils.toArray<HTMLElement>('#ccGrid [data-target]');
      nums.forEach(el => {
        const endValue = parseFloat(el.getAttribute('data-target') || '0');
        const isFloat = endValue % 1 !== 0;
        
        const counter = { val: 0 };
        gsap.to(counter, {
          val: endValue,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          },
          onUpdate: () => {
            el.innerHTML = isFloat ? counter.val.toFixed(1) : Math.round(counter.val).toString();
          }
        });
      });

      // 2. SVG Sparklines
      const sparks = gsap.utils.toArray<SVGElement>('#ccGrid .spark');
      sparks.forEach(svg => {
        const path = svg.querySelector('.l') as SVGPathElement;
        const fill = svg.querySelector('.f') as SVGPathElement;
        
        if (path) {
          const length = path.getTotalLength() || 1000;
          gsap.set(path, { 
            strokeDasharray: length, 
            strokeDashoffset: length, 
            stroke: 'url(#sg)', 
            strokeWidth: 2, 
            fill: 'none' 
          });
          
          gsap.to(path, {
            scrollTrigger: {
              trigger: svg,
              start: "top 85%",
              once: true
            },
            strokeDashoffset: 0,
            duration: 2.5,
            ease: "power3.inOut"
          });
        }
        
        if (fill) {
          gsap.set(fill, { fill: 'url(#sg)', opacity: 0 });
          gsap.to(fill, {
            scrollTrigger: {
              trigger: svg,
              start: "top 85%",
              once: true
            },
            opacity: 1,
            duration: 2,
            delay: 0.8,
            ease: "power2.out"
          });
        }
      });
    });

    return () => ctx.revert();
  }, [content]);

  return (
    <section className="section" id="command" data-mood="command" data-annotate-id={`${currentPages?.slug || 'home'}-results-section`}>
      <div className="inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
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

        <div className="cc-grid" id="ccGrid">
          {content.map((item: any, i: number) => {
            if (i < 3) {
              return (
                <div className={`cc-tile t${i + 1} reveal`} key={item.id}>
                  <div className="ttl">{item.props?.title?.en}</div>
                  <div className="num"><span data-target={item.props?.target}>0</span><small>{item.props?.suffix}</small></div>
                  <div className="sub">{item.props?.sub?.en}</div>
                </div>
              );
            }
            if (i === 3) {
              return (
                <div className="cc-tile t4 reveal" key={item.id}>
                  <div className="ttl">{item.props?.title?.en}</div>
                  <div className="num">{item.props?.prefix}<span data-target={item.props?.target}>0</span>{item.props?.suffix}</div>
                  <div className="sub">{item.props?.sub?.en}</div>
                  <svg className="spark" viewBox="0 0 600 60" preserveAspectRatio="none">
                    <defs><linearGradient id="sg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#1DC3F3" stopOpacity=".5"/><stop offset="1" stopColor="#1DC3F3" stopOpacity="0"/></linearGradient></defs>
                    <path className="f" d="M0,55 L40,38 L80,42 L120,30 L160,33 L200,22 L240,28 L280,16 L320,24 L360,12 L400,18 L440,8 L480,14 L520,6 L560,12 L600,4 L600,60 L0,60 Z" />
                    <path className="l" d="M0,55 L40,38 L80,42 L120,30 L160,33 L200,22 L240,28 L280,16 L320,24 L360,12 L400,18 L440,8 L480,14 L520,6 L560,12 L600,4" />
                  </svg>
                </div>
              );
            }
            if (i === 4) {
              return (
                <div className="cc-tile t5 reveal" key={item.id}>
                  <div className="ttl">{item.props?.title?.en}</div>
                  <div className="num"><span data-target={item.props?.target}>0</span><small>{item.props?.suffix}</small></div>
                  <div className="sub">{item.props?.sub?.en}</div>
                  <svg className="spark" viewBox="0 0 600 60" preserveAspectRatio="none">
                    <path className="f" d="M0,50 L60,40 L120,46 L180,30 L240,38 L300,18 L360,28 L420,10 L480,22 L540,6 L600,16 L600,60 L0,60 Z" />
                    <path className="l" d="M0,50 L60,40 L120,46 L180,30 L240,38 L300,18 L360,28 L420,10 L480,22 L540,6 L600,16" />
                  </svg>
                </div>
              );
            }
            if (i === 5) {
              return (
                <div className="cc-tile t6 reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap' }} key={item.id}>
                  <div>
                    <div className="ttl">{item.props?.title?.en}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginTop: '8px' }}>{item.props?.sub?.en}</div>
                  </div>
                  <div className="status-bar">
                    {item.props?.metaItems?.map((meta: any, idx: number) => (
                      <span className="pill" key={idx}><i /> {meta.text?.en}</span>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div style={{ marginTop: '80px' }}>
          <h3 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h3>
          <Accordion />
        </div>

        <div className="cc-cta">
          <h3 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', maxWidth: '18ch' }}>{cta.heading?.en}</h3>
          <p className="lede" style={{ textAlign: 'center' }}>{cta.description?.en}</p>
          <div className="ctas">
            {cta.buttons?.map((btn: any, i: number) => (
              <a key={i} className={`btn ${btn.type === 'secondary' ? 'ghost' : ''}`} href={btn.url}>
                {btn.text?.en} {btn.type === 'primary' && <span className="arr">→</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

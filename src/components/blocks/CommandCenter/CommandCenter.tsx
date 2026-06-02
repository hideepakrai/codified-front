"use client";
import React, { useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Accordion from '@/components/blocks/FAQAccordion/FAQAccordion';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function Results() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Results');
  }, [currentPages]);

  useEffect(() => {
    if (!section) return;
    const ctx = gsap.context(() => {
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
  }, [section]);

  if (!section) return null;

  const p = section.props;
  const content = section.content;
  const cta = section.cta;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="command" data-mood="command" data-annotate-id={`${currentPages?.slug || 'home'}-results-section`}>
      <div className="inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
            <EditableText
              value={p.heading?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              className="display"
              tag="h2"
              dangerouslySetInnerHTML
            />
            <EditableText
              value={p.description?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              className="lede"
              tag="p"
            />
          </div>
          <div className="status-bar">
            {p.metaItems?.map((item: any, i: number) => (
              <span key={i} className={`pill ${item.type !== 'default' ? item.type : ''}`}>
                <i /> <EditableText value={item.text?.en || ''} isEditable={isEditable} onSave={handle(`props.metaItems.${i}.text.en`)} tag="span" />
              </span>
            ))}
          </div>
        </div>

        <div className="cc-grid" id="ccGrid">
          {content.map((item: any, i: number) => {
            if (i < 3) {
              return (
                <div className={`cc-tile t${i + 1} reveal`} key={item.id}>
                  <EditableText value={item.props?.title?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.title.en`)} className="ttl" tag="div" />
                  <div className="num"><span data-target={item.props?.target}>0</span><small>{item.props?.suffix}</small></div>
                  <EditableText value={item.props?.sub?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.sub.en`)} className="sub" tag="div" />
                </div>
              );
            }
            if (i === 3) {
              return (
                <div className="cc-tile t4 reveal" key={item.id}>
                  <EditableText value={item.props?.title?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.title.en`)} className="ttl" tag="div" />
                  <div className="num">{item.props?.prefix}<span data-target={item.props?.target}>0</span>{item.props?.suffix}</div>
                  <EditableText value={item.props?.sub?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.sub.en`)} className="sub" tag="div" />
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
                  <EditableText value={item.props?.title?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.title.en`)} className="ttl" tag="div" />
                  <div className="num"><span data-target={item.props?.target}>0</span><small>{item.props?.suffix}</small></div>
                  <EditableText value={item.props?.sub?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.sub.en`)} className="sub" tag="div" />
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
                    <EditableText value={item.props?.title?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.title.en`)} className="ttl" tag="div" />
                    <EditableText value={item.props?.sub?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.sub.en`)} tag="div" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginTop: '8px' }} />
                  </div>
                  <div className="status-bar">
                    {item.props?.metaItems?.map((meta: any, idx: number) => (
                      <span className="pill" key={idx}><i /> <EditableText value={meta.text?.en || ''} isEditable={isEditable} onSave={handle(`content.${i}.props.metaItems.${idx}.text.en`)} tag="span" /></span>
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

        {cta && (
          <div className="cc-cta">
            <h3 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', maxWidth: '18ch' }}>
              <EditableText value={cta.heading?.en || ''} isEditable={isEditable} onSave={handle('cta.heading.en')} tag="span" />
            </h3>
            <EditableText value={cta.description?.en || ''} isEditable={isEditable} onSave={handle('cta.description.en')} className="lede" tag="p" />
            <div className="ctas">
              {cta.buttons?.map((btn: any, i: number) => (
                <a key={i} className={`btn ${btn.type === 'secondary' ? 'ghost' : ''}`} href={btn.url}>
                  <EditableText value={btn.text?.en || ''} isEditable={isEditable} onSave={handle(`cta.buttons.${i}.text.en`)} tag="span" />
                  {btn.type === 'primary' && <span className="arr">→</span>}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

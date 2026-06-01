'use client';
import { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { defaultHeroData } from './HeroData';

export default function Hero() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Hero');
  }, [currentPages]);

  const { p, content } = useMemo(() => {
    return {
      p: (section as any)?.props || defaultHeroData.props,
      content: (section as any)?.content || defaultHeroData.content,
    };
  }, [section]);

  return (
    <section className="section" id="signal" data-mood="signal" data-annotate-id={`${currentPages?.slug || 'home'}-hero-section`}>
      <div className="inner">
        <div className="grid lg:!grid-cols-[6fr_4fr]">
          <div>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> {p.label?.en?.split('·')[1]}</span>
            <h1
              className="display reveal"
              dangerouslySetInnerHTML={{ __html: p.heading?.en || "" }}
            />
            <p className="lede reveal">
              {p.description?.en || ""}
            </p>
            <div className="ctas reveal">
              <a className="btn" href={p.primaryButtonLink || "#core"}>{p.primaryButton?.en} <span className="arr">→</span></a>
              <a className="btn ghost" href={p.secondaryButtonLink || "#command"}>{p.secondaryButton?.en}</a>
            </div>
            <div className="meta reveal">
              {p.metaItems?.map((item: any, i: number) => (
                <span key={i}>{item.hasDot && <i />}{" "}{item.text?.en}</span>
              ))}
            </div>
          </div>

          <div className="card reveal" style={{ padding: '6px' }}>
            <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
            <div className="panel-readout">
              {content.map((item: any) => (
                <div className="row" key={item.id}>
                  <span className="k">{item.props?.key?.en}</span>
                  <span className="v" data-count={item.props?.isCount ? (item.props?.dataCount || item.props?.value?.en?.replace(/\D/g, "")) : undefined}>
                    {item.props?.value?.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>{p.scrollHint?.en}</span><span className="bar"></span>
      </div>
    </section>
  );
}

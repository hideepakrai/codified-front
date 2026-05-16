'use client';
import { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';

const defaultHeroData = {
  props: {
    label: {
      en: "01 · Signal",
      hi: "01 · सिग्नल"
    },
    heading: {
      en: "We develop tech<br />that helps your<br /><span class=\"grad-text\">business grow.</span>",
      hi: "हम ऐसी तकनीक विकसित करते हैं<br />जो आपके व्यवसाय को<br /><span class=\"grad-text\">बढ़ने में मदद करती है।</span>"
    },
    description: {
      en: "We don't just write code; we build scalable digital products and AI-driven systems that prepare your business for tomorrow. Partner with us to transform your most ambitious ideas into high-performing realities.",
      hi: "हम सिर्फ कोड नहीं लिखते; हम स्केलेबल डिजिटल उत्पाद और एआई-संचालित सिस्टम बनाते हैं जो आपके व्यवसाय को कल के लिए तैयार करते हैं।"
    },
    primaryButton: {
      en: "Get Started",
      hi: "शुरू करें"
    },
    primaryButtonLink: "#core",
    secondaryButton: {
      en: "Read the architecture",
      hi: "आर्किटेक्चर पढ़ें"
    },
    secondaryButtonLink: "#command",
    metaItems: [
      { text: { en: "Live · Global Deployments", hi: "लाइव · ग्लोबल डिप्लॉयमेंट" }, hasDot: true },
      { text: { en: "ISO 27001 Certified", hi: "ISO 27001 प्रमाणित" } },
      { text: { en: "SLA uptime 99.99%", hi: "SLA अपटाइम 99.99%" } }
    ],
    scrollHint: {
      en: "Scroll",
      hi: "स्क्रॉल करें"
    }
  },
  content: [
    {
      id: "stat-1",
      props: {
        key: { en: "Projects Deployed", hi: "तैनात परियोजनाएँ" },
        value: { en: "512", hi: "512" },
        isCount: true
      }
    },
    {
      id: "stat-2",
      props: {
        key: { en: "Active Clients", hi: "सक्रिय ग्राहक" },
        value: { en: "28", hi: "28" },
        isCount: true
      }
    },
    {
      id: "stat-3",
      props: {
        key: { en: "Years Experience", hi: "अनुभव के वर्ष" },
        value: { en: "15+", hi: "15+" },
        isCount: false
      }
    },
    {
      id: "stat-4",
      props: {
        key: { en: "Lines of Code", hi: "कोड की पंक्तियाँ" },
        value: { en: "14.5M", hi: "14.5M" },
        dataCount: "14580000",
        isCount: true
      }
    },
    {
      id: "stat-5",
      props: {
        key: { en: "Mean SLA response", hi: "औसत SLA प्रतिक्रिया" },
        value: { en: "50 ms", hi: "50 ms" },
        isCount: false
      }
    },
    {
      id: "stat-6",
      props: {
        key: { en: "Status", hi: "स्थिति" },
        value: { en: "All systems nominal", hi: "सभी सिस्टम सामान्य हैं" },
        isCount: false
      }
    }
  ]
};

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

export const defaultHeroData = {
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
        key: { en: "Team Members", hi: "टीम के सदस्य" },
        value: { en: "120+", hi: "120+" },
        dataCount: "120",
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
export const defaultTechnologiesData = {
  props: {
    label: {
      en: "05 · Technologies",
      hi: "05 · तकनीकें",
    },
    heading: {
      en: "One <span class=\"grad-text\">unified stack</span> across every system.",
      hi: "हर सिस्टम में एक <span class=\"grad-text\">एकीकृत स्टैक</span>।",
    },
    description: {
      en: "Whether it's a mobile app built with cross-platform frameworks, a complex backend orchestrated on Kubernetes, or an intelligent AI layer, we link them efficiently.",
      hi: "चाहे वह क्रॉस-प्लेटफॉर्म फ्रेमवर्क के साथ बनाया गया मोबाइल ऐप हो, या कृत्रिम बुद्धिमत्ता परत, हम उन्हें कुशलता से जोड़ते हैं।",
    }
  },
  content: [
    { id: "t1", props: { key: { en: "Uptime SLA", hi: "अपटाइम SLA" }, value: { en: "99.99%", hi: "99.99%" } } },
    { id: "t2", props: { key: { en: "Integrations", hi: "एकीकरण (Integrations)" }, value: { en: "2,860+", hi: "2,860+" } } },
    { id: "t3", props: { key: { en: "Stacks", hi: "स्टैक्स" }, value: { en: "MERN · JAM · LAMP", hi: "MERN · JAM · LAMP" } } }
  ],
  nodes: [
    { id: "core", props: { left: "50%", top: "50%", isCenter: true, desc: { en: "Central technology orchestrator linking all layers of your business.", hi: "केंद्रीय तकनीक." }, endpoint: "APP CORE", label: { en: "Operations Core", hi: "संचालन कोर" } } },
    { id: "admin", props: { left: "18%", top: "18%", isCenter: false, desc: { en: "Web and mobile applications tailored for you.", hi: "वेब और मोबाइल एप्लिकेशन." }, endpoint: "FRONTEND", label: { en: "Applications", hi: "एप्लिकेशन" } } },
    { id: "storefront", props: { left: "80%", top: "18%", isCenter: false, desc: { en: "Secure cloud environments running smoothly 24/7.", hi: "सुरक्षित क्लाउड." }, endpoint: "CLOUD", label: { en: "Infrastructure", hi: "इंफ्रास्ट्रक्चर" } } },
    { id: "ai", props: { left: "8%", top: "50%", isCenter: false, desc: { en: "Autonomous AI systems driving predictions and data synthesis.", hi: "स्वायत्त AI सिस्टम." }, endpoint: "MACHINE LEARNING", label: { en: "Intelligence", hi: "इंटेलिजेंस" } } },
    { id: "analytics", props: { left: "92%", top: "50%", isCenter: false, desc: { en: "Databases and big data processing units.", hi: "डेटाबेस." }, endpoint: "POSTGRES / MONGO", label: { en: "Data Storage", hi: "डेटा स्टोरेज" } } },
    { id: "payments", props: { left: "18%", top: "82%", isCenter: false, desc: { en: "API, Webhooks and Payment integrations.", hi: "भुगतान एकीकरण." }, endpoint: "STRIPE / PAYPAL", label: { en: "Gateways", hi: "गेटवे" } } },
    { id: "vendor", props: { left: "80%", top: "82%", isCenter: false, desc: { en: "Third-party vendor synchronizations natively embedded.", hi: "थर्ड-पार्टी." }, endpoint: "ENTERPRISE", label: { en: "Partners", hi: "पार्टनर्स" } } }
  ]
};

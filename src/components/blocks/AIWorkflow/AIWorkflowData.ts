export const defaultAIWorkflowData = {
  props: {
    label: {
      en: "07 · AI Workflow",
      hi: "07 · एआई वर्कफ़्लो",
    },
    heading: {
      en: "Smarter systems for a <span class=\"grad-text\">smarter future.</span>",
      hi: "<span class=\"grad-text\">समझदार भविष्य</span> के लिए स्मार्ट सिस्टम।",
    },
    description: {
      en: "We design intelligent workflows that eliminate manual bottlenecks and unlock the power of your data. Deploy specialized AI models that learn and reason.",
      hi: "हम बुद्धिमान वर्कफ़्लो डिज़ाइन करते हैं जो मैन्युअल बाधाओं को समाप्त करते हैं और आपके डेटा की शक्ति को अनलॉक करते हैं।",
    },
    metaItems: [
      { text: { en: "Active integrations · 45", hi: "सक्रिय एकीकरण · ४५" }, type: "default" },
      { text: { en: "LLM endpoints · 7", hi: "एलएलएम एंडपॉइंट · ७" }, type: "violet" },
      { text: { en: "GPU Utilization · 84%", hi: "जीपीयू उपयोग · ८४%" }, type: "warn" }
    ]
  },
  content: [
    { id: "s1", props: { icon: "›_", title: { en: "Cognitive AI", hi: "संज्ञानात्मक एआई" }, desc: { en: "Deploy specialized semantic models that reason to solve industry challenges.", hi: "उद्योग की चुनौतियों को हल करने के लिए एआई।" } } },
    { id: "s2", props: { icon: "∿", title: { en: "Autonomous", hi: "स्वायत्त" }, desc: { en: "Streamline core operations with end-to-end intelligent automation.", hi: "बुद्धिमान स्वचालन के साथ संचालन को सुव्यवस्थित करें।" } } },
    { id: "s3", props: { icon: "✓", title: { en: "Predictive", hi: "भविष्य कहनेवाला" }, desc: { en: "Stay ahead of the curve by forecasting market trends and events.", hi: "बाजार के रुझान का पूर्वानुमान लगाकर आगे रहें।" } } },
    { id: "s4", props: { icon: "▤", title: { en: "Self-Learning", hi: "स्व-शिक्षण" }, desc: { en: "Build adaptive technology that evolves with every use internally.", hi: "अनुकूली तकनीक का निर्माण करें।" } } },
    { id: "s5", props: { icon: "↗", title: { en: "Conversational", hi: "वाक्-संबंधी" }, desc: { en: "Interact with your complex business data naturally using powerful LLMs.", hi: "शक्तिशाली LLM का उपयोग करके बातचीत करें।" } } }
  ],
  metrics: [
    { id: "rTok", label: { en: "API Tokens · 24h", hi: "एपीआई टोकन · 24 घंटे" }, value: { en: "9.4M", hi: "9.4M" } },
    { id: "rVal", label: { en: "Predictive Accuracy", hi: "पूर्वानुमान सटीकता" }, value: { en: "98.2%", hi: "98.2%" } },
    { id: "rCost", label: { en: "Compute Efficiency", hi: "गणना दक्षता" }, value: { en: "High", hi: "उच्च" } },
    { id: "rLat", label: { en: "Mean Latency", hi: "औसत विलंबता" }, value: { en: "0.4 s", hi: "0.4 सेकंड" } }
  ]
};

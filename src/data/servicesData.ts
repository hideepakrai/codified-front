export interface ServiceContent {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage?: string;
  features: {
    title: string;
    desc: string;
  }[];
  techStack: {
    title: string;
    desc: string;
  };
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  mood: string;
}

export const servicesData: Record<string, ServiceContent> = {
  "ai-consulting": {
    slug: "ai-consulting",
    title: "AI Consulting",
    tagline: "Intelligent Systems for Modern Businesses",
    description: "AI is no longer optional - it's essential. Businesses that leverage AI see higher efficiency, better decision-making, and smarter customer experiences. But without a clear roadmap, AI initiatives fail to scale. At Codified, we build AI-powered solutions that enhance efficiency, automate workflows, and enable data-driven decisions at scale.",
    heroImage: "/images/services/ai-hero.png",
    features: [
      { title: "AI Readiness Assessment", desc: "We conduct a comprehensive evaluation of your business's current state to identify high-impact AI opportunities." },
      { title: "Use Case Discovery", desc: "We focus on cutting through the hype to find the highest-impact AI applications for your specific needs." },
      { title: "AI Strategy & Roadmap", desc: "We develop a multi-phase strategic plan to transition your business to an AI-driven model." },
      { title: "Model Selection", desc: "We help you navigate the complex choices between proprietary and open-source AI models." },
      { title: "Proof of Concept", desc: "We advocate for a validate-first approach through rapid prototyping and pilot projects." },
      { title: "Governance & Risk", desc: "We establish policies for security, ethics, and compliance in your AI integrations." }
    ],
    techStack: {
      title: "Advanced AI Stack",
      desc: "Our development stack includes industry-leading tools such as Python, TensorFlow, OpenAI, and LangChain - enabling us to create highly responsive, context-aware systems."
    },
    process: [
      { step: "01", title: "Technical Discovery", desc: "Deep-dive into existing codebases and data pipelines to identify AI integration points." },
      { step: "02", title: "Architectural Design", desc: "Create a modular, model-agnostic blueprint that adapts as new SOTA models emerge." },
      { step: "03", title: "Iterative Engineering", desc: "Agile sprints to develop and fine-tune solutions, focusing on latency and accuracy." },
      { step: "04", title: "Deployment & Monitoring", desc: "Full CI/CD lifecycle management with continuous monitoring for model drift." }
    ],
    mood: "ai"
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    tagline: "High-Performance Digital Platforms",
    description: "Custom-built, scalable, and SEO-friendly web solutions designed to deliver seamless user experiences and measurable business results. We combine technical excellence with user-centric design to create platforms that scale with your growth.",
    heroImage: "/images/services/web-hero.png",
    features: [
      { title: "UI/UX Design", desc: "Aesthetic, user-centric product strategies and intuitive interface designs." },
      { title: "Full Stack Development", desc: "Robust bespoke platforms and enterprise-grade systems built with modern stacks." },
      { title: "CMS Development", desc: "Custom content management solutions that empower your team to manage data easily." },
      { title: "ERP & CRM", desc: "End-to-end business resource management and customer relationship tools." },
      { title: "SEO Optimization", desc: "Data-driven rankings and high-quality conversions built into the core." }
    ],
    techStack: {
      title: "Modern Web Stack",
      desc: "We leverage Next.js, React, Node.js, and TypeScript to build fast, secure, and SEO-optimized web applications."
    },
    process: [
      { step: "01", title: "Research & Planning", desc: "Understanding your business goals and user needs to create a solid foundation." },
      { step: "02", title: "UI/UX Prototyping", desc: "Designing intuitive interfaces and testing user flows before development." },
      { step: "03", title: "Full-Stack Coding", desc: "Developing robust front-end and back-end systems using agile methodologies." },
      { step: "04", title: "Launch & Growth", desc: "Deployment, speed optimization, and ongoing support for continuous growth." }
    ],
    mood: "data"
  },
  "cloud-and-hosting": {
    slug: "cloud-and-hosting",
    title: "Cloud & Hosting",
    tagline: "Secure and Scalable Infrastructure",
    description: "From cloud migration to managed hosting, we ensure reliable performance, enhanced security, and operational efficiency. Our solutions are designed for high availability and peak performance under any load.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "AWS Management", desc: "Scalable infrastructure deployments on AWS with cost-optimization strategies." },
      { title: "Cloud Migration", desc: "Seamless and secure transition of your legacy systems to modern cloud environments." },
      { title: "Server Management", desc: "24/7 monitoring, security patching, and performance tuning for your hostings." },
      { title: "High Availability", desc: "Multi-region deployments and disaster recovery planning for zero downtime." }
    ],
    techStack: {
      title: "Enterprise Infrastructure",
      desc: "Powered by AWS, Azure, and Google Cloud with Docker and Kubernetes for container orchestration."
    },
    process: [
      { step: "01", title: "Infra Audit", desc: "Analyzing your current hosting state and identifying bottlenecks or security risks." },
      { step: "02", title: "Cloud Architecture", desc: "Designing a secure, scalable network and server blueprint for your specific load." },
      { step: "03", title: "Safe Migration", desc: "Executing data transfers with minimal downtime and verified integrity checks." },
      { step: "04", title: "Managed Scaling", desc: "Continuous monitoring and auto-scaling to handle traffic spikes effortlessly." }
    ],
    mood: "engine"
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Growth Strategies Backed by Data",
    description: "We combine SEO, paid campaigns, and performance analytics to increase visibility, drive traffic, and maximize ROI. Our growth-first approach ensures every marketing dollar delivers measurable value.",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "SEO Strategy", desc: "Technical and content SEO to drive organic traffic and dominate search rankings." },
      { title: "Paid Marketing (PPC)", desc: "High-conversion ad campaigns across Google, Meta, and LinkedIn." },
      { title: "Social Media (SMM)", desc: "Building brand awareness and community engagement across digital channels." },
      { title: "Performance Analytics", desc: "Deep-dive reporting into user behavior and conversion optimization." }
    ],
    techStack: {
      title: "MarTech Stack",
      desc: "Using Google Analytics 4, Tag Manager, SEMrush, and Hubspot to track and optimize growth."
    },
    process: [
      { step: "01", title: "Market Research", desc: "Identifying your target audience and analyzing competitor strategies." },
      { step: "02", title: "Campaign Setup", desc: "Creating compelling ad copy and visual assets for multi-channel reach." },
      { step: "03", title: "A/B Testing", desc: "Continuous testing of landing pages and ad variants to maximize ROI." },
      { step: "04", title: "ROI Reporting", desc: "Monthly performance reviews with transparent data on growth and leads." }
    ],
    mood: "signal"
  },
  "ai-ml-development": {
    slug: "ai-ml-development",
    title: "AI/ML Development",
    tagline: "Predictive Analytics & Custom Models",
    description: "Harness the power of machine learning to automate complex decisions. We build custom models that learn from your data and deliver actionable predictions.",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Model Training", desc: "Training custom LLMs and ML models on your proprietary datasets." },
      { title: "Predictive Analytics", desc: "Identifying patterns and trends to forecast future business outcomes." },
      { title: "Computer Vision", desc: "Building systems that can see and interpret visual data in real-time." }
    ],
    techStack: { title: "AI Stack", desc: "PyTorch, TensorFlow, Scikit-learn, and HuggingFace models." },
    process: [],
    mood: "ai"
  },
  "software-dev": {
    slug: "software-dev",
    title: "Software Development",
    tagline: "Enterprise-Grade Bespoke Platforms",
    description: "Robust, scalable, and secure software tailored to your business logic. We build enterprise systems that streamline operations and drive growth.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Custom ERP", desc: "Centralized management systems for your entire business operation." },
      { title: "Microservices", desc: "Building scalable distributed systems that are easy to maintain." }
    ],
    techStack: { title: "Software Stack", desc: "Java, Go, C#, and SQL/NoSQL databases." },
    process: [],
    mood: "data"
  },
  "mobile-apps": {
    slug: "mobile-apps",
    title: "Mobile Apps",
    tagline: "Seamless iOS & Android Experiences",
    description: "Native and cross-platform mobile apps that users love. We focus on performance, accessibility, and intuitive design.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Native iOS/Android", desc: "High-performance apps built with Swift and Kotlin." },
      { title: "React Native", desc: "Efficient cross-platform development with a single codebase." }
    ],
    techStack: { title: "Mobile Stack", desc: "Swift, Kotlin, React Native, and Flutter." },
    process: [],
    mood: "signal"
  },
  "ai-chatbot": {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    tagline: "Conversational AI for Smarter Interaction",
    description: "We build intelligent, conversational AI chatbots that engage, assist, and convert - available 24/7 across your website, app, or support channels. Our solutions use advanced LLMs like GPT-4, Claude, and LLaMA to provide human-like customer support.",
    heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Custom Bot Development", desc: "Tailored to your business needs using advanced LLMs like GPT-4 and Claude." },
      { title: "Multi-Channel", desc: "Deploy across website, mobile app, WhatsApp, Slack, and Messenger." },
      { title: "Context-Aware", desc: "Bots that remember previous chats and personalize interactions using RAG." },
      { title: "Voice Support", desc: "Natural voice conversations and multilingual support for global accessibility." }
    ],
    techStack: { title: "Conversational Stack", desc: "LangChain, LlamaIndex, OpenAI API, and Pinecone for vector memory." },
    process: [],
    mood: "ai"
  },
  "ai-agent": {
    slug: "ai-agent",
    title: "AI Agent",
    tagline: "Autonomous Agents for Complex Workflows",
    description: "We design and deploy intelligent AI agents that can analyze data, make decisions, and execute tasks independently to revolutionize your operational efficiency. Our agents simplify complex workflows and bring intelligence to every business process.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Autonomous Workflows", desc: "Agents that execute tasks, manage reporting, and handle approvals independently." },
      { title: "Customer Support Agents", desc: "Resolve tickets and handle complex queries with 24/7 human-like reasoning." },
      { title: "Sales & Lead Agents", desc: "Engage website visitors, qualify prospects, and automate meeting scheduling." },
      { title: "Multi-Agent Systems", desc: "Collaborative AI ecosystems where multiple agents work together across departments." }
    ],
    techStack: { title: "Agentic Frameworks", desc: "AutoGPT, BabyAGI, CrewAI, and custom Python agentic loops." },
    process: [],
    mood: "ai"
  },
  "gen-ai": {
    slug: "gen-ai",
    title: "Generative AI",
    tagline: "Next-Gen Content & Media Generation",
    description: "Unlock the power of Generative AI to create high-quality content, images, and code at scale. We integrate state-of-the-art models into your creative and technical workflows.",
    heroImage: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "LLM Customization", desc: "Fine-tuning large language models on your specific domain data." },
      { title: "Image & Media Gen", desc: "Integrating Stable Diffusion and Midjourney for automated asset creation." },
      { title: "Automated Coding", desc: "Building AI-powered IDE extensions and automated code review systems." }
    ],
    techStack: { title: "GenAI Stack", desc: "Stable Diffusion, GPT-4o, Claude 3.5, and custom LoRA training." },
    process: [],
    mood: "ai"
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Aesthetic & User-Centric Digital Experiences",
    description: "We craft visually stunning and highly intuitive interfaces that prioritize user experience. Our design process combines research, prototyping, and aesthetic excellence to build products people love.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "User Research", desc: "Deep-dive into user behavior and pain points to inform design strategy." },
      { title: "Interactive Prototyping", desc: "High-fidelity clickable prototypes that validate flows before coding." },
      { title: "Design Systems", desc: "Building scalable UI libraries that ensure brand consistency across platforms." }
    ],
    techStack: { title: "Design Tools", desc: "Figma, Adobe Creative Suite, Framer, and Spline for 3D design." },
    process: [],
    mood: "data"
  },
  "full-stack-development": {
    slug: "full-stack-development",
    title: "Full Stack Development",
    tagline: "End-to-End Engineering Excellence",
    description: "Comprehensive development services covering both frontend and backend. We build robust, scalable architectures that support complex business logic and high traffic.",
    heroImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Modern Frontend", desc: "Highly responsive UIs built with React, Next.js, and Vue." },
      { title: "Robust Backend", desc: "Scalable server-side logic using Node.js, Python, or Go." },
      { title: "Database Architecture", desc: "Optimized SQL and NoSQL schemas for high-performance data retrieval." }
    ],
    techStack: { title: "Full Stack", desc: "MERN Stack, T3 Stack, and serverless architectures with Vercel/AWS." },
    process: [],
    mood: "data"
  },
  "cms-development": {
    slug: "cms-development",
    title: "CMS Development",
    tagline: "Custom Content Management Solutions",
    description: "Empower your team with intuitive content management. We build custom CMS platforms and integrate headless solutions like Payload and Sanity for maximum flexibility.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Headless CMS", desc: "Decoupled architectures that allow content delivery across any platform." },
      { title: "Custom Admin Panels", desc: "Tailored dashboards that match your specific data management needs." }
    ],
    techStack: { title: "CMS Stack", desc: "Payload CMS, Strapi, Sanity.io, and custom WordPress solutions." },
    process: [],
    mood: "data"
  },
  "erp-crm": {
    slug: "erp-crm",
    title: "ERP & CRM",
    tagline: "Business Logic & Customer Management",
    description: "Streamline your internal operations and customer relationships with custom-built ERP and CRM systems. We focus on automation, data integrity, and cross-departmental visibility.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Custom ERP", desc: "Unified systems for inventory, finance, and human resource management." },
      { title: "CRM Automation", desc: "Automated sales pipelines, lead tracking, and customer engagement tools." }
    ],
    techStack: { title: "Enterprise Tech", desc: "PostgreSQL, Redis, RabbitMQ, and enterprise-grade Node.js frameworks." },
    process: [],
    mood: "engine"
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Mobile Solutions",
    description: "High-performance mobile applications that deliver seamless experiences on iOS and Android. We leverage the latest frameworks to build apps that are fast, secure, and intuitive.",
    heroImage: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "iOS Development", desc: "Native apps built with Swift and SwiftUI for the Apple ecosystem." },
      { title: "Android Development", desc: "Modern Android apps using Kotlin and Jetpack Compose." },
      { title: "Cross-Platform", desc: "Efficient development with React Native and Flutter for unified reach." }
    ],
    techStack: { title: "Mobile Stack", desc: "Swift, Kotlin, React Native, and Flutter." },
    process: [],
    mood: "signal"
  },
  "seo-smm-amo-ppc": {
    slug: "seo-smm-amo-ppc",
    title: "SEO, SMM & PPC",
    tagline: "Full-Funnel Digital Growth Solutions",
    description: "We combine strategy, creativity, and data to deliver digital marketing solutions that actually convert. From ranking higher on Google to running high-performing ad campaigns, we grow your visibility, traffic, and ROI across web, mobile, and social platforms.",
    heroImage: "/images/services/marketing-hero.png",
    features: [
      { title: "Search Engine Optimization", desc: "Technical audits, on-page tactics, and high-quality backlink building to improve Google rankings." },
      { title: "Social Media Marketing", desc: "Platform-specific content calendars and targeted paid promotions for Instagram, Facebook, and LinkedIn." },
      { title: "App Store Optimization", desc: "Increasing mobile app downloads and visibility with keyword optimization and A/B testing." },
      { title: "ROI-Focused PPC", desc: "High-converting ad campaigns across Google Ads, Meta Ads, and YouTube with real-time reporting." }
    ],
    techStack: { title: "Growth Stack", desc: "Google Analytics 4, Search Console, Meta Ads Manager, and SEMrush." },
    process: [
      { step: "01", title: "Technical Audit", desc: "Analyzing site speed, structure, and current keyword performance." },
      { step: "02", title: "Strategy Phase", desc: "Creating platform-specific content and ad creative blueprints." },
      { step: "03", title: "Execution", desc: "Launching campaigns and implementing on-page/off-page optimizations." },
      { step: "04", title: "Optimization", desc: "Continuous A/B testing and data-driven performance refining." }
    ],
    mood: "signal"
  },
  "paid-marketing": {
    slug: "paid-marketing",
    title: "Paid Marketing",
    tagline: "Targeted Ad Campaigns for Maximum ROI",
    description: "Drive instant traffic and high-quality leads with performance-focused ad campaigns. We manage your entire paid advertising lifecycle from audience selection to budget optimization.",
    heroImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Google Ads (PPC)", desc: "Search and Display campaigns that capture high-intent users at the right time." },
      { title: "Social Ads", desc: "Highly targeted campaigns on Meta, LinkedIn, and TikTok to drive engagement." },
      { title: "Retargeting", desc: "Re-engaging visitors who didn't convert with personalized ad sequences." }
    ],
    techStack: { title: "AdTech Stack", desc: "Google Ads, Meta Business Suite, LinkedIn Campaign Manager." },
    process: [],
    mood: "signal"
  },
  "analytics-reporting": {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    tagline: "Data-Driven Insights & ROI Tracking",
    description: "Transparency is at the heart of our marketing. We provide deep-dive analytics and real-time reporting to ensure every marketing dollar is delivering measurable value.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "Conversion Tracking", desc: "Setting up precise tracking for leads, sales, and user behavior events." },
      { title: "Custom Dashboards", desc: "Real-time visual reporting that gives you clear visibility into campaign health." },
      { title: "Insight Analysis", desc: "Monthly deep-dives into data to identify new growth opportunities." }
    ],
    techStack: { title: "Data Stack", desc: "Google Analytics 4, Looker Studio, Tag Manager, and Mixpanel." },
    process: [],
    mood: "data"
  }
};

export interface IndustryContent {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  metrics: { value: string; label: string }[];
  roadmap: { title: string; desc: string }[];
  mood: string;
}

export const industriesData: Record<string, IndustryContent> = {
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare & HealthTech",
    tagline: "Engineering the Future of Patient Care",
    description: "Transforming healthcare with HIPAA-compliant portals, telemedicine apps, and AI-driven diagnostic tools. We prioritize security, accessibility, and real-time patient monitoring.",
    heroImage: "/images/industries/healthcare.png",
    features: [
      { title: "Telemedicine", desc: "Secure video consulting and patient management." },
      { title: "EMR/EHR Systems", desc: "Digital record management with enterprise security." },
      { title: "Health Monitoring", desc: "IoT integration for real-time vital tracking." }
    ],
    solutions: [
      { title: "Patient Portals", desc: "Self-service scheduling and history access." },
      { title: "Diagnostics AI", desc: "Automated analysis of medical imaging." }
    ],
    metrics: [
      { value: "40%", label: "Wait Time Reduction" },
      { value: "99.9%", label: "Data Compliance" },
      { value: "1M+", label: "Patient Records Managed" }
    ],
    roadmap: [
      { title: "Technical Audit", desc: "Security and compliance evaluation." },
      { title: "Arch Blueprint", desc: "System architecture and data flow design." },
      { title: "Core Build", desc: "HIPAA-compliant development sprints." },
      { title: "Scale Phase", desc: "Enterprise-wide rollout and optimization." }
    ],
    mood: "ai"
  },
  "fintech": {
    slug: "fintech",
    title: "Fintech & Banking",
    tagline: "Secure, Scalable Financial Ecosystems",
    description: "Build robust, secure, and compliant financial solutions. From payment gateways to neo-banking platforms, we deliver engineering excellence for the finance sector.",
    heroImage: "/images/industries/fintech.png",
    features: [
      { title: "Payment Gateways", desc: "Fast, secure, and multi-currency transaction processing." },
      { title: "Digital Wallets", desc: "Contactless payments and crypto-asset management." },
      { title: "Fraud Detection", desc: "AI-powered anomaly detection in real-time." }
    ],
    solutions: [
      { title: "Neo-Banking", desc: "Mobile-first banking experiences for the next gen." },
      { title: "InsurTech", desc: "Claims processing and risk assessment automation." }
    ],
    metrics: [
      { value: "0.01ms", label: "Txn Latency" },
      { value: "ISO", label: "27001 Certified" },
      { value: "$2B+", label: "Processed Yearly" }
    ],
    roadmap: [
      { title: "Audit", desc: "PCI-DSS and security vetting." },
      { title: "Engine Build", desc: "Transaction engine development." },
      { title: "Integration", desc: "API and third-party gateway hookup." },
      { title: "Deployment", desc: "Cloud-native infrastructure launch." }
    ],
    mood: "data"
  },
  "edtech": {
    slug: "edtech",
    title: "Education & EdTech",
    tagline: "Next-Generation Learning Platforms",
    description: "Building immersive, interactive, and scalable education tools. From virtual classrooms to complex LMS platforms, we empower learners globally.",
    heroImage: "/images/industries/education.png",
    features: [
      { title: "Virtual Classrooms", desc: "Interactive live sessions with collaborative tools." },
      { title: "LMS Platforms", desc: "Course management, grading, and student tracking." },
      { title: "Adaptive Learning", desc: "AI-driven personalized curriculum paths." }
    ],
    solutions: [
      { title: "Exam Portals", desc: "Secure, proctored testing environments." },
      { title: "School Management", desc: "Unified administration for educational institutes." }
    ],
    metrics: [
      { value: "500K+", label: "Active Students" },
      { value: "98%", label: "Completion Rate" },
      { value: "24/7", label: "LMS Support" }
    ],
    roadmap: [
      { title: "Curriculum Audit", desc: "Digital content structure review." },
      { title: "Platform Dev", desc: "Interactive learning engine build." },
      { title: "Integration", desc: "Video and assessment tool hookup." },
      { title: "Rollout", desc: "Global student onboarding." }
    ],
    mood: "signal"
  },
  "e-commerce": {
    slug: "e-commerce",
    title: "E-Commerce & Retail",
    tagline: "High-Conversion Retail Engines",
    description: "Scalable storefronts designed for performance. We build custom commerce engines that handle complex inventories and millions of global users.",
    heroImage: "/images/industries/general-premium.png",
    features: [
      { title: "Custom Storefronts", desc: "Tailored UI for unique brand experiences." },
      { title: "Inventory Management", desc: "Real-time tracking across multiple channels." },
      { title: "AI Personalization", desc: "Product recommendations based on behavior." }
    ],
    solutions: [
      { title: "Omnichannel", desc: "Seamless experience across web, mobile, and physical stores." },
      { title: "B2B Commerce", desc: "Complex bulk ordering and account management." }
    ],
    metrics: [
      { value: "300%", label: "ROI Increase" },
      { value: "50ms", label: "Page Load Speed" },
      { value: "10M+", label: "SKUs Managed" }
    ],
    roadmap: [
      { title: "Sales Audit", desc: "Conversion funnel analysis." },
      { title: "Engine Migration", desc: "Core commerce platform build." },
      { title: "UX Polish", desc: "Optimization for mobile and desktop." },
      { title: "Launch", desc: "Global scaling and SEO push." }
    ],
    mood: "engine"
  },
  "realestate": {
    slug: "realestate",
    title: "Real Estate & PropTech",
    tagline: "Digital Ecosystems for Property Markets",
    description: "Transforming the property landscape with advanced portals, CRM integrations, and 3D visualization tools for real estate developers and agencies.",
    heroImage: "/images/industries/general-premium.png",
    features: [
      { title: "Property Portals", desc: "High-performance listings with advanced filtering." },
      { title: "3D Virtual Tours", desc: "Immersive property viewing experiences." },
      { title: "CRM Integration", desc: "Automated lead tracking and agent management." }
    ],
    solutions: [
      { title: "Asset Management", desc: "Cloud-based tracking for large property portfolios." },
      { title: "Lead Generation", desc: "Data-driven marketing for new developments." }
    ],
    metrics: [
      { value: "25%", label: "Lead Increase" },
      { value: "15k+", label: "Active Listings" },
      { value: "40%", label: "Closing Speed" }
    ],
    roadmap: [
      { title: "Market Audit", desc: "Target audience and platform evaluation." },
      { title: "Portal Build", desc: "Search and listing engine development." },
      { title: "Data Sync", desc: "MLS and internal database integration." },
      { title: "Launch", desc: "Marketing rollout and agent training." }
    ],
    mood: "data"
  }
};

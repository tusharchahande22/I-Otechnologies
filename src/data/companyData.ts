import { 
  ServiceItem, 
  ProjectItem, 
  ProcessStep, 
  TechItem, 
  StatItem, 
  TestimonialItem, 
  ComparisonItem,
  ProductItem,
  InnovationDomain
} from '../types';

export const COMPANY_INFO = {
  name: "I&O Technologies",
  tagline: "Inovance and Optivance",
  shortDesc: "AI Engineering Company & Product Innovation Venture Studio. We engineer our own proprietary digital products while partnering with startups, businesses, and enterprises to build theirs.",
  fullDesc: "I&O Technologies stands at the intersection of Inovance (Pioneering AI Innovation) and Optivance (Performance & Scale Optimization). As both an AI engineering partner and a product venture company, we turn ambitious ideas into high-impact digital products, enterprise platforms, and scalable market ecosystems.",
  foundedYear: "2018",
  contactEmail: "technologies.iando@gmail.com",
  phone: "+91 82371 22316",
  website: "https://iandotechnologies.com",
  address: "Ramwadi, Wadgaon Sheri, Shivshakti Chowk, Pune – 411014, Maharashtra, India",
  hours: {
    monFri: "9:00 AM – 6:00 PM (IST)",
    sat: "10:00 AM – 2:00 PM (IST)",
    sun: "Closed"
  },
  location: "Pune, Maharashtra, India (Global Operations)",
  socials: {
    linkedin: "https://linkedin.com/in/tushar-chahande-39755b228",
    whatsapp: "https://wa.me/918237122316",
    website: "https://iandotechnologies.com",
    github: "https://github.com/iandotech",
    instagram: "https://instagram.com/iando.tech",
    email: "mailto:technologies.iando@gmail.com"
  }
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "kaampe",
    name: "KaamPe",
    tagline: "Turn Your Liability Into an Asset.",
    description: "KaamPe is a peer-to-peer rental marketplace that enables individuals and businesses to monetize idle assets by securely renting them within their local communities. Designed with trust, simplicity, and scalability in mind, KaamPe transforms underutilized resources into earning opportunities.",
    industry: "Rental Marketplace",
    status: "🚀 In Development",
    statusType: "dev",
    highlights: [
      "Secure Rentals",
      "Identity Verification",
      "Smart Booking",
      "Digital Payments",
      "AI-ready Architecture"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "thoksale",
    name: "ThokSale",
    tagline: "The Future of Wholesale Commerce.",
    description: "ThokSale is a next-generation B2B wholesale marketplace connecting manufacturers, wholesalers, distributors, retailers, and suppliers on one intelligent digital platform. Inspired by platforms like Alibaba and IndiaMART, it focuses on simplifying procurement, supplier discovery, and business growth.",
    industry: "B2B Wholesale Marketplace",
    status: "💡 Product Vision",
    statusType: "vision",
    highlights: [
      "Supplier Verification",
      "Bulk Orders",
      "RFQ Management",
      "AI Product Discovery",
      "Smart Quotations"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bloodesk",
    name: "Bloodesk",
    tagline: "Building the Future of Real Estate.",
    description: "Bloodesk is an intelligent real estate ecosystem designed to simplify property discovery while connecting buyers, sellers, builders, brokers, contractors, consultants, and service providers. It extends beyond property listings to create a complete digital infrastructure for the real estate industry.",
    industry: "Real Estate Technology",
    status: "🚀 In Development",
    statusType: "dev",
    highlights: [
      "Property Marketplace",
      "PG & Co-Living",
      "Flatmate Discovery",
      "Contractor Directory",
      "Construction Services",
      "AI-powered Property Search"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vivhahika-matrimony",
    name: "Vivhahika Matrimony",
    tagline: "Meaningful Connections. Built on Trust.",
    description: "Vivhahika Matrimony is a premium matrimonial platform focused on creating meaningful relationships through verified profiles, secure communication, modern design, and an exceptional user experience.",
    industry: "Matrimonial Platform",
    status: "✅ Live Product",
    statusType: "live",
    highlights: [
      "Verified Profiles",
      "Membership Plans",
      "Secure Payments",
      "Smart Matchmaking",
      "Premium Experience"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    link: "https://vivhahikamatrimony.in"
  }
];

export const INNOVATION_DOMAINS: InnovationDomain[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Autonomous agentic workflows, multi-modal LLM reasoning, and neural decision engines.",
    iconName: "BrainCircuit",
    badge: "Core AI Lab"
  },
  {
    id: "automation",
    title: "Business Automation",
    description: "Self-healing operational pipelines, document AI extraction, and cross-SaaS event bridges.",
    iconName: "Zap",
    badge: "Ops Engine"
  },
  {
    id: "marketplaces",
    title: "Digital Marketplaces",
    description: "Peer-to-peer asset monetization platforms, escrow payments, and local discovery engines.",
    iconName: "ShoppingBag",
    badge: "P2P & B2B"
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    description: "High-throughput microservices, sub-second telemetry, and compliant data layers.",
    iconName: "Building2",
    badge: "High-Scale"
  },
  {
    id: "smart-commerce",
    title: "Smart Commerce",
    description: "B2B procurement systems, automated RFQs, bulk quote engines, and supply chain tracking.",
    iconName: "Store",
    badge: "Wholesale Tech"
  },
  {
    id: "prop-tech",
    title: "Real Estate Technology",
    description: "End-to-end proptech networks connecting buyers, builders, contractors, and co-living hubs.",
    iconName: "Home",
    badge: "PropTech"
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    description: "Multi-tenant cloud architectures, subscription billing pipelines, and AI analytical suites.",
    iconName: "Layers",
    badge: "Cloud Ready"
  },
  {
    id: "future-research",
    title: "Future Research Projects",
    description: "Pioneering spatial computing interfaces, decentralized identity, and quantum-safe protocols.",
    iconName: "Compass",
    badge: "Frontier R&D"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-solutions",
    title: "Artificial Intelligence",
    subtitle: "Custom ML Models & GenAI Integration",
    description: "Deep learning models, natural language understanding, custom LLM fine-tuning, and multi-modal AI agents designed for high throughput.",
    iconName: "BrainCircuit",
    features: [
      "Custom Fine-tuned LLM Engines",
      "Retrieval-Augmentation (RAG)",
      "Computer Vision & Image Analysis",
      "Predictive Data Modeling"
    ],
    metrics: "99.4% Accuracy",
    badge: "Core Expertise"
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Autonomous Workflow Orchestration",
    description: "End-to-end intelligent agent workforces that eliminate manual bottlenecking, auto-classify document flows, and automate cross-system workflows.",
    iconName: "Bot",
    features: [
      "Multi-Agent Task Orchestration",
      "Document AI & Extraction",
      "Autonomous Customer Support",
      "Self-Healing Operations"
    ],
    metrics: "85% Manual Cost Reduction",
    badge: "High ROI"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    subtitle: "Bespoke Enterprise Grade Applications",
    description: "Clean, modular, and resilient full-stack codebases tailored to your exact operational requirements and business logic.",
    iconName: "Code2",
    features: [
      "Modular Microservices",
      "High-Concurrency Engines",
      "RESTful & GraphQL APIs",
      "Zero-Downtime Migration"
    ],
    metrics: "10x Development Speed",
    badge: "Bespoke"
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    subtitle: "iOS, Android & Cross-Platform",
    description: "Fluid, high-framerate native and hybrid mobile experiences built with React Native, Flutter, and Swift for high user retention.",
    iconName: "Smartphone",
    features: [
      "React Native & Swift",
      "Offline Sync Engines",
      "Biometric Security Integration",
      "Real-Time Push Notifications"
    ],
    metrics: "4.9★ Store Rating Avg",
    badge: "Native & Cross-Platform"
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Solutions & DevOps",
    subtitle: "Resilient Multi-Cloud Architecture",
    description: "Serverless infrastructures, Kubernetes clusters, zero-downtime CI/CD pipelines, and cloud cost optimization frameworks.",
    iconName: "CloudCog",
    features: [
      "AWS / GCP / Cloudflare Stack",
      "Terraform Infrastructure as Code",
      "Automated CI/CD Pipelines",
      "24/7 Monitoring & Alerting"
    ],
    metrics: "99.99% Uptime Guaranteed",
    badge: "Enterprise Ready"
  },
  {
    id: "enterprise-systems",
    title: "Enterprise Systems",
    subtitle: "Unified ERP, CRM & Business Ops",
    description: "Mission-critical business software linking inventory, billing, human capital, supply chain, and executive analytics in real time.",
    iconName: "Building2",
    features: [
      "Unified ERP Integration",
      "Role-Based Access Control (RBAC)",
      "Audit Trail & Compliance",
      "Legacy Database Synchronization"
    ],
    metrics: "Sub-Second Data Sync",
    badge: "Mission Critical"
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    subtitle: "Human-Centered Digital Craft",
    description: "Award-winning visual identities, design systems, interactive prototypes, and micro-interactions optimized for conversion.",
    iconName: "Sparkles",
    features: [
      "Design Systems & Tokenization",
      "Interactive Motion Prototypes",
      "Accessibility (WCAG 2.1 AA)",
      "User Journey Optimization"
    ],
    metrics: "2.4x Conversion Growth",
    badge: "Crafted Excellence"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    subtitle: "Process Streamlining & Integration",
    description: "Connecting disparate SaaS tools, payment gateways, marketing channels, and ERPs into seamless automated pipelines.",
    iconName: "Zap",
    features: [
      "Custom Webhook & API Bridges",
      "Automated Financial Reconciliation",
      "Event-Driven Triggers",
      "Real-Time Audit Dashboards"
    ],
    metrics: "100k+ Daily Events Processed",
    badge: "Efficiency"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "vivhahika-matrimony",
    title: "Vivhahika Matrimony",
    category: "Consumer AI Platform",
    tagline: "Next-Generation Intelligent Matchmaking Engine",
    description: "A flagship matrimony and matchmaking platform powered by AI compatibility algorithms, real-time encrypted messaging, verified profile authentication, and fluid cross-device UI.",
    challenge: "Traditional matchmaking applications suffer from low profile trust, manual verification bottlenecks, and inaccurate keyword search that fails to capture real personality dynamics.",
    solution: "Engineered an AI-driven profile compatibility engine utilizing vector embeddings and behavioral analysis to score relationship alignment, paired with automated ID verification and biometric face match.",
    impact: "Boosted user match satisfaction by 78%, decreased profile verification time from 48 hours to 12 seconds, and scaled to over 1.2M registered active members.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Node.js", "Python AI", "PostgreSQL", "OpenAI Embeddings", "AWS"],
    metrics: [
      { label: "Active Profiles", value: "1.2M+" },
      { label: "Verification Speed", value: "12 sec" },
      { label: "Match Satisfaction", value: "78% ↑" }
    ],
    client: "Vivhahika Media",
    year: "2025",
    link: "https://vivhahikamatrimony.in"
  },
  {
    id: "enterprise-dashboard",
    title: "Enterprise Analytics Dashboard",
    category: "Cloud Executive Platform",
    tagline: "Real-Time Multi-Cloud Financial & Operational Intelligence",
    description: "A sleek, low-latency executive dashboard for multi-national corporations, consolidating multi-cloud infrastructure telemetry, financial forecasting, and anomaly detection into one unified view.",
    challenge: "Data fragmentation across AWS, Azure, and legacy databases caused delays in quarterly financial reporting and blind spots in infrastructure cost overruns.",
    solution: "Built a distributed data ingestion stream using Apache Kafka and ClickHouse paired with a ultra-responsive React dashboard featuring custom D3/Recharts visualizers and automated threshold alerting.",
    impact: "Uncovered $1.4M in idle cloud resources within 30 days and reduced weekly reporting prep time from 16 hours to 1 Click.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React 19", "TypeScript", "D3.js", "ClickHouse", "Go", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Cost Savings", value: "$1.4M" },
      { label: "Data Latency", value: "<150ms" },
      { label: "Report Time", value: "1 Click" }
    ],
    client: "Global TechCorp",
    year: "2025"
  },
  {
    id: "ai-automation-platform",
    title: "Autonomous AI Agent Platform",
    category: "Enterprise Automation",
    tagline: "Intelligent Workflows & Self-Driven Agent Orchestration",
    description: "An enterprise agentic workflow platform that enables non-technical teams to deploy AI workers for invoice processing, contract compliance, customer routing, and automated data entry.",
    challenge: "Enterprise back-office staff were spending over 6,000 hours monthly on manual PDF transcription, email sorting, and multi-system copy-pasting.",
    solution: "Developed an intuitive visual drag-and-drop workflow canvas integrated with self-correcting LLM agents capable of viewing, extracting, validating, and inputting structured data directly into SAP and Salesforce.",
    impact: "Automated 82% of administrative document entry with zero human intervention and 99.7% parsing precision.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Python / FastAPI", "OpenAI / Claude", "LangChain", "Redis", "Cloudflare"],
    metrics: [
      { label: "Hours Saved", value: "6,000/mo" },
      { label: "Parsing Precision", value: "99.7%" },
      { label: "Manual Effort Cut", value: "82%" }
    ],
    client: "FinFlow Systems",
    year: "2024"
  },
  {
    id: "business-management-system",
    title: "Unified Business Management System",
    category: "Enterprise ERP & Operations",
    tagline: "End-to-End Operational Control Center",
    description: "A high-performance custom ERP solution unifying inventory control, automated invoicing, customer lifecycle management, and employee dispatching for high-growth logistics firms.",
    challenge: "Fragmented spreadsheets and legacy desktop software led to order discrepancies, missed maintenance schedules, and delayed client invoicing.",
    solution: "Architected a cloud-native ERP platform featuring real-time inventory tracking via IoT sensors, automated invoice generation upon job completion, and predictive inventory replenishment.",
    impact: "Accelerated invoicing velocity by 4x, eliminated inventory variance, and supported 300% volume growth without adding administrative headcount.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["TypeScript", "React", "Node.js Express", "PostgreSQL", "Redis", "WebSockets"],
    metrics: [
      { label: "Invoicing Velocity", value: "4x Faster" },
      { label: "Inventory Accuracy", value: "100%" },
      { label: "Volume Growth", value: "+300%" }
    ],
    client: "OmniLogistics Corp",
    year: "2024"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discover",
    description: "In-depth technical consultation, business goals alignment, user persona mapping, and architectural feasibility analysis.",
    deliverables: ["Product Vision Matrix", "Technical Requirement Specification", "ROI & Risk Roadmap"],
    icon: "Compass"
  },
  {
    stepNumber: "02",
    title: "Research",
    description: "Data modeling, security compliance review, AI model evaluation, and competitive UX benchmarking.",
    deliverables: ["System Architecture Diagram", "Database Schema Spec", "AI Model Benchmark Report"],
    icon: "Microscope"
  },
  {
    stepNumber: "03",
    title: "Design",
    description: "Human-centric design systems, high-fidelity interactive wireframes, and cinematic micro-interaction motion specs.",
    deliverables: ["Figma Design System", "Interactive Clickable Prototype", "User Flow Prototypes"],
    icon: "Figma"
  },
  {
    stepNumber: "04",
    title: "Develop",
    description: "Agile 2-week development sprints, modular clean code, automated CI/CD unit testing, and AI endpoint integration.",
    deliverables: ["Production-Ready Repository", "API Documentation", "Sprint Progress Demos"],
    icon: "Code"
  },
  {
    stepNumber: "05",
    title: "Deploy",
    description: "Zero-downtime multi-cloud deployment, load testing, penetration testing, and automated backup orchestration.",
    deliverables: ["Cloud Provisioning (IaC)", "Security Audit Certificate", "Live Production Environment"],
    icon: "Rocket"
  },
  {
    stepNumber: "06",
    title: "Scale",
    description: "Proactive 24/7 telemetry monitoring, auto-scaling configuration, continuous AI tuning, and iterative feature sprints.",
    deliverables: ["SLA Guarantee Contract", "Performance Telemetry Dashboard", "Growth Roadmaps"],
    icon: "TrendingUp"
  }
];

export const TECH_STACK_DATA: TechItem[] = [
  { name: "React", category: "frontend", icon: "Code", description: "Modern React 19 UI library for dynamic component architecture.", popularFor: "Interactive Web Apps" },
  { name: "Next.js", category: "frontend", icon: "Layers", description: "Full-stack React framework with SSR, Edge functions, and optimization.", popularFor: "High-Performance Platforms" },
  { name: "TypeScript", category: "frontend", icon: "FileCode", description: "Strongly typed JavaScript ensuring zero runtime class errors.", popularFor: "Enterprise Codebases" },
  { name: "Python", category: "ai", icon: "Cpu", description: "The foundation of machine learning, AI pipelines, and data processing.", popularFor: "AI & Data Science" },
  { name: "OpenAI", category: "ai", icon: "Sparkles", description: "GPT-4o, o3-mini, and custom fine-tuned embedding LLM integration.", popularFor: "GenAI & Automation" },
  { name: "Node.js", category: "backend", icon: "Server", description: "High-concurrency event-driven server runtime for microservices.", popularFor: "Scalable Backends" },
  { name: "PostgreSQL", category: "backend", icon: "Database", description: "ACID-compliant relational database with pgvector AI search support.", popularFor: "Reliable Persistence" },
  { name: "Supabase", category: "backend", icon: "Zap", description: "Instant backend infrastructure with real-time subscriptions & Auth.", popularFor: "Rapid Prototyping" },
  { name: "Docker", category: "cloud", icon: "Box", description: "Containerization guaranteeing environment parity across servers.", popularFor: "DevOps & Microservices" },
  { name: "AWS", category: "cloud", icon: "Cloud", description: "Enterprise cloud hosting, Lambda, S3, and ECS orchestration.", popularFor: "Global Infrastructure" },
  { name: "Cloudflare", category: "cloud", icon: "Shield", description: "Edge distribution, DDoS protection, and hyper-fast Workers.", popularFor: "Edge Security & Speed" }
];

export const STATS_DATA: StatItem[] = [
  { 
    value: 52, 
    suffix: "+", 
    label: "Projects Delivered", 
    description: "Successfully delivered web applications, mobile apps, AI solutions, automation systems, and enterprise software across multiple industries." 
  },
  { 
    value: 98, 
    suffix: "%", 
    label: "Client Satisfaction", 
    description: "Building long-term partnerships through quality engineering, transparent communication, and reliable delivery." 
  },
  { 
    value: 4, 
    suffix: "+", 
    label: "Products & Ventures", 
    description: "Building innovative digital products including KaamPe, ThokSale, Bloodesk, and Vivhahika Matrimony." 
  },
  { 
    value: 4, 
    suffix: "+", 
    label: "Years of Experience", 
    description: "Delivering scalable software solutions, AI-powered applications, and digital platforms with modern engineering practices." 
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    quote: "I&O Technologies redesigned our core platform from scratch. Their AI integration cut our processing times from hours to seconds. They operate like an elite Silicon Valley dev team.",
    author: "Vikram Malhotra",
    title: "Chief Technology Officer",
    company: "Vivhahika Media",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "2",
    quote: "The team’s mastery of custom software engineering is remarkable. They built our enterprise dashboard in under 8 weeks with flawless performance and zero downtime during launch.",
    author: "Elena Rostova",
    title: "VP of Engineering",
    company: "FinFlow Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "3",
    quote: "Inovance and Optivance live up to their name. They didn't just deliver code—they optimized our business operations and saved us over $1M in cloud overhead.",
    author: "Marcus Chen",
    title: "Founder & CEO",
    company: "OmniLogistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "4",
    quote: "Working with I&O Technologies was a game changer. Their attention to detail in UI/UX and motion design made our app look like an Apple or Linear product.",
    author: "Sarah Jenkins",
    title: "Head of Digital Product",
    company: "Aura Systems",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const WHY_CHOOSE_US_DATA: ComparisonItem[] = [
  {
    title: "Speed to Market",
    iandoFeature: "Agile 2-week production sprints with automated CI/CD and rapid AI scaffolding.",
    legacyFeature: "6-12 month slow waterfall cycles with bloated overhead.",
    icon: "Zap"
  },
  {
    title: "AI-First Mindset",
    iandoFeature: "Native GenAI, LLM agents, and vector databases integrated at architectural core.",
    legacyFeature: "Superficial AI wrappers added as a expensive afterthought.",
    icon: "Brain"
  },
  {
    title: "Scalable Architecture",
    iandoFeature: "Microservices and serverless infrastructure engineered to handle 10M+ daily events.",
    legacyFeature: "Monolithic legacy codebases that crumble under peak user load.",
    icon: "TrendingUp"
  },
  {
    title: "Enterprise Security",
    iandoFeature: "SOC2 ready, zero-trust encryption, and automated vulnerability scanning.",
    legacyFeature: "Basic firewall setups with delayed security patches.",
    icon: "ShieldCheck"
  },
  {
    title: "Dedicated Engineering",
    iandoFeature: "Direct access to senior solutions architects, principal devs, and UI designers.",
    legacyFeature: "Outsourced junior sub-contractors with frequent turnover.",
    icon: "Users"
  }
];

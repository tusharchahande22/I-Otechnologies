import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Globe2, 
  Mail, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  Scale
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
  onOpenTerms: () => void;
  onOpenEstimator: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  onBackToHome,
  onOpenTerms,
  onOpenEstimator
}) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-we-collect', title: '2. Information We Collect' },
    { id: 'how-we-use-information', title: '3. How We Use Information' },
    { id: 'legal-basis', title: '4. Legal Basis for Processing' },
    { id: 'information-sharing', title: '5. Information Sharing & Non-Sale Pledge' },
    { id: 'third-party-services', title: '6. Third-Party Services' },
    { id: 'data-retention', title: '7. Data Retention & Security' },
    { id: 'user-rights', title: '8. User Rights & Choices' },
    { id: 'children-privacy', title: '9. Children’s Privacy' },
    { id: 'international-transfers', title: '10. International Transfers' },
    { id: 'policy-changes', title: '11. Changes to Policy' },
    { id: 'contact-us', title: '12. Contact Information' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for Active Section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data Schema for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - I&O Technologies",
    "description": "Comprehensive Privacy Policy for I&O Technologies detailing data collection, processing, user rights, and protection practices.",
    "publisher": {
      "@type": "Organization",
      "name": "I&O Technologies",
      "url": "https://iandotechnologies.com",
      "logo": "https://iandotechnologies.com/logo_transparent.png"
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white selection:bg-blue-600 selection:text-white relative">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Fixed Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-cyan-400" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={onBackToHome}
              className="hidden sm:block hover:opacity-90 transition-opacity"
            >
              <Logo variant="horizontal" theme="dark" size="sm" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerms}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 hover:text-white border border-white/10 transition-colors hidden md:inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5 text-blue-400" />
              <span>Terms &amp; Conditions</span>
            </button>

            <button
              onClick={onOpenEstimator}
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-600/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Start Project</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0F172A]/50 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
            At <strong className="text-white">I&amp;O Technologies</strong>, transparency and security are foundational to how we build software and manage client relationships. This policy outlines how we handle, protect, and respect your data.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-gray-500">Effective Date:</span>
              <span className="text-cyan-400 font-bold">July 22, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-gray-500">Entity:</span>
              <span className="text-white font-bold">{COMPANY_INFO.name}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-gray-500">Jurisdiction:</span>
              <span className="text-emerald-400 font-bold">India (IT Act 2000 &amp; DPDP 2023)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body with Sticky Sidebar & Document Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <h3 className="text-xs font-mono font-bold uppercase text-white/50 tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Table of Contents</span>
                </h3>

                <nav className="space-y-1">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-blue-600/20 text-cyan-300 border border-cyan-500/30 font-bold pl-4'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="truncate">{sec.title}</span>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-blue-900/20 border border-blue-500/20 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <Mail className="w-4 h-4" />
                  <span>Privacy Officer</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Have questions about your privacy or data rights?
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="inline-block text-xs font-mono font-bold text-blue-400 hover:text-cyan-300 underline break-all"
                >
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: Comprehensive Document Content */}
          <main className="lg:col-span-8 space-y-16 text-gray-300 text-sm leading-relaxed">

            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>SECTION 01</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">1. Introduction</h2>
              
              <p>
                Welcome to <strong className="text-white">I&amp;O Technologies</strong> ("we," "our," or "us"). We are an AI engineering firm and product venture studio headquartered in Pune, Maharashtra, India. We operate through our primary website at <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{COMPANY_INFO.website}</a> and associated enterprise software portals.
              </p>

              <p>
                This Privacy Policy describes how I&amp;O Technologies collects, uses, stores, discloses, and protects information when you visit our website, submit inquiries, request software estimates, engage our technology development services, or interact with our digital products and ventures.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold font-mono text-cyan-300 uppercase tracking-wider">
                  Scope of Technology Services Covered
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  This policy applies across all software, consulting, and AI solutions provided by I&amp;O Technologies, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-300 font-mono pt-1">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> AI Solutions</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> AI Automation</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Software Dev</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Web Applications</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Mobile Apps</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Enterprise Software</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Cloud Architecture</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> UI/UX Design</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Tech Consulting</span>
                </div>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-we-collect" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>SECTION 02</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">2. Information We Collect</h2>

              <p>
                We collect information directly provided by you, automatically gathered through website interactions, or received in connection with formal software proposals and project scoping.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                    <span>A. Personal Information You Provide Voluntarily</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    When you fill out inquiry forms, request project estimates, subscribe to communications, or initiate commercial contact, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5 pl-2">
                    <li><strong className="text-white">Contact Identity:</strong> Full Name, Business Email Address, Phone Number / WhatsApp Number.</li>
                    <li><strong className="text-white">Company Context:</strong> Organization Name, Industry Vertical, Country / City, Project Budget Range.</li>
                    <li><strong className="text-white">Project Scope Details:</strong> Technical requirements, system architecture notes, target timeline, feature lists, and files uploaded through our Project Estimator tool.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <span>B. Technical &amp; Usage Information Collected Automatically</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    When you access our digital platforms, server logs and client telemetry automatically record:
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5 pl-2">
                    <li><strong className="text-white">Device Diagnostics:</strong> IP Address, browser type and version, operating system, screen resolution.</li>
                    <li><strong className="text-white">Interaction Telemetry:</strong> Pages viewed, referring URLs, click pathways, session duration, and feature interactions.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Eye className="w-4 h-4 text-indigo-400" />
                    <span>C. Cookies &amp; Essential Web Storage</span>
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    We use standard session cookies and localized browser storage to ensure smooth navigation, remember your UI preferences, analyze aggregate traffic trends, and protect our site against spam or automated security threats.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section id="how-we-use-information" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>SECTION 03</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">3. How We Use Information</h2>

              <p>
                Personal information submitted through inquiry forms, project estimators, or direct correspondence is used strictly for legitimate business execution, customer relationship management, and technology service delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300 font-mono uppercase">1. Project Scoping &amp; Quotes</h4>
                  <p className="text-xs text-gray-400">Evaluating technical feasibility, generating custom software proposals, estimating costs, and scheduling discovery calls.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300 font-mono uppercase">2. Client Service Delivery</h4>
                  <p className="text-xs text-gray-400">Executing contracts, establishing client portals, delivering milestone updates, and deploying software systems.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300 font-mono uppercase">3. Business Communications</h4>
                  <p className="text-xs text-gray-400">Responding to inbound support inquiries, technical requests, billing, and transactional notifications.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300 font-mono uppercase">4. Platform Optimization</h4>
                  <p className="text-xs text-gray-400">Monitoring website performance, preventing cyber threats, and refining user experience on our digital platforms.</p>
                </div>
              </div>
            </section>

            {/* 4. Legal Basis */}
            <section id="legal-basis" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>SECTION 04</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">4. Legal Basis for Processing</h2>

              <p>
                Under applicable Indian laws (Information Technology Act 2000, Digital Personal Data Protection Act 2023) and global data protection standards (GDPR), we process your personal data based on:
              </p>

              <ul className="list-disc list-inside space-y-2 text-xs text-gray-300 pl-2">
                <li><strong className="text-white">Consent:</strong> When you voluntarily submit a project inquiry, request a proposal, or contact us.</li>
                <li><strong className="text-white">Contractual Necessity:</strong> To take pre-contractual steps or perform obligations under a Master Services Agreement (MSA) or Statement of Work (SOW).</li>
                <li><strong className="text-white">Legitimate Interests:</strong> To secure our digital infrastructure, protect intellectual property, and improve enterprise service quality.</li>
                <li><strong className="text-white">Legal Obligations:</strong> Compliance with tax, regulatory, accounting, or judicial requirements in India.</li>
              </ul>
            </section>

            {/* 5. Information Sharing & Non-Sale Pledge */}
            <section id="information-sharing" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>SECTION 05</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">5. Information Sharing &amp; Non-Sale Pledge</h2>

              {/* Highlight Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-blue-950/30 to-emerald-950/40 border border-emerald-500/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">OUR ABSOLUTE NON-SALE GUARANTEE</h4>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    I&amp;O Technologies <strong className="text-white underline">NEVER sells, rents, monetizes, or trades</strong> your personal or enterprise data to third-party data brokers, advertisers, or marketing agencies under any circumstances.
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-400">
                We share data only under strict confidentiality and solely with trusted subprocessors required for core operations:
              </p>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white">Vetted Infrastructure Providers:</strong> Secure cloud providers (e.g., Google Cloud Platform, AWS, Vercel) that host our server endpoints under encrypted enterprise agreements.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white">Legal &amp; Regulatory Authorities:</strong> When strictly mandated by statutory laws, court summons, or regulatory authorities governing operations in India.
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Third-Party Services */}
            <section id="third-party-services" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Globe2 className="w-4 h-4" />
                <span>SECTION 06</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">6. Third-Party Services &amp; Integration APIs</h2>

              <p>
                In delivering custom software and AI platforms, we utilize industry-standard cloud APIs and tools (e.g., Google AI Gemini SDKs, Google Maps Platform, GitHub, Stripe). When using our website or applications integrated with these services, interactions are governed by their respective privacy policies. We encourage users to review those third-party policies independently.
              </p>
            </section>

            {/* 7. Data Retention & Security */}
            <section id="data-retention" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>SECTION 07</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">7. Data Retention &amp; Security Measures</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    <span>Data Retention Lifecycle</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Inquiry information is retained for the duration required to evaluate, scope, and fulfill project requests or maintain client relationships. Inactive prospect records are archived or securely purged after 24 months, unless longer retention is legally required for accounting or tax purposes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Enterprise Security Architecture</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We employ HTTPS/TLS 1.3 encryption for data in transit, AES-256 encryption at rest, role-based access control (RBAC), multi-factor authentication for technical personnel, and regular vulnerability audits to ensure strict data protection.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. User Rights */}
            <section id="user-rights" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>SECTION 08</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">8. User Rights &amp; Choices</h2>

              <p>Depending on your location, you hold specific statutory rights regarding your personal data:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <strong className="text-white block mb-1">Right to Access &amp; Portability:</strong>
                  <span className="text-gray-400">Request a copy of personal information we maintain about you.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <strong className="text-white block mb-1">Right to Correction:</strong>
                  <span className="text-gray-400">Request correction of inaccurate or incomplete personal records.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <strong className="text-white block mb-1">Right to Erasure ("Right to be Forgotten"):</strong>
                  <span className="text-gray-400">Request deletion of personal data when no longer required for legitimate business.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <strong className="text-white block mb-1">Withdrawal of Consent:</strong>
                  <span className="text-gray-400">Withdraw consent for marketing communications at any time.</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 pt-2">
                To exercise any of these rights, email our compliance desk at <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-cyan-400 font-mono hover:underline">{COMPANY_INFO.contactEmail}</a>. We respond to verified requests within 30 days.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section id="children-privacy" className="scroll-mt-32 space-y-3 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>SECTION 09</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">9. Children’s Privacy</h2>
              <p>
                Our services and website are tailored strictly for enterprise organizations, business professionals, and adults aged 18 and older. We do not knowingly collect personal information from children under 18. If you believe a minor has submitted personal information to us, please contact us immediately for prompt removal.
              </p>
            </section>

            {/* 10. International Transfers */}
            <section id="international-transfers" className="scroll-mt-32 space-y-3 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Globe2 className="w-4 h-4" />
                <span>SECTION 10</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">10. International Data Transfers</h2>
              <p>
                I&amp;O Technologies operates globally from Pune, India. Information collected may be transferred to or processed on cloud infrastructure located outside your home country. By engaging with our website or services, you acknowledge that international transfers occur under standard contractual security clauses ensuring equivalent data protection.
              </p>
            </section>

            {/* 11. Changes to Policy */}
            <section id="policy-changes" className="scroll-mt-32 space-y-3 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>SECTION 11</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">11. Changes to this Privacy Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy periodically to reflect technological advancements, operational changes, or legal updates. Any revisions will be published on this page with an updated "Effective Date." We encourage periodic review of this policy.
              </p>
            </section>

            {/* 12. Contact Information */}
            <section id="contact-us" className="scroll-mt-32 space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>SECTION 12</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">12. Contact Information</h2>

              <p>
                For questions, concerns, or formal data requests regarding this Privacy Policy, please contact our privacy compliance desk:
              </p>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg">
                    I&amp;O
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{COMPANY_INFO.name}</h3>
                    <p className="text-xs font-mono text-cyan-400">{COMPANY_INFO.tagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="space-y-1">
                    <span className="text-gray-500 font-mono block uppercase">Email Contact:</span>
                    <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-white font-mono font-semibold hover:text-cyan-300">
                      {COMPANY_INFO.contactEmail}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-500 font-mono block uppercase">Official Website:</span>
                    <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="text-white font-mono font-semibold hover:text-cyan-300">
                      {COMPANY_INFO.website}
                    </a>
                  </div>

                  <div className="sm:col-span-2 space-y-1 pt-2 border-t border-white/10">
                    <span className="text-gray-500 font-mono block uppercase">Physical Headquarters Address:</span>
                    <address className="not-italic text-gray-300 leading-relaxed font-mono">
                      {COMPANY_INFO.address}
                    </address>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </section>

      {/* Footer Nav Links */}
      <footer className="border-t border-white/10 bg-[#07090E] py-12 px-4 sm:px-8 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo variant="horizontal" theme="dark" size="sm" />
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">© 2026 {COMPANY_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={onOpenTerms} className="hover:text-white transition-colors cursor-pointer">
              Terms &amp; Conditions
            </button>
            <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-white transition-colors">
              Contact Privacy Desk
            </a>
            <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-gray-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

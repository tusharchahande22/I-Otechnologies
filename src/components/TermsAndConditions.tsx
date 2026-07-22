import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Scale, 
  ArrowLeft, 
  FileCheck, 
  Code, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  CreditCard, 
  Clock, 
  Layers, 
  ShieldAlert, 
  Globe2, 
  Mail, 
  ChevronRight, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
  onOpenPrivacy: () => void;
  onOpenEstimator: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  onBackToHome,
  onOpenPrivacy,
  onOpenEstimator
}) => {
  const [activeSection, setActiveSection] = useState('acceptance-of-terms');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'acceptance-of-terms', title: '1. Acceptance of Terms' },
    { id: 'website-usage', title: '2. Website Usage' },
    { id: 'services-offered', title: '3. Services Offered' },
    { id: 'project-engagement', title: '4. Project Engagement Process' },
    { id: 'quotations-proposals', title: '5. Quotations & Proposals' },
    { id: 'intellectual-property', title: '6. Intellectual Property & Ownership' },
    { id: 'confidentiality', title: '7. Confidentiality & NDA' },
    { id: 'client-responsibilities', title: '8. Client Responsibilities' },
    { id: 'payment-terms', title: '9. Payment Terms' },
    { id: 'project-delays', title: '10. Project Delays & Timelines' },
    { id: 'third-party-software', title: '11. Third-Party Software & APIs' },
    { id: 'open-source', title: '12. Open Source Components' },
    { id: 'limitation-liability', title: '13. Limitation of Liability' },
    { id: 'disclaimers', title: '14. Disclaimer of Warranties' },
    { id: 'external-links', title: '15. External Links' },
    { id: 'privacy-policy-link', title: '16. Privacy Integration' },
    { id: 'termination', title: '17. Termination' },
    { id: 'governing-law', title: '18. Governing Law (Pune, MH)' },
    { id: 'changes-to-terms', title: '19. Changes to Terms' },
    { id: 'contact-info', title: '20. Contact Information' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions - I&O Technologies",
    "description": "Commercial Terms and Conditions governing software development, AI engineering, and technology services by I&O Technologies.",
    "publisher": {
      "@type": "Organization",
      "name": "I&O Technologies",
      "url": "https://iandotechnologies.com"
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white selection:bg-blue-600 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left z-50"
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
              onClick={onOpenPrivacy}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 hover:text-white border border-white/10 transition-colors hidden md:inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Privacy Policy</span>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span>TERMS OF SERVICE</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
            These Terms &amp; Conditions govern your access to the website, digital portals, and commercial software development services operated by <strong className="text-white">I&amp;O Technologies</strong>.
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
              <span className="text-indigo-400 font-bold">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: Sticky TOC */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <h3 className="text-xs font-mono font-bold uppercase text-white/50 tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Sections Directory</span>
                </h3>

                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 font-bold pl-4'
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

              {/* Legal Notice Box */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>Legal Desk</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Questions regarding contracts, IP, or enterprise agreements?
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="inline-block text-cyan-400 font-mono font-bold hover:underline break-all"
                >
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: Clauses */}
          <main className="lg:col-span-8 space-y-16 text-gray-300 text-sm leading-relaxed">

            {/* 1. Acceptance of Terms */}
            <section id="acceptance-of-terms" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>CLAUSE 01</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">1. Acceptance of Terms</h2>
              
              <p>
                By accessing <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{COMPANY_INFO.website}</a>, engaging with our Project Estimator, submitting project briefs, or executing a Statement of Work (SOW) with <strong className="text-white">I&amp;O Technologies</strong>, you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions.
              </p>

              <p className="text-xs text-gray-400">
                If you are agreeing to these Terms on behalf of a company or entity, you represent and warrant that you have full legal authority to bind that organization to these provisions.
              </p>
            </section>

            {/* 2. Website Usage */}
            <section id="website-usage" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Globe2 className="w-4 h-4" />
                <span>CLAUSE 02</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">2. Website Usage &amp; Permitted Conduct</h2>
              <p>
                You agree to use our website and interactive tools strictly for lawful business purposes. You are expressly prohibited from:
              </p>

              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pl-2">
                <li>Attempting to reverse-engineer, decompile, or extract source code from our digital tools.</li>
                <li>Transmitting malicious code, web scrapers, or automated bots to overload our infrastructure.</li>
                <li>Misrepresenting your identity or organization when requesting project estimates or proposals.</li>
              </ul>
            </section>

            {/* 3. Services Offered */}
            <section id="services-offered" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>CLAUSE 03</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">3. Services Offered</h2>

              <p>
                I&amp;O Technologies provides enterprise technology engineering, proprietary product venture development, and digital transformation consulting. Our core practice capabilities include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-gray-300">
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> AI Solutions</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> AI Automation</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Custom Software</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Web Platforms</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Mobile Apps</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Enterprise SaaS</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Cloud Architecture</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> UI/UX Engineering</span>
                <span className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Tech Consulting</span>
              </div>
            </section>

            {/* 4. Project Engagement Process */}
            <section id="project-engagement" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>CLAUSE 04</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">4. Project Engagement Process</h2>

              {/* Critical Callout Box */}
              <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-4 text-xs">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-amber-300 uppercase tracking-wider font-mono">NON-BINDING INQUIRY NOTICE</h4>
                  <p className="text-amber-100/90 leading-relaxed">
                    Submitting an inquiry, project estimate request, or contact form on this website <strong className="text-white underline">does NOT create a binding contractual relationship</strong> or commit I&amp;O Technologies to deliver software.
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-400">
                Formal project engagements commence <strong className="text-white">only after</strong> the execution of the following mandatory steps:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-xs text-gray-300 pl-2 font-mono">
                <li>Mutual review and finalization of a written Statement of Work (SOW) or Master Services Agreement (MSA).</li>
                <li>Formal written approval and digital execution by authorized signatories from both parties.</li>
                <li>Receipt and realization of the applicable advance deposit payment in accordance with agreed milestone terms.</li>
              </ol>
            </section>

            {/* 5. Quotations & Proposals */}
            <section id="quotations-proposals" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <CreditCard className="w-4 h-4" />
                <span>CLAUSE 05</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">5. Quotations and Proposals</h2>
              <p>
                Estimates generated through our website or preliminary proposal documents are valid for 30 calendar days from issuance unless explicitly stated otherwise. Final pricing, timeline commitments, and technical specifications are governed exclusively by the executed SOW.
              </p>
            </section>

            {/* 6. Intellectual Property & Ownership */}
            <section id="intellectual-property" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Code className="w-4 h-4" />
                <span>CLAUSE 06</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">6. Intellectual Property &amp; Ownership Rights</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Client IP Transfer Terms</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Upon <strong className="text-white">100% full payment realization</strong> for all invoiced milestones under a Statement of Work, I&amp;O Technologies transfers custom client-specific application code, designs, and business logic created explicitly for the client under that SOW.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <span>Background Technology &amp; Frameworks</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    I&amp;O Technologies <strong className="text-white underline">retains exclusive, unencumbered ownership</strong> of all pre-existing IP, internal frameworks, reusable UI components, background libraries, proprietary AI orchestration tools, and development methodologies. Clients receive a perpetual, non-exclusive license to run these embedded frameworks as part of their deployed deliverable.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Confidentiality & NDA */}
            <section id="confidentiality" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>CLAUSE 07</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">7. Confidentiality &amp; Non-Disclosure</h2>
              <p>
                Both parties agree to protect proprietary technical, commercial, and financial information disclosed during discussions or project execution. Confidential information will not be disclosed to third parties without prior written consent, except as required by law.
              </p>
            </section>

            {/* 8. Client Responsibilities */}
            <section id="client-responsibilities" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>CLAUSE 08</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">8. Client Responsibilities</h2>
              <p>
                Timely project completion requires active client cooperation. Clients agree to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pl-2">
                <li>Provide accurate project requirements, brand assets, and technical credentials promptly.</li>
                <li>Designate a primary decision-maker for feedback, milestone approvals, and UAT testing.</li>
                <li>Review and provide written feedback on milestone deliverables within 5 business days.</li>
              </ul>
            </section>

            {/* 9. Payment Terms */}
            <section id="payment-terms" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <CreditCard className="w-4 h-4" />
                <span>CLAUSE 09</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">9. Payment Terms &amp; Billing</h2>
              <p>
                Invoices are issued based on agreed project milestones or time-and-materials schedules. Standard payment terms are net 7 days from invoice date. Invoices not paid within 15 days may incur late interest at 1.5% per month or result in temporary suspension of development work until account reconciliation.
              </p>
            </section>

            {/* 10. Project Delays */}
            <section id="project-delays" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>CLAUSE 10</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">10. Project Delays &amp; Timelines</h2>
              <p>
                Timeline estimates are established in good faith based on agreed scope. Delays caused by client feedback lag, scope creep, or third-party credential dependencies will extend target completion dates accordingly without penalty to I&amp;O Technologies.
              </p>
            </section>

            {/* 11. Third-Party Software */}
            <section id="third-party-software" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Globe2 className="w-4 h-4" />
                <span>CLAUSE 11</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">11. Third-Party Software &amp; API Services</h2>
              <p>
                Applications may incorporate third-party cloud APIs, AI models, payment gateways, or hosting infrastructure (e.g., Google Cloud, AWS, OpenAI, Stripe). Third-party subscription costs, API usage quotas, or service interruptions are the client's responsibility and governed by respective vendor agreements.
              </p>
            </section>

            {/* 12. Open Source */}
            <section id="open-source" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Code className="w-4 h-4" />
                <span>CLAUSE 12</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">12. Open Source Components</h2>
              <p>
                We leverage permissible open-source frameworks (e.g., React, TypeScript, Node.js, Tailwind CSS) under MIT or Apache licenses to accelerate development. Clients agree to comply with underlying open-source license terms.
              </p>
            </section>

            {/* 13. Limitation of Liability */}
            <section id="limitation-liability" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>CLAUSE 13</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">13. Limitation of Liability</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                To the maximum extent permitted under applicable law, I&amp;O Technologies shall not be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits, data loss, or business interruption. Total cumulative liability under any SOW shall not exceed the actual fees paid by the client to I&amp;O Technologies under that specific SOW in the preceding 6 months.
              </p>
            </section>

            {/* 14. Disclaimers */}
            <section id="disclaimers" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>CLAUSE 14</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">14. Disclaimer of Warranties</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Except as explicitly guaranteed in a written Statement of Work, our website, digital tools, and code are provided "as is" and "as available" without warranties of any kind, express or implied.
              </p>
            </section>

            {/* 15. External Links */}
            <section id="external-links" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <ExternalLink className="w-4 h-4" />
                <span>CLAUSE 15</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">15. External Links</h2>
              <p>
                Our website or product portfolio may contain links to external sites (such as venture products like Vivhahika Matrimony or client references). We assume no responsibility for content, security, or practices on external sites.
              </p>
            </section>

            {/* 16. Privacy Integration */}
            <section id="privacy-policy-link" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>CLAUSE 16</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">16. Privacy Integration</h2>
              <p>
                Your submission of personal information is governed by our Privacy Policy. By agreeing to these Terms, you also acknowledge the data practices described in our{' '}
                <button onClick={onOpenPrivacy} className="text-cyan-400 underline font-bold hover:text-cyan-300 cursor-pointer">
                  Privacy Policy
                </button>.
              </p>
            </section>

            {/* 17. Termination */}
            <section id="termination" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>CLAUSE 17</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">17. Termination</h2>
              <p>
                Either party may terminate an active SOW for material breach upon 14 days written notice if the breach remains uncured. Upon termination, the client shall pay for all work completed and expenses incurred up to the effective termination date.
              </p>
            </section>

            {/* 18. Governing Law */}
            <section id="governing-law" className="scroll-mt-32 space-y-6 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>CLAUSE 18</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">18. Governing Law &amp; Jurisdiction</h2>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white font-mono text-cyan-300 uppercase">
                  Jurisdiction: Pune, Maharashtra, India
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  These Terms &amp; Conditions and any commercial agreements between the client and I&amp;O Technologies shall be governed by, construed, and enforced in accordance with the <strong className="text-white">laws of India</strong>. Courts located in <strong className="text-white">Pune, Maharashtra, India</strong> shall have exclusive jurisdiction over any legal disputes arising out of or in connection with our services.
                </p>
              </div>
            </section>

            {/* 19. Changes to Terms */}
            <section id="changes-to-terms" className="scroll-mt-32 space-y-4 pb-10 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>CLAUSE 19</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">19. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms &amp; Conditions at any time. Revised terms will be posted on this page with an updated effective date. Continued website usage signifies acceptance of modified terms.
              </p>
            </section>

            {/* 20. Contact Information */}
            <section id="contact-info" className="scroll-mt-32 space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>CLAUSE 20</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">20. Contact Information</h2>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-bold text-lg">
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
                    <span className="text-gray-500 font-mono block uppercase">Headquarters Address:</span>
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
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-white transition-colors">
              Contact Legal Desk
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

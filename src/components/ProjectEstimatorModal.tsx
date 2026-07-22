import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Loader2, 
  Cpu, 
  Clock, 
  DollarSign, 
  Layers, 
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScopeBlueprint } from '../types';
import { validateInquiryFields, submitProjectInquiry, InquiryValidationErrors } from '../utils/inquiry';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceTitle?: string;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceTitle
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [projectType, setProjectType] = useState(initialServiceTitle || 'AI Solution');
  const [budget, setBudget] = useState('₹50,000 – ₹2,00,000');
  const [timeline, setTimeline] = useState('1–2 Months');
  const [goals, setGoals] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  // AI Scope & Submission states
  const [generatingAi, setGeneratingAi] = useState(false);
  const [blueprint, setBlueprint] = useState<ScopeBlueprint | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<InquiryValidationErrors>({});
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'AI Solution',
    'AI Automation',
    'Custom Software',
    'Web Application',
    'Mobile Application',
    'Enterprise Software',
    'SaaS Product',
    'Digital Marketplace',
    'UI/UX Design',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 – ₹2,00,000',
    '₹2,00,000 – ₹5,00,000',
    '₹5,00,000+'
  ];

  const timelineRanges = [
    'Urgent (Within 2 Weeks)',
    '1–2 Months',
    '3–6 Months',
    'Flexible Timeline'
  ];

  const handleGenerateAiBlueprint = async () => {
    setGeneratingAi(true);
    try {
      const response = await fetch('/api/ai-scope', {
        method: 'POST',
        headers: { 'Content-[#111111]': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType,
          features: [goals || 'AI Agent Automation, Scalable API, Analytics'],
          timeline,
          budget,
          goals
        })
      });

      if (!response.ok) throw new Error('API failed');
      const data = await response.json();
      setBlueprint(data);
    } catch (err) {
      console.error(err);
      // Fallback
      setBlueprint({
        summary: `Tailored ${projectType} solution engineered for maximum speed, security, and market impact.`,
        techStack: ['React 19', 'TypeScript', 'Node.js', 'Python AI', 'PostgreSQL', 'Docker', 'Cloudflare'],
        architecture: 'Microservices with event-driven LLM pipelines and zero-trust authentication.',
        estimatedPhases: [
          { phase: 'Discovery & Blueprinting', duration: '1 Week' },
          { phase: 'Core MVP Engineering', duration: '3-4 Weeks' },
          { phase: 'QA & Enterprise Deployment', duration: '1 Week' }
        ],
        aiRecommendations: [
          'Deploy fine-tuned agent routing to minimize execution latency',
          'Implement vector embedding search for instant semantic queries',
          'Set up automated CI/CD load testing and performance monitoring'
        ]
      });
    } finally {
      setGeneratingAi(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate fields on client side
    const errors = validateInquiryFields(
      { fullName: name, email, phone, description: goals || 'Project inquiry' },
      { requireDescription: false }
    );

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});

    setIsSubmitting(true);

    try {
      const result = await submitProjectInquiry({
        fullName: name,
        companyName: company,
        email,
        phone,
        projectType,
        budget,
        timeline,
        goals,
        blueprint: blueprint ? blueprint : null,
        source: 'estimator_modal'
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      if (result.inquiryId) {
        setInquiryId(result.inquiryId);
      }
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Submission failed. Please try again.');
    }
  };

  const copyBlueprint = () => {
    if (!blueprint) return;
    const text = `I&O Technologies - Project Blueprint\nProject Type: ${projectType}\nSummary: ${blueprint.summary}\nTech Stack: ${blueprint.techStack.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl my-8 p-6 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT INQUIRY & AI SCOPER</span>
          </div>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111]">
            Start Your Project.
          </h3>
          <p className="text-sm text-[#6B7280] mt-1">
            Configure your technical scope or let our AI generate an architectural blueprint.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-display font-bold text-3xl text-[#111111]">
              Inquiry Received!
            </h4>
            <p className="text-base text-[#6B7280] max-w-md mx-auto">
              Thank you, <strong className="text-[#111111]">{name}</strong>. A Principal Solutions Architect from I&O Technologies will review your scope and contact you at <strong className="text-[#111111]">{email}</strong> within 4 hours.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider block">
                  Step 1: What are you looking to build?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`p-4 rounded-2xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                        projectType === type
                          ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                          : 'bg-black/[0.02] border-black/[0.05] text-[#111111] hover:bg-black/[0.04]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Budget & Timeline */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider block mb-3">
                    Estimated Project Budget
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`p-3.5 rounded-xl text-xs font-mono font-semibold border cursor-pointer transition-all ${
                          budget === b
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                            : 'bg-black/[0.02] border-black/[0.05] text-[#111111] hover:bg-black/[0.04]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider block mb-3">
                    Expected Project Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {timelineRanges.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-3.5 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                          timeline === t
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                            : 'bg-black/[0.02] border-black/[0.05] text-[#111111] hover:bg-black/[0.04]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Goals & AI Blueprint Generator */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider block mb-2">
                    Step 3: Core Requirements & Business Goals
                  </label>
                  <textarea
                    rows={3}
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Describe your vision, target users, desired key features, or operational pain points..."
                    className="w-full p-4 rounded-2xl bg-black/[0.02] border border-black/10 text-xs text-[#111111] focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* Instant AI Blueprint Trigger */}
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span>Instant AI Solution Architect</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleGenerateAiBlueprint}
                      disabled={generatingAi}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {generatingAi ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Analyzing Architecture...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Generate AI Blueprint</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Render Blueprint if generated */}
                  {blueprint && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-white border border-blue-200 space-y-3 text-xs"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-mono font-bold text-blue-600">Generated Architecture Blueprint</span>
                        <button
                          type="button"
                          onClick={copyBlueprint}
                          className="flex items-center gap-1 text-[11px] text-[#6B7280] hover:text-[#111111]"
                        >
                          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <p className="text-[#111111] font-medium leading-relaxed">
                        {blueprint.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {blueprint.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-[10px] font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 flex items-start gap-2.5 text-xs">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-bold block text-red-800">Submission Notice</span>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider block">
                  Final Step: Where should we send your proposal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#6B7280] block mb-1">Your Full Name *</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (validationErrors.fullName) {
                          setValidationErrors({ ...validationErrors, fullName: undefined });
                        }
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full p-3.5 rounded-xl bg-black/[0.02] border ${
                        validationErrors.fullName ? 'border-red-500' : 'border-black/10'
                      } text-xs font-semibold focus:outline-none focus:border-blue-600`}
                    />
                    {validationErrors.fullName && (
                      <p className="mt-1 text-[11px] text-red-500 font-medium">{validationErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#6B7280] block mb-1">Work Email *</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (validationErrors.email) {
                          setValidationErrors({ ...validationErrors, email: undefined });
                        }
                      }}
                      placeholder="alex@company.com"
                      className={`w-full p-3.5 rounded-xl bg-black/[0.02] border ${
                        validationErrors.email ? 'border-red-500' : 'border-black/10'
                      } text-xs font-semibold focus:outline-none focus:border-blue-600`}
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-[11px] text-red-500 font-medium">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#6B7280] block mb-1">Phone Number *</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (validationErrors.phone) {
                          setValidationErrors({ ...validationErrors, phone: undefined });
                        }
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full p-3.5 rounded-xl bg-black/[0.02] border ${
                        validationErrors.phone ? 'border-red-500' : 'border-black/10'
                      } text-xs font-semibold focus:outline-none focus:border-blue-600`}
                    />
                    {validationErrors.phone && (
                      <p className="mt-1 text-[11px] text-red-500 font-medium">{validationErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#6B7280] block mb-1">Company / Organization</span>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. AcroTech Systems"
                      className="w-full p-3.5 rounded-xl bg-black/[0.02] border border-black/10 text-xs font-semibold focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Form Step Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as any)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#6B7280] hover:bg-black/5 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : <div />}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep((step + 1) as any)}
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-blue-400" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

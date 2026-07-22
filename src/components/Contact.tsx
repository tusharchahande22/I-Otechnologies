import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Clock, 
  Linkedin, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Check,
  AlertCircle,
  XCircle,
  RefreshCw,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { validateInquiryFields, submitProjectInquiry, InquiryValidationErrors } from '../utils/inquiry';

interface ContactProps {
  onOpenEstimator: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenEstimator }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'AI Solutions',
    budget: '₹2,00,000 – ₹5,00,000',
    description: ''
  });

  const [validationErrors, setValidationErrors] = useState<InquiryValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side Validation
    const errors = validateInquiryFields(formData, { requireDescription: true });
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});

    setIsSubmitting(true);

    try {
      const result = await submitProjectInquiry({
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        description: formData.description,
        source: 'contact_form'
      });

      setIsSubmitting(false);
      setSubmitted(true);
      if (result.inquiryId) {
        setInquiryId(result.inquiryId);
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  const serviceOptions = [
    'AI Solutions',
    'AI Automation',
    'Custom Software Development',
    'Mobile App Development',
    'Web Application Development',
    'Enterprise Software',
    'Cloud & DevOps',
    'UI/UX Design',
    'Digital Product Consultation',
    'Other'
  ];

  const budgetOptions = [
    'Under ₹50K',
    '₹50K – ₹2L',
    '₹2L – ₹5L',
    '₹5L – ₹10L',
    '₹10L+'
  ];

  const highlightsBadges = [
    'AI Engineering',
    'Custom Software',
    'Enterprise Solutions',
    'Digital Products',
    'Cloud Infrastructure',
    'Business Automation'
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] overflow-hidden"
    >
      {/* Floating Ambient Gradient Blobs & Soft Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase">
            CONNECT & COLLABORATE
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#111111]"
          >
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
              Extraordinary.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-base sm:text-xl text-[#6B7280] font-normal leading-relaxed max-w-3xl"
          >
            Whether you're launching a startup, building an AI-powered platform, automating business processes, or creating the next big digital product, we'd love to hear about your vision. We're always open to discussing innovative ideas, strategic partnerships, and ambitious projects.
          </motion.p>
        </div>

        {/* Top Info Grid: Address, Email, Phone, Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#111111]/50 uppercase tracking-wider mb-1">
                Business Email
              </h3>
              <a
                href={`mailto:${COMPANY_INFO.contactEmail}`}
                className="text-sm font-semibold text-[#111111] hover:text-blue-600 transition-colors break-all block mb-2"
              >
                {COMPANY_INFO.contactEmail}
              </a>
            </div>
            <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B7280]">Response: &lt; 4 Hours</span>
              <button
                type="button"
                onClick={() => handleCopy(COMPANY_INFO.contactEmail, 'email')}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                {copiedField === 'email' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#111111]/50 uppercase tracking-wider mb-1">
                Phone
              </h3>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-[#111111] hover:text-blue-600 transition-colors block mb-2"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B7280]">WhatsApp Available</span>
              <button
                type="button"
                onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                {copiedField === 'phone' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </motion.div>

          {/* Office Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#111111]/50 uppercase tracking-wider mb-1">
                Office Address
              </h3>
              <p className="text-xs font-medium text-[#111111] leading-relaxed mb-2">
                {COMPANY_INFO.address}
              </p>
            </div>
            <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B7280]">Pune, MH – India</span>
              <span className="text-emerald-600 font-semibold">Verified HQ</span>
            </div>
          </motion.div>

          {/* Business Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#111111]/10 text-[#111111] flex items-center justify-center mb-4 group-hover:bg-[#111111] group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#111111]/50 uppercase tracking-wider mb-2">
                Business Hours
              </h3>
              <ul className="text-xs text-[#111111] space-y-1 font-medium">
                <li className="flex justify-between">
                  <span className="text-gray-500">Mon – Fri:</span>
                  <span className="font-semibold">{COMPANY_INFO.hours.monFri}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Sat:</span>
                  <span className="font-semibold">{COMPANY_INFO.hours.sat}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Sun:</span>
                  <span className="text-red-500 font-semibold">{COMPANY_INFO.hours.sun}</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B7280]">Timezone: IST (UTC+5:30)</span>
            </div>
          </motion.div>
        </div>

        {/* Social Channels Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="p-6 rounded-3xl glass-card border border-black/[0.08] mb-16 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#111111]">
                Direct Social & Communication Channels
              </h4>
              <p className="text-xs text-[#6B7280]">
                Connect with our founders and engineering team across platforms.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-600/20 group/soc"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={COMPANY_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/10 hover:bg-emerald-600 text-emerald-600 hover:text-white text-xs font-semibold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 group/soc"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={COMPANY_INFO.socials.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/5 hover:bg-[#111111] text-[#111111] hover:text-white text-xs font-semibold transition-all duration-300 group/soc"
            >
              <Globe className="w-4 h-4" />
              <span>Website</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Main Interactive Form & Side Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
          {/* Form Container (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-card border border-black/[0.08] shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#111111]">
                  Tell Us About Your Project
                </h3>
                <p className="text-xs font-mono text-[#6B7280]">
                  Fill in your details below to request a proposal or consultation.
                </p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 my-8"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#111111]">
                  Inquiry Received Successfully!
                </h4>
                {inquiryId && (
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 font-mono text-xs font-bold">
                    Reference ID: {inquiryId}
                  </div>
                )}
                <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                  We've received your project details. Our engineering leadership will review your inquiry and get back to you within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryId(null);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      service: 'AI Solutions',
                      budget: '₹2,00,000 – ₹5,00,000',
                      description: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Banner */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-700 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1 text-xs">
                      <p className="font-bold text-red-800 mb-0.5">Submission Notice</p>
                      <p className="leading-relaxed">{errorMessage}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setErrorMessage(null)}
                      className="p-1 hover:bg-red-500/10 rounded-full text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                      Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (validationErrors.fullName) {
                          setValidationErrors({ ...validationErrors, fullName: undefined });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border ${
                        validationErrors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-black/10 focus:border-blue-600 focus:ring-blue-600/20'
                      } focus:ring-2 text-sm text-[#111111] outline-none transition-all`}
                    />
                    {validationErrors.fullName && (
                      <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm text-[#111111] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                      Business Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (validationErrors.email) {
                          setValidationErrors({ ...validationErrors, email: undefined });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border ${
                        validationErrors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-black/10 focus:border-blue-600 focus:ring-blue-600/20'
                      } focus:ring-2 text-sm text-[#111111] outline-none transition-all`}
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (validationErrors.phone) {
                          setValidationErrors({ ...validationErrors, phone: undefined });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border ${
                        validationErrors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-black/10 focus:border-blue-600 focus:ring-blue-600/20'
                      } focus:ring-2 text-sm text-[#111111] outline-none transition-all`}
                    />
                    {validationErrors.phone && (
                      <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm text-[#111111] outline-none transition-all appearance-none cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm text-[#111111] outline-none transition-all appearance-none cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-wider mb-2">
                    Project Description <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals, key features, timelines, and technical requirements..."
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (validationErrors.description) {
                        setValidationErrors({ ...validationErrors, description: undefined });
                      }
                    }}
                    className={`w-full px-4 py-3 rounded-2xl bg-white border ${
                      validationErrors.description ? 'border-red-500 focus:ring-red-500/20' : 'border-black/10 focus:border-blue-600 focus:ring-blue-600/20'
                    } focus:ring-2 text-sm text-[#111111] outline-none transition-all resize-none`}
                  />
                  {validationErrors.description && (
                    <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-2xl bg-[#111111] hover:bg-blue-600 text-white text-sm font-bold transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 cursor-pointer group/sub"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span>Start Your Project</span>
                      <ArrowRight className="w-4 h-4 group-hover/sub:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side Info Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[520px]"
          >
            {/* Soft Ambient Light inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-blue-300 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>EXCELLENCE IN ENGINEERING</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
                Let's Build the Future Together.
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-normal mb-8">
                Every successful digital product begins with a conversation. Whether you're validating a startup idea, modernizing an existing business, or building an AI-powered platform, our team is ready to help transform your vision into reality.
              </p>

              <h4 className="text-xs font-mono font-bold uppercase text-white/50 tracking-wider mb-4">
                Core Engineering Capabilities
              </h4>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {highlightsBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-white/90 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                NDA Protected
              </span>
              <span>100% IP Ownership</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-blue-600 text-white shadow-2xl overflow-hidden text-center flex flex-col items-center justify-center"
        >
          {/* Decorative Background Patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />

          <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-200 mb-2">
            HAVE AN IDEA?
          </p>

          <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-8">
            Let's turn it into reality.
          </h3>

          <button
            onClick={onOpenEstimator}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#111111] hover:bg-[#111111] hover:text-white text-sm font-bold transition-all duration-300 shadow-2xl cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-blue-600 group-hover:text-blue-400 transition-colors" />
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

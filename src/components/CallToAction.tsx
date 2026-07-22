import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CallToActionProps {
  onOpenEstimator: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenEstimator }) => {
  return (
    <section id="contact" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-black/10 text-xs font-mono font-bold text-blue-600 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR NEXT DIGITAL INITIATIVE</span>
          </div>

          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#111111] tracking-tight leading-[0.92]">
            Let’s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900">
              Something Incredible
            </span><span className="text-blue-600">.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-[#6B7280] font-normal max-w-2xl mx-auto leading-relaxed">
            Partner with I&O Technologies to transform your ambitious idea into an enterprise-grade AI software solution.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={onOpenEstimator}
              id="cta-main-btn"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#111111] text-white text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-2xl shadow-blue-500/20 interactive-cursor cursor-pointer"
            >
              <Sparkles className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
              <span>Start Your Project</span>
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full glass-card border border-black/10 text-[#111111] text-base font-semibold hover:bg-black/5 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span>{COMPANY_INFO.contactEmail}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Brain, TrendingUp, ShieldCheck, Users, Check, X } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/companyData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Zap,
  Brain,
  TrendingUp,
  ShieldCheck,
  Users
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold mb-4">
            COMPETITIVE ADVANTAGE
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
            Why Ambitious Brands <br /> Choose I&O Technologies.
          </h2>
          <p className="mt-4 text-[#6B7280] text-base sm:text-lg">
            Compare our AI-first engineering paradigm with traditional legacy software vendors.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Zap;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:p-8 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/30 transition-all duration-300 shadow-sm"
              >
                {/* Feature Title & Icon */}
                <div className="md:col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#111111]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* I&O Technologies Advantage */}
                <div className="md:col-span-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-blue-700">
                      I&O Technologies Standard
                    </div>
                    <p className="text-xs font-medium text-blue-950 mt-1">
                      {item.iandoFeature}
                    </p>
                  </div>
                </div>

                {/* Legacy Agencies */}
                <div className="md:col-span-4 p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] flex items-start gap-3 opacity-70">
                  <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-gray-500">
                      Traditional Software Vendors
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.legacyFeature}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

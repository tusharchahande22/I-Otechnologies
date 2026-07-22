import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  Bot, 
  Code2, 
  Smartphone, 
  CloudCog, 
  Building2, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  X,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  BrainCircuit,
  Bot,
  Code2,
  Smartphone,
  CloudCog,
  Building2,
  Sparkles,
  Zap
};

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase">
                CORE CAPABILITIES & SERVICES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Engineering Excellence <br /> Across the Full Stack.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#6B7280] max-w-md text-base sm:text-lg">
            From autonomous AI agents to mission-critical cloud infrastructure, we build digital products engineered to dominate market segments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedService(service)}
                className="group relative p-7 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-black/[0.04] group-hover:bg-blue-600 group-hover:text-white text-[#111111] flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-[#111111] group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-600/80 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Metric & Link */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-[#111111]">
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {service.metrics}
                  </span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span className="text-[11px] font-sans font-bold">Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl p-8 rounded-3xl bg-white border border-black/10 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  {selectedService.badge}
                </span>
                <span className="text-xs font-mono text-emerald-600 font-semibold">
                  {selectedService.metrics}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl text-[#111111] mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 mb-6">
                {selectedService.subtitle}
              </p>

              <p className="text-sm text-[#6B7280] leading-relaxed mb-8">
                {selectedService.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider mb-4">
                  Key Capability Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] border border-black/[0.04]">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-xs font-semibold text-[#111111]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-black/[0.06]">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#6B7280] hover:bg-black/5 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const service = selectedService;
                    setSelectedService(null);
                    onSelectService(service);
                  }}
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>Build with this Tech</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

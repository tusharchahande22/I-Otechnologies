import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Cpu, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhoWeAre: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const statements = [
    "We don't just build software.",
    "We engineer digital businesses."
  ];

  const pillars = [
    {
      title: "INOVANCE",
      subtitle: "Pioneering AI Innovation",
      description: "Harnessing deep neural networks, generative AI agents, and custom machine learning pipelines to solve non-trivial software engineering challenges.",
      icon: Cpu,
      accent: "from-blue-600 to-indigo-600"
    },
    {
      title: "OPTIVANCE",
      subtitle: "Performance & Scale Optimization",
      description: "Fine-tuning distributed databases, cloud edge networks, and application speed to ensure bulletproof resilience under multi-million user traffic.",
      icon: Zap,
      accent: "from-indigo-600 to-slate-900"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase">
            WHO WE ARE — STORYTELLING
          </span>
        </div>

        {/* Storytelling Statement */}
        <div className="max-w-5xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-[#111111]"
          >
            {statements.map((sentence, idx) => (
              <span key={idx} className="block mb-2">
                {idx === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-[#111111]">
                    {sentence}
                  </span>
                ) : (
                  sentence
                )}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg sm:text-2xl text-[#6B7280] max-w-4xl font-normal leading-relaxed"
          >
            I&O Technologies is both a premier technology services company and an active product innovation studio. We engineer our own proprietary digital products while partnering with ambitious startups, scale-ups, and enterprises to build theirs.
          </motion.p>
        </div>

        {/* Dual Identity Highlight Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-600/5 border border-blue-600/15">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
              01 / PRODUCT INNOVATION STUDIO
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mb-2">
              In-House Digital Ventures
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We conceive, design, and launch our own scalable platforms across AI, P2P marketplaces, B2B wholesale, and PropTech ecosystems.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-indigo-600/5 border border-indigo-600/15">
            <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-2">
              02 / AI ENGINEERING & SERVICES
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mb-2">
              Client Engineering Partnerships
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We collaborate with global organizations to design custom software, integrate generative AI agents, and build resilient enterprise infrastructure.
            </p>
          </div>
        </div>

        {/* Dual Core Pillars: Inovance + Optivance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
                className="group relative p-8 sm:p-10 rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-black text-7xl text-black select-none pointer-events-none">
                  0{idx + 1}
                </div>

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.accent} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-2">
                    {pillar.title}
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] mb-4">
                    {pillar.subtitle}
                  </h3>

                  <p className="text-[#6B7280] text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-blue-600 transition-colors">
                  <span>Explore Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

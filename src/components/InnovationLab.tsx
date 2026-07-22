import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  BrainCircuit, 
  Zap, 
  ShoppingBag, 
  Building2, 
  Store, 
  Home, 
  Layers, 
  Compass,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { INNOVATION_DOMAINS } from '../data/companyData';

export const InnovationLab: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Zap':
        return Zap;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Building2':
        return Building2;
      case 'Store':
        return Store;
      case 'Home':
        return Home;
      case 'Layers':
        return Layers;
      case 'Compass':
      default:
        return Compass;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="innovation-lab"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white overflow-hidden"
    >
      {/* Soft Blue & Indigo Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            INNOVATION LAB
          </span>
        </div>

        {/* Header Title & Subtitle */}
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white"
          >
            Where Ideas Become <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
              Products.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-base sm:text-xl text-gray-400 font-normal leading-relaxed"
          >
            Innovation is at the heart of I&O Technologies. Alongside client partnerships, we continuously research, design, and build intelligent technology products that solve real-world problems across AI, digital marketplaces, business automation, and enterprise software.
          </motion.p>
        </div>

        {/* Futuristic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INNOVATION_DOMAINS.map((domain, idx) => {
            const IconComponent = getIconComponent(domain.iconName);
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                whileHover={{ y: -8 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Floating Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {domain.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500 group-hover:text-white transition-colors">
                  <span>R&D Domain</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

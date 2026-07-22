import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECH_STACK_DATA } from '../data/companyData';
import { TechItem } from '../types';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'frontend' | 'backend' | 'cloud'>('all');

  const filteredTech = activeCategory === 'all' 
    ? TECH_STACK_DATA 
    : TECH_STACK_DATA.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'frontend', label: 'Frontend & Apps' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'cloud', label: 'Cloud & Infrastructure' }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold mb-4">
            MODERN ENTERPRISE STACK
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
            Engineered with Modern Precision.
          </h2>
          <p className="mt-4 text-[#6B7280] text-base sm:text-lg">
            We build exclusively on battle-tested frameworks that guarantee extreme velocity, security, and infinite horizontal scalability.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'glass-card border-black/[0.08] text-[#6B7280] hover:text-[#111111] hover:bg-black/[0.04]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group p-5 rounded-2xl glass-card border border-black/[0.06] hover:border-blue-500/40 hover:bg-white transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-black/[0.03] group-hover:bg-blue-600 group-hover:text-white text-[#111111] flex items-center justify-center mb-3 font-display font-extrabold text-lg transition-colors">
                {tech.name.substring(0, 2)}
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[10px] font-mono text-blue-600 font-semibold block mt-1">
                  {tech.popularFor}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

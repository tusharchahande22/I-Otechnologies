import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft, ArrowRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface FeaturedWorkProps {
  onOpenEstimator: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenEstimator }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase">
                FEATURED CASE STUDIES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Crafted Products. <br /> Proven Scalability.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full glass-card border border-black/10 text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Previous Projects"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full glass-card border border-black/10 text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Next Projects"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Portfolio Deck */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-4 no-scrollbar snap-x snap-mandatory"
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group min-w-[320px] sm:min-w-[440px] lg:min-w-[500px] flex-shrink-0 snap-start rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with Zoom Reveal */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge & Year */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111111] text-xs font-mono font-bold shadow-sm">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/80 font-medium">
                    {project.year}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 space-y-4">
                <h3 className="font-display font-bold text-2xl text-[#111111] group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs font-medium text-blue-600">
                  {project.tagline}
                </p>

                <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-black/[0.03] text-[#111111] text-[11px] font-mono font-semibold border border-black/[0.04]"
                    >
                      {m.label}: <strong className="text-blue-600">{m.value}</strong>
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-blue-600 transition-colors">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Project Full Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={onOpenEstimator}
      />
    </section>
  );
};

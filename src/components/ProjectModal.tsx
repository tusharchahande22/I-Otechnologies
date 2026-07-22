import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenEstimator: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenEstimator }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl my-8 rounded-3xl bg-white border border-black/10 shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-[#111111] shadow-md border border-black/10 transition-transform hover:scale-105"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner Image */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold mb-2 shadow-sm">
                  {project.category}
                </span>
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#6B7280]">Client: {project.client} ({project.year})</span>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Tagline */}
            <p className="text-xl font-semibold text-blue-600">
              {project.tagline}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-black/[0.02] border border-black/[0.05]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-600">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-[#6B7280]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview & Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  The Business Challenge
                </h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Engineering Solution
                </h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Business Impact */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/60 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-blue-900 tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Measurable Impact & ROI
              </h4>
              <p className="text-sm font-medium text-blue-950 leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider mb-3">
                Technologies & Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-black/[0.04] text-[#111111] text-xs font-mono font-medium border border-black/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"
                >
                  <span>Visit Live Solution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-[#6B7280]">Protected Enterprise IP</span>
              )}

              <button
                onClick={() => {
                  onClose();
                  onOpenEstimator();
                }}
                className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Request Similar Architecture</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, ArrowUpRight, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';

interface BuildingNextGenProps {
  onOpenEstimator: () => void;
}

export const BuildingNextGen: React.FC<BuildingNextGenProps> = ({ onOpenEstimator }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-slate-900 text-white shadow-2xl overflow-hidden border border-white/10"
        >
          {/* Ambient Lighting & Glows */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-blue-300 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>OUR VISION & PROMISE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Headline */}
            <div className="lg:col-span-7">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
                Building the Next Generation of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                  Digital Businesses.
                </span>
              </h2>
            </div>

            {/* Paragraph Content */}
            <div className="lg:col-span-5 space-y-6 text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              <p>
                At I&O Technologies, we believe technology should do more than digitize processes—it should create new opportunities. Our mission is to engineer intelligent software, AI-powered platforms, and scalable digital ecosystems that help businesses innovate, operate efficiently, and grow with confidence.
              </p>
              <p>
                Whether we're launching our own products or partnering with ambitious organizations, every solution is built with performance, scalability, security, and long-term impact in mind.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenEstimator}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Build With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Value Badges */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
              <span>AI-Ready Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400 shrink-0" />
              <span>High-Scale Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Zero-Trust Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Dual Venture Model</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

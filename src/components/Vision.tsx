import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Zap, 
  Globe, 
  CheckCircle2, 
  Quote,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface VisionProps {
  onOpenEstimator: () => void;
}

export const Vision: React.FC<VisionProps> = ({ onOpenEstimator }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const portraitContainerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Mouse Parallax Effect for the Portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);
  const particleMoveX = useTransform(mouseX, [-300, 300], [-15, 15]);
  const particleMoveY = useTransform(mouseY, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitContainerRef.current) return;
    const rect = portraitContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleExploreProducts = () => {
    const el = document.querySelector('#products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] text-white overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Environment: Subtle Grid, AI Network Nodes & Radial Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Soft Cyan/Blue Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-cyan-500/12 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[220px] pointer-events-none" />

      {/* Floating AI Network Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: `${(i * 17) % 90 + 5}%`,
              left: `${(i * 23) % 90 + 5}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Narrative & Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE VISION</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              Building Technology That Creates{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                Real Impact.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At I&amp;O Technologies, we believe technology should solve meaningful problems, simplify complexity, and create lasting value.
              </p>
              <p>
                We're building intelligent software, AI-powered platforms, and scalable digital ecosystems while partnering with ambitious businesses to engineer their future.
              </p>
              <p className="text-gray-400">
                Our vision extends beyond delivering software—we build products that shape industries and empower businesses to grow through innovation.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">AI Engineering</h4>
                  <p className="text-[11px] text-gray-400">Proprietary GenAI Stack</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Venture Studio</h4>
                  <p className="text-[11px] text-gray-400">Inovance &amp; Optivance</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleExploreProducts}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#0B0F17] hover:bg-cyan-400 transition-all duration-300 text-sm font-bold shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md transition-all duration-300 text-sm font-semibold cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                <span>Start Your Project</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Cinematic Founder Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            <div
              ref={portraitContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[500px] flex flex-col items-center justify-center"
            >
              {/* Soft Ambient Radial Lighting & Blue Glow behind Portrait */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 -top-10 bg-gradient-to-t from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-[100px] pointer-events-none"
              />

              {/* Glowing SVG Connection Orbit Ring */}
              <svg
                className="absolute -top-12 inset-x-0 w-full h-[620px] pointer-events-none opacity-40"
                viewBox="0 0 500 620"
                fill="none"
              >
                <circle cx="250" cy="280" r="220" stroke="url(#orbitGradient)" strokeWidth="1.5" strokeDasharray="6 8" />
                <circle cx="250" cy="280" r="245" stroke="url(#orbitGradient2)" strokeWidth="1" opacity="0.5" />
                <defs>
                  <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25c3e6" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                  <linearGradient id="orbitGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Glassmorphism Badge 1: Top Left */}
              <motion.div
                style={{ x: particleMoveX, y: particleMoveY }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-2 z-20 px-4 py-2.5 rounded-2xl bg-[#0B0F17]/80 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 text-xs text-white"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-[11px] leading-tight">AI &amp; Product Venture Studio</span>
                  <span className="block text-[10px] text-gray-400 font-mono">Inovance &amp; Optivance</span>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2: Mid Right */}
              <motion.div
                style={{ x: particleMoveX, y: particleMoveY }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-4 z-20 px-4 py-2.5 rounded-2xl bg-[#0B0F17]/80 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 text-xs text-white"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-[11px] leading-tight">Global Engineering</span>
                  <span className="block text-[10px] text-gray-400 font-mono">Pune, MH — India</span>
                </div>
              </motion.div>

              {/* Primary Visual Element: Founder Portrait with Parallax and Vignette Fade */}
              <motion.div
                style={{ rotateX, rotateY }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="relative z-10 w-full h-[580px] sm:h-[640px] lg:h-[650px] flex items-end justify-center overflow-hidden rounded-3xl"
              >
                {/* Image Canvas Container with Soft Vignette Masking */}
                <div 
                  className="relative w-full h-full flex items-end justify-center"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                  }}
                >
                  <img
                    src="/founder.png"
                    alt="Tushar Chahande - Founder & CEO, I&O Technologies"
                    className="h-full w-auto object-cover object-top filter contrast-[1.03] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(37,195,230,0.25)] mix-blend-lighten"
                  />
                </div>

                {/* Bottom Lighting Rim Accent */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-transparent z-20 pointer-events-none" />
              </motion.div>

              {/* Founder Title Box */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative z-30 -mt-10 px-8 py-4 rounded-2xl bg-[#0B0F17]/90 border border-white/15 backdrop-blur-xl shadow-2xl text-center"
              >
                <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                  Tushar Chahande
                </h3>
                <p className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 uppercase tracking-widest mt-0.5">
                  Founder &amp; CEO
                </p>
                <p className="text-[11px] text-gray-400 font-medium">
                  I&amp;O Technologies
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Full-Width Elegant Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden text-center max-w-5xl mx-auto shadow-2xl"
        >
          {/* Subtle Quote Watermark Icon */}
          <Quote className="absolute top-4 left-6 w-16 h-16 text-blue-500/10 pointer-events-none" />
          <Quote className="absolute bottom-4 right-6 w-16 h-16 text-cyan-500/10 rotate-180 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              LEADERSHIP MANIFESTO
            </p>

            <blockquote className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
              "We don't just build software.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
                We engineer intelligent digital products
              </span>{' '}
              that help businesses innovate, automate, and scale."
            </blockquote>

            <p className="text-xs font-mono text-gray-400 pt-2">
              — Tushar Chahande, Founder &amp; CEO, I&amp;O Technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

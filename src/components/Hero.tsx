import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Sparkles, Terminal, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenEstimator: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onViewWork }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 180]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0.2]);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const numParticles = Math.min(Math.floor(width / 20), 65);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-44 md:pt-48 pb-28 sm:pb-36 flex items-center justify-center overflow-hidden bg-[#FAFAFA] bg-radial-gradient"
    >
      {/* Interactive Node Canvas Graphics */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* Faint Animated Glow Behind Headline */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-blue-500/12 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-12 left-12 w-[380px] h-[380px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left flex flex-col items-center sm:items-start"
      >
        {/* Eyebrow Pill with IBM Plex Mono font */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-black/[0.08] text-xs font-mono font-medium text-[#111111] shadow-sm mb-10 tracking-tight"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span className="text-[#6B7280]">I&O TECHNOLOGIES</span>
          <span className="text-black/20">|</span>
          <span className="text-blue-600 font-semibold">{COMPANY_INFO.tagline}</span>
        </motion.div>

        {/* Headline: Engineering Intelligent Digital Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] leading-[0.88] tracking-[-0.035em] text-[#111111] max-w-6xl">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 animate-electric-gradient">
              Intelligent
            </span> <br />
            Digital Solutions<span className="text-[#111111]">.</span>
          </h1>
        </motion.div>

        {/* Paragraph Description in Inter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-lg sm:text-xl md:text-2xl text-[#6B7280] font-normal max-w-2xl leading-relaxed tracking-tight"
        >
          We build AI-powered software, automation systems, enterprise platforms, and digital experiences that help businesses scale faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-4"
        >
          <button
            onClick={onOpenEstimator}
            id="hero-start-project-btn"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-white text-base font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-blue-500/30 interactive-cursor cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            onClick={onViewWork}
            id="hero-view-work-btn"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card border border-black/10 text-[#111111] text-base font-semibold hover:bg-black/[0.04] transition-all duration-300 cursor-pointer"
          >
            <span>View Our Work</span>
            <ChevronDown className="w-5 h-5 text-[#6B7280] group-hover:text-[#111111] transition-colors" />
          </button>
        </motion.div>

        {/* Key Features Badges in IBM Plex Mono */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-black/[0.06] w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#6B7280]"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>AI-First Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Enterprise Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>2-Week Agile Sprints</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Global Engineering Squad</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax Floating Geometric Element */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute right-12 top-1/3 -translate-y-1/2 w-80 p-6 rounded-2xl glass-card border border-black/10 shadow-2xl pointer-events-none z-20"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#111111]">I&O Tech Stack</div>
            <div className="text-[10px] text-[#6B7280]">Live Node Metric</div>
          </div>
        </div>
        <div className="space-y-2 text-[11px] font-mono text-[#6B7280] bg-black/[0.03] p-3 rounded-lg border border-black/[0.04]">
          <div className="flex justify-between">
            <span>Latency</span>
            <span className="text-emerald-600 font-bold">14ms</span>
          </div>
          <div className="flex justify-between">
            <span>AI Models</span>
            <span className="text-blue-600 font-bold">Active</span>
          </div>
          <div className="flex justify-between">
            <span>Security</span>
            <span className="text-indigo-600 font-bold">SOC2 Ready</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

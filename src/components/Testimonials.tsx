import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/companyData';

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase">
                CLIENT TESTIMONIALS & TRUST
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Trusted by Ambitious Leaders.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full glass-card border border-black/10 text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full glass-card border border-black/10 text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[300px] sm:min-w-[420px] flex-shrink-0 snap-start p-8 rounded-3xl glass-card border border-black/[0.08] shadow-sm hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#111111] leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-black/[0.06]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-black/10"
                />
                <div>
                  <div className="font-display font-bold text-sm text-[#111111]">
                    {t.author}
                  </div>
                  <div className="text-xs font-mono text-[#6B7280]">
                    {t.title}, <span className="text-blue-600 font-semibold">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

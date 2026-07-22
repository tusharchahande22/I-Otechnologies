import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/companyData';

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayCount = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight">
      {displayCount}
      <span className="text-blue-600">{suffix}</span>
    </span>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-card border border-black/[0.08] shadow-sm hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <h3 className="font-display font-bold text-lg text-[#111111] mt-4 mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

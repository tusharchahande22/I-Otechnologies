import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Microscope, 
  Figma, 
  Code, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

const STEP_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Microscope,
  Figma,
  Code,
  Rocket,
  TrendingUp
};

export const DevelopmentProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            METHODOLOGY & LIFECYCLE
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
            How We Engineer Impact.
          </h2>
          <p className="mt-4 text-[#6B7280] text-base sm:text-lg">
            A battle-tested 6-stage engineering lifecycle designed for speed, security, and enterprise predictability.
          </p>
        </div>

        {/* Timeline Stepper Navigation Bar */}
        <div className="relative mb-16">
          {/* Animated Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/[0.08] -translate-y-1/2 z-0" />
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-500"
            style={{
              width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%`
            }}
          />

          {/* Step Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = STEP_ICONS[step.icon] || Code;
              const isActive = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3 text-center cursor-pointer border ${
                    isActive
                      ? 'bg-white border-blue-600 shadow-xl shadow-blue-500/10 scale-105'
                      : isPassed
                      ? 'bg-white/80 border-blue-200 text-[#111111]'
                      : 'glass-card border-black/[0.06] text-[#6B7280] hover:border-black/20'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : isPassed
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-black/[0.04] text-[#111111]'
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <span className={`text-xs font-bold font-display ${isActive ? 'text-blue-600' : 'text-[#111111]'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Panel */}
        <motion.div
          key={activeStep.stepNumber}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl glass-card border border-black/10 shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold">
                  Stage {activeStep.stepNumber} of 06
                </span>
                <span className="text-xs font-mono text-[#6B7280]">Interactive Blueprint</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111]">
                {activeStep.title}
              </h3>

              <p className="text-base text-[#6B7280] leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="w-full md:w-80 p-6 rounded-2xl bg-black/[0.02] border border-black/[0.05] space-y-3 shrink-0">
              <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider mb-2">
                Stage Deliverables
              </h4>
              {activeStep.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

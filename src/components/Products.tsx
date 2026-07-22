import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Lightbulb, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Zap, 
  X,
  ExternalLink,
  ChevronRight,
  Boxes,
  Building2,
  Users2,
  ShoppingBag
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/companyData';
import { ProductItem } from '../types';

interface ProductsProps {
  onOpenEstimator?: () => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenEstimator }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const getStatusBadgeClass = (statusType: string) => {
    switch (statusType) {
      case 'live':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'dev':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'vision':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'kaampe':
        return ShoppingBag;
      case 'thoksale':
        return Boxes;
      case 'bloodesk':
        return Building2;
      case 'vivhahika-matrimony':
        return Users2;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-black/[0.04] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase">
            VENTURE STUDIO & PROPRIETARY LABS
          </span>
        </div>

        {/* Header Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-[#111111]"
            >
              Our Products & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-[#111111]">
                Ventures.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-base sm:text-xl text-[#6B7280] font-normal leading-relaxed"
            >
              At I&O Technologies, we don't just develop software for clients—we create technology products that solve real-world challenges. Our products reflect our commitment to innovation, intelligent engineering, and building scalable digital ecosystems.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="px-5 py-3 rounded-2xl glass-card border border-black/10 text-xs font-mono font-semibold text-[#111111] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>4 In-House Ventures Active</span>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((product, idx) => {
            const IconComp = getProductIcon(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.15 * idx }}
                className="group relative rounded-3xl glass-card border border-black/[0.08] hover:border-blue-500/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Product Hero Header Image Background with Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                  {/* Top Bar inside Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-white/90">
                      {product.industry}
                    </span>

                    <span className={`px-3 py-1.5 rounded-full border text-[11px] font-mono font-bold backdrop-blur-md shadow-md ${getStatusBadgeClass(product.statusType)}`}>
                      {product.status}
                    </span>
                  </div>

                  {/* Bottom Brand Identity over Image */}
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-9 h-9 rounded-xl bg-blue-600/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-blue-300 tracking-wide font-medium">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Highlights Pill Cloud */}
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase text-[#111111]/40 tracking-wider mb-3">
                      Core Architecture & Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-xs font-medium text-[#111111]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/[0.04] hover:bg-blue-600 text-[#111111] hover:text-white text-xs font-semibold transition-all duration-300 group/btn cursor-pointer"
                    >
                      <span>Explore Venture</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {product.link ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-gray-400">
                        In-House Incubator
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Product Specification Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getStatusBadgeClass(selectedProduct.statusType)}`}>
                  {selectedProduct.status}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {selectedProduct.industry}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl text-[#111111] mb-1">
                {selectedProduct.name}
              </h3>
              <p className="text-sm font-mono text-blue-600 font-semibold mb-6">
                "{selectedProduct.tagline}"
              </p>

              <div className="rounded-2xl overflow-hidden mb-6 h-48 w-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed mb-8">
                <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider">
                  Product Overview & Strategic Value
                </h4>
                <p>{selectedProduct.description}</p>

                <h4 className="text-xs font-mono font-bold uppercase text-[#111111] tracking-wider pt-2">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#111111] p-2 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100">
                {selectedProduct.link && (
                  <a
                    href={selectedProduct.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    if (onOpenEstimator) onOpenEstimator();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors ml-auto cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Partner On Similar Product</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

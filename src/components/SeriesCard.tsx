import React from 'react';
import { motion } from 'framer-motion';
import type { ProductSeries } from '../data/products';
import { Layers, ChevronRight } from 'lucide-react';

interface SeriesCardProps {
  series: ProductSeries;
  onClick: () => void;
  variant?: 'grid' | 'list';
}

export const SeriesCard: React.FC<SeriesCardProps> = ({ series, onClick, variant = 'grid' }) => {
  if (variant === 'list') {
    return (
      <motion.div
        whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 1)' }}
        whileTap={{ scale: 0.995 }}
        onClick={onClick}
        className="group relative bg-white/50 border border-slate-200 rounded-2xl p-4 cursor-pointer transition-all duration-300 flex items-center gap-6"
      >
        <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden p-2 flex items-center justify-center flex-shrink-0 border border-slate-100">
           <img 
            src={series.imageUrl} 
            alt={series.name} 
            className="w-full h-full object-contain transition-all duration-500"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-sm font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-maroon-800 transition-colors truncate">
              {series.name}
            </h3>
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-lg">
              {series.variantsCount} SKUs
            </span>
          </div>
          <p className="text-slate-400 text-[11px] font-bold line-clamp-1 truncate max-w-2xl">{series.description}</p>
        </div>

        <div className="p-2 border border-slate-200 rounded-xl text-slate-400 group-hover:text-brand-maroon-800 group-hover:border-brand-maroon-800 group-hover:bg-brand-maroon-50 transition-all">
          <ChevronRight className="w-4 h-4" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 40px 60px -15px rgba(15, 23, 42, 0.08)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative bg-white border border-slate-100 rounded-[32px] p-8 cursor-pointer transition-all duration-500 flex flex-col h-full overflow-hidden shadow-sm"
    >
      {/* Decorative Index */}
      <div className="absolute top-6 right-8 font-technical text-[10px] font-bold text-slate-200 tracking-widest select-none">
        REF_{series.id.split('-').pop()}
      </div>

      {/* Visual Header */}
      <div className="relative aspect-square mb-10 bg-slate-50 rounded-[24px] overflow-hidden p-10 flex items-center justify-center border border-slate-50 group-hover:border-brand-maroon-100/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-maroon-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={series.imageUrl} 
          alt={series.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-all duration-700 relative z-10"
        />
        
        {/* Category Badge Floating */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <div className="bg-brand-dark/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] py-2 px-3 rounded-xl text-center shadow-xl">
             View Specs
           </div>
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <div className="flex items-center gap-3 text-[10px] font-black text-brand-maroon-800 uppercase tracking-widest bg-brand-maroon-50 w-fit px-3 py-1.5 rounded-full border border-brand-maroon-100/50">
          <Layers className="w-3 h-3" />
          {series.variantsCount} Industrial Variants
        </div>
        <h3 className="text-xl font-black text-brand-dark leading-tight group-hover:text-brand-maroon-800 transition-colors line-clamp-2 uppercase italic tracking-tighter">
          {series.name}
        </h3>
        <p className="text-slate-400 text-xs line-clamp-3 font-bold leading-relaxed">{series.description}</p>
      </div>

      {/* Action Bar */}
      <div className="mt-10 flex items-center justify-between group/action">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Procurement</span>
          <span className="text-[11px] font-black text-brand-dark uppercase tracking-tight">Technical Data</span>
        </div>
        <div className="w-12 h-12 bg-slate-50 group-hover:bg-brand-maroon-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-500 border border-slate-100 group-hover:border-brand-maroon-800 group-hover:shadow-lg group-hover:shadow-brand-maroon-800/30">
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

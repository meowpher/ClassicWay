import React from 'react';

interface MarqueeProps {
  items: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="w-full py-6 overflow-hidden relative flex bg-transparent select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, idx) => (
          <div key={`first-${idx}`} className="flex items-center mx-12">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-800 hover:text-brand-maroon-800 transition-colors">
              {item}
            </span>
            <div className="ml-12 w-1.5 h-1.5 bg-brand-maroon-500 rounded-full opacity-30" />
          </div>
        ))}
      </div>
      <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
        {items.map((item, idx) => (
          <div key={`second-${idx}`} className="flex items-center mx-12">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-800 hover:text-brand-maroon-800 transition-colors">
              {item}
            </span>
            <div className="ml-12 w-1.5 h-1.5 bg-brand-maroon-500 rounded-full opacity-30" />
          </div>
        ))}
      </div>
      
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10"></div>
    </div>
  );
};

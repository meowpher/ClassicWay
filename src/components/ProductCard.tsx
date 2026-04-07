import React from 'react';
import type { Product } from '../data/products';
import { TiltedCard } from './TiltedCard';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <TiltedCard className="h-full w-full perspective-1000">
      <div className="bg-[#1f1f1f] rounded-xl shadow-lg border border-gray-800 hover:border-brand-maroon/50 overflow-hidden h-full flex flex-col group transition-colors duration-300">
        <div className="relative h-48 overflow-hidden bg-gray-200 p-4 shrink-0 flex items-center justify-center">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <span className="text-xs font-semibold text-brand-maroon uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-brand-light mb-1 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <div className="bg-white/5 rounded px-3 py-1.5 inline-block mb-4 border border-white/5">
              <span className="text-xs font-medium text-gray-300">
                Material: {product.material}
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => onQuickView(product)}
                className="w-full bg-white/5 hover:bg-white/10 text-brand-light border border-white/10 font-medium py-2 rounded-lg transition-all"
              >
                View Specs
              </button>
              <a 
                href={`mailto:classicwayelectric@gmail.com?subject=Quote Request: ${product.id} - ${product.name}`}
                className="w-full bg-brand-maroon hover:bg-red-800 text-brand-light font-bold py-2.5 rounded-lg transition-all text-center shadow-[0_4px_12px_rgba(128,0,0,0.3)] hover:shadow-[0_6px_15px_rgba(128,0,0,0.5)]"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </TiltedCard>
  );
};

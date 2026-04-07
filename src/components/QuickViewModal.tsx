import React from 'react';
import type { Product } from '../data/products';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-brand-dark border border-brand-maroon/30 rounded-2xl shadow-2xl shadow-brand-maroon/20 overflow-hidden z-10 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-brand-dark/50 hover:bg-brand-maroon rounded-full text-brand-light transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Column */}
            <div className="md:w-2/5 bg-gray-100 p-8 flex items-center justify-center shrink-0">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-contain mix-blend-multiply" 
              />
            </div>

            {/* Specs Column */}
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col max-h-[80vh] overflow-y-auto no-scrollbar">
              <span className="text-brand-maroon text-sm font-bold uppercase tracking-wider mb-2">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-brand-light mb-4 leading-tight">
                {product.name}
              </h2>
              <p className="text-gray-400 mb-6 text-sm">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-light mb-3 border-b border-gray-800 pb-2">
                  Technical Specifications
                </h3>
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      {product.specs?.map((spec, idx) => (
                        <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                          <th className="px-4 py-3 font-medium text-gray-300 bg-white/5 w-1/2">
                            {spec.property}
                          </th>
                          <td className="px-4 py-3 text-brand-light font-semibold">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex space-x-3 pt-4">
                <button className="flex-1 bg-brand-maroon hover:bg-red-800 text-brand-light py-3 rounded-lg font-semibold transition-colors duration-200">
                  Request Quote
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-transparent border border-gray-600 hover:border-gray-400 text-brand-light py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

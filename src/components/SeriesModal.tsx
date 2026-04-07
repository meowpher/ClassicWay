import React, { useState } from 'react';
import type { Product, ProductSeries } from '../data/products';
import { X, Search, FileText, ShoppingCart, Info, Layers, ShieldCheck, ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SeriesModalProps {
  series: ProductSeries | null;
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
}

export const SeriesModal: React.FC<SeriesModalProps> = ({ series, products, isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'matrix' | 'overview'>('matrix');
  
  if (!series) return null;

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuoteReq = (product: Product) => {
    const subject = encodeURIComponent(`Technical Inquiry: ${product.id} - ${product.name}`);
    const body = encodeURIComponent(`Technical Procurement Team,\n\nI am requesting a formal quotation/datasheet for:\n\nModel No: ${product.id}\nSeries: ${series.name}\nCategory: ${product.category}\n\nProject Requirements:\n[Specify quantities or technical constraints here]\n\nRegards.`);
    window.location.href = `mailto:classicwayelectric@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center lg:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full h-full lg:h-auto lg:max-w-7xl bg-white lg:rounded-[40px] shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row max-h-[100vh] lg:max-h-[90vh] border-0 lg:border border-slate-200"
          >
            {/* Sidebar Info (Clinical Style) */}
            <div className="hidden lg:flex lg:w-96 bg-slate-50 border-r border-slate-100 flex-col overflow-y-auto no-scrollbar">
              <div className="p-10">
                <div className="relative aspect-square mb-10 bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 group">
                  <img src={series.imageUrl} alt={series.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-0.5 w-8 bg-brand-maroon-800" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-maroon-800">Series Identifier</span>
                    </div>
                    <h2 className="text-3xl font-black text-brand-dark tracking-tighter leading-[1.1] uppercase italic mb-4">{series.name}</h2>
                    <p className="text-slate-400 text-sm font-bold leading-relaxed">{series.description}</p>
                  </div>

                  <div className="pt-8 border-t border-slate-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border border-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-brand-maroon-800" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Industrial Compliant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border border-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                        <Layers className="w-4 h-4 text-brand-maroon-800" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">{products.length} Technical Variants</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto p-10 bg-brand-maroon-800 text-white">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-maroon-200 mb-2">Technical Dossier</h4>
                <p className="text-xs font-bold leading-relaxed mb-6 opacity-80 italic">Full CAD drawings and mechanical property reports available on request.</p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-brand-maroon-200 transition-colors">
                  Request Full Specs <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
              {/* Modal Navigation */}
              <div className="px-6 lg:px-10 py-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-6 lg:gap-8 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                  {[
                    { id: 'matrix', label: 'Matrix', icon: <Layers className="w-4 h-4" /> },
                    { id: 'overview', label: 'Specs', icon: <Info className="w-4 h-4" /> }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 pb-2 -mb-[25px] text-[10px] font-black uppercase tracking-[0.2em] transition-all relative flex-shrink-0 ${
                        activeTab === tab.id ? 'text-brand-maroon-800 border-b-2 border-brand-maroon-800' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative group hidden sm:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-hover:text-brand-maroon transition-colors" />
                    <input
                      type="text"
                      placeholder="ID_QUERY..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-slate-50 border border-slate-100 rounded-full py-2 pl-10 pr-6 text-[10px] font-bold tracking-widest text-brand-dark focus:outline-none focus:border-brand-maroon transition-all w-32 md:w-48"
                    />
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-3 bg-slate-100 hover:bg-brand-maroon-800 rounded-2xl text-slate-500 hover:text-white transition-all active:scale-90"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 lg:p-10 no-scrollbar">
                {activeTab === 'matrix' ? (
                  <div className="space-y-6">
                    {/* Horizontal Scroll Hint for Mobile */}
                    <div className="lg:hidden flex items-center gap-3 py-3 px-5 bg-brand-maroon-50 border border-brand-maroon-100 rounded-2xl text-brand-maroon-800 mb-6">
                       <MousePointer2 className="w-4 h-4 animate-bounce" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Swipe left to view technical columns</span>
                    </div>

                    <div className="overflow-x-auto tablet-scrollbar pb-4 -mx-6 px-6 lg:mx-0 lg:px-0">
                      <table className="w-full text-left border-separate border-spacing-y-2 min-w-[600px]">
                        <thead>
                          <tr>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest sticky left-0 bg-white z-10 backdrop-blur-sm">Model ID</th>
                            {series.specLabels.map((lbl, idx) => (
                              <th key={idx} className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">{lbl}</th>
                            ))}
                            <th className="px-6 py-4 text-[10px] font-black text-brand-maroon-500 uppercase tracking-widest text-right">Quote</th>
                          </tr>
                        </thead>
                        <tbody className="space-y-4">
                          {filteredProducts.map((prod) => (
                            <tr key={prod.id} className="group">
                              <td className="px-6 py-5 bg-slate-50 border-y border-l border-slate-100 rounded-l-2xl group-hover:bg-brand-maroon-50 group-hover:border-brand-maroon-100 transition-colors sticky left-0 z-10">
                                <span className="text-brand-dark font-black text-xs tracking-tight uppercase">{prod.id}</span>
                              </td>
                              {series.specLabels.map((lbl, idx) => (
                                <td key={idx} className="px-6 py-5 bg-slate-50 border-y border-slate-100 group-hover:bg-brand-maroon-50 group-hover:border-brand-maroon-100 transition-colors">
                                  <span className="text-slate-500 text-xs font-bold italic">
                                    {prod.specs.find(s => s.property === lbl)?.value || '-'}
                                  </span>
                                </td>
                              ))}
                              <td className="px-6 py-5 bg-slate-50 border-y border-r border-slate-100 rounded-r-2xl text-right group-hover:bg-brand-maroon-50 group-hover:border-brand-maroon-100 transition-colors">
                                <button 
                                  onClick={() => handleQuoteReq(prod)}
                                  className="inline-flex items-center gap-2 text-brand-maroon-800 hover:text-white hover:bg-brand-maroon-800 p-3 rounded-xl transition-all border border-brand-maroon-100 group-hover:bg-white active:scale-95"
                                >
                                  <ShoppingCart className="w-4 h-4" />
                                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">RFQ</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                    <div className="space-y-8">
                       <div className="lg:hidden relative aspect-square mb-8 bg-slate-50 rounded-[32px] p-8 border border-slate-100">
                         <img src={series.imageUrl} alt={series.name} className="w-full h-full object-contain" />
                       </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-brand-maroon-800 mb-4 flex items-center gap-2">
                           <FileText className="w-4 h-4" /> Features
                        </h4>
                        <ul className="grid gap-3">
                          {products[0]?.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                              <div className="w-1.5 h-1.5 bg-brand-maroon-500 rounded-full flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-brand-maroon-800 mb-4 flex items-center gap-2">
                           <ShieldCheck className="w-4 h-4" /> Composition
                        </h4>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed bg-slate-50 p-6 rounded-3xl italic border border-slate-100">
                          {products[0]?.material} construction engineered for high mechanical retention and resistance to industrial stressors.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between group overflow-hidden relative">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-maroon-500/20 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                       <h3 className="text-xl font-black tracking-tighter uppercase italic mb-8 relative z-10">
                         Bulk Industrial <br /> Procurement
                       </h3>
                       <p className="text-slate-400 text-xs font-bold leading-relaxed mb-8 relative z-10 opacity-70">
                         Special pricing tier available for bulk contractor accounts and large scale engineering projects.
                       </p>
                       <button className="btn-primary !w-full flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest py-4 relative z-10">
                         Open Bulk Request <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 lg:p-10 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div className="flex items-center gap-6 lg:gap-10">
                    <div>
                       <span className="block text-[9px] font-black uppercase tracking-widest text-slate-300 mb-1 text-center">Variants</span>
                       <span className="block text-xs font-black text-brand-dark uppercase tracking-tight text-center">{filteredProducts.length} Identified</span>
                    </div>
                    <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                    <div>
                       <span className="block text-[9px] font-black uppercase tracking-widest text-slate-300 mb-1 text-center">Standard</span>
                       <span className="block text-xs font-black text-brand-dark uppercase tracking-tight italic text-center">IEC/BS Compliant</span>
                    </div>
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">
                    Classic Way Engineering • Dubai
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

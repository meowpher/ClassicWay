import React, { useState, useMemo } from 'react';
import { productsList, seriesList, mainIndustrialCategories, categoryMapping, type ProductSeries } from '../data/products';
import { SeriesCard } from '../components/SeriesCard';
import { SeriesModal } from '../components/SeriesModal';
import { Search, Filter, Grid, Table, X, ChevronRight, ChevronDown, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Catalogue: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<ProductSeries | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedGroups, setExpandedGroups] = useState<string[]>(mainIndustrialCategories);
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => 
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  const filteredSeries = useMemo(() => {
    return seriesList.filter(series => {
      const seriesProducts = productsList.filter(p => p.seriesId === series.id);
      const matchesSearch = 
        series.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        series.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seriesProducts.some(p => 
          p.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      // If activeCategory is 'All', match everything.
      // If activeCategory is a Main Category, match all sub-categories in that group.
      // If activeCategory is a Sub Category, match only that category.
      let matchesCategory = activeCategory === 'All';
      if (!matchesCategory) {
        if (mainIndustrialCategories.includes(activeCategory)) {
          matchesCategory = categoryMapping[activeCategory].includes(series.category);
        } else {
          matchesCategory = series.category === activeCategory;
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const seriesProducts = useMemo(() => {
    if (!selectedSeries) return [];
    return productsList.filter(p => p.seriesId === selectedSeries.id);
  }, [selectedSeries]);

  return (
    <div className="flex bg-[#F8F9FA] min-h-screen relative selection:bg-brand-maroon-800 selection:text-white">
      <SeriesModal 
        series={selectedSeries} 
        products={seriesProducts}
        isOpen={!!selectedSeries} 
        onClose={() => setSelectedSeries(null)} 
      />

      {/* Mobile Category Drawer */}
      <AnimatePresence>
        {isCategoryDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCategoryDrawerOpen(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-md z-[60] lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-[40px] z-[70] lg:hidden shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-maroon-50 rounded-xl flex items-center justify-center">
                    <Filter className="w-5 h-5 text-brand-maroon-800" />
                  </div>
                  <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter">Segment Finder</h3>
                </div>
                <button 
                  onClick={() => setIsCategoryDrawerOpen(false)}
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 tablet-scrollbar pb-32">
                <button 
                  onClick={() => { setActiveCategory('All'); setIsCategoryDrawerOpen(false); }}
                  className={`w-full text-left px-6 py-4 rounded-2xl text-sm font-black mb-6 transition-all ${
                    activeCategory === 'All' 
                    ? 'bg-brand-maroon-800 text-white shadow-xl shadow-brand-maroon-800/20' 
                    : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  SHOW ALL FAMILIES
                </button>

                <div className="space-y-6">
                  {mainIndustrialCategories.map(group => (
                    <div key={group} className="space-y-3">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-2">
                        {group}
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {categoryMapping[group].map(cat => (
                          <button 
                            key={cat}
                            onClick={() => {
                              setActiveCategory(cat);
                              setIsCategoryDrawerOpen(false);
                            }}
                            className={`w-full text-left px-6 py-4 rounded-2xl text-xs font-bold transition-all ${
                              activeCategory === cat 
                              ? 'bg-brand-maroon-50 text-brand-maroon-800 border border-brand-maroon-100' 
                              : 'bg-white border border-slate-100 text-slate-500'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Extreme Left Pinning Sidebar */}
      <aside className="hidden lg:flex flex-col w-[340px] bg-white border-r border-slate-200/50 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto no-scrollbar z-20">
        <div className="p-8">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl mb-10 transition-all group ${
              activeCategory === 'All' 
              ? 'bg-brand-dark text-white shadow-xl shadow-brand-dark/20' 
              : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <span className="text-xs font-black uppercase tracking-widest">Complete Archive</span>
            <Layers className={`w-4 h-4 ${activeCategory === 'All' ? 'text-brand-maroon-400' : 'text-slate-300'}`} />
          </button>
          
          <div className="space-y-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 font-technical flex items-center gap-3">
               <span className="w-6 h-px bg-slate-200" />
               Industrial Hierarchy
            </div>
            
            {mainIndustrialCategories.map(group => (
              <div key={group} className="space-y-1">
                <button 
                  onClick={() => toggleGroup(group)}
                  className="w-full flex items-center justify-between px-2 py-2 text-left group"
                >
                  <span className={`text-[11px] font-black uppercase tracking-tight transition-colors ${
                    activeCategory === group || categoryMapping[group].includes(activeCategory)
                    ? 'text-brand-maroon-800' 
                    : 'text-brand-dark group-hover:text-brand-maroon-800'
                  }`}>
                    {group}
                  </span>
                  {expandedGroups.includes(group) ? <ChevronDown className="w-3 h-3 text-slate-300" /> : <ChevronRight className="w-3 h-3 text-slate-300" />}
                </button>
                
                <AnimatePresence initial={false}>
                  {expandedGroups.includes(group) && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-2 space-y-1 border-l-2 border-slate-50 ml-1"
                    >
                      {categoryMapping[group].map(cat => (
                        <button 
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-[10px] font-bold transition-all duration-300 ${
                            activeCategory === cat 
                            ? 'bg-brand-maroon-50 text-brand-maroon-800 shadow-sm border border-brand-maroon-100 translate-x-1' 
                            : 'text-slate-400 hover:text-brand-dark hover:bg-slate-50'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto p-8 border-t border-slate-100 bg-slate-50/20">
          <div className="p-6 bg-brand-dark rounded-[24px] text-white relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-maroon-800/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-maroon-400 mb-2 relative z-10">Assistance</p>
            <p className="text-xs font-bold leading-relaxed relative z-10 opacity-80">
              Need a custom engineering solution?
            </p>
            <button className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-brand-maroon-400 hover:text-white transition-colors">
              Speak to Expert <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 py-12 px-4 md:px-8 lg:px-12 bg-[#FDFDFD]">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-12">
          <button 
            onClick={() => setIsCategoryDrawerOpen(true)}
            className="flex items-center justify-between w-full bg-white p-6 rounded-[32px] text-brand-dark border border-slate-200/50 shadow-xl shadow-slate-200/20 active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-4">
               <div className="bg-brand-maroon-50 p-2 rounded-xl">
                <Filter className="w-5 h-5 text-brand-maroon-800" />
               </div>
               <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-technical">Filter Hierarchy</p>
                  <span className="font-black text-lg uppercase tracking-tighter line-clamp-1">{activeCategory === 'All' ? 'Full Archive' : activeCategory}</span>
               </div>
            </div>
            <ChevronDown className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Header & Search */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-brand-maroon-800 opacity-30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-maroon-800 font-technical">Procurement Archive</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tighter uppercase italic">
              Technical <br /> <span className="text-brand-maroon-800">Catalogue</span>
            </h1>
            <p className="text-slate-400 mt-8 font-medium text-lg leading-relaxed flex items-center gap-3">
              Browsing <span className="text-brand-dark font-black px-3 py-1 bg-slate-100 rounded-lg">{activeCategory}</span>
            </p>
          </div>

          <div className="relative w-full xl:w-[500px] group">
            <div className="absolute inset-0 bg-brand-maroon-500/5 blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-maroon-800 transition-colors z-10" />
            <input 
              type="text" 
              placeholder="Search series, ID or material..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="relative w-full bg-white border border-slate-200/50 rounded-[28px] py-6 pl-16 pr-8 focus:outline-none focus:border-brand-maroon-800/20 transition-all text-brand-dark font-bold leading-none shadow-xl shadow-slate-200/20 text-lg z-10"
            />
          </div>
        </div>

        {/* Product Series Listing */}
        <div className="border-t border-slate-100 pt-16">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest font-technical">
              <Layers className="w-4 h-4 text-brand-maroon-800" />
              <span>{filteredSeries.length} Components Identified</span>
            </div>
            {/* View Switcher (Desktop Only) */}
            <div className="hidden md:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-100">
              <button className="p-3 bg-white rounded-xl text-brand-maroon-800 shadow-sm">
                <Grid className="w-4 h-4" />
              </button>
              <button className="p-3 hover:bg-white text-slate-400 rounded-xl transition-colors">
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>

          {filteredSeries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-12">
              {filteredSeries.map(series => (
                <SeriesCard 
                  key={series.id} 
                  series={series} 
                  onClick={() => setSelectedSeries(series)} 
                />
              ))}
            </div>
          ) : (
            <div className="py-48 flex flex-col items-center justify-center text-center">
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-brand-maroon-500/10 blur-3xl rounded-full scale-150" />
                <div className="w-24 h-24 bg-white rounded-[40px] flex items-center justify-center relative z-10 border border-slate-100 shadow-xl">
                  <Search className="w-10 h-10 text-brand-maroon-200" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase tracking-tighter">Diagnostic: Zero Results</h3>
              <p className="text-slate-400 max-w-sm font-medium text-lg leading-relaxed mb-12">The current filter criteria returned zero matches. Refine your search or expand selection.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="btn-primary"
              >
                Reset To Full Archive
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

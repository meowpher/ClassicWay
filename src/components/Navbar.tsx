import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, ShoppingCart, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/50">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group transition-transform hover:scale-[1.02] active:scale-95">
            <div className="relative">
              <img 
                src="/CW-logo.png" 
                alt="Classic Way Logo" 
                className="h-10 w-auto object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-brand-maroon-500/10 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-xl tracking-tighter text-brand-dark uppercase">
                Classic <span className="text-brand-maroon-800">Way</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] hidden sm:block">Hardware & Electrical</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name}
                to={link.path} 
                className={({ isActive }) => 
                  `relative py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-brand-maroon-800 ${
                    isActive ? 'text-brand-maroon-800 shadow-sm' : 'text-slate-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-maroon-800 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="hidden sm:flex items-center space-x-2 btn-primary !py-2.5 !px-6 !text-xs uppercase tracking-widest">
              <ShoppingCart className="w-4 h-4" />
              <span>Inquiry Cart</span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-brand-dark hover:bg-slate-100 rounded-xl transition-colors active:scale-90"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[110] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                <span className="font-black text-xl tracking-tighter text-brand-dark uppercase">
                  Classic <span className="text-brand-maroon-800">Way</span>
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-brand-dark transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-3">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 pl-2">Section Index</div>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center justify-between p-5 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all ${
                        isActive 
                        ? 'bg-brand-maroon-800 text-white shadow-xl shadow-brand-maroon-800/20' 
                        : 'text-brand-dark hover:bg-slate-50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-brand-maroon-500 opacity-0 group-hover:opacity-100'} transition-opacity`} />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto space-y-8">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Immediate Support</p>
                   <a href="tel:+971585050461" className="flex items-center gap-3 text-lg font-black text-brand-dark group">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center group-hover:border-brand-maroon-800 transition-colors">
                        <Phone className="w-5 h-5 text-brand-maroon-800" />
                      </div>
                      +971 58 505 0461
                   </a>
                </div>

                <button className="flex items-center justify-center space-x-3 btn-primary w-full !py-5 uppercase text-xs tracking-[0.2em] font-black shadow-2xl shadow-brand-maroon-900/20">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Procurement Cart</span>
                </button>
                
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">
                  Hardwired for industrial excellence
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

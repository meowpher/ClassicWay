import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-20 bg-brand-dark/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-20 bottom-0 w-[80%] max-w-sm bg-white border-l border-slate-200 z-50 lg:hidden shadow-2xl flex flex-col p-8"
            >
              <nav className="flex flex-col space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Navigation</div>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center justify-between p-4 rounded-2xl text-lg font-black uppercase tracking-tighter transition-all ${
                        isActive ? 'bg-brand-maroon-50 text-brand-maroon-800' : 'text-slate-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-maroon-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                <div className="h-px bg-slate-100 w-full" />
                <button className="flex items-center justify-center space-x-3 btn-primary w-full !py-4 uppercase text-xs tracking-widest font-black">
                  <ShoppingCart className="w-5 h-5" />
                  <span>View Inquiry Cart</span>
                </button>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Technical Support</p>
                  <a href="tel:+971585050461" className="text-sm font-black text-brand-dark">+971 58 505 0461</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

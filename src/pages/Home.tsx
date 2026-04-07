import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SplitText } from '../components/SplitText';
import { Marquee } from '../components/Marquee';
import { mainIndustrialCategories } from '../data/products';
import { Mail, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-brand-surface min-h-screen selection:bg-brand-maroon-800 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-surface min-h-[85vh] lg:min-h-[90vh] flex items-center">
        {/* Subtle Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-brand-surface/40 pointer-events-none z-[1]" />
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-maroon-50/50 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-24 -left-24 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-brand-maroon-100/20 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-maroon-50 rounded-full border border-brand-maroon-100 mb-6 lg:mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-maroon-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-maroon-800">Premium Industrial Procurement</span>
            </motion.div>

            <h1 className="flex flex-col items-center text-4xl sm:text-6xl md:text-[6.5rem] lg:text-[7.5rem] font-black text-brand-dark tracking-tighter leading-[0.85] mb-10 lg:mb-12">
              <SplitText text="PRECISION" className="block" />
              <span className="text-brand-maroon-800 block">ENGINEERING</span>
              <SplitText text="SUPPLIES" className="block" delay={0.4} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto text-base lg:text-xl text-slate-500 mb-10 lg:mb-12 font-medium leading-relaxed"
            >
              Classic Way is the UAE's premier destination for high-standard industrial electrical components, marine hardware, and professional-grade engineering tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 w-full sm:w-auto"
            >
              <Link to="/products" className="btn-primary flex items-center justify-center group py-4 lg:py-5">
                Browse Catalogue
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:classicwayelectric@gmail.com" className="btn-secondary flex items-center justify-center py-4 lg:py-5">
                <Mail className="w-5 h-5 mr-2" />
                Technical Inquiry
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating Technical Specs Decorators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="hidden md:block absolute bottom-12 left-12 font-technical text-[10px] uppercase tracking-widest text-brand-dark space-y-1 z-10"
        >
          <p>LOC: 25.2672° N, 55.3000° E</p>
          <p>EST: 2023_CORE_INDUSTRIAL</p>
          <div className="h-0.5 w-12 bg-brand-maroon-800" />
        </motion.div>
      </section>

      {/* Industrial Authority Stats Section */}
      <section className="py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(128,0,0,0.1)_0px,transparent_50%)]"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 text-left md:text-left">
            {[
              { val: "35+", label: "Years Expertise", desc: "Owner legacy spanning over three decades" },
              { val: "5K+", label: "Active SKUs", desc: "Sourced from world-class global manufacturers" },
              { val: "24H", label: "Logistics Lead", desc: "Fast turnaround for high-demand hardware" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="space-y-4 group"
              >
                <div className="h-0.5 w-12 bg-brand-maroon-500 group-hover:w-full transition-all duration-700" />
                <h3 className="text-5xl lg:text-6xl font-black tracking-tighter text-white/90">{stat.val}</h3>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-maroon-400 mb-2">{stat.label}</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem Gallery */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="w-12 h-0.5 bg-brand-maroon-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-maroon-800">Industrial Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase italic leading-[0.9]">
                Specialized <span className="text-brand-maroon-800">Equipment</span> <br /> Architecture
              </h2>
            </div>
            <Link to="/products" className="group flex items-center justify-center md:justify-end gap-4 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-maroon-800 transition-colors">
              Full Inventory
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Cable Management", id: "CM_V1", img: "/cable_management.png" },
              { title: "Wiring Protection", id: "WP_V2", img: "/wiring_protection.png" },
              { title: "Power Connectivity", id: "PC_V1", img: "/power_connectivity.png" },
              { title: "Industrial Tools", id: "IT_V3", img: "/premium-tools.png" }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-maroon-900/40 transition-all duration-700 z-10" />
                <img src={cat.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt={cat.title} />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 tech-border-anim">
                  <span className="text-[9px] font-technical text-white/60 mb-2 block">{cat.id}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">{cat.title}</h3>
                  <div className="h-0.5 w-0 group-hover:w-12 bg-white mt-4 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Marquee Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-8 bg-brand-maroon-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Primary Product Segments</span>
          </div>
        </div>
        <Marquee items={mainIndustrialCategories} />
      </section>

      {/* High-Contrast Expertise Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-24">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-maroon-800 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-maroon-800/20">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-brand-dark tracking-tighter uppercase italic">
                  Clinical Quality <br /> <span className="text-brand-maroon-800">Industrial Standards</span>
                </h2>
              </div>
              <p className="text-slate-500 mb-10 leading-relaxed text-lg font-medium">
                Strategically positioned in the industrial heart of Dubai, we bridge the gap between global manufacturing and local technical requirements. Our sourcing process ensures every component meets rigorous safety and performance benchmarks.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Globe className="w-5 h-5" />, label: "Global Sourcing", desc: "Premium brands from 20+ countries" },
                  { icon: <Zap className="w-5 h-5" />, label: "Express Delivery", desc: "Same-day dispatch across UAE" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="text-brand-maroon-800">{item.icon}</div>
                    <h4 className="font-bold text-brand-dark text-sm uppercase tracking-tight">{item.label}</h4>
                    <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-brand-maroon-50 rounded-[40px] -rotate-2 z-0" />
              <div className="relative grid grid-cols-2 gap-6 z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-square"
                >
                  <img src="/home_hardware_hero.png" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Hardware" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[3/4] mt-12"
                >
                  <img src="/home_copper_hero.png" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Copper" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

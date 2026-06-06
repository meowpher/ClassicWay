import React from 'react';
import { motion } from 'framer-motion';
import { SplitText } from '../components/SplitText';
import { History, Users, Building2, MapPin, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-brand-surface min-h-screen selection:bg-brand-maroon-800 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-maroon-50/30 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-maroon-100/20 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-maroon-50 rounded-full border border-brand-maroon-100 mb-6"
              >
                <ShieldCheck className="w-4 h-4 text-brand-maroon-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-maroon-800">Our Heritage</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-[0.9] uppercase italic mb-8">
                <SplitText text="Decades of" className="block" />
                <span className="text-brand-maroon-800 block">Expertise</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto md:mx-0"
              >
                Led by a small, dedicated group of experts, we deliver industrial procurement solutions rooted in deep technical knowledge and family legacy.
              </motion.p>
            </div>
            
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-brand-maroon-500/10 blur-3xl rounded-full" />
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white border border-slate-100 rounded-[40px] shadow-2xl p-8 relative z-10 flex items-center justify-center">
                   <img src="/CW-logo.png" alt="Classic Way Legacy" className="w-full h-full object-contain opacity-90 mix-blend-multiply" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Experience */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(128,0,0,0.1)_0px,transparent_60%)]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <span className="w-12 h-px bg-brand-maroon-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-maroon-400">Leadership Grid</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-12 hover:bg-white/10 transition-colors"
            >
              <History className="w-10 h-10 text-brand-maroon-400 mb-6" />
              <h3 className="text-5xl font-black tracking-tighter mb-2">35+</h3>
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-maroon-400 mb-6">Years of Foundation</h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Founded on the extensive knowledge of Mustafa Piplodwala, whose three and a half decades in the industrial and electrical hardware sector set the standard for our quality and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-brand-maroon-800 border border-brand-maroon-700 rounded-[32px] p-8 lg:p-12 shadow-2xl shadow-brand-maroon-900/50"
            >
              <Users className="w-10 h-10 text-brand-maroon-200 mb-6" />
              <h3 className="text-5xl font-black tracking-tighter text-white mb-2">10+</h3>
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-maroon-200 mb-6">Years of Innovation</h4>
              <p className="text-brand-maroon-100 font-medium leading-relaxed">
                Spearheaded by Taher Mustafa Piplodwala, bringing modern operational expertise and a decade of industry-specific experience to streamline procurement and customer relations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Services */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase italic mb-6">
              Strategic <span className="text-brand-maroon-800">Infrastructure</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Operating natively across two core branches in the UAE, providing both walk-in retail access and large-scale corporate procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
             {[
               { city: 'Dubai (Deira)', type: 'Headquarters & Retail', desc: 'Central hub for walk-in customers and direct hardware sales.' },
               { city: 'Ajman (Al Jerf)', type: 'Logistics Hub', desc: 'Dedicated facility managing bulk orders, inventory, and express distribution.' }
             ].map((branch, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 p-8 rounded-[32px] flex items-start gap-6 hover:shadow-xl hover:border-brand-maroon-100 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-maroon-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-maroon-800 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-maroon-800 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-maroon-800 font-technical block mb-1">{branch.type}</span>
                    <h3 className="text-2xl font-black text-brand-dark tracking-tight uppercase mb-3">{branch.city}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{branch.desc}</p>
                  </div>
                </motion.div>
             ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-[40px] p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2 space-y-6">
                 <h3 className="text-3xl font-black text-brand-dark tracking-tighter uppercase">Client Engagement</h3>
                 <ul className="space-y-4">
                   {[
                     "Walk-in consultation for specialized components",
                     "Formal corporate quotations and RFQ processing",
                     "Tailored procurement packages for ongoing projects"
                   ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-maroon-800 shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-bold text-sm">{item}</span>
                      </li>
                   ))}
                 </ul>
               </div>
               <div className="md:w-1/2 bg-slate-50 p-8 rounded-[24px] border border-slate-100 flex flex-col items-center text-center">
                  <Building2 className="w-8 h-8 text-slate-400 mb-4" />
                  <h4 className="text-lg font-black text-brand-dark uppercase tracking-tight mb-2">Need a Quotation?</h4>
                  <p className="text-sm text-slate-500 font-medium mb-6">Our small group of experts is ready to process your bulk requirements.</p>
                  <Link to="/contact" className="btn-primary flex items-center gap-2 !py-4 w-full justify-center">
                     <Mail className="w-4 h-4" /> Reach Out
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

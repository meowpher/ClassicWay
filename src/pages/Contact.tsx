import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Send, ShieldCheck, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState(0);

  const branches = [
    {
      city: "Dubai (Deira)",
      type: "Headquarters & Retail",
      address: "17 28 St, Opposite Africana Hotel, Nakheel, Deira, Dubai",
      phone: "+971 4 227 1234",
      mobile: "+971 58 522 5596",
      email: "info@classicwayllc.com",
      hours: "Sat - Thu: 8:00 AM - 8:00 PM",
      mapUrl: "https://www.google.com/maps?q=CLASSIC+WAY+HARDWARE+%26+ELECTRICAL+TRADING+L.L.C+Deira&output=embed"
    },
    {
      city: "Ajman (Al Jerf)",
      type: "Logistics Hub",
      address: "Shop 10, Sheikh Ammar Bin Humaid St, Al Jerf Industrial 1, Ajman",
      phone: "+971 6 543 8343",
      mobile: "+971 58 522 5596",
      email: "info@classicwayllc.com",
      hours: "Sat - Thu: 8:00 AM - 7:00 PM",
      mapUrl: "https://www.google.com/maps?q=25.436655,55.527416&output=embed"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-maroon-800 selection:text-white flex flex-col">
       <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left Column - Form */}
          <div className="w-full lg:w-[35%] lg:min-w-[400px] border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col p-8 md:p-12 bg-slate-50/30 overflow-y-auto">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="mb-10"
            >
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-maroon-800 bg-brand-maroon-50 px-3 py-1 rounded-full border border-brand-maroon-100">Contact Us</span>
               <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter mt-4 leading-tight uppercase">
                  Technical <br/> Inquiry
               </h1>
            </motion.div>

            <form className="flex-grow flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-1.5 text-brand-dark">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 font-technical">Full Identity</label>
                  <input type="text" placeholder="John Smith" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-sm font-medium" />
               </div>
               <div className="space-y-1.5 text-brand-dark">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 font-technical">Corporate Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-sm font-medium" />
               </div>
               <div className="space-y-1.5 text-brand-dark">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 font-technical">Inquiry Class</label>
                  <select className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-sm font-medium appearance-none">
                     <option>Bulk Material RFQ</option>
                     <option>Industrial Support</option>
                  </select>
               </div>
               <div className="space-y-1.5 text-brand-dark">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 font-technical">Specifications</label>
                  <textarea rows={4} placeholder="Include part numbers or project scale..." className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-sm font-medium min-h-[110px]" />
               </div>
               
               <div className="pt-6">
                  <button className="w-full btn-primary !py-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] font-black shadow-xl shadow-brand-maroon-900/10 hover:shadow-brand-maroon-900/20 active:scale-[0.98] transition-all">
                     Transmit RFQ <Send className="w-3 h-3" />
                  </button>
                  <div className="flex items-center justify-center gap-3 mt-4 text-[9px] font-black text-slate-400 uppercase tracking-widest font-technical">
                    <ShieldCheck className="w-3 h-3 text-brand-maroon-800" />
                    <span>Secure End-to-End Transmission</span>
                  </div>
               </div>
            </form>
          </div>

          {/* Right Column - Map & Branch Switching */}
          <div className="flex-1 flex flex-col p-6 md:p-12 bg-white gap-8 md:gap-10">
             {/* Branch Switching */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 shrink-0">
                {branches.map((branch, i) => (
                   <button 
                      key={i}
                      onClick={() => setActiveBranch(i)}
                      className={`p-6 rounded-[32px] border transition-all duration-500 flex flex-col items-start relative overflow-hidden group ${
                         activeBranch === i 
                         ? 'border-brand-maroon-800 bg-brand-dark text-white shadow-2xl shadow-brand-maroon-900/20' 
                         : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 hover:bg-slate-100'
                      }`}
                   >
                     <div className={`text-[9px] font-black uppercase tracking-widest mb-2 flex items-center gap-2 font-technical ${activeBranch === i ? 'text-brand-maroon-400' : 'text-slate-400'}`}>
                        {branch.type}
                        {activeBranch === i && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-brand-maroon-500 shadow-[0_0_10px_#800000]" />}
                     </div>
                     <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">{branch.city}</span>
                     
                     <div className={`mt-4 text-[10px] font-bold ${activeBranch === i ? 'text-slate-400' : 'text-slate-500'}`}>
                        {branch.address.substring(0, 40)}...
                     </div>
                   </button>
                ))}
             </div>

             {/* Interactive Map and Core Metrics */}
             <div className="flex-1 flex flex-col xl:flex-row gap-10">
                {/* Embedded Map Section */}
                <div className="flex-[3] min-h-[300px] md:min-h-[400px] rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 bg-slate-100 relative group">
                    <iframe 
                      src={branches[activeBranch].mapUrl}
                      className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                      allowFullScreen
                      loading="lazy"
                    />
                 </div>
                
                {/* Dynamic Branch Metrics */}
                <div className="flex-[2] flex flex-col justify-center space-y-10 py-4">
                   <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-maroon-50 rounded-full border border-brand-maroon-100">
                        <MapPin className="w-4 h-4 text-brand-maroon-800" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-maroon-800 font-technical">Branch Coordinates</span>
                      </div>
                      <p className="text-lg font-bold text-brand-dark leading-snug pl-2">{branches[activeBranch].address}</p>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
                      <div className="space-y-3 pl-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-technical">Communication Grid</span>
                         <div className="flex flex-col gap-2">
                            <a href={`tel:${branches[activeBranch].phone}`} className="flex items-center gap-3 text-sm font-black text-brand-maroon-800 hover:translate-x-1 transition-transform group">
                               <Phone className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                               {branches[activeBranch].phone}
                            </a>
                            <a href={`tel:${branches[activeBranch].mobile}`} className="flex items-center gap-3 text-sm font-black text-brand-maroon-800 hover:translate-x-1 transition-transform group">
                               <Phone className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                               {branches[activeBranch].mobile}
                            </a>
                         </div>
                      </div>
                      <div className="space-y-3 pl-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-technical">Secure Mail</span>
                         <a href={`mailto:${branches[activeBranch].email}`} className="flex items-center gap-3 text-sm font-black text-brand-dark hover:text-brand-maroon-800 transition-colors uppercase tracking-tight group">
                            <Mail className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                            {branches[activeBranch].email}
                         </a>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-slate-100 pl-2">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                            <Clock className="w-5 h-5 text-brand-maroon-500" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 font-technical">Operating Hours</span>
                            <span className="text-sm font-black text-brand-dark uppercase tracking-tight">{branches[activeBranch].hours}</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

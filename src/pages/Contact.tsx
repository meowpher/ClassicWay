import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Send, ShieldCheck, Phone, Mail, Check, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Bulk Material RFQ',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const branch = {
    city: "Ajman (Al Jerf)",
    type: "Headquarters & Logistics Hub",
    address: "Shop 10, Sheikh Ammar Bin Humaid St, Al Jerf Industrial 1, Ajman, UAE",
    phone: "+971 6 543 8343",
    mobile: "+971 58 505 0461",
    email: "info@classicwayllc.com",
    hours: "Sat - Thu: 8:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.047834127204!2d55.524821875389655!3d25.436664277557536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9001112dc01%3A0x75c656eca4e5329!2sClassic%20Way%20Hardware%20%26%20Electric%20Trading%20LLC%2C%20Branch%201!5e0!3m2!1sen!2sae!4v1780762447547!5m2!1sen!2sae"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@classicwayllc.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Inquiry Type": formData.subject,
          Message: formData.message,
          _subject: `New Technical Inquiry: ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Bulk Material RFQ', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="h-full flex-grow flex flex-col lg:flex-row bg-white selection:bg-brand-maroon-800 selection:text-white overflow-y-auto lg:overflow-hidden">
      {/* Left Column - Compact Inquiry Form */}
      <div className="w-full lg:w-[360px] xl:w-[410px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between p-5 sm:p-6 lg:p-7 xl:p-8 bg-slate-50/40">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-brand-maroon-800 bg-brand-maroon-50 px-3 py-1 rounded-full border border-brand-maroon-100 inline-block font-technical">
              Contact Us
            </span>
            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-black text-brand-dark tracking-tighter mt-2 leading-none uppercase">
              Technical Inquiry
            </h1>
          </motion.div>

          <form className="flex flex-col gap-3 sm:gap-3.5" onSubmit={handleSubmit}>
            <div className="space-y-1 text-brand-dark">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-technical">Full Identity</label>
              <input 
                type="text" 
                placeholder="John Smith" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-xs font-medium" 
              />
            </div>
            
            <div className="space-y-1 text-brand-dark">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-technical">Corporate Email</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-xs font-medium" 
              />
            </div>

            <div className="space-y-1 text-brand-dark">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-technical">Inquiry Class</label>
              <select 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-xs font-medium appearance-none"
              >
                <option>Bulk Material RFQ</option>
                <option>Industrial Support</option>
              </select>
            </div>

            <div className="space-y-1 text-brand-dark">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-technical">Specifications</label>
              <textarea 
                rows={3} 
                placeholder="Part numbers or project scale..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-maroon-800/10 focus:border-brand-maroon-800 transition-all text-xs font-medium min-h-[70px] xl:min-h-[85px] resize-none" 
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full btn-primary !py-3.5 flex items-center justify-center gap-2.5 text-[11px] uppercase tracking-[0.2em] font-black shadow-lg transition-all active:scale-[0.98] ${
                status === 'submitting' 
                  ? 'bg-slate-800 border-slate-700 pointer-events-none' 
                  : status === 'success' 
                  ? 'bg-emerald-600 hover:bg-emerald-700 border-emerald-600'
                  : status === 'error' 
                  ? 'bg-rose-600 hover:bg-rose-700 border-rose-600'
                  : 'shadow-brand-maroon-900/10 hover:shadow-brand-maroon-900/20'
              }`}
            >
              {status === 'submitting' && (
                <>
                  Transmitting...
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"
                  />
                </>
              )}
              {status === 'success' && (
                <>
                  Transmitted Successfully <Check className="w-3.5 h-3.5" />
                </>
              )}
              {status === 'error' && (
                <>
                  Transmission Failed <AlertCircle className="w-3.5 h-3.5" />
                </>
              )}
              {status === 'idle' && (
                <>
                  Transmit RFQ <Send className="w-3 h-3" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center gap-2 pt-3 text-[9px] font-black text-slate-400 uppercase tracking-widest font-technical">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-maroon-800" />
          <span>Secure End-to-End Transmission</span>
        </div>
      </div>

      {/* Right Column - Facility Overview & Interactive Map */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-7 xl:p-8 bg-white gap-4 lg:gap-5 justify-between overflow-hidden">
        {/* Sleek Primary Facility Header Card */}
        <div className="p-4 sm:p-5 xl:p-6 rounded-2xl xl:rounded-[28px] border border-brand-maroon-800 bg-brand-dark text-white shadow-xl shadow-brand-maroon-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest mb-1 flex items-center gap-2 font-technical text-brand-maroon-400">
              {branch.type}
              <div className="w-1.5 h-1.5 rounded-full bg-brand-maroon-500 shadow-[0_0_10px_#800000]" />
            </div>
            <span className="text-xl sm:text-2xl xl:text-3xl font-black uppercase tracking-tight block leading-tight">
              {branch.city}
            </span>
            <div className="mt-1 text-xs text-slate-400 font-medium line-clamp-1">
              {branch.address}
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Classic+Way+Hardware+%26+Electric+Trading+LLC,+Branch+1/@25.4366643,55.5248219,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 text-[10px] tracking-widest uppercase self-start sm:self-auto shrink-0 flex items-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
          </a>
        </div>

        {/* Map & Facility Coordinates Split */}
        <div className="flex-1 min-h-[260px] flex flex-col md:flex-row gap-4 xl:gap-6 overflow-hidden">
          {/* Embedded Map */}
          <div className="flex-1 h-full min-h-[200px] rounded-2xl xl:rounded-[28px] overflow-hidden border border-slate-100 shadow-md bg-slate-100 relative group">
            <iframe 
              src={branch.mapUrl}
              title="Classic Way Ajman Logistics Hub Location"
              className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
            />
          </div>
          
          {/* Facility Details Panel */}
          <div className="w-full md:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-between gap-3 bg-slate-50/80 border border-slate-100 rounded-2xl xl:rounded-[28px] p-4 xl:p-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-maroon-50 rounded-full border border-brand-maroon-100">
                <MapPin className="w-3 h-3 text-brand-maroon-800" />
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-maroon-800 font-technical">Facility Coordinates</span>
              </div>
              <p className="text-xs xl:text-sm font-bold text-brand-dark leading-snug">{branch.address}</p>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-technical block">Communication Grid</span>
              <div className="flex flex-col gap-1">
                <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-xs font-black text-brand-maroon-800 hover:translate-x-0.5 transition-transform">
                  <Phone className="w-3.5 h-3.5 opacity-60" />
                  {branch.phone} <span className="text-[10px] text-slate-400 font-normal">(Landline)</span>
                </a>
                <a href={`tel:${branch.mobile}`} className="flex items-center gap-2 text-xs font-black text-brand-maroon-800 hover:translate-x-0.5 transition-transform">
                  <Phone className="w-3.5 h-3.5 opacity-60" />
                  {branch.mobile} <span className="text-[10px] text-slate-400 font-normal">(WhatsApp)</span>
                </a>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-technical block">Secure Mail</span>
              <a href={`mailto:${branch.email}`} className="flex items-center gap-2 text-xs font-black text-brand-dark hover:text-brand-maroon-800 transition-colors uppercase tracking-tight">
                <Mail className="w-3.5 h-3.5 opacity-60" />
                {branch.email}
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200/60 flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                <Clock className="w-4 h-4 text-brand-maroon-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5 font-technical">Operating Hours</span>
                <span className="text-xs font-black text-brand-dark uppercase tracking-tight">{branch.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

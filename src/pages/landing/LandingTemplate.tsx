import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { ArrowRight, ShieldCheck, BadgeCheck, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface LandingTemplateProps {
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  features: Feature[];
  valueProposition: string;
  locationKeyword: string;
}

export const LandingTemplate: React.FC<LandingTemplateProps> = ({
  seoTitle,
  seoDescription,
  heroHeadline,
  heroSubheadline,
  heroImage,
  features,
  valueProposition,
  locationKeyword,
}) => {
  useSEO({ title: seoTitle, description: seoDescription });

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-maroon-800 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-maroon-500/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-maroon-50 border border-brand-maroon-100 text-[10px] font-black uppercase tracking-widest text-brand-maroon-800 mb-6">
                <MapPin className="w-3 h-3" /> Classic Way Engineering in {locationKeyword}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-[1.1] uppercase mb-6">
                {heroHeadline}
              </h1>
              <p className="text-lg text-slate-500 font-medium mb-8 max-w-lg leading-relaxed">
                {heroSubheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                  Request Bulk Quotation <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://wa.me/971585050461" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 text-slate-700 font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors">
                  <Phone className="w-4 h-4" /> WhatsApp Sales
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-white rounded-[3rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <img src={heroImage} alt={seoTitle} className="w-full h-full object-contain" />
              <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <BadgeCheck className="w-8 h-8 text-brand-maroon-400" />
                  <div>
                    <div className="text-2xl font-black tracking-tighter">35+ Years</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400">Industry Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase mb-6">
              {valueProposition}
            </h2>
            <div className="w-24 h-1 bg-brand-maroon-800 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-brand-maroon-200 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-maroon-800 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-brand-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Section / CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-maroon-800/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 text-brand-maroon-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
            Ready to secure supply for your next project in {locationKeyword}?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm md:text-base font-bold">
            Partner with Classic Way Hardware & Electrical Trading LLC for compliant, high-durability industrial materials.
          </p>
          <Link to="/contact" className="btn-primary inline-flex bg-brand-maroon-600 hover:bg-brand-maroon-700 text-white border-none shadow-xl shadow-brand-maroon-900/50">
            Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
};

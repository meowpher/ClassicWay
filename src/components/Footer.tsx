import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-24 pb-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 group mb-8">
              <img
                src="/CW-logo.png"
                alt="Classic Way Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl tracking-tighter text-white uppercase italic">
                  Classic <span className="text-brand-maroon-500">Way</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Hardware & Electrical</span>
              </div>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium">
              Global procurement and supply of premium industrial electrical components and marine hardware since 2023. Led by veteran industry experts with over 35+ years of industrial legacy.
            </p>
            <div className="flex space-x-4">
              {/* Social or certification icons could go here */}
              <div className="p-2 border border-slate-800 rounded-lg text-slate-600 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="p-2 border border-slate-800 rounded-lg text-slate-600 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="p-2 border border-slate-800 rounded-lg text-slate-600 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 border-l-2 border-brand-maroon-500 pl-4">
              Quick Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/" className="hover:text-brand-maroon-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-brand-maroon-500 transition-colors">Industrial Catalogue</Link></li>
              <li><Link to="/about" className="hover:text-brand-maroon-500 transition-colors">About Us</Link></li>
              <li><Link to="/support" className="hover:text-brand-maroon-500 transition-colors">Technical Support</Link></li>
              <li><Link to="/contact" className="hover:text-brand-maroon-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 border-l-2 border-brand-maroon-500 pl-4">
              Technical Inquiry
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-brand-maroon-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="https://www.google.com/maps?ftid=0x3e5f43f1315cee8f:0x9208549ff253d064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white leading-relaxed"
                >
                  17 28 St, Naif Area,<br />Deira, Dubai, UAE
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-brand-maroon-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+971585050461" className="hover:text-white font-bold">+971 58 505 0461</a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-brand-maroon-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@classicwayllc.com" className="hover:text-white font-bold truncate">
                  info@classicwayllc.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-6">
              Procurement Request
            </h4>
            <p className="text-slate-500 mb-6 text-xs font-bold leading-relaxed">
              Facing custom requirements or bulk inquiries? Send your RFQ directly.
            </p>
            <a
              href="mailto:classicwayelectric@gmail.com?subject=Bulk%20Inquiry"
              className="inline-flex items-center justify-center w-full bg-brand-maroon-800 hover:bg-brand-maroon-700 text-white font-black py-4 px-6 rounded-xl transition-all shadow-xl shadow-black/20 group uppercase text-[10px] tracking-widest"
            >
              <Mail className="w-4 h-4 mr-3" />
              Request Bulk Quote
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest">
          <p className="text-slate-600">
            &copy; {new Date().getFullYear()} Classic Way Trading LLC. Specialized Industrial Solutions.
          </p>
          <div className="flex space-x-8 text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

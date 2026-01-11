
import React from 'react';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-24 px-4 border-t border-gray-100 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo in bordered box */}
        <div className="mb-8 p-4 bg-white border-2 border-[#3c5c7d] rounded-sm shadow-sm inline-block">
          <Logo className="h-12 w-auto object-contain" />
        </div>

        <p className="text-[#3c5c7d]/70 max-w-sm mb-12 text-sm leading-relaxed font-medium">
          Professional on-call driver service provider in Chennai. We prioritize safety, reliability, and punctuality for every ride.
        </p>

        <div className="w-full max-w-md space-y-12">
          {/* Quick Links Section */}
          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.3em] text-[#3c5c7d]/40">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#services" className="text-[#3c5c7d] hover:text-[#f48120] transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-[#3c5c7d] hover:text-[#f48120] transition-colors">Pricing</a></li>
              <li><a href="#safety" className="text-[#3c5c7d] hover:text-[#f48120] transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.3em] text-[#3c5c7d]/40">Contact Us</h4>
            <div className="space-y-2 text-sm font-bold text-[#3c5c7d]">
              <p>{CONTACT_INFO.LOCATION}</p>
              <p className="text-[#3c5c7d]/50 text-xs font-medium">WhatsApp: {CONTACT_INFO.WHATSAPP}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-50 w-full text-[9px] text-[#3c5c7d]/30 font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} MyCar Driver Chennai
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
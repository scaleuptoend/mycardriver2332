
import React from 'react';
import { PRICING, WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-4 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black mb-2 text-[#3c5c7d]">Transparent Rates</h2>
          <p className="text-gray-500 font-medium text-base">No hidden charges. No surge pricing. Ever.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-[10px] font-black text-[#f48120] uppercase tracking-[0.2em] mb-3">Standard</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-[#3c5c7d]">₹{PRICING.CITY.RATE}</span>
                <span className="text-lg font-bold text-gray-400">/hr</span>
              </div>
              <p className="text-gray-400 font-bold text-sm mt-1">Within City Limits</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["Min 4 Hours Booking", "Verified Professional", "All Car Types Supported", "Hassle-free Chat Booking"].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                  <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="bg-[#f8f9fa] rounded-2xl p-4 mb-6 text-center">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Min Cost</p>
                <p className="text-2xl font-black text-[#3c5c7d]">₹{PRICING.CITY.TOTAL_MIN}</p>
              </div>
              <a href={WHATSAPP_LINK} className="block w-full text-center py-4 bg-[#3c5c7d] text-white rounded-2xl font-black text-base hover:bg-[#f48120] transition-colors">Book Now</a>
            </div>
          </div>
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-2xl border-4 border-[#f48120] transform md:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#f48120] text-white text-[8px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-[10px] font-black text-[#f48120] uppercase tracking-[0.2em] mb-3">Outer Suburbs</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-[#3c5c7d]">₹{PRICING.OUTER.RATE}</span>
                <span className="text-lg font-bold text-gray-400">/hr</span>
              </div>
              <p className="text-gray-400 font-bold text-sm mt-1">OMR, ECR & Beyond</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["Min 4 Hours Booking", "Suburb Expertise", "Suburban Shortcut Routes", "Priority Response"].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                   <div className="w-4 h-4 rounded-full bg-[#f48120] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="bg-orange-50 rounded-2xl p-4 mb-6 text-center">
                <p className="text-[9px] font-black text-[#f48120] uppercase tracking-widest mb-1">Estimated Min Cost</p>
                <p className="text-2xl font-black text-[#3c5c7d]">₹{PRICING.OUTER.TOTAL_MIN}</p>
              </div>
              <a href={WHATSAPP_LINK} className="block w-full text-center py-4 bg-[#f48120] text-white rounded-2xl font-black text-base hover:bg-[#3c5c7d] transition-colors shadow-xl shadow-orange-100">Book Now</a>
            </div>
          </div>
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-[10px] font-black text-[#f48120] uppercase tracking-[0.2em] mb-3">Outstation</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-[#3c5c7d]">₹{PRICING.OUTSTATION.RATE}</span>
                <span className="text-lg font-bold text-gray-400">/day</span>
              </div>
              <p className="text-gray-400 font-bold text-sm mt-1">Long Distance Trips</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["12-Hour Service Day", "Highway Drive Experts", "Verified ID Proof Shared", "Food & Stay Allowance"].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                   <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-[#3c5c7d]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="bg-[#f8f9fa] rounded-2xl p-4 mb-6 text-center">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Base Daily Cost</p>
                <p className="text-2xl font-black text-[#3c5c7d]">₹{PRICING.OUTSTATION.TOTAL_MIN}</p>
              </div>
              <a href={WHATSAPP_LINK} className="block w-full text-center py-4 bg-[#3c5c7d] text-white rounded-2xl font-black text-base hover:bg-[#f48120] transition-colors">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

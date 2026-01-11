
import React from 'react';
import { PRICING } from '../constants';

const services = [
  {
    title: "Daily Commute",
    price: `₹${PRICING.CITY.RATE}`,
    unit: "/hr",
    desc: "Breeze through Chennai's traffic while a professional handles your car.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    )
  },
  {
    title: "Outer Loop",
    price: `₹${PRICING.OUTER.RATE}`,
    unit: "/hr",
    desc: "Perfect for OMR, ECR, and suburban trips with return flexibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    )
  },
  {
    title: "Outstation",
    price: `₹${PRICING.OUTSTATION.RATE}`,
    unit: "/day",
    desc: "Expert highway masters for your weekend getaways and temple tours.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 17 4-4-4-4"/><path d="m5 7-4 4 4 4"/><path d="M2 11h20"/></svg>
    )
  },
  {
    title: "24/7 Priority",
    price: "Premium",
    unit: "Verified",
    desc: "Emergency designated drivers for night parties or airport drops.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-2 pb-12 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black mb-1.5 text-[#3c5c7d]">Driving Solutions</h2>
          <p className="text-gray-500 max-w-lg mx-auto font-medium text-base leading-tight">Reliable chauffeur services designed for your busy lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item, idx) => (
            <div key={idx} className="group bg-[#f8f9fa] p-6 rounded-[30px] border border-transparent hover:border-orange-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="mb-4 p-2.5 bg-white rounded-xl inline-block text-[#f48120] shadow-sm group-hover:bg-[#f48120] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-[#3c5c7d] mb-0.5">{item.title}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-xl font-black text-[#f48120]">{item.price}</span>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.unit}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

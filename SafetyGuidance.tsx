
import React from 'react';
import Logo from './Logo';

const guidelines = [
  {
    title: "Driver Identity Verification",
    desc: "Every driver is KYC-verified. For your safety, we share the driver's name and contact details via WhatsApp before they arrive.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#f48120]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    title: "Professional Conduct",
    desc: "Our drivers are trained to be polite, punctual, and follow a strict no-smoking/no-alcohol policy while on duty.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#f48120]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    )
  },
  {
    title: "Vehicle Care & Traffic Rules",
    desc: "Drivers are experts in both manual and automatic cars. They are committed to safe speeds and respecting all traffic regulations in Chennai.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#f48120]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a.75.75 0 001.034 1.133 8.25 8.25 0 11-6.117 4.59.75.75 0 10-1.471-.304 9.75 9.75 0 107.548-5.419z" /></svg>
    )
  },
  {
    title: "WhatsApp Records",
    desc: "All booking details, start times, and end times are logged in our WhatsApp thread for your reference and safety audit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#f48120]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    )
  }
];

const SafetyGuidance: React.FC = () => {
  return (
    <section id="safety" className="py-16 px-4 bg-[#3c5c7d] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f48120] rounded-full blur-[120px] opacity-10 -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="bg-white p-2 rounded-xl inline-block mb-6 shadow-lg">
              <Logo className="h-10 w-auto object-contain" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Safe Rides, Every Time</h2>
            <p className="text-blue-100 text-base leading-relaxed opacity-90">
              At MyCar Driver, your safety and the care of your vehicle are our top priorities. 
              We implement multi-layered safety protocols for every trip.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest">Safety Shield Active</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all group">
              <div className="mb-4 transform group-hover:scale-105 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 border-l-4 border-[#f48120] bg-white/5 rounded-r-2xl max-w-2xl">
          <p className="text-sm italic text-blue-100">
            <strong>Pro-tip:</strong> Always verify the driver's ID card and match their photo with the one sent to you on WhatsApp before handing over your car keys.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetyGuidance;


import React from 'react';

const reasons = [
  {
    title: "Verified Drivers",
    desc: "Every driver undergoes background checks and driving skill tests.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    title: "Fast Response",
    desc: "Get driver details within 15-30 minutes of your booking inquiry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is exactly what you pay.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Chennai Local Expertise",
    desc: "Our drivers know the shortcuts and traffic patterns of Chennai.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-14 bg-[#3c5c7d] text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-5xl font-black mb-5 leading-tight">
            Driving Peace of Mind <br/>
            <span className="text-[#f48120]">Every Single Trip</span>
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl text-base md:text-lg leading-relaxed opacity-90">
            Whether it's a hectic office morning or a weekend outstation trip with family, we provide professional drivers you can trust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {reasons.map((r, i) => (
              <div key={i} className="group">
                <div className="bg-[#f48120] text-white w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                  {r.icon}
                </div>
                <h4 className="font-bold text-base mb-1.5">{r.title}</h4>
                <p className="text-xs text-blue-200 leading-relaxed opacity-80">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

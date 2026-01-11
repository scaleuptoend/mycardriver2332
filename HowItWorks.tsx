
import React from 'react';

const steps = [
  {
    title: "Message on WhatsApp",
    desc: "Click the chat button and send us your requirement."
  },
  {
    title: "Share Location & Time",
    desc: "Tell us where and when you need the driver."
  },
  {
    title: "Driver Assigned",
    desc: "We assign a verified driver near your location instantly."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="pt-8 pb-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black mb-1.5 text-[#3c5c7d]">How It Works</h2>
          <p className="text-[#3c5c7d]/50 text-sm font-medium">Booking a driver takes less than 2 minutes.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center relative group">
              <div className="inline-block mb-3">
                <div className="w-12 h-12 bg-[#f48120] text-white rounded-full flex items-center justify-center mx-auto shadow-md transform transition-transform group-hover:scale-105">
                  <span className="font-black text-lg">{idx + 1}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1.5 text-[#3c5c7d]">{step.title}</h3>
              <p className="text-[#3c5c7d]/50 max-w-xs mx-auto text-xs leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HowItWorks);
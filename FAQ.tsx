
import React, { useState } from 'react';

const faqs = [
  {
    q: "How do I book a driver?",
    a: "Booking is simple. Just click any 'Book' button to chat with our operations team on WhatsApp. Share your pick-up point and time, and we'll confirm your driver in minutes."
  },
  {
    q: "Are your drivers verified?",
    a: "Absolutely. Every driver undergoes a multi-step verification process: background checks, license verification, and a mandatory driving skill assessment."
  },
  {
    q: "Is there a minimum booking time?",
    a: "For city trips, we have a minimum booking of 4 hours. For outstation trips, it's typically based on a 12-hour service window per day."
  },
  {
    q: "Can I book for an automatic car?",
    a: "Yes! Our pool of drivers is experienced in handling all types of modern vehicles, including AMT, CVT, DSG, and high-end luxury automatic gearboxes."
  },
  {
    q: "Is food and stay included for outstation?",
    a: "For outstation trips, the customer usually provides food and a basic place to stay. Alternatively, a small allowance (Batta) can be paid directly to the driver."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black mb-2 text-[#3c5c7d]">Common Questions</h2>
          <p className="text-gray-500 font-medium text-sm">Everything you need to know about our service.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-[#f48120] shadow-lg' : 'border-gray-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
              >
                <span className={`font-bold text-base md:text-lg transition-colors ${openIndex === idx ? 'text-[#f48120]' : 'text-[#3c5c7d]'}`}>
                  {faq.q}
                </span>
                <span className={`flex-none w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'bg-[#f48120] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
                  <div className="h-px w-full bg-gray-50 mb-4"></div>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

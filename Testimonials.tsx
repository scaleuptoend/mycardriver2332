
import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  return (
    <section className="py-24 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#3c5c7d] mb-4">What Our Clients Say</h2>
          <p className="text-[#3c5c7d]/50 max-w-lg mx-auto font-medium leading-tight">Trusted by hundreds of car owners across Chennai for daily commutes and long trips.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#f8f9fa] p-8 md:p-12 rounded-[40px] border border-gray-50 relative group transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1">
              <div className="absolute top-8 right-8 text-[#f48120]/10">
                <svg width="48" height="38" viewBox="0 0 48 38" fill="currentColor">
                  <path d="M10.7431 37.0714C4.30026 31.4286 1.07883 25.1786 1.07883 18.3214C1.07883 13.0357 2.61454 8.64286 5.68597 5.14286C8.7574 1.64286 12.8931 0 18.0931 0V7.28571C15.4503 7.28571 13.3431 8.14286 11.7717 9.85714C10.2003 11.5714 9.41454 13.8214 9.41454 16.6071C9.41454 17.6786 9.61454 18.6071 10.0145 19.3929C10.4145 20.1786 11.0431 20.5714 11.8931 20.5714C14.1788 20.5714 16.0359 21.3214 17.4645 22.8214C18.8931 24.3214 19.6074 26.25 19.6074 28.6071C19.6074 31.0357 18.8217 33.0357 17.2503 34.6071C15.6788 36.1786 13.5097 36.9643 10.7431 36.9643V37.0714ZM38.2074 37.0714C31.7645 31.4286 28.5431 25.1786 28.5431 18.3214C28.5431 13.0357 30.0788 8.64286 33.1503 5.14286C36.2217 1.64286 40.3574 0 45.5574 0V7.28571C42.9145 7.28571 40.8074 8.14286 39.2359 9.85714C37.6645 11.5714 36.8788 13.8214 36.8788 16.6071C36.8788 17.6786 37.0788 18.6071 37.4788 19.3929C37.8788 20.1786 38.5074 20.5714 39.3574 20.5714C41.6431 20.5714 43.5002 21.3214 44.9288 22.8214C46.3574 24.3214 47.0717 26.25 47.0717 28.6071C47.0717 31.0357 46.2859 33.0357 44.7145 34.6071C43.1431 36.1786 40.974 36.9643 38.2074 36.9643V37.0714Z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#3c5c7d] mb-8 leading-tight italic relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3c5c7d] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-[#3c5c7d]">{t.name}</p>
                  <p className="text-[10px] text-[#f48120] font-black uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);

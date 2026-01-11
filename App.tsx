
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import SafetyGuidance from './components/SafetyGuidance';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import Admin from './components/Admin';
import LatestUpdates from './components/LatestUpdates';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'admin'>(
    window.location.hash === '#admin' ? 'admin' : 'home'
  );
  const [dbData, setDbData] = useState<{ posts: any[], testimonials: any[] }>({
    posts: [],
    testimonials: TESTIMONIALS
  });

  // Listen for hash changes for simple routing
  useEffect(() => {
    const handleHashChange = () => {
      setView(window.location.hash === '#admin' ? 'admin' : 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Attempt to fetch live data if backend exists
    const fetchData = async () => {
      try {
        const res = await fetch('/.netlify/functions/api');
        if (res.ok) {
          const data = await res.json();
          if (data.status === 'connected') {
            setDbData({
              posts: data.posts || [],
              testimonials: data.testimonials?.length > 0 ? data.testimonials : TESTIMONIALS
            });
          }
        }
      } catch (e) {
        console.log("Running in local mode - backend functions not detected.");
      }
    };

    fetchData();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (view === 'admin') {
    return <Admin onUpdate={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#f48120] selection:text-white bg-white text-[#3c5c7d]">
      <main className="flex-grow">
        <Hero />
        {dbData.posts.length > 0 && <LatestUpdates posts={dbData.posts} />}
        <Services />
        <Pricing />
        <WhyUs />
        <HowItWorks />
        <Testimonials testimonials={dbData.testimonials} />
        <SafetyGuidance />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
      <StickyCTA />
    </div>
  );
};

export default App;

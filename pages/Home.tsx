
import React, { useEffect, useRef, useState } from 'react';

// Reusable ScrollReveal component using Intersection Observer
const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Official Logo Hero Section */}
      <section className="pt-20 px-6 text-center max-w-5xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center justify-center mb-10">
          {/* Logo Mark: The Official Logo from assets */}
          <div className="relative mb-6 animate-in fade-in zoom-in duration-1000 ease-out transition-transform hover:scale-105">
            <img 
              src="/assets/logo.png" 
              alt="Outvibe Official Logo" 
              className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl"
            />
            {/* Logo Shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/5 blur-2xl rounded-full"></div>
          </div>
          
          <ScrollReveal delay={200}>
            <h1 className="text-7xl md:text-9xl font-serif-brand tracking-tight text-[#3D1F00] mb-2 leading-none">
              Outvibe
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-2xl md:text-4xl font-light text-slate-600 tracking-tight">
              together, outside
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Host experiences and post events that bridge the gap between digital memories and physical presence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={800} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#" className="w-full sm:w-auto px-10 py-5 bg-[#3D1F00] text-white rounded-2xl font-semibold hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 active:scale-95">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s1.73-.67 3.38-.74c1.72.07 3.14.71 4.09 2.05-3.41 1.95-2.81 6.38.16 7.54-.7 1.84-1.63 3.5-2.71 4.38zM12.03 7.25c-.02-2.23 1.93-4.14 4.07-4.25.26 2.37-2.12 4.41-4.07 4.25z"/></svg>
            App Store
          </a>
          <a href="#" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-[#3D1F00] rounded-2xl font-semibold hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.81,15.12L18.89,13.92C20.59,12.93 20.59,11.07 18.89,10.08L16.81,8.88L14.39,11.3L16.81,15.12M13.69,12L16.11,9.58L4.54,2.93C4.24,2.76 3.9,2.71 3.59,2.79L13.69,12M3.59,21.21C3.9,21.29 4.24,21.24 4.54,21.07L16.11,14.42L13.69,12L3.59,21.21M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"/></svg>
            Google Play
          </a>
        </ScrollReveal>
      </section>

      {/* Hero Visual */}
      <section className="px-6">
        <ScrollReveal className="max-w-6xl mx-auto relative group">
          <div className="absolute inset-0 bg-[#FF6B00]/5 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
          <div className="relative bg-white border border-slate-100 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000" alt="Landscape adventure" className="w-full h-[500px] object-cover rounded-[2.5rem] transition-transform duration-[3s] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F00]/80 via-[#3D1F00]/20 to-transparent flex items-end p-12">
              <div className="text-white max-w-lg">
                <h3 className="text-4xl font-serif-brand mb-4">Host your next vibe.</h3>
                <p className="text-white/80 font-light text-xl leading-relaxed">From sunrise summit hikes to secluded beach bonfires. Outvibe is where the experience begins.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Experience Section */}
      <section className="px-6 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <ScrollReveal className="relative z-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
              <img src="https://images.unsplash.com/photo-1467139701929-18c0d27a7516?auto=format&fit=crop&q=80&w=1200" alt="Outdoor gathering" className="rounded-[3rem] shadow-2xl" />
            </ScrollReveal>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <ScrollReveal>
              <div className="space-y-2">
                <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-[0.2em]">Experience Posting</span>
                <h2 className="text-5xl md:text-6xl font-serif-brand text-[#3D1F00] leading-tight italic">Gather the circle.</h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                Post your upcoming experiences and invite friends to join. Outvibe automatically bridges the gap between the plan and the memory.
              </p>
            </ScrollReveal>
            
            <div className="space-y-8">
              {[
                {
                  title: "Seamless Events",
                  desc: "Schedule adventures with precise locations and clear timelines.",
                  icon: <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                },
                {
                  title: "Collective Vibes",
                  desc: "Media from everyone attending merges into a single, beautiful shared timeline.",
                  icon: <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 200 + 400} className="flex items-start gap-6 group">
                  <div className="mt-1 bg-orange-50 p-4 rounded-2xl group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-500">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#3D1F00] mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-lg font-light">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif-brand text-[#3D1F00] mb-4">Capture the feeling.</h2>
          <p className="text-slate-400 text-xl font-light italic">together, outside.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Create Vibes",
              desc: "Quickly capture nature and gatherings with our calm-centered media tools.",
              icon: <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
            },
            {
              title: "Experience Hub",
              desc: "A central place for all your shared journeys and future meetups.",
              icon: <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            },
            {
              title: "The Map",
              desc: "A geographical timeline of your life's most meaningful outside moments.",
              icon: <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            },
            {
              title: "Privacy First",
              desc: "Zero tracking, zero ads. Your memories are encrypted and entirely yours.",
              icon: <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
            }
          ].map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 150} className="group p-10 bg-white rounded-3xl hover:shadow-2xl transition-all border border-slate-50 hover:border-orange-100 flex flex-col h-full">
              <div className="mb-8 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-light flex-grow">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-6 max-w-5xl mx-auto">
        <ScrollReveal className="bg-[#3D1F00] rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 blur-[120px] group-hover:bg-[#FF6B00]/20 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B00]/10 blur-[120px] group-hover:bg-[#FF6B00]/20 transition-all duration-1000"></div>
          
          <h2 className="text-5xl md:text-7xl font-serif-brand mb-10 italic">together, outside.</h2>
          
          <p className="text-slate-300 text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Reclaim your memories from the noise of social feeds. Start your journey with Outvibe today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="#" className="w-full sm:w-auto px-12 py-5 bg-[#FF6B00] text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
              Join the Vibe
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';

const ChildSafety: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl md:text-6xl font-serif-brand text-[#3D1F00] mb-10 italic uppercase tracking-tight leading-tight">Child Safety Standards</h1>
      <p className="text-slate-400 mb-12 font-medium tracking-wide uppercase text-xs font-mono">Effective Date: April 2026</p>
      
      <div className="space-y-12 text-slate-600 leading-relaxed font-light text-lg">
        <section className="space-y-4">
          <p className="text-xl text-[#3D1F00] font-medium leading-normal italic">
            Outvibe is committed to ensuring a safe and respectful environment for all users. We have a zero-tolerance policy for child sexual abuse and exploitation (CSAE).
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">OUR COMMITMENT</h2>
          <p>
            We strictly prohibit any content that involves or promotes child sexual abuse material (CSAM). Any such content will be removed immediately, and appropriate action will be taken against the responsible accounts, including permanent bans and reporting to relevant law enforcement authorities.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">REPORTING MECHANISM</h2>
          <p>
            Users can report inappropriate or harmful content directly within the Outvibe app. We review all reports promptly and take necessary action, including content removal and account suspension.
          </p>
          <div className="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-[2rem]">
              <p className="text-sm font-bold text-[#3D1F00] uppercase tracking-widest mb-4">How to report:</p>
              <ul className="list-disc pl-6 space-y-3 text-base font-normal">
                  <li>Use the "Report" button available on every post and user profile.</li>
                  <li>Select the appropriate category for the violation.</li>
                  <li>Our moderation team reviews reports 24/7 and takes action within hours.</li>
              </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">COMPLIANCE WITH LAWS</h2>
          <p>
            Outvibe complies with all applicable child safety laws and regulations. We report confirmed cases of CSAM to relevant law enforcement authorities as required by law, including the National Center for Missing & Exploited Children (NCMEC).
          </p>
        </section>

        <section className="p-10 bg-[#FAF9F6] rounded-[3rem] border border-orange-100/50 mt-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] mb-6 italic text-center">CONTACT US</h2>
          <p className="text-center mb-6 text-slate-500 font-normal">If you have concerns related to child safety, please contact our safety team at:</p>
          <div className="flex justify-center">
            <a href="mailto:shreyasms2000@gmail.com" className="text-2xl md:text-3xl font-bold text-[#FF6B00] hover:text-[#3D1F00] transition-colors duration-300 decoration-[#FF6B00]/20 underline underline-offset-8">
              shreyasms2000@gmail.com
            </a>
          </div>
        </section>
        
        <p className="text-center font-bold text-[#3D1F00] mt-12 pb-12 opacity-30 uppercase tracking-[0.2em] text-[10px]">
          Together, Outside. Safely.
        </p>
      </div>
    </div>
  );
};

export default ChildSafety;


import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="bg-orange-50 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
      </div>
      <h1 className="text-5xl font-serif-brand text-[#4B2C00] mb-6 italic">Support</h1>
      <p className="text-xl text-slate-500 mb-12 font-light">
        We're here to help you get the most out of Outvibe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-lg shadow-slate-100 hover:border-orange-100 transition-colors">
          <h3 className="text-lg font-bold text-[#4B2C00] mb-2">General Support</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">For help with your account, vibes, or reporting technical issues.</p>
          <a href="mailto:outvibesocial@gmail.com" className="text-orange-600 font-bold text-lg hover:underline">outvibesocial@gmail.com</a>
        </div>
        <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-lg shadow-slate-100 hover:border-orange-100 transition-colors">
          <h3 className="text-lg font-bold text-[#4B2C00] mb-2">Privacy & Legal</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">For data requests, legal inquiries, or privacy concerns.</p>
          <a href="mailto:outvibesocial@gmail.com" className="text-orange-600 font-bold text-lg hover:underline">outvibesocial@gmail.com</a>
        </div>
      </div>

      <div className="mt-20 pt-16 border-t border-slate-100 max-w-xl mx-auto text-left">
        <h3 className="text-2xl font-serif-brand text-[#4B2C00] mb-8 italic text-center">Frequently Asked Questions</h3>
        <div className="space-y-10">
          <div>
            <h4 className="font-bold text-slate-900">How do I post an experience or event?</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">From the main map or your profile, tap the "Host" icon. You can set a location, date, and description for your event. Once posted, you can invite your Outvibe contacts.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">How are events linked to vibes?</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">Every event you post creates a dedicated "Shared Vibe." Anyone who attends the event can upload photos and videos to this vibe, creating a collective memory of the experience.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">How do I share a vibe?</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">Outvibe is built for private groups. Tap the "+" on any memory to invite specific friends to view or contribute to that experience.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Does Outvibe work offline?</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">Yes! You can capture vibes while off-the-grid. They will securely sync to your map once you're back in range.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

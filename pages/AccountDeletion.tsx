
import React from 'react';

const AccountDeletion: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="bg-orange-50 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </div>
      <h1 className="text-5xl font-serif-brand text-[#4B2C00] mb-6 italic">Account Deletion</h1>
      <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
        We're sorry to see you go. At Outvibe, we want to make managing your data as simple and transparent as possible.
      </p>

      <div className="text-left bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 space-y-8 max-w-2xl mx-auto">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">How to delete your account</h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600 font-light">
            <li>Open the <strong>Outvibe</strong> app.</li>
            <li>Tap your <strong>Settings</strong> icon in the top-right corner.</li>
            <li>Scroll to the <strong>Account</strong> and tap <strong>Delete Account</strong>.</li>
            <li>Confirm your choice by tapping the final <strong>confirmation delete</strong> button.</li>
          </ol>
        </div>

        <hr className="border-slate-100" />

        <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
          <h3 className="font-bold text-[#4B2C00] text-sm uppercase tracking-wider mb-2">30-Day Recovery Policy</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you log back into your account within 30 days of initiating deletion, your account and all data will be fully restored. 
            After 30 days, your account and all associated data is permanently deleted and cannot be recovered.
          </p>
        </div>
      </div>

      <div className="mt-12 text-slate-400 text-sm">
        Need help? Contact <a href="mailto:outvibesocial@gmail.com" className="text-orange-600 font-semibold hover:underline">outvibesocial@gmail.com</a>
      </div>
    </div>
  );
};

export default AccountDeletion;

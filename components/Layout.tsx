
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - becomes solid when menu is open to prevent transparency issues */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-white' : 'bg-white/90 backdrop-blur-md'} border-b border-slate-100`}>
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="assets/logo.png" 
                alt="Outvibe Logo" 
                className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-2xl font-serif-brand tracking-tight text-[#3D1F00]">Outvibe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
            <Link to="/support" className="hover:text-[#FF6B00] transition-colors">Support</Link>
            <Link to="/" className="px-6 py-2.5 bg-[#3D1F00] text-white rounded-xl text-sm font-semibold hover:bg-black transition-all">
              Get App
            </Link>
          </div>

          {/* Mobile Menu Button with Background */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 bg-slate-50 border border-slate-200 text-[#3D1F00] rounded-xl focus:outline-none z-50 hover:bg-white hover:border-[#FF6B00] transition-all shadow-sm active:scale-95"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Overlay - explicitly solid background */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full pt-24 px-8 space-y-8 bg-white">
            <Link 
              to="/" 
              className="text-4xl font-serif-brand text-[#3D1F00] hover:text-[#FF6B00]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/support" 
              className="text-4xl font-serif-brand text-[#3D1F00] hover:text-[#FF6B00]"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link 
              to="/privacy" 
              className="text-lg font-medium text-slate-400 hover:text-[#FF6B00]"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-lg font-medium text-slate-400 hover:text-[#FF6B00]"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <Link 
              to="/account-deletion" 
              className="text-lg font-medium text-slate-400 hover:text-[#FF6B00]"
              onClick={() => setIsMenuOpen(false)}
            >
              Account Deletion
            </Link>
            
            <div className="pt-8">
              <button className="w-full py-5 bg-[#3D1F00] text-white rounded-2xl text-xl font-bold shadow-xl shadow-slate-900/10">
                Get the App
              </button>
            </div>

            <div className="mt-auto pb-12 text-center text-slate-400 text-sm">
              <p>© {new Date().getFullYear()} Outvibe</p>
              <p className="italic">together, outside.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="assets/logo.png" 
                  alt="Outvibe Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-2xl font-serif-brand text-[#3D1F00]">Outvibe</h3>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Experience the world together. A memory-based platform for outdoor adventures and collective storytelling.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="/support" className="hover:text-[#FF6B00] transition-colors">Contact & Support</Link></li>
                <li><Link to="/account-deletion" className="hover:text-[#FF6B00] transition-colors">Account Deletion</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="/privacy" className="hover:text-[#FF6B00] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#FF6B00] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Outvibe. All rights reserved.</p>
            <p className="mt-4 md:mt-0 font-medium">together, outside.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

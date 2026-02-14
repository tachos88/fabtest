
import React, { useState } from 'react';
import { UserRole } from '../types';
import { NAVIGATION } from '../constants';
import { LogOut, Menu, X, UserCircle, Shield, Phone, Mail } from 'lucide-react';
import { HollmanLogo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeRole, 
  setActiveRole, 
  currentPage, 
  setCurrentPage 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isATS = activeRole === UserRole.ADMIN || activeRole === UserRole.RECRUITER;

  const handleNavClick = (href: string) => {
    setCurrentPage(href);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Role Switcher (Developer Helper) */}
      <div className="bg-[#1B263B] text-white text-[10px] px-4 py-1 flex justify-between items-center uppercase tracking-widest z-50">
        <span>Dev Environment | Hollman Consultancy</span>
        <div className="flex gap-4 items-center">
          <span>Switch View:</span>
          <button 
            onClick={() => { setActiveRole(UserRole.CANDIDATE); setCurrentPage('/'); }}
            className={`hover:text-blue-200 ${activeRole === UserRole.CANDIDATE ? 'text-blue-200 font-bold underline' : ''}`}
          >Public Website</button>
          <button 
            onClick={() => { setActiveRole(UserRole.ADMIN); setCurrentPage('/ats'); }}
            className={`hover:text-blue-200 ${activeRole === UserRole.ADMIN ? 'text-blue-200 font-bold underline' : ''}`}
          >Internal ATS (Admin)</button>
        </div>
      </div>

      {!isATS ? (
        // Public Header
        <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-slate-100 shadow-sm">
          <div className="container mx-auto px-4 h-24 flex items-center justify-between">
            <div 
              className="flex items-center gap-4 cursor-pointer group scale-90"
              onClick={() => handleNavClick('/')}
            >
              <HollmanLogo className="h-14" />
            </div>

            <nav className="hidden md:flex gap-8">
              {NAVIGATION.PUBLIC.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-semibold transition-colors hover:text-[#1B263B] ${currentPage === item.href ? 'text-[#1B263B] border-b-2 border-[#1B263B]' : 'text-slate-500'}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex flex-col items-end text-[11px] font-bold text-slate-400 tracking-tighter">
                <span>+31 6 53 64 51 81</span>
                <span>Info@hollman-consultancy.nl</span>
              </div>
              <button 
                onClick={() => handleNavClick('/vacatures')}
                className="hidden lg:block px-6 py-3 bg-[#1B263B] text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
              >
                Vacatures
              </button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </header>
      ) : (
        // ATS Header
        <header className="sticky top-0 bg-[#1B263B] text-white z-40 h-16 flex items-center justify-between px-6 shadow-xl">
          <div className="flex items-center gap-4">
            <HollmanLogo dark className="h-10 scale-75" />
            <span className="font-bold tracking-wider text-xs ml-2 opacity-50">ADMIN PORTAL</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition-colors">
              <UserCircle size={20} />
              <span className="text-sm font-medium">Mark Hollman</span>
            </div>
            <button className="text-slate-400 hover:text-white transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex">
        {isATS && (
          // ATS Sidebar
          <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col py-8 px-4 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
            <div className="space-y-1">
              {NAVIGATION.ATS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    currentPage === item.href 
                      ? 'bg-[#1B263B] text-white shadow-lg shadow-slate-200' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </aside>
        )}

        <main className={`flex-grow ${isATS ? 'bg-slate-50 p-6 lg:p-10' : ''}`}>
          {children}
        </main>
      </div>

      {!isATS && (
        // Public Footer
        <footer className="bg-[#1B263B] text-slate-300 py-16 border-t border-slate-800">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-8">
                <HollmanLogo dark className="h-16 items-start" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400 mb-6 italic">
                "Your sustainable recruitment partner, building the future with the right people."
              </p>
              <div className="space-y-3 text-xs font-bold tracking-wide">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-slate-500" />
                  <span>+31 6 53 64 51 81</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-500" />
                  <span>Info@hollman-consultancy.nl</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Sectoren</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Woningbouw</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vastgoed</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infrastructuur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projectontwikkeling</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Diensten</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Werving & Selectie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interim Recruitment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Talent Mapping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Executive Search</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie instellingen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR Verzoek</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Hollman Consultancy. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;

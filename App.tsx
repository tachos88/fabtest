
import React, { useState } from 'react';
import Layout from './components/Layout';
import { UserRole } from './types';
import Home from './pages/Public/Home';
import Vacancies from './pages/Public/Vacancies';
import Dashboard from './pages/ATS/Dashboard';
import Pipeline from './pages/ATS/Pipeline';

const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState<UserRole>(UserRole.CANDIDATE);
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    if (activeRole === UserRole.CANDIDATE) {
      switch (currentPage) {
        case '/':
          return <Home onNavigate={setCurrentPage} />;
        case '/vacatures':
          return <Vacancies />;
        case '/inschrijven':
          return (
            <div className="container mx-auto px-4 py-20 max-w-2xl text-center min-h-[70vh] flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-8 tracking-tight">Word onderdeel van ons netwerk.</h1>
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-left">
                <p className="mb-8 text-slate-500 font-light">Laat je gegevens achter en onze recruiters nemen binnen 48 uur contact met je op voor een kennismaking.</p>
                <form name="inschrijven" method="POST" data-netlify="true" className="space-y-6">
                  <input type="hidden" name="form-name" value="inschrijven" />
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" name="firstname" placeholder="Voornaam" required className="p-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:ring-2 focus:ring-[#1B263B]" />
                    <input type="text" name="lastname" placeholder="Achternaam" required className="p-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:ring-2 focus:ring-[#1B263B]" />
                  </div>
                  <input type="email" name="email" placeholder="Email adres" required className="w-full p-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:ring-2 focus:ring-[#1B263B]" />
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/50">
                    <p className="text-slate-400 text-sm">Upload je CV (PDF/Word)</p>
                    <input type="file" name="cv" className="mt-4 text-xs mx-auto" />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" name="gdpr_consent" className="mt-1" required />
                    <label htmlFor="consent" className="text-xs text-slate-400 leading-relaxed">Ik ga akkoord met de opslag van mijn gegevens voor recruitment doeleinden conform het privacybeleid.</label>
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#1B263B] text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg">Inschrijven</button>
                </form>
              </div>
            </div>
          );
        default:
          return <Home onNavigate={setCurrentPage} />;
      }
    } else {
      // ATS Views (Internal Mock)
      switch (currentPage) {
        case '/ats':
          return <Dashboard />;
        case '/ats/pipeline':
          return <Pipeline />;
        default:
          return <Dashboard />;
      }
    }
  };

  return (
    <Layout 
      activeRole={activeRole} 
      setActiveRole={setActiveRole}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;

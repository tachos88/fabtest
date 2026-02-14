
import React from 'react';
import { Building2, HardHat, Users2, ShieldCheck, Palette, Cpu, Compass, Phone, Mail } from 'lucide-react';
import { HollmanLogo } from '../../components/Logo';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-[#1B263B] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B263B] via-[#1B263B]/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
              <ShieldCheck size={16} className="text-white" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/80">Premium Recruitment Partners</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1] mb-10 tracking-tighter">
              Bouwen aan de <br />
              <span className="text-slate-400 italic font-light">toekomst.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
              "Your sustainable recruitment partner, building the future with the right people."
            </p>
            <button 
              onClick={scrollToContact}
              className="px-10 py-5 bg-white text-[#1B263B] font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-black/20"
            >
              Stuur een bericht
            </button>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold text-[#1B263B] uppercase tracking-[0.5em] mb-6">Expertise</h2>
            <h3 className="text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">Onze focus ligt op<br/><span className="italic font-light text-slate-400">technische kernsectoren.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Palette />, title: "Architectuur", desc: "Creatieve visionairs voor de gebouwde omgeving." },
              { icon: <Cpu />, title: "Engineering", desc: "Technische meesters in constructie en installatie." },
              { icon: <HardHat />, title: "Constructie", desc: "Realisatiekracht van fundering tot oplevering." },
              { icon: <Building2 />, title: "Vastgoed", desc: "Beheer en ontwikkeling van commercieel portfolio." },
              { icon: <Compass />, title: "Infra", desc: "Mobiliteit en civiele hoogstandjes." },
              { icon: <Users2 />, title: "Interim", desc: "Snelle inzet van ervaren professionals." },
            ].map((card, i) => (
              <div key={i} className="group p-10 border border-slate-100 rounded-3xl hover:border-[#1B263B] transition-all bg-slate-50/30">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#1B263B] group-hover:bg-[#1B263B] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form (Static with Netlify) */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Laten we praten.</h2>
                <p className="text-slate-500 mb-8 font-light">
                  Heeft u een vraag over een vacature of bent u op zoek naar talent voor uw organisatie? Vul het formulier in en we reageren binnen 24 uur.
                </p>
                <div className="space-y-4">
                  <div className="text-sm font-bold text-[#1B263B] tracking-widest uppercase">Contactgegevens</div>
                  <div className="text-xl font-bold">+31 6 53 64 51 81</div>
                  <div className="text-slate-500">Info@hollman-consultancy.nl</div>
                </div>
              </div>
              <form name="contact" method="POST" data-netlify="true" className="space-y-5">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#1B263B]" placeholder="Naam" />
                <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#1B263B]" placeholder="Email" />
                <textarea name="message" required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#1B263B] h-32" placeholder="Uw bericht"></textarea>
                <button type="submit" className="w-full py-4 bg-[#1B263B] text-white font-bold rounded-xl hover:bg-slate-800 transition-all">Verzend bericht</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <li><span className="text-slate-400">Woningbouw</span></li>
              <li><span className="text-slate-400">Vastgoed</span></li>
              <li><span className="text-slate-400">Infrastructuur</span></li>
              <li><span className="text-slate-400">Projectontwikkeling</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Diensten</h4>
            <ul className="space-y-4 text-sm">
              <li><span className="text-slate-400">Werving & Selectie</span></li>
              <li><span className="text-slate-400">Interim Recruitment</span></li>
              <li><span className="text-slate-400">Talent Mapping</span></li>
              <li><span className="text-slate-400">Executive Search</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><span className="text-slate-400">Privacy Policy</span></li>
              <li><span className="text-slate-400">Cookie instellingen</span></li>
              <li><span className="text-slate-400">GDPR Verzoek</span></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Hollman Consultancy. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;


import React, { useState } from 'react';
import { Calendar, Clock, User, FileText, CheckCircle2, ChevronRight, ChevronLeft, Upload, Paperclip, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

type Step = 'preferences' | 'datetime' | 'details' | 'success';

const IntakeWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('preferences');
  const [isParsing, setIsParsing] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Vast',
    discipline: 'Bouw',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    cv: null as File | null
  });

  const timeSlots = ['09:00', '10:30', '13:00', '14:30', '16:00'];
  const dates = [
    { day: 'Ma', date: '25', month: 'Mrt' },
    { day: 'Di', date: '26', month: 'Mrt' },
    { day: 'Wo', date: '27', month: 'Mrt' },
    { day: 'Do', date: '28', month: 'Mrt' },
    { day: 'Vr', date: '29', month: 'Mrt' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, cv: file });
      // Simuleer een automatische trigger voor AI parsing als een bestand wordt geüpload
      handleAiParsing(file);
    }
  };

  const handleAiParsing = async (file: File) => {
    setIsParsing(true);
    try {
      // In een echte productie-omgeving zouden we de bestandsinhoud naar Gemini sturen.
      // Voor deze demo simuleren we de AI-extractie na een korte vertraging.
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const aiResponse = {
        name: "Jan de Vries",
        email: "jan.devries@voorbeeld.nl",
        phone: "06 12 34 56 78"
      };

      setFormData(prev => ({
        ...prev,
        name: aiResponse.name,
        email: aiResponse.email,
        phone: aiResponse.phone
      }));
    } catch (error) {
      console.error("AI Parsing failed", error);
    } finally {
      setIsParsing(false);
    }
  };

  const nextStep = () => {
    if (currentStep === 'preferences') setCurrentStep('datetime');
    else if (currentStep === 'datetime') setCurrentStep('details');
    else if (currentStep === 'details') setCurrentStep('success');
  };

  const prevStep = () => {
    if (currentStep === 'datetime') setCurrentStep('preferences');
    else if (currentStep === 'details') setCurrentStep('datetime');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'preferences':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Waar ben je naar op zoek?</h2>
              <p className="text-slate-500">Help ons je intake voor te bereiden.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Vast', 'Interim'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData({ ...formData, type })}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    formData.type === type ? 'border-[#1B263B] bg-slate-50' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${formData.type === type ? 'bg-[#1B263B] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Calendar size={20} />
                  </div>
                  <div className="font-bold text-lg">{type}</div>
                  <div className="text-sm text-slate-500">{type === 'Vast' ? 'Werving & Selectie voor lange termijn.' : 'Flexibele interim opdrachten.'}</div>
                </button>
              ))}
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Discipline</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Bouw', 'Vastgoed', 'Infra', 'Dev'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setFormData({ ...formData, discipline: d })}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                      formData.discipline === d ? 'bg-[#1B263B] text-white border-[#1B263B]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={nextStep} className="w-full py-5 bg-[#1B263B] text-white font-bold rounded-2xl flex items-center justify-center gap-2 group shadow-xl shadow-slate-200">
              Volgende stap <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        );

      case 'datetime':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Kies een moment</h2>
              <p className="text-slate-500">Wanneer heb je tijd voor een digitale kennismaking?</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between gap-2">
                {dates.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => setFormData({ ...formData, date: d.date })}
                    className={`flex-1 flex flex-col items-center py-4 rounded-2xl border transition-all ${
                      formData.date === d.date ? 'border-[#1B263B] bg-slate-50 text-[#1B263B]' : 'border-slate-100 hover:bg-slate-50 text-slate-500'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1">{d.day}</span>
                    <span className="text-xl font-bold">{d.date}</span>
                    <span className="text-[10px] font-medium">{d.month}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Beschikbare tijden</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setFormData({ ...formData, time: t })}
                      className={`py-3 rounded-xl text-sm font-bold border flex items-center justify-center gap-2 transition-all ${
                        formData.time === t ? 'bg-[#1B263B] text-white border-[#1B263B]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Clock size={14} /> {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 py-5 border border-slate-200 text-slate-600 font-bold rounded-2xl flex items-center justify-center gap-2">
                <ChevronLeft size={18} /> Terug
              </button>
              <button 
                onClick={nextStep} 
                disabled={!formData.date || !formData.time}
                className="flex-[2] py-5 bg-[#1B263B] text-white font-bold rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-slate-200"
              >
                Gegevens invullen <ChevronRight size={18} />
              </button>
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Laatste details</h2>
              <p className="text-slate-500">Hoe kunnen we je bereiken?</p>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-900">AI Smart-Fill</div>
                  <div className="text-[10px] text-blue-700 uppercase tracking-wider font-bold">Bespaar tijd</div>
                </div>
              </div>
              <button 
                onClick={() => handleAiParsing(formData.cv as File)}
                disabled={isParsing}
                className="px-4 py-2 bg-[#1B263B] text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isParsing ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                {isParsing ? 'Analyseren...' : 'CV Scannen'}
              </button>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Volledige naam</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Jan de Vries" 
                    className={`w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B263B] outline-none transition-all ${isParsing ? 'opacity-50' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email adres</label>
                <input 
                  type="email" 
                  placeholder="jan@voorbeeld.nl" 
                  className={`w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B263B] outline-none transition-all ${isParsing ? 'opacity-50' : ''}`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">CV Upload</label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-[#1B263B] transition-colors cursor-pointer group">
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    onChange={handleFileUpload}
                  />
                  {formData.cv ? (
                    <div className="flex items-center justify-center gap-2 text-[#1B263B] font-bold">
                      <Paperclip size={20} /> {formData.cv.name}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1B263B] transition-colors">
                        <Upload size={20} />
                      </div>
                      <div className="text-sm font-medium text-slate-600">Klik om te uploaden</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">AI zal je gegevens direct invullen</div>
                    </div>
                  )}
                </div>
              </div>
            </form>

            <div className="flex gap-4 pt-4">
              <button onClick={prevStep} className="flex-1 py-5 border border-slate-200 text-slate-600 font-bold rounded-2xl flex items-center justify-center gap-2">
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.name || !formData.email || isParsing}
                className="flex-[3] py-5 bg-[#1B263B] text-white font-bold rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-slate-200"
              >
                Afspraak bevestigen <CheckCircle2 size={18} />
              </button>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="text-center py-12 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Staat genoteerd!</h2>
            <p className="text-lg text-slate-500 mb-10 max-w-sm mx-auto font-light leading-relaxed">
              We hebben je intake gepland op <strong>{formData.date} maart</strong> om <strong>{formData.time} uur</strong>. Je ontvangt direct een bevestiging in je mailbox.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-10 py-4 bg-[#1B263B] text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Terug naar home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative overflow-hidden border border-slate-100">
        {/* Progress Bar */}
        {currentStep !== 'success' && (
          <div className="absolute top-0 left-0 w-full h-1.5 flex bg-slate-100">
            <div className={`h-full transition-all duration-700 ease-out bg-[#1B263B] ${currentStep === 'preferences' ? 'w-1/3' : currentStep === 'datetime' ? 'w-2/3' : 'w-full'}`} />
          </div>
        )}
        
        {renderStep()}
      </div>
    </div>
  );
};

export default IntakeWizard;

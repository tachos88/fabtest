
import React, { useState, useMemo } from 'react';
import { mockVacancies, mockCompanies } from '../../services/mockData';
// Added Building2 to the import list
import { Search, MapPin, Euro, Clock, ChevronRight, SlidersHorizontal, Building2 } from 'lucide-react';

const Vacancies: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [discipline, setDiscipline] = useState('Alle');

  const filteredJobs = useMemo(() => {
    return mockVacancies.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(filter.toLowerCase()) || 
                           job.location.toLowerCase().includes(filter.toLowerCase());
      const matchesDiscipline = discipline === 'Alle' || job.discipline === discipline;
      return matchesSearch && matchesDiscipline;
    });
  }, [filter, discipline]);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl font-bold mb-6">Ontdek nieuwe uitdagingen.</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Blader door onze actuele vacatures in de bouw en vastgoed. Van projectmanagement tot asset management.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Zoek op functie of stad..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select 
              className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
            >
              <option value="Alle">Alle disciplines</option>
              <option value="Bouw">Bouw</option>
              <option value="Vastgoed">Vastgoed</option>
              <option value="Infra">Infra</option>
            </select>
            <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 rounded-xl font-bold hover:bg-slate-50">
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => {
              const company = mockCompanies.find(c => c.id === job.companyId);
              return (
                <div key={job.id} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-amber-600 hover:shadow-xl hover:shadow-slate-100 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">{job.discipline}</span>
                      {job.isFeatured && (
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded-full">Top vacature</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2"><Building2 size={16} /> {company?.name}</div>
                      <div className="flex items-center gap-2"><MapPin size={16} /> {job.location}</div>
                      <div className="flex items-center gap-2"><Euro size={16} /> {job.salaryRange}</div>
                      <div className="flex items-center gap-2"><Clock size={16} /> {job.contractType}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hidden sm:block px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
                      Bekijk details
                    </button>
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white transition-all">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-20 text-center">
              <div className="text-xl text-slate-400">Geen vacatures gevonden die voldoen aan je zoekopdracht.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;


import React from 'react';
import { ApplicationStage } from '../../types';
import { mockApplications, mockCandidates, mockVacancies } from '../../services/mockData';
import { MoreVertical, GripVertical, Plus } from 'lucide-react';

const Pipeline: React.FC = () => {
  const stages = Object.values(ApplicationStage);

  const getAppsForStage = (stage: ApplicationStage) => {
    return mockApplications.filter(app => app.stage === stage);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sollicitatie Pipeline</h1>
          <p className="text-slate-500">Overzicht van alle lopende processen.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-amber-600">
            <option>Alle vacatures</option>
            {mockVacancies.map(v => <option key={v.id}>{v.title}</option>)}
          </select>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <Plus size={16} /> Handmatige toevoeging
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 flex-grow">
        {stages.map((stage) => {
          const apps = getAppsForStage(stage);
          return (
            <div key={stage} className="min-w-[300px] w-[300px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-slate-900">{stage}</h3>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[10px] font-bold rounded-full">{apps.length}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
              </div>

              <div className="flex-grow space-y-4 min-h-[500px] bg-slate-100/50 rounded-xl p-3">
                {apps.map(app => {
                  const cand = mockCandidates.find(c => c.id === app.candidateId);
                  const vacancy = mockVacancies.find(v => v.id === app.vacancyId);
                  return (
                    <div key={app.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-move hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                            {cand?.firstName[0]}{cand?.lastName[0]}
                          </div>
                          <div>
                            <div className="text-sm font-bold">{cand?.firstName} {cand?.lastName}</div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-tighter">Status: {cand?.status}</div>
                          </div>
                        </div>
                        <GripVertical size={16} className="text-slate-300" />
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-slate-50">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Vacature</div>
                        <div className="text-xs font-medium text-slate-700">{vacancy?.title}</div>
                      </div>

                      <div className="mt-4 flex justify-between items-center text-[10px] text-slate-400">
                        <span>L. Activiteit: {app.lastActivity}</span>
                        <div className="flex -space-x-1">
                          <img className="w-5 h-5 rounded-full border border-white" src="https://picsum.photos/id/64/40/40" alt="owner" />
                        </div>
                      </div>
                    </div>
                  );
                })}
                {apps.length === 0 && (
                  <div className="h-20 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-300 text-xs font-medium">
                    Geen kandidaten
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pipeline;

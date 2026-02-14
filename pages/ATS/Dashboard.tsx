
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  UserPlus,
  // Added ChevronRight to the import list
  ChevronRight
} from 'lucide-react';
import { mockVacancies, mockCandidates, mockApplications } from '../../services/mockData';

const Dashboard: React.FC = () => {
  const data = [
    { name: 'Ma', apps: 4 },
    { name: 'Di', apps: 7 },
    { name: 'Wo', apps: 5 },
    { name: 'Do', apps: 12 },
    { name: 'Vr', apps: 9 },
    { name: 'Za', apps: 2 },
    { name: 'Zo', apps: 1 },
  ];

  const pieData = [
    { name: 'Vast', value: 70 },
    { name: 'Interim', value: 30 },
  ];

  const COLORS = ['#D97706', '#1E293B'];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welkom terug, Mark</h1>
          <p className="text-slate-500">Dit is de status van vandaag bij Hollman Consultancy.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50">Exporteer rapport</button>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold shadow-sm flex items-center gap-2"><UserPlus size={16} /> Nieuwe kandidaat</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Totaal Kandidaten', value: mockCandidates.length * 142, icon: <Users />, color: 'bg-blue-50 text-blue-600', trend: '+12% deze maand' },
          { label: 'Open Vacatures', value: mockVacancies.length + 8, icon: <Briefcase />, color: 'bg-amber-50 text-amber-600', trend: 'Gem. time-to-fill 32d' },
          { label: 'Lopende Sollicitaties', value: mockApplications.length + 12, icon: <TrendingUp />, color: 'bg-emerald-50 text-emerald-600', trend: '5 gesprekken vandaag' },
          { label: 'Gemiddeld Salaris', value: '€5.8k', icon: <Clock />, color: 'bg-purple-50 text-purple-600', trend: 'Stijging van 4%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                {stat.icon}
              </div>
              <ArrowUpRight size={16} className="text-slate-300" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-slate-500 mb-2">{stat.label}</div>
            <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block uppercase tracking-wider">
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold mb-8">Nieuwe sollicitaties (per dag)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="apps" fill="#D97706" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Stats */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 w-full text-left">Dienstverband mix</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2 w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-600"></div> <span className="text-sm">Vast</span></div>
              <span className="text-sm font-bold">70%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-800"></div> <span className="text-sm">Interim</span></div>
              <span className="text-sm font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold">Recente Activiteit</h3>
          <button className="text-xs text-amber-600 font-bold hover:underline">Bekijk alles</button>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { user: 'Jan de Vries', action: 'Nieuwe sollicitatie op', target: 'Projectmanager Woningbouw', time: '10 minuten geleden' },
            { user: 'Sarah Recruiter', action: 'Verplaatste Lisa Bakker naar', target: 'Interview 1', time: '2 uur geleden' },
            { user: 'Mark Hollman', action: 'Maakte nieuwe vacature aan:', target: 'Site Manager Infra', time: '4 uur geleden' },
            { user: 'Lisa Bakker', action: 'Uploadde een nieuw document:', target: 'Referentie BAM.pdf', time: 'Gisteren' },
          ].map((item, i) => (
            <div key={i} className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                  {item.user[0]}
                </div>
                <div>
                  <div className="text-sm"><span className="font-bold">{item.user}</span> {item.action} <span className="font-medium text-amber-600">{item.target}</span></div>
                  <div className="text-xs text-slate-400 mt-1">{item.time}</div>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-300 hover:text-slate-600 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

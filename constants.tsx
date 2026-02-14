
import React from 'react';
import { 
  Users, 
  Briefcase, 
  Building2, 
  LayoutDashboard, 
  ClipboardList, 
  History
} from 'lucide-react';

export const SECTORS = ['Architectuur', 'Engineering', 'Constructie', 'Vastgoed', 'Infra'];

export const NAVIGATION = {
  PUBLIC: [
    { name: 'Home', href: '/' },
    { name: 'Vacatures', href: '/vacatures' },
    { name: 'Inschrijven', href: '/inschrijven' },
    { name: 'Over ons', href: '/over-ons' },
  ],
  ATS: [
    { name: 'Dashboard', href: '/ats', icon: <LayoutDashboard size={20} /> },
    { name: 'Vacatures', href: '/ats/vacatures', icon: <Briefcase size={20} /> },
    { name: 'Kandidaten', href: '/ats/kandidaten', icon: <Users size={20} /> },
    { name: 'Pipeline', href: '/ats/pipeline', icon: <ClipboardList size={20} /> },
    { name: 'Klanten', href: '/ats/klanten', icon: <Building2 size={20} /> },
  ]
};

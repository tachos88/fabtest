
import { 
  User, 
  UserRole, 
  Company, 
  Candidate, 
  Vacancy, 
  ContractType, 
  Application, 
  ApplicationStage 
} from '../types';

export const mockUsers: User[] = [
  { id: '1', name: 'Mark Hollman', email: 'mark@hollman.nl', role: UserRole.ADMIN, createdAt: '2023-01-01' },
  { id: '2', name: 'Sarah Recruiter', email: 'sarah@hollman.nl', role: UserRole.RECRUITER, createdAt: '2023-05-15' },
];

export const mockCompanies: Company[] = [
  { id: 'c1', name: 'BAM Bouw en Techniek', sector: 'Bouw', description: 'Marktleider in bouw.' },
  { id: 'c2', name: 'Vesteda', sector: 'Vastgoed', description: 'Grootste woningbelegger van Nederland.' },
  { id: 'c3', name: 'Heijmans', sector: 'Infra', description: 'Innovatieve bouwer.' },
];

export const mockVacancies: Vacancy[] = [
  { 
    id: 'v1', 
    companyId: 'c1', 
    title: 'Projectmanager Woningbouw', 
    discipline: 'Bouw', 
    location: 'Utrecht', 
    contractType: ContractType.PERMANENT, 
    salaryRange: '€5.500 - €7.500', 
    description: 'Verantwoordelijk voor grootschalige woningbouwprojecten.', 
    requirements: ['10+ jaar ervaring', 'BSc/MSc Bouwkunde'],
    status: 'open', 
    createdAt: '2024-03-01',
    isFeatured: true
  },
  { 
    id: 'v2', 
    companyId: 'c2', 
    title: 'Asset Manager Vastgoed', 
    discipline: 'Vastgoed', 
    location: 'Amsterdam', 
    contractType: ContractType.INTERIM, 
    salaryRange: '€90 - €120 per uur', 
    description: 'Optimaliseren van de vastgoedportefeuille.', 
    requirements: ['Vastgoed management ervaring', 'Analytisch sterk'],
    status: 'open', 
    createdAt: '2024-03-10',
    isFeatured: true
  },
  { 
    id: 'v3', 
    companyId: 'c3', 
    title: 'Werkvoorbereider Infra', 
    discipline: 'Infra', 
    location: 'Rotterdam', 
    contractType: ContractType.PERMANENT, 
    salaryRange: '€3.500 - €5.000', 
    description: 'Planning en voorbereiding van infraprojecten.', 
    requirements: ['MBO/HBO Civiele techniek'],
    status: 'open', 
    createdAt: '2024-03-12' 
  },
];

export const mockCandidates: Candidate[] = [
  { 
    id: 'cand1', 
    firstName: 'Jan', 
    lastName: 'de Vries', 
    email: 'jan@devries.nl', 
    phone: '0612345678', 
    location: 'Amersfoort', 
    currentRole: 'Senior Projectleider', 
    desiredRoles: ['Projectmanager', 'Operationeel Directeur'],
    skills: ['Bouwkunde', 'LEAN', 'Budgetbeheer'],
    salaryExpectation: 6500,
    availability: 'Direct',
    consentDate: '2024-01-15',
    status: 'active',
    createdAt: '2024-01-15'
  },
  { 
    id: 'cand2', 
    firstName: 'Lisa', 
    lastName: 'Bakker', 
    email: 'lisa@bakker.com', 
    phone: '0687654321', 
    location: 'Den Haag', 
    currentRole: 'Vastgoed Adviseur', 
    desiredRoles: ['Asset Manager', 'Investment Manager'],
    skills: ['Taxaties', 'Financial Modelling'],
    salaryExpectation: 5500,
    availability: '1 maand opzegtermijn',
    consentDate: '2024-02-10',
    status: 'active',
    createdAt: '2024-02-10'
  },
];

export const mockApplications: Application[] = [
  { 
    id: 'a1', 
    vacancyId: 'v1', 
    candidateId: 'cand1', 
    stage: ApplicationStage.INTERVIEW_1, 
    notes: 'Sterke kandidaat, goede match met cultuur.', 
    lastActivity: '2024-03-15' 
  },
  { 
    id: 'a2', 
    vacancyId: 'v2', 
    candidateId: 'cand2', 
    stage: ApplicationStage.SHORTLISTED, 
    notes: 'Potentiële match voor interim rol.', 
    lastActivity: '2024-03-18' 
  },
];

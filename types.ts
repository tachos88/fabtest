
export enum UserRole {
  ADMIN = 'ADMIN',
  RECRUITER = 'RECRUITER',
  CLIENT = 'CLIENT',
  CANDIDATE = 'CANDIDATE'
}

export enum ApplicationStage {
  NEW = 'Nieuw',
  SCREENED = 'Gescreend',
  SHORTLISTED = 'Shortlist',
  INTERVIEW_1 = 'Interview 1',
  INTERVIEW_2 = 'Interview 2',
  OFFER = 'Aanbieding',
  PLACED = 'Geplaatst',
  REJECTED = 'Afgewezen'
}

export enum ContractType {
  PERMANENT = 'Vast',
  INTERIM = 'Interim',
  FREELANCE = 'Freelance'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  clientId?: string;
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  sector: string;
  logo?: string;
  description: string;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  currentRole: string;
  desiredRoles: string[];
  skills: string[];
  salaryExpectation: number;
  availability: string;
  consentDate: string;
  status: 'active' | 'passive' | 'placed';
  createdAt: string;
}

export interface Vacancy {
  id: string;
  companyId: string;
  title: string;
  discipline: 'Bouw' | 'Vastgoed' | 'Infra' | 'Projectontwikkeling';
  location: string;
  contractType: ContractType;
  salaryRange: string;
  description: string;
  requirements: string[];
  status: 'open' | 'closed' | 'on-hold';
  createdAt: string;
  isFeatured?: boolean;
}

export interface Application {
  id: string;
  vacancyId: string;
  candidateId: string;
  stage: ApplicationStage;
  notes: string;
  lastActivity: string;
}

export interface AuditLog {
  id: string;
  actorId: string;
  action: string;
  entityType: string;
  entityId: string;
  timestamp: string;
}

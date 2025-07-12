export interface Basics {
  name: string;
  label: string;
  image?: string;
  email: string;
  phone: string;
  url?: string;
  summary?: string;
  objective?: string;
  relExp?: string;
  totalExp?: string;
  location?: {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
  };
  profiles?: {
    network: string;
    username: string;
    url: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ISkills {
  languages: SkillItem[];
  frameworks: SkillItem[];
  technologies: SkillItem[];
  libraries: SkillItem[];
  databases: SkillItem[];
  practices: SkillItem[];
  tools: SkillItem[];
}

export interface Work {
  id: string;
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string | null;
  isWorkingHere: boolean;
  highlights?: string[];
  summary?: string;
  years?: string;
}

export interface Education {
  id: string;
  institution: string;
  url?: string;
  studyType: string;
  area: string;
  startDate: string;
  endDate?: string;
  isStudyingHere: boolean;
  score?: string;
  courses?: string[];
}

export interface Activities {
  involvements?: string; // HTML string
  achievements?: string; // HTML string
}

export interface Award {
  id: string;
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Language {
  id: string;
  language: string;
  proficiency: string;
}

export interface Project {
  id: string;
  title: string;
  techStack?: string;
  Url?: string;
  startDate: string;
  endDate?: string;
  isOngoing: boolean;
  description?: string;
  highlights?: string[];
}

export interface Volunteer {
  id: string;
  organization: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  isVolunteeringNow: boolean;
}

export interface ResumeData {
  basics: Basics;
  skills: ISkills;
  work: Work[];
  education: Education[];
  activities: Activities;
  awards: Award[];
  languages: Language[];
  projects: Project[];
  hobbies: string[];
  softSkills: string[];
  volunteer: Volunteer[];
}

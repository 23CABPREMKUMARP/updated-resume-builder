import dayjs from 'dayjs';
export interface ILocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface IProfile {
  network: string;
  username: string;
  url: string;
}

export interface IBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  objective: string;
  location: ILocation;
  relExp: string;
  totalExp: string;
  profiles: IProfile[];
}

export interface IItem {
  name: string;
  level: number;
}

export interface ISkillsIntrf {
  languages: IItem[];
  frameworks: IItem[];
  technologies: IItem[];
  libraries: IItem[];
  databases: IItem[];
  tools: IItem[];
  practices: IItem[];
}

export interface IWorkIntrf {
  id: string;
  name: string;
  position: string;
  url: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  summary: string;
  years: string;
  highlights: string[];
  isWorkingHere: boolean;
  website: string;
}

export interface IEducation {
  id: string;
  institution: string;
  area: string;
  studyType: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
  url?: string;
  website?: string;
  isStudyingHere?: boolean;
}

export interface IAwards {
  id: string;
  title: string;
  date: string;
  awarder: string;
  summary?: string;
}

export interface IVolunteer {
  id: string;
  organization: string;
  position: string;
  url: string;
  startDate: string | null;
  endDate: string | null;
  summary: string;
  highlights: string[];
  isVolunteeringNow: boolean;
}

export interface IResume {
  basics: IBasics;
  skills: ISkillsIntrf;
  work: IWorkIntrf[];
  education: IEducation[];
}

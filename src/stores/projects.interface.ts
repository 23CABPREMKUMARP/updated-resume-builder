// src/stores/projects.interface.ts

export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string;
  url: string;
  startDate: string | null;
  endDate: string | null;
  isOngoing: boolean;
  highlights: string[];
}

export interface ProjectsState {
  projects: IProjectItem[];
  add: (newProject: IProjectItem) => void;
  get: (index: number) => IProjectItem;
  remove: (index: number) => void;
  reset: (values: IProjectItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateProject: (index: number, updated: IProjectItem) => void;
}

import { create } from 'zustand';
import { produce } from 'immer';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import resumeData from '@/helpers/constants/resume-data.json';

// Raw resume JSON project structure
type ResumeProjectRaw = {
  title?: string;
  summary?: string;
  techStack?: string;
  link?: string;
  startDate?: string | null;
  endDate?: string | null;
  isOngoing?: boolean;
  highlights?: string[];
};

// Interface for a single project
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

// Interface for Zustand store
export interface ProjectsState {
  projects: IProjectItem[];
  add: (newProject: IProjectItem) => void;
  get: (index: number) => IProjectItem;
  remove: (index: number) => void;
  reset: (values: IProjectItem[]) => void;
  resetToDefault: () => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateProject: (index: number, updated: IProjectItem) => void;
}

// Utility: map raw project to IProjectItem
const mapProjectsFromRaw = (raw: ResumeProjectRaw[] = []): IProjectItem[] =>
  raw.map((proj) => ({
    id: uuidv4(),
    title: proj.title ?? '',
    description: proj.summary ?? '',
    techStack: proj.techStack ?? '',
    url: proj.link ?? '',
    startDate: proj.startDate ?? null,
    endDate: proj.endDate ?? null,
    isOngoing: proj.isOngoing ?? false,
    highlights: proj.highlights ?? [],
  }));

// Extract and format the initial projects from resume-data
const DEFAULT_PROJECTS: IProjectItem[] = mapProjectsFromRaw(
  resumeData.projects as ResumeProjectRaw[]
);

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set, get) => ({
      projects: DEFAULT_PROJECTS,

      add: (newProject) =>
        set(
          produce((state: ProjectsState) => {
            state.projects.push({ ...newProject, id: uuidv4() });
          })
        ),

      get: (index) => get().projects[index],

      remove: (index) =>
        set(
          produce((state: ProjectsState) => {
            state.projects.splice(index, 1);
          })
        ),

      reset: (values: IProjectItem[]) => {
        set(() => ({
          projects: values,
        }));

        if (typeof window !== 'undefined') {
          localStorage.setItem('projects', JSON.stringify({ state: { projects: values } }));
        }
      },

      resetToDefault: () => {
        const defaultProjects = mapProjectsFromRaw(resumeData.projects as ResumeProjectRaw[]);
        set({ projects: defaultProjects });
      },

      onmoveup: (index) =>
        set(
          produce((state: ProjectsState) => {
            if (index > 0) {
              const temp = state.projects[index];
              state.projects[index] = state.projects[index - 1];
              state.projects[index - 1] = temp;
            }
          })
        ),

      onmovedown: (index) =>
        set(
          produce((state: ProjectsState) => {
            if (index < state.projects.length - 1) {
              const temp = state.projects[index];
              state.projects[index] = state.projects[index + 1];
              state.projects[index + 1] = temp;
            }
          })
        ),

      updateProject: (index, updated) =>
        set(
          produce((state: ProjectsState) => {
            state.projects[index] = updated;
          })
        ),
    }),
    {
      name: 'projects',
    }
  )
);

import { create } from 'zustand';
import resumeData from '@/helpers/constants/resume-data.json';

interface SoftSkillsState {
  softSkills: string[];
  set: (skills: string[]) => void;
  add: (skill: string) => void;
  remove: (index: number) => void;
  reset: () => void;
}

export const useSoftSkillsStore = create<SoftSkillsState>((set) => ({
  softSkills: [],
  set: (skills) => set({ softSkills: skills }),
  add: (skill) =>
    set((state) => ({ softSkills: [...state.softSkills, skill] })),
  remove: (index) =>
    set((state) => ({
      softSkills: state.softSkills.filter((_, i) => i !== index),
    })),
  reset: () =>
    set({ softSkills: resumeData.softSkills ?? [] }), // ✅ correct reset
}));

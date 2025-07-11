import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from '@/stores/skills';

import ResumeData from '@/helpers/constants/resume-data.json';
import { useProjectsStore } from './projects'; // ✅ Add this
import { useLanguagesStore } from './languages'; // ✅ Add this

import { useActivity } from './activity';
import { useAwards } from './awards';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';

import { useSoftSkillsStore } from './softSkills';
import { useHobbiesStore } from './hobbies';

/**
 * Hook to return current Zustand-based resume state.
 */
export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    skills: {
      languages: useLanguages((state) => state.values),
      frameworks: useFrameworks((state) => state.values),
      technologies: useTechnologies((state) => state.values),
      libraries: useLibraries((state) => state.values),
      databases: useDatabases((state) => state.values),
      practices: usePractices((state) => state.values),
      tools: useTools((state) => state.values),
    },
    activities: useActivity((state) => state.get()),
    softSkills: useSoftSkillsStore((s) => s.softSkills),
    hobbies: useHobbiesStore((state) => state.hobbies),
    languages: useLanguagesStore((state) => state.languages),
  };
};

/**
 * @description Reset all stores (excluding softSkills by design).
 */
export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics);
  useLanguages.getState().reset(ResumeData.skills.languages);
  useFrameworks.getState().reset(ResumeData.skills.frameworks);
  useLibraries.getState().reset(ResumeData.skills.libraries);
  useDatabases.getState().reset(ResumeData.skills.databases);
  useTechnologies.getState().reset(ResumeData.skills.technologies);
  usePractices.getState().reset(ResumeData.skills.practices);
  useTools.getState().reset(ResumeData.skills.tools);
  useSoftSkillsStore.getState().reset();
  useProjectsStore.getState().resetToDefault();

  useExperiences.getState().reset(ResumeData.work);
  useEducations.getState().reset(ResumeData.education);
  useAwards.getState().reset(ResumeData.awards);
  useActivity.getState().reset(ResumeData.activities);

  // ❌ Do NOT reset softSkills here – it’s handled in SoftSkillsLayout manually
  useSoftSkillsStore.getState().reset(); // ✅ Loads from resume-data.json
  useLanguagesStore.getState().set(ResumeData.languages ?? []);

  // ✅ Reset projects and hobbies
  useHobbiesStore.getState().set(ResumeData.hobbies ?? []);
};

/**
 * @description Optionally reset selected sections (more controlled usage).
 */
type ResetOptions = {
  softSkills?: boolean;
  projects?: boolean;
  hobbies?: boolean;
  languages?: boolean;
};

export const resetResumeStoreScoped = (options: ResetOptions = {}) => {
  resetResumeStore();

  if (options.softSkills) {
    useSoftSkillsStore.getState().set(ResumeData.softSkills ?? []);
  }

  if (options.hobbies) {
    useHobbiesStore.getState().set(ResumeData.hobbies ?? []);
  }
};

import React, { Context, createContext, useEffect } from 'react';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';

import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { useThemes } from '@/stores/themes';
import { useZoom } from '@/stores/useZoom';
import { useProjectsStore } from '@/stores/projects'; // ✅ Add this

import { useHobbiesStore } from '@/stores/hobbies';
import { useSoftSkillsStore } from '@/stores/softSkills';
import { useLanguagesStore } from '@/stores/languages';

export const StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const zoom = useZoom((state) => state.zoom);
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId]?.component;
  const selectedTheme = useThemes((state) => state.selectedTheme);

  useEffect(() => {
    if (!resumeData) return;

    const resumeProjects = resumeData.projects ?? [];
    const resumeHobbies = resumeData.hobbies ?? [];
    const resumeSoftSkills = resumeData.softSkills ?? [];
    const resumeLanguages = resumeData.languages ?? [];

    const { hobbies } = useHobbiesStore.getState();
    const { softSkills } = useSoftSkillsStore.getState();
    const { languages } = useLanguagesStore.getState();
    const { projects } = useProjectsStore.getState(); // ✅ Get current Zustand store

    if (hobbies.length === 0 && resumeHobbies.length > 0) {
      useHobbiesStore.getState().set(resumeHobbies);
    }

    if (softSkills.length === 0 && resumeSoftSkills.length > 0) {
      useSoftSkillsStore.getState().set(resumeSoftSkills);
    }

    if (languages.length === 0 && resumeLanguages.length > 0) {
      const mappedLanguages = resumeLanguages.map((l: any) => ({
        id: l.id ?? crypto.randomUUID(),
        language: l.language ?? '',
        proficiency: l.proficiency ?? '',
      }));
      useLanguagesStore.getState().set(mappedLanguages);
    }

    if (projects.length === 0 && resumeProjects.length > 0) {
      const mappedProjects = resumeProjects.map((proj: any) => ({
        id: proj.id,
        title: proj.title ?? '',
        techStack: proj.techStack ?? '',
        url: proj.link ?? '',
        description: proj.summary ?? '',
        startDate: proj.startDate ?? null,
        endDate: proj.endDate ?? null,
        isOngoing: proj.isOngoing ?? false,
        highlights: proj.highlights ?? [],
      }));

      useProjectsStore.getState().reset(mappedProjects);
    }
  }, [resumeData]);
  return (
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div
        style={{ transform: `scale(${zoom})` }}
        className="origin-top transition-all duration-300 ease-linear print:!scale-100"
      >
        {/* Printable Resume Section */}
        <div className="w-[210mm] h-[296mm] bg-white my-0 mx-auto">
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>
              {Template && <Template />} {/* This will internally call LanguagesSection */}
            </ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};

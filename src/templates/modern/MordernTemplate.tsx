// src/templates/modern/ModernTemplate.tsx

import React, { useContext, useEffect } from 'react';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { AwardSection } from './components/Awards';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import HobbiesSection from './components/HobbiesSection';
import ProjectsSection from './components/ProjectsSection';
import LanguagesSection from './components/LanguagesSection';
import { VolunteerSection } from './components/Volunteer';

import type {
  IEducation,
  IAwards,
  IVolunteer, // previously IVolunteeringItem or IVolunteering
} from '@/stores/index.interface';

import { useVolunteeringStore } from '@/stores/volunteering';
import { useSoftSkillsStore } from '@/stores/softSkills';
import { useHobbiesStore } from '@/stores/hobbies';
import { useLanguagesStore } from '@/stores/languages';
import { useProjectsStore } from '@/stores/projects';

import resumeData from '@/helpers/constants/resume-data.json';

interface ResumeProject {
  id: string;
  title?: string;
  techStack?: string;
  link?: string;
  summary?: string;
  startDate?: string | null;
  endDate?: string | null;
  isOngoing?: boolean;
  highlights?: string[];
}

interface ResumeData {
  basics: {
    name: string;
    label: string;
    url: string;
    email: string;
    phone: string;
    city: string;
    image: string;
    summary?: string;
    profiles?: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  education?: IEducation[];
  skills?: {
    technologies: { name: string; level: number }[];
    frameworks: { name: string; level: number }[];
    libraries: { name: string; level: number }[];
    tools: { name: string; level: number }[];
  };
  awards?: IAwards[];
  volunteer?: IVolunteer[];
  hobbies?: string[];
  softSkills?: string[];
  languages?: { id?: string; language: string; proficiency?: string }[];
  projects?: ResumeProject[];
}

export default function ModernTemplate() {
  const resumeDataFromContext = useContext(StateContext) as ResumeData;

  const volunteering = useVolunteeringStore((state) => state.volunteeredExps);
  const resetVolunteering = useVolunteeringStore((state) => state.reset);

  const softSkills = useSoftSkillsStore((s) => s.softSkills);
  const setSoftSkills = useSoftSkillsStore((s) => s.set);

  const projects = useProjectsStore((s) => s.projects);
  const resetProjects = useProjectsStore((s) => s.reset);

  const hobbies = useHobbiesStore((s) => s.hobbies);
  const setHobbies = useHobbiesStore((s) => s.set);

  const languages = useLanguagesStore((s) => s.languages);
  const setLanguages = useLanguagesStore((s) => s.set);

  useEffect(() => {
    if (projects.length === 0 && resumeData.projects) {
      const mappedProjects = resumeData.projects.map((proj: ResumeProject) => ({
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
      resetProjects(mappedProjects);
    }

    if (softSkills.length === 0 && resumeData.softSkills) {
      setSoftSkills(resumeData.softSkills);
    }

    if (hobbies.length === 0 && resumeData.hobbies) {
      setHobbies(resumeData.hobbies);
    }

    if (volunteering.length === 0 && resumeData.volunteer) {
      resetVolunteering(resumeData.volunteer);
    }

    if (languages.length === 0 && resumeData.languages) {
      setLanguages(resumeData.languages);
    }
  }, [
    projects.length,
    resetProjects,
    softSkills.length,
    setSoftSkills,
    hobbies.length,
    setHobbies,
    volunteering.length,
    resetVolunteering,
    languages.length,
    setLanguages,
  ]);

  if (!resumeDataFromContext) return <p>Loading resume data...</p>;

  const basics = resumeDataFromContext.basics;

  return (
    <div className="p-2">
      {basics && (
        <BasicIntro
          name={basics.name}
          label={basics.label}
          url={basics.url}
          email={basics.email}
          phone={basics.phone}
          city={basics.city}
          image={basics.image}
        />
      )}

      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={basics.summary ?? ''}>
            <SummarySection summary={basics.summary ?? ''} />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.education as unknown as IEducation[]}>
            <EducationSection education={resumeDataFromContext.education ?? []} />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.skills?.technologies ?? []}>
            <SkillsSection
              title="Technologies"
              list={resumeDataFromContext.skills?.technologies ?? []}
            />
          </SectionValidator>

          <SectionValidator
            value={(resumeDataFromContext.skills?.frameworks ?? []).concat(
              resumeDataFromContext.skills?.libraries ?? []
            )}
          >
            <SkillsSection
              title="Frameworks & Libraries"
              list={(resumeDataFromContext.skills?.frameworks ?? []).concat(
                resumeDataFromContext.skills?.libraries ?? []
              )}
            />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.skills?.tools ?? []}>
            <SkillsSection title="Tools" list={resumeDataFromContext.skills?.tools ?? []} />
          </SectionValidator>

          {projects.length > 0 && <ProjectsSection />}
        </div>

        <div className="basis-[40%] p-3">
          <HobbiesSection />

          <SectionValidator value={softSkills.map((s) => ({ name: s, level: 0 }))}>
            <SkillsSection
              title="Soft Skills"
              list={softSkills.map((s) => ({ name: s, level: 0 }))}
            />
          </SectionValidator>

          <SectionValidator value={languages ?? []}>
            <LanguagesSection />
          </SectionValidator>

          <SectionValidator value={volunteering}>
            <VolunteerSection volunteer={volunteering} />
          </SectionValidator>
          <SectionValidator value={resumeDataFromContext.awards as unknown as IAwards[]}>
            <AwardSection awardsReceived={resumeDataFromContext.awards ?? []} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}

// src/templates/modern/MordernTemplate.tsx
import React, { useContext, useEffect } from 'react';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { AwardSection } from './components/Awards';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import HobbiesSection from './components/HobbiesSection';
import ProjectsSection from './components/ProjectsSection';
import LanguagesSection from './components/LanguagesSection';
import { ValidSectionRenderer } from '@/helpers/common/components/ValidSectionRenderer';

import { useSoftSkillsStore } from '@/stores/softSkills';
import { useHobbiesStore } from '@/stores/hobbies';
import { useLanguagesStore } from '@/stores/languages';
import { useProjectsStore } from '@/stores/projects';

import resumeData from '@/helpers/constants/resume-data.json';

export default function MordernTemplate() {
  const resumeDataFromContext = useContext(StateContext);

  const softSkills = useSoftSkillsStore((s) => s.softSkills);
  const setSoftSkills = useSoftSkillsStore((s) => s.set);

  const projects = useProjectsStore((s) => s.projects);
  const resetProjects = useProjectsStore((s) => s.reset);

  const hobbies = useHobbiesStore((s) => s.hobbies);
  const setHobbies = useHobbiesStore((s) => s.set);

  const languages = useLanguagesStore((s) => s.languages);
  const setLanguages = useLanguagesStore((s) => s.set);

  useEffect(() => {
    // ✅ Hydrate Zustand stores only once
    const currentProjects = useProjectsStore.getState().projects;
    if (currentProjects.length === 0 && resumeData.projects) {
      const mappedProjects = resumeData.projects.map((proj: any) => ({
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

    if (languages.length === 0 && resumeData.languages) {
      setLanguages(resumeData.languages.map((l: any) => l.language));
    }
  }, []);

  return (
    <div className="p-2">
      <BasicIntro
        name={resumeDataFromContext.basics.name}
        label={resumeDataFromContext.basics.label}
        url={resumeDataFromContext.basics.url}
        email={resumeDataFromContext.basics.email}
        city={resumeDataFromContext.basics.location.city}
        phone={resumeDataFromContext.basics.phone}
        image={resumeDataFromContext.basics.image}
        profiles={resumeDataFromContext.basics.profiles}
      />

      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={resumeDataFromContext.basics.summary}>
            <SummarySection summary={resumeDataFromContext.basics.summary} />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.education}>
            <EducationSection education={resumeDataFromContext.education} />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.skills.technologies}>
            <SkillsSection
              title="Technologies"
              list={resumeDataFromContext.skills.technologies}
            />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.skills.frameworks}>
            <SkillsSection
              title="Frameworks & Libraries"
              list={resumeDataFromContext.skills.frameworks.concat(resumeDataFromContext.skills.libraries)}
            />
          </SectionValidator>

          <SectionValidator value={resumeDataFromContext.skills.tools}>
            <SkillsSection title="Tools" list={resumeDataFromContext.skills.tools} />
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


<ValidSectionRenderer value={languages}>
  <LanguagesSection />
</ValidSectionRenderer>

          <SectionValidator value={resumeDataFromContext.volunteer}>
            <VolunteerSection volunteer={resumeDataFromContext.volunteer} />
          </SectionValidator>
             <SectionValidator value={resumeDataFromContext.awards}>
            <AwardSection awardsReceived={resumeDataFromContext.awards} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useResumeStore } from '@/stores/useResumeStore';
import BasicIntro from './components/BasicIntro';
import SectionHeading from './components/SectionHeading';
import SectionList from './components/SectionList';
import Skills from './components/Skills';

const ModernTemplate = () => {
  const resumeData = useResumeStore((state) => state.resumeData);

  if (!resumeData) return null;

  const { basics, education, skills, volunteer, awards } = resumeData;

  return (
    <div className="p-6 font-sans text-gray-900 bg-white">
      {/* Basic Info */}
      {basics && (
        <BasicIntro
          name={basics.name}
          label={basics.label}
          url={basics.url}
          email={basics.email}
          phone={basics.phone}
          city={basics.city}
          image={basics.image}
          profiles={basics.profiles}
        />
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mt-6">
          <SectionHeading title="Education" />
          <SectionList list={education} />
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mt-6">
          <SectionHeading title="Skills" />
          <Skills title="Technical Skills" list={skills} />
        </section>
      )}

      {/* Volunteer */}
      {volunteer && volunteer.length > 0 && (
        <section className="mt-6">
          <SectionHeading title="Volunteer Experience" />
          <SectionList list={volunteer} />
        </section>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <section className="mt-6">
          <SectionHeading title="Awards" />
          <SectionList list={awards} />
        </section>
      )}
    </div>
  );
};

export default ModernTemplate;

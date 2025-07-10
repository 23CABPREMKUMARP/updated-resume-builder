import React, { useState, useEffect, useContext } from 'react';

import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from '@/helpers/common/components/ErrorBoundary';
import { OutlinedButton } from '@/helpers/common/atoms/Buttons';
import { headers } from '@/helpers/constants/editor-data';
import { resetResumeStore } from '@/stores/useResumeStore';
import { useHobbiesStore } from '@/stores/hobbies';
import { useSoftSkillsStore } from '@/stores/softSkills';
import { useLanguagesStore } from '@/stores/languages';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';

import ProjectLayout from '@/modules/builder/editor/modules/experience/Projects/ProjectLayout';
import ResumeHydrator from '@/helpers/common/components/ResumeHydrator';
<ProjectLayout />;

const EditorLayout = () => {
  const [link, setLink] = useState('');
  const section = headers[link];
  const resumeData = useContext(StateContext);

  useEffect(() => {
    const resumeHobbies = resumeData?.hobbies ?? [];
    if (resumeHobbies.length > 0) {
      useHobbiesStore.getState().set(resumeHobbies);
    }

    const resumeSoftSkills = resumeData?.softSkills ?? [];
    if (resumeSoftSkills.length > 0) {
      useSoftSkillsStore.getState().set(resumeSoftSkills);
    }

    const resumeLanguages = resumeData?.languages ?? [];
    if (resumeLanguages.length > 0) {
      useLanguagesStore.getState().set(resumeLanguages);
    }
  }, [resumeData]);

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
    <ErrorBoundary>
      <div className="bg-resume-50 h-full text-resume-800 p-6 overflow-auto relative no-scrollbar shadow-level-4dp">
        <ResumeHydrator />
        {displayElement}
        <div className="mt-8">
          <OutlinedButton onClick={resetResumeStore}>Reset all edits</OutlinedButton>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default EditorLayout;

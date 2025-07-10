import { useEffect } from 'react';
import resumeData from '@/helpers/constants/resume-data.json';

import { useSoftSkillsStore } from '@/stores/softSkills';
import { useHobbiesStore } from '@/stores/hobbies';
import { useLanguagesStore } from '@/stores/languages';

const ResumeHydrator = () => {
  const { softSkills, set: setSoftSkills } = useSoftSkillsStore();
  const { hobbies, set: setHobbies } = useHobbiesStore();

  useEffect(() => {
    if (softSkills.length === 0 && resumeData.softSkills) {
      setSoftSkills(resumeData.softSkills);
    }

    if (hobbies.length === 0 && resumeData.hobbies) {
      setHobbies(resumeData.hobbies);
    }

    const { languages, set } = useLanguagesStore.getState();
    if (languages.length === 0 && resumeData.languages) {
      set(resumeData.languages); // ✅ Make sure data matches ILanguageItem[]
    }
  }, [hobbies.length, softSkills.length, setHobbies, setSoftSkills]);

  return null;
};

export default ResumeHydrator;

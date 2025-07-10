import React from 'react';
import { useLanguagesStore } from '@/stores/languages';
import SectionHeading from '../atoms/SectionHeading';

const LanguagesSection = () => {
  const languages = useLanguagesStore((state) => state.languages);

  if (!languages || languages.length === 0) return null;

  return (
    <div className="mb-6">
      <SectionHeading title="Languages" />
          <ul className="list-disc list-inside text-xs text-resume-700">

        {languages.map((lang) => (
          <li key={lang.id}>
            <span className="font-semibold">{lang.language}</span> – {lang.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesSection;

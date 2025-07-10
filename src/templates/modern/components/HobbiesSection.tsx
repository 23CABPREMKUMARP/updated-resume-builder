import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { scrollToElement } from '@/helpers/utils';
import { useHobbiesStore } from '@/stores/hobbies';

const HobbiesSection = () => {
  const hobbiesRef = useRef<null | HTMLDivElement>(null);
  const hobbies = useHobbiesStore((state) => state.hobbies);

  useEffect(() => {
    if (Array.isArray(hobbies) && hobbies.length > 0) {
      scrollToElement(hobbiesRef);
    }
  }, [hobbies]);

  if (!Array.isArray(hobbies) || hobbies.length === 0) return null;

  return (
    <div className="mb-3" ref={hobbiesRef}>
      <SectionHeading title="Hobbies" />
      <div className="py-2">
        <SectionList>
          <ul className="list-disc list-inside text-xs text-resume-700">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </SectionList>
      </div>
    </div>
  );
};

export default HobbiesSection;

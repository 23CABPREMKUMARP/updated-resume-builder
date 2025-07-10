// src/modules/builder/editor/components/SoftSkillsLayout.tsx

import React from 'react';
import { useSoftSkillsStore } from '@/stores/softSkills';
import SectionEditLayout from '@/modules/builder/editor/components/SectionEditLayout';
import { TextInput } from '@/helpers/common/atoms/TextInput';
import { OutlinedButton } from '@/helpers/common/atoms/Buttons';

const SoftSkillsLayout = () => {
  const softSkills = useSoftSkillsStore((s) => s.softSkills);
  const set = useSoftSkillsStore((s) => s.set);
  const add = useSoftSkillsStore((s) => s.add);
  const remove = useSoftSkillsStore((s) => s.remove);

  const update = (index: number, value: string) => {
    const updated = [...softSkills];
    updated[index] = value;
    set(updated);
  };

  return (
    <SectionEditLayout title="Soft Skills">
      {softSkills.map((skill, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <TextInput
            value={skill}
            placeholder={`Soft Skill ${index + 1}`}
            onChange={(e) => update(index, e.target.value)}
          />
          <button
            onClick={() => remove(index)}
            className="text-red-500 text-sm"
          >
            ✕
          </button>
        </div>
      ))}

      <OutlinedButton onClick={() => add('')}>+ Add Soft Skill</OutlinedButton>
    </SectionEditLayout>
  );
};

export default SoftSkillsLayout;

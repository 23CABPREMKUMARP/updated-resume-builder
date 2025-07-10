// src/modules/builder/editor/components/HobbiesLayout.tsx

import React from 'react';
import { useHobbiesStore } from '@/stores/hobbies';
import SectionEditLayout from '@/modules/builder/editor/components/SectionEditLayout';
import { TextInput } from '@/helpers/common/atoms/TextInput';
import { OutlinedButton } from '@/helpers/common/atoms/Buttons';

const HobbiesLayout = () => {
  const hobbies = useHobbiesStore((s) => s.hobbies);
  const set = useHobbiesStore((s) => s.set);
  const add = useHobbiesStore((s) => s.add);
  const remove = useHobbiesStore((s) => s.remove);

  const update = (index: number, value: string) => {
    const updated = [...hobbies];
    updated[index] = value;
    set(updated);
  };

  return (
    <SectionEditLayout title="Hobbies">
      {/* ❌ Removed Reset Button */}

      {hobbies.map((hobby, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <TextInput
            value={hobby}
            placeholder={`Hobby ${index + 1}`}
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

      <OutlinedButton onClick={() => add('')}>+ Add Hobby</OutlinedButton>
    </SectionEditLayout>
  );
};

export default HobbiesLayout;

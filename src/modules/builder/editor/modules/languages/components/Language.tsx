import React, { ChangeEvent, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useLanguagesStore } from '@/stores/languages';
import { ILanguageItem } from '@/stores/languages.interface';

interface IProps {
  languageInfo: ILanguageItem;
  index: number;
}

const Language: React.FC<IProps> = ({ languageInfo, index }) => {
  const update = useLanguagesStore((s) => s.update);

  const onChange = useCallback(
    (field: keyof ILanguageItem, value: string) => {
      const updated = { ...languageInfo, [field]: value };
      update(index, updated);
    },
    [index, languageInfo, update]
  );

  return (
    <div className="mb-4">
      <TextField
        label="Language"
        value={languageInfo.language}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange('language', e.target.value)
        }
        fullWidth
        variant="filled"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Proficiency"
        value={languageInfo.proficiency}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange('proficiency', e.target.value)
        }
        fullWidth
        variant="filled"
      />
    </div>
  );
};

export default Language;

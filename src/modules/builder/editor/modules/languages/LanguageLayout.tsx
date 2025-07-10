// src/modules/builder/editor/modules/languages/LanguageLayout.tsx
import React, { useState } from 'react';
import { useLanguagesStore } from '@/stores/languages';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LanguageLayout = () => {
  const { languages, add, remove } = useLanguagesStore();
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');

  const handleAdd = () => {
    if (!language || !proficiency) return;
    add({
      id: uuidv4(),
      language,
      proficiency,
    });
    setLanguage('');
    setProficiency('');
  };

  return (
    <div className="flex flex-col gap-4">
      {languages.map((lang, i) => (
        <div key={lang.id} className="flex items-center justify-between">
          <div>
            <strong>{lang.language}</strong> – {lang.proficiency}
          </div>
          <Button variant="outlined" onClick={() => remove(i)}>
            Delete
          </Button>
        </div>
      ))}

      <TextField
        label="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        variant="outlined"
      />
    <TextField
  select
  label="Proficiency"
  value={proficiency}
  onChange={(e) => setProficiency(e.target.value)}
  variant="outlined"
  SelectProps={{ native: true }}
>
  <option value="">Select</option>
  <option value="Native">Native</option>
  <option value="Fluent">Fluent</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Basic">Basic</option>
</TextField>

      <Button onClick={handleAdd} variant="contained">
        Add Language
      </Button>
    </div>
  );
};

export default LanguageLayout;

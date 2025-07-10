import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ILanguageItem } from './languages.interface';
export type { ILanguageItem };

export interface LanguageState {
  languages: ILanguageItem[];
  set: (langs: ILanguageItem[]) => void;
  add: (item: ILanguageItem) => void;
  remove: (index: number) => void;
  update: (index: number, updated: ILanguageItem) => void;
  reset: () => void;
}

export const useLanguagesStore = create<LanguageState>()(
  persist(
    (set) => ({
      languages: [],
      set: (langs) => set({ languages: langs }), // ✅ Fix this
      add: (item) =>
        set((state) => ({
          languages: [...state.languages, item],
        })),
      remove: (index) =>
        set((state) => ({
          languages: state.languages.filter((_, i) => i !== index),
        })),
      update: (index, updated) =>
        set((state) => {
          const updatedLanguages = [...state.languages];
          updatedLanguages[index] = updated;
          return { languages: updatedLanguages };
        }),
      reset: () => set({ languages: [] }),
    }),
    { name: 'languages' }
  )
);

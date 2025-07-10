export interface ILanguageItem {
  id: string;
  language: string;
  proficiency: string;
}

export interface LanguageState {
  languages: ILanguageItem[];
  add: (item: ILanguageItem) => void;
  remove: (index: number) => void;
  update: (index: number, updated: ILanguageItem) => void;
  reset: () => void;
  set: (langs: ILanguageItem[]) => void;
}

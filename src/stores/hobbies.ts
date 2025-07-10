import { create } from 'zustand';
import resumeData from '@/helpers/constants/resume-data.json';

interface HobbiesState {
  hobbies: string[];
  set: (hobbies: string[]) => void;
  add: (hobby: string) => void;
  remove: (index: number) => void;
  reset: () => void; // ✅ Add this
}

export const useHobbiesStore = create<HobbiesState>((set, get) => ({
  hobbies: [],
  set: (hobbies) => set({ hobbies }),
  add: (hobby) => set({ hobbies: [...get().hobbies, hobby] }),
  remove: (index) => {
    const updated = [...get().hobbies];
    updated.splice(index, 1);
    set({ hobbies: updated });
  },
  reset: () => set({ hobbies: resumeData.hobbies ?? [] }), // ✅ Reset to original
}));

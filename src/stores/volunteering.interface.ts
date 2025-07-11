// src/stores/volunteering.interface.ts
export interface IVolunteeringItem {
  id: string;
  organization: string;
  position: string;
  startDate: string | null;
  isVolunteeringNow: boolean;
  endDate: string | null;
  summary: string;
  url?: string;
  highlights?: string[];
}

export interface IVolunteeringStore {
  volunteeredExps: IVolunteeringItem[];
  add: (item: IVolunteeringItem) => void;
  remove: (index: number) => void;
  reset: (items: IVolunteeringItem[]) => void;
  updatedVolunteeringExp: (index: number, updated: IVolunteeringItem) => void;
  get: (index: number) => IVolunteeringItem;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
}

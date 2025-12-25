import { create } from 'zustand';

interface AppState {
  selectedModuleId: string;
  setSelectedModuleId: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedModuleId: 'llm-visibility', // Default module
  setSelectedModuleId: (id) => set({ selectedModuleId: id }),
}));
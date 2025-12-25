import { create } from 'zustand';

// Define the shape of our store's state and actions
interface AppState {
  selectedModuleId: string;
  setSelectedModuleId: (id: string) => void;
}

// 3. Create the Zustand store with initial state and actions
export const useStore = create<AppState>((set) => ({
  selectedModuleId: 'llm-visibility', // Default module
  setSelectedModuleId: (id) => set({ selectedModuleId: id }),
}));
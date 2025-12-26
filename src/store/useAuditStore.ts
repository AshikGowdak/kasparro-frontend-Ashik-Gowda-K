// import { create } from 'zustand';
// import rawData from "@/data/audit-data.json";
// // 1. We use this to define the type of our return data
// import { BrandAuditData } from "@/types/audit"; 

// // Define the shape of our store's state and actions
// interface AuditState {
//   selectedBrand: string;
//   selectedModuleId: string;
//   setSelectedBrand: (brand: string) => void;
//   setSelectedModuleId: (id: string) => void;
//   // 2. We use BrandAuditData here to ensure the function returns the correct shape
//   getBrandData: () => BrandAuditData; 
// }

// // 3. Create the Zustand store with initial state and actions
// export const useAuditStore = create<AuditState>((set, get) => ({
//   selectedBrand: "Acme Corp",
//   selectedModuleId: "visibility",

//   setSelectedBrand: (brand) => set({ selectedBrand: brand }),
//   setSelectedModuleId: (id) => set({ selectedModuleId: id }),

//   getBrandData: () => {
//     const activeBrand = get().selectedBrand;
//     // We cast the raw JSON to the interface to ensure Type Safety
//     const allBrands = (rawData as any).allBrands as BrandAuditData[];
//     return allBrands.find((b) => b.brandName === activeBrand) || allBrands[0];
//   }
// }));


import { create } from 'zustand';
import rawData from "@/data/audit-data.json";
// 1. We use this to define the type of our return data
import { BrandAuditData } from "@/types/audit"; 

// Define the shape of our store's state and actions
interface AuditState {
  selectedBrand: string;
  selectedModuleId: string;
  setSelectedBrand: (brand: string) => void;
  setSelectedModuleId: (id: string) => void;
  // 2. We use BrandAuditData here to ensure the function returns the correct shape
  getBrandData: () => BrandAuditData; 
}

// 3. Create the Zustand store with initial state and actions
export const useAuditStore = create<AuditState>((set, get) => ({
  selectedBrand: "Acme Corp",
  selectedModuleId: "visibility",

  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModuleId: (id) => set({ selectedModuleId: id }),

  getBrandData: () => {
    const activeBrand = get().selectedBrand;
    // We cast the raw JSON to the interface to ensure Type Safety
    const allBrands = (rawData as any).allBrands as BrandAuditData[];
    return allBrands.find((b) => b.brandName === activeBrand) || allBrands[0];
  }
}));
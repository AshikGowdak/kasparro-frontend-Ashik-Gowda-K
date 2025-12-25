"use client";
import { useAuditStore } from "@/store/useAuditStore";
import rawData from "@/data/audit-data.json";

export function BrandSelector() {
  const { selectedBrand, setSelectedBrand } = useAuditStore();

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Brand</label>
      <select 
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none cursor-pointer"
      >
        {rawData.allBrands.map((b) => (
          <option key={b.brandName} value={b.brandName}>
            {b.brandName}
          </option>
        ))}
      </select>
    </div>
  );
}
// dashboard page showing brand snapshot statistics
"use client";
import { useAuditStore } from "@/store/useAuditStore"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldCheck, Target, Clock } from "lucide-react";
import rawData from "@/data/audit-data.json"; // Only used to populate the dropdown list

export default function DashboardPage() {
  // 1. Get the reactive helper and state from our Store
  const { getBrandData, setSelectedBrand, selectedBrand } = useAuditStore();
  
  // 2. This resolves the 'snapshot' error by getting the specific active brand object
  const activeBrandData = getBrandData();

  const stats = [
    { 
      title: "AI Visibility Score", 
      value: `${activeBrandData.snapshot.visibilityScore}%`, 
      icon: Activity 
    },
    { 
      title: "Trust / EEAT Score", 
      value: `${activeBrandData.snapshot.eeatScore}/100`, 
      icon: ShieldCheck 
    },
    { 
      title: "Keyword Coverage", 
      value: `${activeBrandData.snapshot.keywordCoverage}%`, 
      icon: Target 
    },
    { 
      title: "Last Audit", 
      value: "2h ago", 
      icon: Clock 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">Brand Snapshot</h1>
          <p className="text-sm text-slate-500 font-medium">Monitoring AI-first search presence</p>
        </div>

        {/* 3. This resolves the 'brands' error by mapping over 'allBrands' instead */}
        <select 
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="bg-white border border-slate-200 rounded-md px-4 py-2 text-sm font-bold shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          {rawData.allBrands.map((brand) => (
            <option key={brand.brandName} value={brand.brandName}>
              {brand.brandName}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.title} className="border border-slate-100 shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[10px] font-bold uppercase text-slate-400">
                {s.title}
              </CardTitle>
              <s.icon className="w-4 h-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-slate-900">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
"use client";
import { useAuditStore } from "@/store/useAuditStore";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Lightbulb, BarChart } from "lucide-react";
import { Recommendation } from "@/types/audit"; // Import your types

export default function AuditPage() {
  // 1. Access the reactive store instead of direct JSON
  const { getBrandData, selectedModuleId, setSelectedModuleId } = useAuditStore();
  
  // 2. Get data for the active brand
  const brandData = getBrandData();
  const modules = brandData.modules;
  
  // 3. Find the active module based on the store's ID
  const activeModule = modules.find(m => m.id === selectedModuleId) || modules[0];

  return (
    <div className="flex gap-8 h-[calc(100vh-160px)] animate-in fade-in duration-500">
      
      {/* SIDEBAR: List of 7 modules */}
      <div className="w-64 flex flex-col gap-2 overflow-y-auto pr-2">
        <p className="text-[10px] font-bold text-slate-400 mb-4 px-2 uppercase tracking-widest">
          Audit Modules
        </p>
        {modules.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedModuleId(m.id)}
            className={`flex items-center justify-between p-4 rounded-2xl text-sm font-semibold transition-all border ${
              selectedModuleId === m.id 
                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100" 
                : "bg-white text-slate-500 border-transparent hover:border-slate-200"
            }`}
          >
            {m.name}
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              selectedModuleId === m.id ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400"
            }`}>
              {m.score}%
            </span>
          </button>
        ))}
      </div>

      {/* MAIN PANEL: Details */}
      <div className="flex-1 bg-white rounded-[2rem] border border-slate-100 p-10 overflow-y-auto shadow-sm">
        <div className="flex justify-between items-start mb-12 border-b border-slate-50 pb-8">
          <div>
            <Badge variant="outline" className="mb-2 text-blue-600 border-blue-100 bg-blue-50">Active Audit</Badge>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">
              {activeModule.name}
            </h2>
            <p className="text-slate-400 font-medium text-sm mt-1">
              Neural analysis of brand latent space positioning.
            </p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-black text-blue-600 leading-none">{activeModule.score}%</div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-2">Confidence Score</p>
          </div>
        </div>

        <div className="grid gap-10">
          {/* Key Insights */}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <BarChart className="w-4 h-4 text-blue-500" /> Key Insights
            </h3>
            <div className="grid gap-3">
              {activeModule.insights.map((ins: string, i: number) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 border-l-4 border-blue-500">
                  {ins}
                </div>
              ))}
            </div>
          </section>

          {/* Issues / Flags */}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-orange-500" /> Critical Flags
            </h3>
            <div className="grid gap-3">
              {activeModule.flags.map((flag: string, i: number) => (
                <div key={i} className="p-4 bg-orange-50/50 text-orange-800 rounded-xl text-sm font-medium border border-orange-100">
                  {flag}
                </div>
              ))}
            </div>
          </section>

          {/* Recommendations */}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-green-600" /> Strategic Recommendations
            </h3>
            <div className="grid gap-4">
              {activeModule.recommendations.map((rec: string | Recommendation, i: number) => (
                <div key={i} className="p-5 bg-white border border-slate-200 rounded-2xl text-sm font-medium shadow-sm hover:border-blue-200 transition-colors">
                   {/* Handle both string and object recommendations based on your JSON structure */}
                  {typeof rec === 'string' ? rec : rec.title}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
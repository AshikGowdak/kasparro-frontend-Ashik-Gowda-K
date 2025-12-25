"use client";
import { useAuditStore } from "@/store/useAuditStore"; // Updated to use the reactive store
import { cn } from "@/lib/utils";
import { ShieldCheck, LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  // 1. Grab the reactive helper and state from the store
  const { getBrandData, selectedModuleId, setSelectedModuleId } = useAuditStore();

  // 2. Get the specific data for whichever brand is currently active
  const brandData = getBrandData();
  const modules = brandData.modules;

  // 3. Render the sidebar with modules
  return (
    <aside className="w-64 border-r bg-white h-screen flex flex-col sticky top-0">
      <div className="p-6 border-b">
        <h2 className="text-xl font-black tracking-tighter text-slate-900 uppercase italic">
          KASPARRO<span className="text-blue-600">.</span>
        </h2>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
          AI Intelligence Core
        </p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <div className="flex items-center justify-between px-2 pb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Audit Modules
          </p>
          <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">
            {modules.length}
          </span>
        </div>

        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => setSelectedModuleId(module.id)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
              selectedModuleId === module.id 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-100 scale-[1.02]" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className={cn(
                selectedModuleId === module.id ? "text-blue-200" : "text-slate-400"
              )} />
              {module.name}
            </div>
            {/* Show the module score in the sidebar for better UX visibility */}
            <span className={cn(
              "text-[10px] font-mono font-bold",
              selectedModuleId === module.id ? "text-blue-100" : "text-slate-400"
            )}>
              {module.score}%
            </span>
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          System Status: Optimal
        </div>
        <p className="text-[9px] text-slate-300 font-medium">Engine v1.0.4-beta • 2025</p>
      </div>
    </aside>
  );
}
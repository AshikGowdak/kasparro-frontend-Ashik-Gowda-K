"use client";
import { useAuditStore } from "@/store/useAuditStore";
import { cn } from "@/lib/utils";
import { ShieldCheck, LayoutDashboard, Sparkles, Zap, Brain, Cpu, Target, BarChart3, Activity, ChevronRight, CheckCircle, Clock, Users } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const { getBrandData, selectedModuleId, setSelectedModuleId } = useAuditStore();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  const brandData = getBrandData();
  const modules = brandData.modules;

  const moduleIcons = {
    "ai-visibility": Activity,
    "trust-eeat": ShieldCheck,
    "keyword-coverage": Target,
    "brand-mentions": Users,
    "context-depth": Brain,
    "ai-readiness": Zap,
    "performance": BarChart3,
  };

  const getModuleIcon = (moduleName: string) => {
    const iconKey = Object.keys(moduleIcons).find(key => 
      moduleName.toLowerCase().includes(key.split('-')[0])
    );
    return iconKey ? moduleIcons[iconKey as keyof typeof moduleIcons] : ShieldCheck;
  };

  const toggleModuleExpand = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <aside className="w-72 border-r bg-gradient-to-b from-white to-slate-50/80 h-screen flex flex-col sticky top-0">
      {/* Header */}
      <div className="p-6 border-b border-slate-200/80">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-2 h-2 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              KASPARRO<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">
              AI Intelligence Core
            </p>
          </div>
        </div>
        
        {/* Stats Summary */}
        <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-blue-700">Overall Score</span>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-500" />
              <span className="text-xs font-bold text-slate-900">87%</span>
            </div>
          </div>
          <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '87%' }} />
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-5 space-y-2 overflow-y-auto">
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
            <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Audit Modules
            </p>
          </div>
          <span className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-2.5 py-1 rounded-full font-bold">
            {modules.length} active
          </span>
        </div>

        {modules.map((module) => {
          const Icon = getModuleIcon(module.name);
          const isActive = selectedModuleId === module.id;
          const isExpanded = expandedModule === module.id;
          const isHovered = hoveredModule === module.id;

          return (
            <div key={module.id} className="space-y-1">
              <button
                onClick={() => {
                  setSelectedModuleId(module.id);
                  toggleModuleExpand(module.id);
                }}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 group",
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-200/50"
                    : "text-slate-600 hover:bg-white hover:shadow-lg hover:border hover:border-slate-200"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                    isActive 
                      ? "bg-white/20 backdrop-blur-sm" 
                      : "bg-slate-100 group-hover:bg-blue-50"
                  )}>
                    <Icon size={20} className={cn(
                      isActive ? "text-white" : "text-slate-500 group-hover:text-blue-500",
                      "transition-colors duration-300"
                    )} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{module.name}</div>
                    <div className={cn(
                      "text-xs mt-0.5 transition-colors duration-300",
                      isActive ? "text-blue-100/80" : "text-slate-400 group-hover:text-slate-600"
                    )}>
                      {isActive ? "Active analysis" : "Click to analyze"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "text-sm font-bold font-mono transition-all duration-300",
                    isActive ? "text-white" : "text-slate-700 group-hover:text-slate-900",
                    isHovered && "scale-110"
                  )}>
                    {module.score}%
                  </span>
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-all duration-300",
                    isActive ? "text-white/80" : "text-slate-400 group-hover:text-slate-600",
                    isExpanded && "rotate-90",
                    isHovered && "translate-x-1"
                  )} />
                </div>
              </button>

              {/* Expanded Module Details */}
              {isExpanded && (
                <div className="ml-4 pl-12 pr-4 py-3 bg-gradient-to-r from-slate-50/50 to-white/50 rounded-lg border border-slate-100 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Last Analysis</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-500">2h ago</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs text-slate-600">7 AI models analyzed</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${module.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Quick Actions */}
        <div className="mt-6 pt-5 border-t border-slate-200/50">
          <div className="px-2 mb-3">
            <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Quick Actions</p>
          </div>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">New Audit</div>
                <div className="text-xs text-slate-500">Run fresh analysis</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">Export Report</div>
                <div className="text-xs text-slate-500">Download insights</div>
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Footer */}
      <div className="p-5 border-t border-slate-200/80 bg-gradient-to-r from-white to-slate-50/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 border-2 border-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">System Optimal</div>
            <div className="text-xs text-slate-500">All engines running</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <div className="text-slate-400 font-medium">v1.0.4-beta</div>
          <div className="flex items-center gap-1 text-slate-400">
            <Cpu className="w-3 h-3" />
            <span>7 agents active</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
"use client";
import { useEffect, useState } from "react";
import { useAuditStore } from "@/store/useAuditStore";
import { AuditSidebar } from "@/components/features/audit/AuditSidebar";
import { AuditContent } from "@/components/features/audit/AuditContent";
import { Brain, Zap, Sparkles, Cpu } from "lucide-react";

export default function AuditPage() {
  const { getBrandData, selectedModuleId, setSelectedModuleId } = useAuditStore();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Ensure a module is selected on load
    const data = getBrandData();
    if (data?.modules?.length > 0 && !selectedModuleId) {
      setSelectedModuleId(data.modules[0].id);
    }
    
    // Simulate loading for better UX
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [getBrandData, selectedModuleId, setSelectedModuleId]);

  const brandData = getBrandData();

  if (!mounted) return null;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)] bg-gradient-to-b from-slate-50 to-white">
        <div className="relative">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
          </div>
          
          {/* Loading card */}
          <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-12 shadow-2xl">
            <div className="flex flex-col items-center gap-8">
              {/* Animated logo */}
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Brain className="w-12 h-12 text-white animate-pulse" />
                </div>
                
                {/* Orbiting dots */}
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-orbit"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        transformOrigin: `center center`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Loading text and progress */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5 text-blue-500 animate-pulse" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Initializing Neural Audit
                  </h3>
                  <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                </div>
                
                <p className="text-slate-600 max-w-md leading-relaxed">
                  Analyzing brand context across 7 AI reasoning engines
                </p>
                
                {/* Progress bar */}
                <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden mt-6">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-loading-bar"
                    style={{ animationDuration: '2s' }}
                  />
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                  <Cpu className="w-4 h-4" />
                  <span>Loading intelligence modules...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!brandData || !brandData.modules) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)] bg-gradient-to-b from-slate-50 to-white">
        <div className="text-center space-y-6 p-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mx-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              No Audit Data Available
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Please run a brand audit to generate AI insights and recommendations.
            </p>
          </div>
          
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg transition-all duration-300">
            Start New Audit
          </button>
        </div>
      </div>
    );
  }

  const activeModule = brandData.modules.find(m => m.id === selectedModuleId) || brandData.modules[0];

  return (
    <main className="flex gap-8 h-[calc(100vh-160px)] animate-in fade-in duration-700 overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl" />
      </div>
      
      {/* Main content */}
      <div className="relative flex-1 flex gap-8 p-2">
        <AuditSidebar 
          modules={brandData.modules} 
          activeId={activeModule.id} 
          onSelect={setSelectedModuleId} 
        />
        <AuditContent module={activeModule} />
      </div>
      
      {/* Floating action button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group z-50">
        <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-xs text-white font-bold flex items-center justify-center animate-pulse">
          7
        </span>
      </button>
    </main>
  );
}
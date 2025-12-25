"use client";
import { useEffect, useState } from "react"; // Add these
import { useAuditStore } from "@/store/useAuditStore";
// ... other imports

export default function AuditPage() {
  const { getBrandData, selectedModuleId, setSelectedModuleId } = useAuditStore();
  
  // 1. Add a mounting check to prevent hydration mismatch/prerender errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const brandData = getBrandData();

  // 2. Safety Check: If data isn't ready or we aren't mounted, show a loader
  if (!mounted || !brandData || !brandData.modules) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const modules = brandData.modules;
  const activeModule = modules.find(m => m.id === selectedModuleId) || modules[0];

  return (
    <div className="flex gap-8 h-[calc(100vh-160px)] animate-in fade-in duration-500">
      {/* ... the rest of your JSX mapping ... */}
    </div>
  );
}
import Sidebar from "@/components/dashboard/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50">
      {/* Sidebar stays fixed */}
      <Sidebar /> 
      
      <div className="flex flex-col flex-1">
        <header className="h-16 border-b bg-white flex items-center px-8 justify-between">
          <div className="text-sm font-medium text-slate-500">Workspace / Audit / Acme Corp</div>
          <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
        </header>
        
        <ScrollArea className="flex-1">
          <main className="p-8 max-w-7xl mx-auto">
            {children}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
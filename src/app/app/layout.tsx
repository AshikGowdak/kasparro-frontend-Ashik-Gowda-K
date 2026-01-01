import Sidebar from "@/components/dashboard/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Bell, Settings, ChevronDown, Zap, HelpCircle } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-blue-50/30">
      {/* Sidebar stays fixed */}
      <Sidebar /> 
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Modern Header */}
        <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-sm border-b border-slate-200/80 px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Breadcrumbs & Search */}
          <div className="flex items-center gap-6 flex-1">
            <div className="hidden md:flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="font-medium">Workspace</span>
                <ChevronDown className="w-3 h-3" />
                <div className="h-4 w-px bg-slate-300" />
                <span className="font-medium text-blue-600">Neural Audit</span>
                <ChevronDown className="w-3 h-3" />
                <div className="h-4 w-px bg-slate-300" />
                <span className="font-semibold text-slate-900">Acme Corp</span>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="hidden lg:flex relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search across AI models, keywords, or insights..."
                className="pl-10 pr-4 py-2 w-full bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
          
          {/* Right: Actions & User */}
          <div className="flex items-center gap-4">
            {/* Action Buttons */}
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors relative group">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 animate-pulse" />
            </button>
            
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors group">
              <HelpCircle className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </button>
            
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors group">
              <Settings className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </button>
            
            {/* User Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <span className="text-sm font-semibold text-white">AC</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 border-2 border-white" />
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">Acme Corp</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-xs text-slate-500">Enterprise Tier</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <ScrollArea className="flex-1">
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl" />
          </div>
          
          {/* Content Container */}
          <main className="relative p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Content Wrapper */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-xl p-6 lg:p-8">
              {children}
              
              {/* Footer Note */}
              <div className="mt-12 pt-6 border-t border-slate-200/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>7 AI models analyzing in real-time</span>
                    </div>
                    <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <span>Last updated: 2 minutes ago</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      Export Report
                    </button>
                    <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transition-all duration-300">
                      New Audit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
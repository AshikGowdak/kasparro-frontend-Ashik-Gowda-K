// dashboard page showing brand snapshot statistics
"use client";
import { useAuditStore } from "@/store/useAuditStore"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldCheck, Target, Clock, TrendingUp, Zap, Users, Globe, Award, BarChart3, Sparkles, Eye, RefreshCw, Download, ChevronRight } from "lucide-react";
import rawData from "@/data/audit-data.json";
import { useState } from "react";

export default function DashboardPage() {
  const { getBrandData, setSelectedBrand, selectedBrand } = useAuditStore();
  const activeBrandData = getBrandData();
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const stats = [
    { 
      id: "visibility",
      title: "AI Visibility Score", 
      value: `${activeBrandData.snapshot.visibilityScore}%`, 
      icon: Activity,
      change: "+12.5%",
      color: "from-blue-500 to-cyan-500",
      description: "Search engine ranking across AI models",
      action: "View breakdown"
    },
    { 
      id: "trust",
      title: "Trust / EEAT Score", 
      value: `${activeBrandData.snapshot.eeatScore}/100`, 
      icon: ShieldCheck,
      change: "+8.2%",
      color: "from-emerald-500 to-green-500",
      description: "Expertise, Experience, Authority, Trust",
      action: "Audit details"
    },
    { 
      id: "coverage",
      title: "Keyword Coverage", 
      value: `${activeBrandData.snapshot.keywordCoverage}%`, 
      icon: Target,
      change: "+15.3%",
      color: "from-violet-500 to-purple-500",
      description: "Topic authority & semantic reach",
      action: "See keywords"
    },
    { 
      id: "updated",
      title: "Last Updated", 
      value: "2h ago", 
      icon: Clock,
      color: "from-slate-600 to-slate-700",
      description: "Real-time AI monitoring",
      action: "Refresh now"
    },
  ];

  const performanceMetrics = [
    { id: "context", label: "Context Depth", value: 87, icon: BarChart3, color: "bg-blue-500", description: "Semantic understanding depth" },
    { id: "mentions", label: "Brand Mentions", value: 245, icon: Users, color: "bg-emerald-500", description: "Total mentions across web" },
    { id: "reach", label: "Global Reach", value: 42, icon: Globe, color: "bg-violet-500", description: "Countries with presence" },
    { id: "readiness", label: "AI Readiness", value: 92, icon: Award, color: "bg-amber-500", description: "Optimization for AI agents" },
  ];

  const quickStats = [
    { id: "models", label: "AI Models Analyzed", value: "7", description: "GPT-4, Claude, Gemini & more" },
    { id: "pages", label: "Pages Crawled", value: "1,247", description: "Deep site analysis" },
    { id: "response", label: "Avg. Response Time", value: "1.2s", description: "Real-time processing" },
    { id: "data", label: "Data Points", value: "45.8K", description: "Collected insights" },
  ];

  const handleStatClick = (statId: string) => {
    console.log(`Clicked on stat: ${statId}`);
    // In a real app, this would navigate to detailed view
  };

  const handleRefresh = () => {
    console.log("Refreshing dashboard...");
    // In a real app, this would trigger a data refresh
  };

  const handleExport = () => {
    console.log("Exporting report...");
    // In a real app, this would trigger report export
  };

  return (
    <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2">
      <div className="space-y-8 animate-in fade-in duration-700 max-w-7xl mx-auto pb-20 pt-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group cursor-pointer">
                  <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Brand Intelligence Dashboard
                  </h1>
                  <button 
                    onClick={handleRefresh}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors group"
                    title="Refresh data"
                  >
                    <RefreshCw className="w-4 h-4 text-slate-600 group-hover:rotate-180 transition-transform duration-500" />
                  </button>
                </div>
                <p className="text-slate-600 flex items-center gap-2 mt-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Real-time monitoring of AI-first search presence
                  <button 
                    onClick={handleExport}
                    className="ml-4 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    Export Report
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Brand Selector */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Target className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <select 
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="pl-10 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[240px] hover:border-blue-300"
            >
              {rawData.allBrands.map((brand) => (
                <option key={brand.brandName} value={brand.brandName}>
                  {brand.brandName}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse group-hover:scale-150 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card 
              key={stat.id}
              onClick={() => handleStatClick(stat.id)}
              onMouseEnter={() => setHoveredStat(stat.id)}
              onMouseLeave={() => setHoveredStat(null)}
              className="relative overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50/50 cursor-pointer"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${stat.color} transition-opacity duration-500 group-hover:opacity-10`} />
              
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <div className="space-y-1">
                  <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {stat.title}
                  </CardTitle>
                  <p className="text-xs text-slate-400">{stat.description}</p>
                </div>
                <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                  {hoveredStat === stat.id && (
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-slate-700" />
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">
                      {stat.value}
                    </div>
                    {stat.change && (
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-semibold text-emerald-600">{stat.change}</span>
                        <span className="text-xs text-slate-500">vs last week</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Mini progress indicator for scores */}
                  {(stat.title.includes("Score") || stat.title.includes("Coverage")) && (
                    <div className="w-20 group">
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 group-hover:scale-y-125 origin-left`}
                          style={{ 
                            width: stat.title.includes("Score") 
                              ? `${activeBrandData.snapshot.eeatScore}%`
                              : `${activeBrandData.snapshot.visibilityScore}%`
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action button that appears on hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 w-full justify-end">
                    {stat.action}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg`}>
                <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Performance Bars */}
          <Card className="border border-slate-100 shadow-lg bg-gradient-to-br from-white to-blue-50/30 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                Performance Metrics
                <button className="ml-auto text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                  <Eye className="w-4 h-4" />
                  View details
                </button>
              </CardTitle>
              <p className="text-sm text-slate-500">Detailed analysis of brand presence</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {performanceMetrics.map((metric) => (
                <div 
                  key={metric.id}
                  onMouseEnter={() => setHoveredMetric(metric.id)}
                  onMouseLeave={() => setHoveredMetric(null)}
                  className="space-y-3 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`relative w-10 h-10 rounded-lg ${metric.color} bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300`}>
                        <metric.icon className={`w-5 h-5 ${metric.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform`} />
                        {hoveredMetric === metric.id && (
                          <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                            <ChevronRight className="w-2 h-2 text-slate-700" />
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                          {metric.label}
                        </span>
                        <p className="text-xs text-slate-500">{metric.description}</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {metric.value}
                      {metric.label !== "Global Reach" && "%"}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden group">
                    <div 
                      className={`h-full ${metric.color} rounded-full transition-all duration-1000 group-hover:scale-y-125 origin-left`}
                      style={{ width: `${metric.value}%` }}
                    />
                    <div className="mt-1 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click for detailed analysis
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Right Column: AI Insights */}
          <Card className="border border-slate-100 shadow-lg bg-gradient-to-br from-white to-purple-50/30 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-500" />
                AI Insights & Recommendations
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium">
                    7 Agents
                  </span>
                </div>
              </CardTitle>
              <p className="text-sm text-slate-500">Powered by 7-agent analysis engine</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white border border-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ChevronRight className="w-2 h-2 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-slate-950 transition-colors">
                      Visibility Optimization
                    </h4>
                    <p className="text-sm text-slate-600">
                      Increase context depth by 23% through structured data enhancement
                    </p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                        Implement recommendation →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-slate-950 transition-colors">
                      Keyword Expansion
                    </h4>
                    <p className="text-sm text-slate-600">
                      15 new semantic opportunities identified in your niche
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 hover:border-amber-200 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-slate-950 transition-colors">
                      Next Audit Scheduled
                    </h4>
                    <p className="text-sm text-slate-600">
                      Full neural audit in 3 hours. 7-agent analysis pending.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="text-xs font-medium text-amber-600 hover:text-amber-700">
                        Schedule earlier
                      </button>
                      <button className="text-xs font-medium text-slate-600 hover:text-slate-700">
                        View queue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase mb-2">
                {stat.label}
              </div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {stat.value}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
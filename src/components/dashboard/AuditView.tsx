"use client";
import { useStore } from "@/store/useStore";
import rawData from "@/data/audit-data.json";
import { BrandAudit, AuditModule } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const auditData = rawData as unknown as BrandAudit;

// AuditView component to display insights and recommendations for the selected audit module

export default function AuditView() {
  const { selectedModuleId } = useStore();
  
  // Defensive find logic
  const activeModule = auditData.modules.find(m => m.id === selectedModuleId);

  if (!activeModule) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-xl">
        <p className="text-slate-500">Select a module to view AI analysis</p>
      </div>
    );
  }

  // Main render
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{activeModule.name}</h1>
          <p className="text-slate-500 mt-1">{activeModule.description}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-400 uppercase">Module Score</p>
          <p className={`text-4xl font-black ${activeModule.score > 70 ? 'text-green-600' : 'text-orange-600'}`}>
            {activeModule.score}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Insights Section */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-500" />
              Key AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {activeModule.insights.map((insight, i) => (
                <li key={i} className="text-sm text-slate-600 border-b pb-2 last:border-0 italic">
                  "{insight}"
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recommendations Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Strategic Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeModule.recommendations.map((rec) => (
              <div key={rec.id} className="p-4 rounded-lg border bg-slate-50 group hover:border-blue-200 transition-all">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900">{rec.title}</h4>
                  <Badge variant={rec.impact === 'high' ? 'destructive' : 'secondary'}>
                    {rec.impact} Impact
                  </Badge>
                </div>
                <p className="text-sm text-slate-600">{rec.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
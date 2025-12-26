import { AuditModule, Recommendation } from "@/types/audit";
import { Badge } from "@/components/ui/badge";
import { BarChart, AlertCircle, Lightbulb, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Define a type that handles both strings and our rich Recommendation objects
type AuditItem = string | Recommendation;

export function AuditContent({ module }: { module: AuditModule }) {
  return (
    <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-100 p-10 overflow-y-auto shadow-sm">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-12 border-b border-slate-50 pb-8">
        <div>
          <Badge className="mb-3 bg-blue-50 text-blue-600 border-blue-100 uppercase tracking-tighter">
            Module Analysis
          </Badge>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">
            {module.name}
          </h2>
        </div>
        <div className="text-right">
          <div className="text-6xl font-black text-blue-600 tracking-tighter">{module.score}%</div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">
            Latent Weighting
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Insights & Flags use simple strings */}
        <AuditSection 
          title="Neural Insights" 
          icon={<Zap className="w-4 h-4 text-blue-500" />} 
          items={module.insights} 
          variant="blue" 
        />

        <AuditSection 
          title="Risk Hallucinations" 
          icon={<AlertCircle className="w-4 h-4 text-orange-500" />} 
          items={module.flags} 
          variant="orange" 
        />

        {/* Recommendations use the rich Recommendation interface */}
        <AuditSection 
          title="Actionable Optimization" 
          icon={<Lightbulb className="w-4 h-4 text-emerald-500" />} 
          items={module.recommendations} 
          variant="emerald" 
        />
      </div>
    </div>
  );
}

function AuditSection({ title, icon, items, variant }: { 
  title: string, 
  icon: any, 
  items: AuditItem[], 
  variant: 'blue' | 'orange' | 'emerald' 
}) {
  const styles = {
    blue: "bg-blue-50/50 border-blue-100 text-blue-900",
    orange: "bg-orange-50/50 border-orange-100 text-orange-900",
    emerald: "bg-emerald-50/50 border-emerald-100 text-emerald-900"
  };

  const badgeStyles = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-orange-100 text-orange-700 border-orange-200",
    low: "bg-blue-100 text-blue-700 border-blue-200"
  };

  return (
    <section>
      <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
        {icon} {title}
      </h3>
      <div className="grid gap-3">
        {items.map((item, i) => {
          // Check if item is a simple string or a Recommendation object
          const isObject = typeof item !== 'string';

          return (
            <div key={i} className={cn("p-5 rounded-2xl border transition-all", styles[variant])}>
              {isObject ? (
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start w-full">
                    <span className="font-bold text-base leading-none">{item.title}</span>
                    <span className={cn("text-[9px] font-black uppercase px-2 py-1 rounded border", badgeStyles[item.impact])}>
                      {item.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
                </div>
              ) : (
                <p className="text-sm font-medium">{item}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
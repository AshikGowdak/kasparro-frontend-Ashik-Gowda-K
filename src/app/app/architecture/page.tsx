import { Badge } from "@/components/ui/badge";

// ArchitecturePage component to display system architecture steps
export default function ArchitecturePage() {
  const steps = [
    { name: "InputAssembler", status: "Active", desc: "Aggregates raw domain data, mentions, and historical SEO snapshots into a unified context window." },
    { name: "ContextPack", status: "Optimization", desc: "Injects LLM-specific parameters (e.g., Perplexity citation formats) into the audit sequence." },
    { name: "Audit Modules", status: "7 Agents Loaded", desc: "Specialized reasoning agents analyze the brand against trust, factuality, and visibility benchmarks." },
    { name: "Output Surfaces", status: "UI/API", desc: "Visualizes strategic recommendations and exports structured intelligence for marketing teams." }
  ];

// Define the steps in the system architecture
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-2xl font-black italic tracking-tighter">SYSTEM ARCHITECTURE</h1>
      <div className="relative border-l-2 border-blue-100 ml-4 pl-8 space-y-12">
        {steps.map((step, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-blue-400 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{step.name}</h3>
                <Badge variant="secondary" className="text-[10px]">{step.status}</Badge>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
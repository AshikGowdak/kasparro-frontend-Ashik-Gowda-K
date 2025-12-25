import { Layers, Database, Cpu, LayoutTemplate } from "lucide-react";

// PlatformPage component to display the AI audit pipeline

export default function PlatformPage() {
  const pipeline = [
    {
      title: "Data Consumption",
      desc: "We ingest your site metadata, social mentions, and LLM training data snapshots.",
      icon: Database,
    },
    {
      title: "InputAssembler",
      desc: "Cleans and tokenizes brand signals for model analysis.",
      icon: Layers,
    },
    {
      title: "AI Intelligence Core",
      desc: "Our 7-agent engine audits your 'Context Window' authority.",
      icon: Cpu,
    },
    {
      title: "Brand Intelligence",
      desc: "You receive high-fidelity visibility scores and LLM-ready recommendations.",
      icon: LayoutTemplate,
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-32 px-6">
      {/* Header */}
      <header className="mb-28 max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Inside the Engine
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Bridging the gap between brand identity and Large Language Models
          through a structured AI-first audit pipeline.
        </p>
      </header>

      {/* Pipeline */}
      <div className="relative grid gap-16">
        {/* Vertical guide line */}
        <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-blue-200 via-blue-300 to-transparent" />

        {pipeline.map((step, i) => (
          <div key={i} className="relative flex gap-10">
            {/* Step indicator */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <step.icon size={26} />
              </div>
            </div>

            {/* Content card */}
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

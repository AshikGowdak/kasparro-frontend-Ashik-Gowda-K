"use client";
import { Shield, Cpu, Network, Zap } from "lucide-react";

const steps = [
  {
    title: "Latent Space Mapping",
    desc: "We analyze how your brand is 'clustered' relative to competitors within the model's neural weights.",
    icon: <Network className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Citation Weighting",
    desc: "LLMs don't just use links; they use semantic authority. We measure 'Co-occurrence' scores across training datasets.",
    icon: <Cpu className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "RAG Optimization",
    desc: "We ensure your documentation is 'Search-Ready' for Retrieval-Augmented Generation (RAG) pipelines.",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="py-20 bg-slate-50 rounded-[3rem] px-10 my-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-black italic tracking-tighter mb-4">THE TECHNICAL ENGINE</h3>
        <p className="text-slate-500 mb-12 max-w-xl font-medium">
          Moving beyond meta-tags. We optimize the mathematical probability of your brand being the "Top Choice" in a generated response.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-4">{step.icon}</div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{step.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
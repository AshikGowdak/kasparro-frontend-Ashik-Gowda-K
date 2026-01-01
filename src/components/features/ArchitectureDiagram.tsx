"use client";
import { Shield, Cpu, Network, Zap, Sparkles, ChevronRight, Brain, Target, BarChart3 } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Latent Space Mapping",
    desc: "We analyze how your brand is 'clustered' relative to competitors within the model's neural weights.",
    icon: Network,
    color: "from-blue-500 to-cyan-500",
    metrics: ["1536 dimensions", "Cosine similarity", "Neural clustering"]
  },
  {
    title: "Citation Weighting",
    desc: "LLMs don't just use links; they use semantic authority. We measure 'Co-occurrence' scores across training datasets.",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    metrics: ["Semantic authority", "Co-occurrence", "Training datasets"]
  },
  {
    title: "RAG Optimization",
    desc: "We ensure your documentation is 'Search-Ready' for Retrieval-Augmented Generation (RAG) pipelines.",
    icon: Zap,
    color: "from-violet-500 to-pink-500",
    metrics: ["128K context", "Extraction accuracy", "Generation ready"]
  },
];

export function ArchitectureDiagram() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50/5 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 backdrop-blur-sm mb-6 hover:border-blue-200 transition-all duration-300 group">
            <Sparkles className="w-4 h-4 text-blue-600 group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide">
              TECHNICAL ENGINE
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse ml-2" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Moving Beyond
            <span className="block mt-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent italic">
              Meta-tags
            </span>
          </h3>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We optimize the mathematical probability of your brand being the <span className="font-bold text-blue-600">"Top Choice"</span> in a generated response.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isHovered = hoveredIndex === i;
            
            return (
              <div 
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-br from-slate-700 to-slate-900 bg-clip-text text-transparent">
                      {i + 1}
                    </span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-500`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-br ${step.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-950 transition-colors">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                    {step.desc}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-3">
                    {step.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-slate-50/50 to-white/50 border border-slate-100/50 hover:border-slate-200 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.color}`} />
                        <span className="text-sm font-medium text-slate-700">{metric}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Interactive Action */}
                  <div className={`mt-6 pt-4 border-t border-slate-200/50 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="w-full flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      <span>View technical details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-slate-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/80 to-blue-50/30 border border-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-slate-900 mb-2">1536</div>
              <div className="text-sm text-slate-600">Vector Dimensions</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/80 to-indigo-50/30 border border-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-slate-900 mb-2">99.8%</div>
              <div className="text-sm text-slate-600">Analysis Accuracy</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/80 to-purple-50/30 border border-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-slate-900 mb-2">7</div>
              <div className="text-sm text-slate-600">AI Agents</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/80 to-pink-50/30 border border-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-slate-900 mb-2">128K</div>
              <div className="text-sm text-slate-600">Context Tokens</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
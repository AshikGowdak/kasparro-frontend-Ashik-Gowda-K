import { Layers, Database, Cpu, LayoutTemplate, ArrowRight, CheckCircle, Sparkles, TrendingUp, Brain, Zap, Target, BarChart3, Play, Pause, Eye, Download, Book, Search, Terminal, Users, Globe, Lock, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PlatformPage() {
  const pipeline = [
    {
      title: "Data Consumption Engine",
      desc: "We ingest and process your site metadata, social mentions, and LLM training data snapshots to create a comprehensive digital footprint.",
      icon: Database,
      metrics: ["Real-time Crawling", "Multi-source Integration", "Data Normalization"],
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      title: "InputAssembler",
      desc: "Advanced cleaning and tokenization of brand signals for precise model analysis and contextual understanding.",
      icon: Layers,
      metrics: ["Semantic Tokenization", "Noise Reduction", "Context Preservation"],
      color: "from-indigo-500 to-purple-500",
      delay: 100
    },
    {
      title: "AI Intelligence Core",
      desc: "Our 7-agent engine performs deep audits of your 'Context Window' authority across multiple AI reasoning models.",
      icon: Cpu,
      metrics: ["Multi-agent Analysis", "Context Scoring", "Authority Mapping"],
      color: "from-violet-500 to-pink-500",
      delay: 200
    },
    {
      title: "Brand Intelligence Dashboard",
      desc: "Receive high-fidelity visibility scores, actionable insights, and LLM-ready recommendations for optimization.",
      icon: LayoutTemplate,
      metrics: ["Real-time Analytics", "Predictive Insights", "Optimization Roadmap"],
      color: "from-rose-500 to-orange-500",
      delay: 300
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="font-bold text-2xl tracking-tighter italic group">
              <span className="relative">
                <span className="relative z-10">KASPARRO</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </span>
              <span className="text-blue-600">.</span>
            </div>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/platform" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105 relative group">
                Platform
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300" />
              </Link>
              <Link href="/docs" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Docs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group">
              <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-5 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group">
              <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 blur-3xl" />
        </div>

        {/* Header */}
        <header className="relative mb-24 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 backdrop-blur-sm mb-10 hover:border-blue-200 transition-all duration-500 group">
            <Sparkles className="w-4 h-4 text-blue-600 group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide">
              AI-FIRST AUDIT PIPELINE
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="block text-slate-900">Inside the</span>
            <span className="block mt-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Engine Room
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
            A structured, multi-layered pipeline that bridges the gap between brand identity 
            and Large Language Models through systematic AI analysis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">7-Agent Analysis Engine</div>
                <div className="text-xs text-slate-500">Parallel neural processing</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">Real-time Processing</div>
                <div className="text-xs text-slate-500">Live data streams</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Target className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">High Precision</div>
                <div className="text-xs text-slate-500">99.8% accuracy rate</div>
              </div>
            </div>
          </div>
        </header>

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Animated Connection Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 h-full">
            <div className="absolute inset-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 rounded-full opacity-20" />
            <div className="absolute inset-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 rounded-full animate-pulse" />
          </div>
          
          {/* Animated Progress Nodes */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 h-full flex flex-col justify-between py-32">
            {pipeline.map((_, i) => (
              <div key={i} className="relative">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-white shadow-lg">
                  <div 
                    className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                    style={{ animationDelay: `${i * 400}ms` }}
                  />
                </div>
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping" style={{ animationDelay: `${i * 400}ms` }} />
              </div>
            ))}
          </div>

          <div className="grid gap-16 md:gap-20 relative">
            {pipeline.map((step, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
              >
                {/* Step Indicator */}
                <div className="relative z-20 flex-shrink-0">
                  <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-2xl hover:shadow-3xl transition-all duration-500 group`}>
                    <div className="w-full h-full rounded-[18px] bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-95 transition-transform duration-500">
                      <step.icon className={`w-12 h-12 bg-gradient-to-br ${step.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`} />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-white to-slate-50 border-4 border-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {i + 1}
                      </span>
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  </div>
                  
                  {/* Connector Arrow with animation */}
                  {i < pipeline.length - 1 && (
                    <div className="hidden md:block absolute top-28 left-1/2 -translate-x-1/2">
                      <div className="relative">
                        <ArrowRight className={`w-8 h-8 ${i % 2 === 0 ? 'text-blue-400' : 'text-purple-400'} transform transition-all duration-500 group-hover:translate-x-2`} />
                        <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div 
                  className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} transition-all duration-700`}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02]">
                    {/* Card Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 md:p-10">
                      {/* Card Header */}
                      <div className="flex flex-col gap-5 mb-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-500`}>
                            <div className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                              <step.icon className="w-8 h-8" />
                            </div>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                          {step.desc}
                        </p>
                      </div>

                      {/* Metrics List */}
                      <div className={`flex flex-wrap gap-3 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        {step.metrics.map((metric, idx) => (
                          <div 
                            key={idx}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-50/80 to-white/80 border border-slate-200/50 hover:border-slate-300 hover:bg-white transition-all duration-300 group/metric"
                          >
                            <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${step.color} group-hover/metric:scale-150 transition-transform duration-300`} />
                            <span className="text-sm font-medium text-slate-700 group-hover/metric:text-slate-900 transition-colors">
                              {metric}
                            </span>
                            <ArrowRight className="w-3 h-3 text-slate-400 opacity-0 group-hover/metric:opacity-100 transition-all duration-300" />
                          </div>
                        ))}
                      </div>

                      {/* Interactive Actions */}
                      <div className="mt-8 pt-6 border-t border-slate-200/50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className={`flex gap-3 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                          <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                            <Play className="w-4 h-4" />
                            Demo Process
                          </button>
                          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 overflow-hidden rounded-3xl`}>
                      <div className={`absolute ${i % 2 === 0 ? '-top-16 -right-16' : '-top-16 -left-16'} w-32 h-32 bg-gradient-to-br ${step.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-500`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-blue-50/50 border border-white backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-900 mb-2">750B+</div>
            <div className="text-sm text-slate-600">Tokens Processed</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-indigo-50/50 border border-white backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-900 mb-2">99.8%</div>
            <div className="text-sm text-slate-600">Analysis Accuracy</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-purple-50/50 border border-white backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-900 mb-2">7</div>
            <div className="text-sm text-slate-600">AI Agents</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-rose-50/50 border border-white backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Real-time Monitoring</div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="relative inline-flex flex-col items-center gap-10 p-12 rounded-3xl bg-gradient-to-br from-white/90 via-white/80 to-blue-50/50 border border-white/80 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto group/cta hover:shadow-3xl transition-all duration-500">
            {/* Background Effects */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-rose-500/10 rounded-3xl blur-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl group/icon hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-10 h-10 text-white group-hover/icon:rotate-180 transition-transform duration-700" />
              </div>
            </div>
            
            <div className="relative z-10 space-y-5">
              <h3 className="text-3xl font-bold text-slate-900 group-hover/cta:text-slate-950 transition-colors">
                Ready to Audit Your AI Presence?
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Join forward-thinking brands who are already optimizing their 
                context window authority with our 7-agent analysis engine.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group/btn">
                <Brain className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                Start Your Audit
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 rounded-xl bg-white/90 border-2 border-slate-300 text-slate-700 font-semibold hover:bg-white hover:border-slate-400 transition-all duration-300 flex items-center gap-3 group/btn2">
                <Download className="w-5 h-5 group-hover/btn2:scale-110 transition-transform" />
                View Sample Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
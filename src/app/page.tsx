import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArchitectureDiagram } from '@/components/features/ArchitectureDiagram';
import {
  ArrowRight,
  Shield,
  Search,
  BarChart3,
  Globe,
  Lock,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Cpu,
  Zap,
  Network,
  ChevronRight,
  Brain,
  Target,
  Users,
  Rocket,
  TrendingUp,
  Play,
  Pause,
  Eye
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50/5 to-white selection:bg-blue-100/50">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
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
              {['Platform', 'About', 'Pricing', 'Docs'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group">
              <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-5 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group">
              <Rocket className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/80 mb-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-semibold text-blue-700">Latent Space Optimization Engine</span>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            <span className="block">Stop Optimizing for Google.</span>
            <span className="relative inline-block mt-4">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent italic">
                Optimize for Weights.
              </span>
              <span className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Traditional SEO is built for crawlers. Kasparro is built for{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Inference</span>. 
            We engineer your brand&apos;s semantic probability within the neural weights of GPT-4, Claude, and Gemini.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" asChild className="h-14 px-10 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-500 group">
              <Link href="/app/dashboard" className="flex items-center gap-3">
                <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Enter Neural Dashboard
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-10 text-base border-2 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group">
              <Link href="/platform" className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                Read Technical Whitepaper
              </Link>
            </Button>
          </div>
          
          {/* Live stats indicator */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse" />
              <span>7 AI Models Analyzing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <span>Real-time Vector Analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse" />
              <span>750B+ Tokens Processed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TECHNICAL ENGINE */}
      <ArchitectureDiagram />

      {/* 3. TECHNICAL COMPARISON SECTION */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Shift from Indexing to Inference</h2>
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Understanding the mathematical difference between Keyword Ranking and Latent Proximity.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <tr>
                  <th className="p-8 text-xs uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4" />
                      Vector Metric
                    </div>
                  </th>
                  <th className="p-8 text-xs uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Traditional SEO
                    </div>
                  </th>
                  <th className="p-8 text-xs uppercase tracking-widest font-bold text-blue-400">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Kasparro AI-SEO
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors duration-200">
                  <td className="p-8 bg-gradient-to-r from-slate-50/80 to-white/80 font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      Core Architecture
                    </div>
                  </td>
                  <td className="p-8 text-slate-600">Inverted Keyword Index</td>
                  <td className="p-8">
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Neural Latent Space
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors duration-200">
                  <td className="p-8 bg-gradient-to-r from-slate-50/80 to-white/80 font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      Retrieval Method
                    </div>
                  </td>
                  <td className="p-8 text-slate-600">Boolean / TF-IDF Matching</td>
                  <td className="p-8">
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Vector Similarity (Cosine)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors duration-200">
                  <td className="p-8 bg-gradient-to-r from-slate-50/80 to-white/80 font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      Authority Signal
                    </div>
                  </td>
                  <td className="p-8 text-slate-600">Backlink PageRank</td>
                  <td className="p-8">
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Semantic Co-occurrence
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors duration-200">
                  <td className="p-8 bg-gradient-to-r from-slate-50/80 to-white/80 font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      Success Metric
                    </div>
                  </td>
                  <td className="p-8 text-slate-600">Click-Through Rate (CTR)</td>
                  <td className="p-8">
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Share of Model Voice (SoMV)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. PHYSICS OF INFERENCE: Terminal Component */}
      <section className="relative py-32 px-6 mx-4 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-[4rem]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-5xl font-black italic tracking-tighter text-white">
                THE PHYSICS <span className="text-blue-400">OF</span> INFERENCE
              </h2>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              When an LLM performs inference, it navigates high-dimensional space. 
              Our technology ensures your brand is mathematically the most probable 
              token to be generated in high-value queries.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Inference Speed</p>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-white">Real-time</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Data Depth</p>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-white">750B+ Tokens</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-rose-500" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
              </div>
              <div className="flex items-center gap-3">
                <button className="p-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                  <Play className="w-3 h-3 text-slate-400" />
                </button>
                <button className="p-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                  <Pause className="w-3 h-3 text-slate-400" />
                </button>
              </div>
            </div>
            
            <div className="font-mono text-sm space-y-3">
              <p className="text-slate-500">{"// Running Neural Cross-Reference..."}</p>
              <p className="text-blue-400">const latent_cluster = model.search(&apos;brand_authority&apos;);</p>
              <p className="text-emerald-400">Success: Co-occurrence detected in GPT-4 training weights.</p>
              <p className="text-cyan-400">Vector_Coord: [0.892, -0.112, 0.441]</p>
              <p className="text-violet-400">Citations: Verified_Sources &gt; 92%</p>
              
              <div className="pt-4">
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-[92%] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE MODULES GRID */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-4xl font-bold tracking-tight uppercase italic text-slate-900">
                The 7 Intelligence Modules
              </h2>
            </div>
            <p className="text-slate-500 text-lg">Standardizing how the world measures AI-Search visibility.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 'LLM Visibility', i: Globe, d: 'Rankings in Perplexity/ChatGPT', color: 'from-blue-500 to-cyan-500' },
              { n: 'E-E-A-T Trust', i: Shield, d: 'Authority signal verification', color: 'from-emerald-500 to-green-500' },
              { n: 'Factuality Check', i: CheckCircle2, d: 'Truthfulness auditing', color: 'from-violet-500 to-purple-500' },
              { n: 'Sentiment Align', i: MessageSquare, d: 'Brand voice consistency', color: 'from-rose-500 to-pink-500' },
              { n: 'Citation Authority', i: BarChart3, d: 'Reference & Source tracking', color: 'from-amber-500 to-orange-500' },
              { n: 'Non-Branded Rank', i: Search, d: 'Discovery optimization', color: 'from-indigo-500 to-blue-500' },
              { n: 'Hallucination Risk', i: Lock, d: 'Context prevention', color: 'from-slate-600 to-slate-700' }
            ].map((m, idx) => (
              <div 
                key={idx} 
                className="group p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.color} bg-opacity-10 flex items-center justify-center mb-5 group-hover:bg-opacity-20 transition-all duration-500`}>
                  <m.i className={`w-7 h-7 bg-gradient-to-br ${m.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`} />
                </div>
                <p className="font-bold text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">{m.n}</p>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{m.d}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-600">
                    <ChevronRight className="w-3 h-3" />
                    <span>Analyze module</span>
                  </div>
                </div>
              </div>
            ))}
            
            <Link 
              href="/app/dashboard" 
              className="group p-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex flex-col justify-center items-center text-center text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/30 transition-all duration-500">
                <Rocket className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-lg mb-2">Launch Neural Audit</p>
              <p className="text-sm text-blue-100/80 mb-4">7-agent analysis engine</p>
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
            <div className="space-y-6 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="font-bold text-2xl tracking-tighter italic">
                  KASPARRO<span className="text-blue-600">.</span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed">
                The mathematical layer for the generative search era. Built for engineering-led marketing teams.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Live since 2023</span>
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div className="text-sm text-slate-400">v2.1.0-alpha</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Cpu className="w-3 h-3" />
                  Product
                </p>
                <ul className="space-y-3">
                  {['Dashboard', 'API Docs', 'Whitepaper', 'Status'].map((item) => (
                    <li key={item} className="text-sm text-slate-500 hover:text-blue-600 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Users className="w-3 h-3" />
                  Company
                </p>
                <ul className="space-y-3">
                  {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                    <li key={item} className="text-sm text-slate-500 hover:text-blue-600 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  System
                </p>
                <ul className="space-y-3">
                  {['Latency', 'Uptime', 'Security', 'API'].map((item) => (
                    <li key={item} className="text-sm text-slate-500 hover:text-blue-600 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-400">
              © 2025 Kasparro Systems Inc. AI-SEO Research Division.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse" />
                <span>All systems operational</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
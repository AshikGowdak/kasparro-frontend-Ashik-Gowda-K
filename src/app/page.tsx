import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Shield,
  Search,
  BarChart3,
  Globe,
  Lock,
  CheckCircle2,
  MessageSquare,
  Sparkles
} from 'lucide-react';

// HomePage component for the landing page

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-blue-100">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="font-bold text-2xl tracking-tighter italic">
              KASPARRO<span className="text-blue-600">.</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['Platform', 'About', 'Pricing'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-600">Sign In</Button>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(37,99,235,0.08)_0%,rgba(255,255,255,0)_100%)]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-100 px-4 py-1.5 rounded-full font-medium">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Leading the AI-First SEO Era
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8">
            Stop Optimizing for Google. <br/>
            <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic px-2">
              Optimize for AI.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Kasparro ensures your brand is the first choice for ChatGPT, Gemini, and Perplexity. 
            Automated LLM visibility auditing for modern growth teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5">
              <Link href="/app/dashboard">Run AI-SEO Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base border-slate-200 hover:bg-slate-50">
              <Link href="/platform">View Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. THE DIFFERENCE SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why the search landscape is shifting.</h2>
              <p className="text-slate-600 text-lg">Traditional SEO focused on keywords. AI-SEO focuses on intent, trust, and latent space relationships.</p>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4 text-slate-400">The Legacy Approach</h3>
                <ul className="space-y-3 text-slate-500 text-sm">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/> Keyword density & meta tags</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/> Backlink quantity metrics</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/> Fighting for the "Blue Link" click</li>
                </ul>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl" />
              <h3 className="text-blue-400 font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                The Kasparro Method
              </h3>
              <ul className="space-y-6">
                {[
                  { t: 'Latent Space Association', d: 'How AI models "think" about your brand.' },
                  { t: 'Generative Answer Capture', d: 'Secure the #1 cited source in AI summaries.' },
                  { t: 'LLM Agent Verification', d: 'Ensure agents can successfully crawl your data.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">{item.t}</p>
                      <p className="text-slate-400 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES GRID */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The 7 Intelligence Modules</h2>
            <p className="text-slate-500">A comprehensive suite designed to map, track, and improve your presence across the Generative AI ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: 'LLM Visibility', i: Globe, d: 'Rankings in Perplexity/ChatGPT' },
              { n: 'E-E-A-T Trust', i: Shield, d: 'Authority signal verification' },
              { n: 'Factuality Check', i: CheckCircle2, d: 'Truthfulness auditing' },
              { n: 'Sentiment Align', i: MessageSquare, d: 'Brand voice consistency' },
              { n: 'Citation Authority', i: BarChart3, d: 'Reference & Source tracking' },
              { n: 'Non-Branded Rank', i: Search, d: 'Discovery optimization' },
              { n: 'Hallucination Risk', i: Lock, d: 'Context prevention' }
            ].map((m, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-blue-50 transition-colors">
                  <m.i className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="font-bold text-slate-900 mb-2">{m.n}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{m.d}</p>
              </div>
            ))}
            <div className="p-6 bg-blue-600 rounded-2xl flex flex-col justify-center items-center text-center text-white">
              <p className="font-bold mb-2">And more...</p>
              <p className="text-sm text-blue-100 mb-4">New models added weekly</p>
              <ArrowRight className="w-5 h-5 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="py-16 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="space-y-4">
              <div className="font-bold text-xl tracking-tighter italic">KASPARRO<span className="text-blue-600">.</span></div>
              <p className="text-sm text-slate-500 max-w-xs">The intelligence layer for the generative search era. Built for modern SEOs and CMOs.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Product</p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="hover:text-blue-600 cursor-pointer">Features</li>
                  <li className="hover:text-blue-600 cursor-pointer">API</li>
                  <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="hover:text-blue-600 cursor-pointer">About</li>
                  <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                  <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© 2025 Kasparro Systems Inc. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-slate-400">
              <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
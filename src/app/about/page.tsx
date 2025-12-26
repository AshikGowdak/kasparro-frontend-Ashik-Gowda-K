import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, Zap, ArrowRight, ChevronRight, Brain, Target, Users, Globe, Lock, MessageSquare, Shield, BarChart3, CheckCircle2, Search } from 'lucide-react';

export default function AboutPage() {
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
              <Link href="/platform" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Platform
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/docs" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Docs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/about" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300" />
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

      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 group">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse group-hover:scale-150 transition-transform" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide group-hover:text-blue-800 transition-colors">
              SHAPING THE FUTURE OF SEARCH
            </span>
            <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent hover:from-blue-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-700">
            Engineering a New
            <span className="block mt-2 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-700">
              Search Reality
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed hover:text-slate-700 transition-colors">
            Building the infrastructure for brands to thrive in an AI-first world where 
            search becomes intelligent dialogue
          </p>
          
          <div className="mt-10 h-1.5 w-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:w-40 transition-all duration-500" />
        </header>

        {/* Content Sections */}
        <div className="grid gap-16 md:gap-24">
          {/* Mission Section */}
          <section className="relative max-w-4xl mx-auto">
            <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full hidden md:block" />
            
            <div className="grid gap-8">
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Brain className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Mission
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 group-hover:text-slate-600 transition-colors">Our Core Purpose</p>
                </div>
              </div>
              
              <div className="pl-0 md:pl-4">
                <p className="text-xl text-slate-700 leading-relaxed mb-6 hover:text-slate-800 transition-colors">
                  To build the intelligent infrastructure that empowers brands to thrive in an AI-first world.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <p className="text-lg text-slate-800 font-medium mb-3 group-hover:text-slate-900 transition-colors">
                        The Future is Agent-Mediated
                      </p>
                      <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors">
                        We believe that within 5 years, over 80% of digital traffic will be mediated by 
                        AI agents. Our mission is to transform this mediation from a black box into a 
                        transparent, optimizable layer where brands can directly engage with intelligent 
                        systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Philosophy */}
          <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-3xl p-10 md:p-12 text-white overflow-hidden hover:shadow-2xl transition-all duration-500 group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold group-hover:text-cyan-300 transition-colors">
                    Product Philosophy
                  </h2>
                  <p className="text-sm text-blue-100/70 mt-1 group-hover:text-cyan-100/80 transition-colors">Our Guiding Principle</p>
                </div>
              </div>

              <div className="max-w-3xl">
                <div className="relative">
                  <div className="absolute -left-4 top-0 text-6xl text-blue-400/30 font-serif group-hover:text-cyan-400/40 transition-colors">"</div>
                  <p className="text-2xl md:text-3xl font-medium italic leading-relaxed text-white pl-8 group-hover:text-slate-100 transition-colors">
                    SEO is no longer about tricking an algorithm; it's about providing the most
                    coherent, verifiable context to a reasoning engine.
                  </p>
                  <div className="absolute -right-4 bottom-0 text-6xl text-blue-400/30 font-serif group-hover:text-cyan-400/40 transition-colors">"</div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-blue-100/80 leading-relaxed group-hover:text-cyan-100/90 transition-colors">
                    In the age of intelligent agents, relevance is measured by truthfulness and 
                    contextual depth. We build tools that help your content speak the language 
                    of reasoning engines, establishing your brand as a primary source in the 
                    AI-mediated knowledge graph.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse group-hover:scale-150 transition-transform" />
              <div className="absolute bottom-8 left-8 h-2 w-2 rounded-full bg-blue-500 group-hover:bg-cyan-400 transition-colors" />
            </div>
          </section>

          {/* Vision Section */}
          <section className="relative max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Globe className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold group-hover:text-indigo-600 transition-colors">
                    Vision
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 group-hover:text-slate-600 transition-colors">The World We're Building</p>
                </div>
              </div>
              
              <div className="pl-0 md:pl-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300">
                  <p className="text-2xl font-semibold text-slate-900 mb-6 leading-tight hover:text-slate-950 transition-colors">
                    We envision a web where search evolves from<br />
                    <span className="text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      monologue to dialogue.
                    </span>
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 hover:border hover:border-blue-100 transition-all duration-300 group/dialog">
                      <div className="shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center group-hover/dialog:scale-110 transition-transform">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-slate-800 mb-2 group-hover/dialog:text-slate-900 transition-colors">
                          Intelligent Conversations
                        </p>
                        <p className="text-slate-700 leading-relaxed group-hover/dialog:text-slate-800 transition-colors">
                          Kasparro serves as the analytical layer that ensures your brand participates 
                          authentically in every AI-mediated conversation, becoming a trusted voice 
                          in the digital dialogue.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-indigo-50/50 to-transparent hover:from-indigo-50 hover:border hover:border-indigo-100 transition-all duration-300 group/dialog">
                      <div className="shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center group-hover/dialog:scale-110 transition-transform">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-slate-800 mb-2 group-hover/dialog:text-slate-900 transition-colors">
                          Transparent Discovery
                        </p>
                        <p className="text-slate-700 leading-relaxed group-hover/dialog:text-slate-800 transition-colors">
                          Moving beyond opaque algorithms to a world where content discovery is 
                          governed by verifiable relevance and contextual integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Bar */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      80%
                    </div>
                    <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">AI-Mediated Traffic</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      5Y
                    </div>
                    <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">Transformation Horizon</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      100%
                    </div>
                    <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">Context Transparency</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      ∞
                    </div>
                    <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">Dialogue Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-8 p-12 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xl max-w-3xl mx-auto hover:shadow-2xl transition-all duration-500">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-slate-950 transition-colors">
                Join the Search Revolution
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto hover:text-slate-700 transition-colors">
                Be part of building the future where brands and AI collaborate intelligently.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-xl border-2 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
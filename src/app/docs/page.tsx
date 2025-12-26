import { Book, Search, Code, Terminal, Database, Cpu, Zap, FileText, Play, Download, ChevronRight, ExternalLink, Shield, Lock, Users, Globe, Brain, Sparkles, ArrowRight, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DocsPage() {
  const quickLinks = [
    { title: 'Getting Started', description: 'First steps with Kasparro', icon: Play, color: 'from-blue-500 to-cyan-500' },
    { title: 'API Reference', description: 'Complete API documentation', icon: Code, color: 'from-emerald-500 to-green-500' },
    { title: 'Data Models', description: 'Schema and data structures', icon: Database, color: 'from-violet-500 to-purple-500' },
    { title: 'CLI Tool', description: 'Command line interface guide', icon: Terminal, color: 'from-amber-500 to-orange-500' },
  ];

  const apiEndpoints = [
    { method: 'POST', path: '/v1/audit', description: 'Start a new neural audit', color: 'bg-emerald-500' },
    { method: 'GET', path: '/v1/audit/:id', description: 'Retrieve audit results', color: 'bg-blue-500' },
    { method: 'GET', path: '/v1/brands', description: 'List all monitored brands', color: 'bg-blue-500' },
    { method: 'PUT', path: '/v1/brands/:id', description: 'Update brand configuration', color: 'bg-amber-500' },
    { method: 'DELETE', path: '/v1/brands/:id', description: 'Remove brand monitoring', color: 'bg-rose-500' },
  ];

  const codeExamples = {
    python: `import requests

# Initialize Kasparro client
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

# Start a neural audit
payload = {
    "brand_name": "Acme Corp",
    "audit_type": "neural",
    "modules": ["visibility", "trust", "context"]
}

response = requests.post(
    "https://api.kasparro.com/v1/audit",
    json=payload,
    headers=headers
)

print(f"Audit started: {response.json()['audit_id']}")`,
    
    javascript: `const kasparro = require('@kasparro/sdk');

// Initialize client
const client = new kasparro.Client({
  apiKey: process.env.KASPARRO_API_KEY,
  environment: 'production'
});

// Run comprehensive audit
async function runAudit() {
  const audit = await client.audits.create({
    brand: 'Acme Corp',
    type: 'neural',
    modules: ['visibility', 'trust', 'context']
  });

  console.log(\`Audit started: \${audit.id}\`);
  
  // Poll for results
  const results = await audit.waitForCompletion();
  console.log(\`AI Visibility Score: \${results.scores.visibility}%\`);
}`,
    
    curl: `curl -X POST https://api.kasparro.com/v1/audit \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "brand_name": "Acme Corp",
    "audit_type": "neural",
    "modules": ["visibility", "trust", "context"]
  }'`
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="font-bold text-2xl tracking-tighter italic">
              KASPARRO<span className="text-blue-600">.</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="/platform" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Platform</a>
              <a href="/docs" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">Docs</a>
              <a href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-600">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-5">
              Get API Key
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Quick Links */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  Quick Links
                </h3>
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </p>
                      <p className="text-xs text-slate-500 truncate">{link.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>

              {/* API Status */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    API Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Neural Engine</span>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                      Operational
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Vector Database</span>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                      Operational
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Real-time Stream</span>
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
                      Degraded
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                    Documentation
                  </h1>
                  <p className="text-lg text-slate-600 mt-2">
                    Complete guide to Kasparro's Neural Audit API and platform capabilities.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-50 text-blue-700 border-blue-100 px-3 py-1">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Version 2.1.0
                </Badge>
                <Badge className="bg-slate-50 text-slate-700 border-slate-200 px-3 py-1">
                  <Lock className="w-3 h-3 mr-2" />
                  Production Ready
                </Badge>
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 px-3 py-1">
                  <Zap className="w-3 h-3 mr-2" />
                  Low Latency
                </Badge>
              </div>
            </div>

            {/* Getting Started */}
            <Card className="border border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Play className="w-5 h-5 text-blue-600" />
                  Getting Started
                </CardTitle>
                <CardDescription>
                  Start integrating Kasparro's Neural Audit into your workflow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Hash className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900">1. Get API Key</h4>
                    <p className="text-sm text-slate-600">
                      Sign up for a Kasparro account and generate your API key from the dashboard.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900">2. Install SDK</h4>
                    <p className="text-sm text-slate-600">
                      Install the official SDK for your programming language or use raw HTTP requests.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900">3. Run First Audit</h4>
                    <p className="text-sm text-slate-600">
                      Start your first neural audit and receive AI-powered insights in minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get API Key
                  </Button>
                  <Button variant="outline" className="border-2">
                    <Download className="w-4 h-4 mr-2" />
                    Download SDK
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* API Reference */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-blue-600" />
                  API Reference
                </h2>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  View all endpoints
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {apiEndpoints.map((endpoint, idx) => (
                  <Card key={idx} className="border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`${endpoint.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                            {endpoint.method}
                          </span>
                          <code className="font-mono text-sm text-slate-900 bg-slate-50 px-3 py-1.5 rounded-lg">
                            {endpoint.path}
                          </code>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-slate-600">{endpoint.description}</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Code Examples */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-600" />
                Code Examples
              </h2>

              <Tabs defaultValue="python" className="space-y-4">
                <TabsList className="bg-slate-100 p-1 rounded-lg">
                  <TabsTrigger value="python" className="data-[state=active]:bg-white">
                    <Code className="w-4 h-4 mr-2" />
                    Python
                  </TabsTrigger>
                  <TabsTrigger value="javascript" className="data-[state=active]:bg-white">
                    <Code className="w-4 h-4 mr-2" />
                    JavaScript
                  </TabsTrigger>
                  <TabsTrigger value="curl" className="data-[state=active]:bg-white">
                    <Terminal className="w-4 h-4 mr-2" />
                    cURL
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="python">
                  <div className="relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="p-6 bg-slate-900 text-slate-100 rounded-xl overflow-x-auto text-sm font-mono">
                      {codeExamples.python}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="javascript">
                  <div className="relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="p-6 bg-slate-900 text-slate-100 rounded-xl overflow-x-auto text-sm font-mono">
                      {codeExamples.javascript}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="curl">
                  <div className="relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="p-6 bg-slate-900 text-slate-100 rounded-xl overflow-x-auto text-sm font-mono">
                      {codeExamples.curl}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Additional Resources */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    Whitepapers
                  </CardTitle>
                  <CardDescription>
                    Technical deep-dives into our neural architecture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Neural SEO: A New Paradigm',
                      'Vector Space Optimization',
                      '7-Agent Analysis Engine',
                      'Real-time AI Monitoring'
                    ].map((title, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">
                          {title}
                        </span>
                        <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-violet-600" />
                    Community
                  </CardTitle>
                  <CardDescription>
                    Join discussions and get support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Discord Community</p>
                        <p className="text-xs text-slate-500">Live support & discussions</p>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        Join
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Enterprise Support</p>
                        <p className="text-xs text-slate-500">Dedicated technical team</p>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        Contact
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="font-bold text-xl tracking-tighter italic">
                KASPARRO<span className="text-blue-600">.</span>
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-sm text-slate-500">Documentation v2.1.0</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Status</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-400">
              © 2025 Kasparro Systems Inc. All documentation is licensed under CC BY 4.0.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for copy icon
function Copy({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}
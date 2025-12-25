import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

// Define pricing tiers and their features

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individuals and small blogs exploring AI search.',
    features: ['5 AI Visibility Audits/mo', 'Basic LLM Tracking (ChatGPT)', 'Weekly Email Reports', 'Community Support'],
    buttonText: 'Start for Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'For growth teams needing deep insights into AI citations.',
    features: [
      'Unlimited Audits',
      'Full LLM Suite (Perplexity, Gemini, Claude)',
      'E-E-A-T Signal Analysis',
      'Competitor Benchmarking',
      'Priority Email Support',
    ],
    buttonText: 'Start 14-day Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Advanced security and scale for global brands.',
    features: [
      'Custom LLM Model Training',
      'API Access for Workflows',
      'White-label Reporting',
      'Dedicated Account Manager',
      'SSO & Advanced Security',
    ],
    buttonText: 'Contact Sales',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-100 px-4 py-1.5 rounded-full">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Invest in your <span className="text-blue-600">AI Future.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your scale. Whether you’re a solo creator or a Fortune 500 company, 
            Kasparro has the tools to keep you visible.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  tier.highlight 
                    ? 'border-blue-600 shadow-2xl shadow-blue-100 ring-1 ring-blue-600' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-slate-500 text-sm">/month</span>}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full h-12 rounded-xl font-semibold transition-all ${
                    tier.highlight 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200' 
                      : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time from your dashboard.' },
              { q: 'Do you offer annual discounts?', a: 'Yes! If you choose annual billing, you save 20% compared to monthly payments.' },
              { q: 'How does the trial work?', a: 'Our 14-day Pro trial gives you full access. No credit card required to start.' },
              { q: 'What is "LLM Tracking"?', a: 'It refers to how many different AI models we monitor for your brand mentions.' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  {item.q}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to dominate the AI search era?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Join 2,000+ companies using Kasparro to secure their brand's authority in LLM responses.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-10 rounded-full">
            Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Hero component for the marketing page

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-6xl font-extrabold tracking-tight mb-6">
        SEO is dead. <br />
        <span className="text-blue-600">Win the AI-Search Era.</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 leading-relaxed">
        Kasparro audits your brand for the world of LLMs. Ensure your company 
        is cited, trusted, and recommended by ChatGPT, Gemini, and Perplexity.
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/app/audit">Run AI-SEO Audit</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/platform">How it works</Link>
        </Button>
      </div>
    </section>
  );
}
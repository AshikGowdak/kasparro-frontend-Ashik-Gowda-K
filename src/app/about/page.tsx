// AboutPage component to display company mission, philosophy, and vision

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-32 px-6">
      {/* Page title */}
      <header className="mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Engineering a New Search Reality.
        </h1>
        <div className="h-1 w-24 bg-blue-600 rounded-full" />
      </header>

      {/* Content */}
      <div className="grid gap-20 text-lg text-slate-700 leading-relaxed">
        {/* Mission */}
        <section className="grid gap-6 max-w-3xl">
          <h2 className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Mission
          </h2>
          <p>
            To build the infrastructure that allows brands to thrive in an AI-first world.
            We believe that within 5 years, over 80% of digital traffic will be mediated by
            an AI agent. Our goal is to make that mediation transparent and optimizable.
          </p>
        </section>

        {/* Product Philosophy */}
        <section className="relative border border-slate-200 rounded-3xl bg-slate-950 p-10 text-white">
          <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-6">
            Product Philosophy
          </h2>

          <p className="text-xl font-medium italic leading-relaxed max-w-3xl">
            “SEO is no longer about tricking an algorithm; it's about providing the most
            coherent, verifiable context to a reasoning engine.”
          </p>

          {/* subtle accent */}
          <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-blue-500" />
        </section>

        {/* Vision */}
        <section className="grid gap-6 max-w-3xl">
          <h2 className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Vision
          </h2>
          <p>
            We envision a web where search is a dialogue. Kasparro is the analytical layer
            that ensures your brand is a truthful, prominent part of that conversation.
          </p>
        </section>
      </div>
    </section>
  );
}

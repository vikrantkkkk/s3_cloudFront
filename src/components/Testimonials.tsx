const testimonials = [
  {
    quote:
      'Stockwiz transformed how I approach investing. The AI insights helped me identify NVDA before its massive run. My portfolio is up 34% this year.',
    name: 'Sarah Chen',
    role: 'Software Engineer & Investor',
    initials: 'SC',
  },
  {
    quote:
      'As a financial advisor, I recommend Stockwiz to all my clients. The research tools and alerts save hours every week while improving outcomes.',
    name: 'Michael Torres',
    role: 'CFA, Wealth Manager',
    initials: 'MT',
  },
  {
    quote:
      'I was intimidated by the stock market until I found Stockwiz. The dashboard makes everything clear, and the paper trading let me learn without risk.',
    name: 'Priya Sharma',
    role: 'First-time Investor',
    initials: 'PS',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by investors everywhere
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-white/5 bg-surface-800/50 p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-300">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

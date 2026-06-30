const steps = [
  {
    step: '01',
    title: 'Create your account',
    description:
      'Sign up in under 60 seconds. Connect your brokerage or start with our paper trading simulator.',
  },
  {
    step: '02',
    title: 'Build your watchlist',
    description:
      'Add stocks you care about. Our AI instantly scores each one based on fundamentals, momentum, and sentiment.',
  },
  {
    step: '03',
    title: 'Get actionable insights',
    description:
      'Receive personalized buy/sell signals, risk alerts, and portfolio recommendations tailored to your goals.',
  },
  {
    step: '04',
    title: 'Grow your wealth',
    description:
      'Execute smarter trades with confidence. Track performance and refine your strategy over time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From signup to smarter trades in minutes
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
          {steps.map((item) => (
            <div key={item.step} className="relative flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-sm font-bold text-brand-400">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

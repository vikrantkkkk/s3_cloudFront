const tickers = [
  { symbol: 'AAPL', change: '+2.4%', up: true },
  { symbol: 'NVDA', change: '+5.1%', up: true },
  { symbol: 'TSLA', change: '-1.2%', up: false },
  { symbol: 'MSFT', change: '+1.8%', up: true },
  { symbol: 'GOOGL', change: '+0.9%', up: true },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Trusted by 50,000+ investors worldwideeee
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Invest smarter with{' '}
            <span className="text-gradient">Stockwiz</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            AI-powered stock insights and portfolio intelligence for modern investors.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-xl bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-500/40 sm:w-auto"
            >
              Start free trial
            </a>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch demo
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500">Portfolio Dashboard</span>
            </div>

            <div className="grid gap-px bg-white/5 p-6 sm:grid-cols-3">
              <div className="rounded-xl bg-surface-800/80 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Portfolio Value
                </p>
                <p className="mt-2 text-2xl font-bold text-white">$124,580</p>
                <p className="mt-1 text-sm font-medium text-brand-400">+12.4% this month</p>
              </div>
              <div className="rounded-xl bg-surface-800/80 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  AI Score
                </p>
                <p className="mt-2 text-2xl font-bold text-white">87/100</p>
                <p className="mt-1 text-sm font-medium text-brand-400">Strong buy signals</p>
              </div>
              <div className="rounded-xl bg-surface-800/80 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Active Alerts
                </p>
                <p className="mt-2 text-2xl font-bold text-white">3</p>
                <p className="mt-1 text-sm font-medium text-amber-400">Price targets hit</p>
              </div>
            </div>

            <div className="border-t border-white/10 px-6 py-4">
              <div className="flex flex-wrap items-center justify-center gap-6">
                {tickers.map((ticker) => (
                  <div key={ticker.symbol} className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-white">{ticker.symbol}</span>
                    <span
                      className={
                        ticker.up ? 'font-medium text-brand-400' : 'font-medium text-red-400'
                      }
                    >
                      {ticker.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

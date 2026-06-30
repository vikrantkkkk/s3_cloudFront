const stats = [
  { value: '50K+', label: 'Active investors' },
  { value: '$2.4B', label: 'Assets tracked' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: '4.9/5', label: 'User rating' },
]

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-surface-800/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

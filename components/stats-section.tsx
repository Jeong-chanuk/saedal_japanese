import { stats } from '@/lib/site-content'

export function StatsSection() {
  return (
    <section aria-label="새달일본어 신뢰 지표" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-8 text-center shadow-sm"
            >
              <span className="font-display text-4xl text-primary sm:text-5xl">{s.value}</span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

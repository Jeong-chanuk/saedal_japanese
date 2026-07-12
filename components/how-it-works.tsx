import { ClipboardList, Gauge, MonitorPlay, NotebookPen, Video } from 'lucide-react'
import { steps } from '@/lib/site-content'

const icons = [ClipboardList, Gauge, MonitorPlay, NotebookPen]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <Video className="size-4" />
            Zoom 온라인 진행
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            수강은 이렇게 진행돼요
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            복잡한 준비물 없이, 노트북 하나면 어디서든 시작할 수 있어요.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[i] ?? ClipboardList
            return (
              <li
                key={step.title}
                className="relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-3xl text-secondary-foreground/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

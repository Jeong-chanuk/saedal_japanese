import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { studentReport } from '@/lib/site-content'

export function StudentReport() {
  return (
    <section id="report" className="scroll-mt-20 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <BookOpen className="size-4" />
            {studentReport.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            {studentReport.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl whitespace-pre-line text-pretty text-muted-foreground">
            {studentReport.subtitle}
          </p>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6">
            <div className="relative w-full overflow-hidden rounded-2xl bg-secondary/40">
              <div className="relative aspect-[2000/1136] w-full">
                <Image
                  src={studentReport.image}
                  alt={studentReport.imageAlt}
                  fill
                  sizes="(min-width: 1152px) 1100px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

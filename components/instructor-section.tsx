import Image from 'next/image'
import { Check } from 'lucide-react'
import { instructor } from '@/lib/site-content'

export function InstructorSection() {
  return (
    <section id="instructor" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-secondary shadow-md">
              <Image
                src={instructor.photo}
                alt={`${instructor.name} 강사 프로필 사진`}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-md">
              {instructor.role}
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Instructor</p>
            <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
              {instructor.name}
              <span className="ml-2 align-middle text-lg font-medium text-muted-foreground">
                {instructor.nameEn}
              </span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
              {instructor.headline}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {instructor.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 rounded-2xl bg-secondary/60 p-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

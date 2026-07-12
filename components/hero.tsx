import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { hero } from '@/lib/site-content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft decorative petals */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute left-[8%] top-16 size-3 rotate-12 rounded-[45%_55%_50%_50%] bg-[var(--sakura)] opacity-70" />
        <span className="absolute left-[22%] top-40 size-2 rotate-45 rounded-[45%_55%_50%_50%] bg-[var(--sakura)] opacity-60" />
        <span className="absolute right-[14%] top-24 size-4 -rotate-12 rounded-[45%_55%_50%_50%] bg-[var(--sakura)] opacity-60" />
        <span className="absolute right-[28%] bottom-16 size-2.5 rotate-45 rounded-[45%_55%_50%_50%] bg-[var(--sakura)] opacity-50" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-accent-foreground shadow-sm">
            <Sparkles className="size-4 text-primary" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            {hero.title.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-bold text-foreground transition-colors hover:bg-secondary"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Zoom 온라인 진행 · 신청 후 하루 안에 연락드려요
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl">
            <Image
              src="/images/hero-instructor.png"
              alt="새달일본어 강사가 반갑게 인사하는 일러스트"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -top-4 size-20 rotate-6 sm:-right-5 sm:size-24">
            <Image src="/images/onigiri.png" alt="" width={96} height={96} className="drop-shadow-md" />
          </div>
          <div className="absolute -bottom-5 -left-3 size-20 -rotate-6 sm:-left-6 sm:size-24">
            <Image src="/images/bento.png" alt="" width={96} height={96} className="drop-shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

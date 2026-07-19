'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import {
  audiences,
  curriculumByAudience,
  curriculumNote,
  storiesByAudience,
  type AudienceId,
} from '@/lib/site-content'

export function AudienceExperience() {
  const [selected, setSelected] = useState<AudienceId>('beginner')
  const stories = storiesByAudience[selected]
  const roadmap = curriculumByAudience[selected]
  const current = audiences.find((a) => a.id === selected)!

  return (
    <>
      {/* Target selector */}
      <section id="audience" className="scroll-mt-20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              당신은 어떤 분인가요?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              유형을 선택하면 아래 변화 스토리와 커리큘럼이 딱 맞게 바뀌어요.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="수강 유형 선택"
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {audiences.map((a) => {
              const active = a.id === selected
              return (
                <button
                  key={a.id}
                  role="tab"
                  id={`tab-${a.id}`}
                  aria-selected={active}
                  aria-controls="audience-panel"
                  onClick={() => setSelected(a.id)}
                  className={`group flex flex-col items-start rounded-3xl border-2 p-6 text-left transition-all ${active
                    ? 'border-primary bg-card shadow-lg -translate-y-1'
                    : 'border-border bg-card/60 hover:border-primary/40 hover:bg-card hover:-translate-y-0.5'
                    }`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl text-2xl transition-colors ${active ? 'bg-primary/15' : 'bg-secondary'
                      }`}
                    aria-hidden="true"
                  >
                    {a.emoji}
                  </span>
                  <span className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-xl text-foreground">{a.label}</span>
                    <span className="text-xs font-medium text-muted-foreground">{a.labelEn}</span>
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <div id="audience-panel" role="tabpanel" aria-labelledby={`tab-${selected}`}>
        {/* Before & After stories */}
        <section id="stories" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {current.label} 변화 스토리
              </span>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                이렇게 달라졌어요
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {stories.map((s) => (
                <article
                  key={s.name}
                  className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:p-7"
                >
                  <div className="relative mx-auto size-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary sm:mx-0">
                    <Image
                      src={s.photo}
                      alt={`${s.name} 수강생 아웃풋 이미지`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-foreground">{s.name}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                        <Clock className="size-3" />
                        {s.period}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <p className="rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">
                        <span className="mr-1.5 font-bold text-foreground/70">Before</span>
                        {s.before}
                      </p>
                      <div className="flex justify-center">
                        <ArrowRight className="size-4 rotate-90 text-primary sm:rotate-0" />
                      </div>
                      <p className="rounded-2xl bg-primary/10 px-3 py-2 text-sm font-medium text-foreground">
                        <span className="mr-1.5 font-bold text-primary">After</span>
                        {s.after}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum roadmap */}
        <section id="curriculum" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {current.label} 맞춤 로드맵
              </span>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                단계별 학습 커리큘럼
              </h2>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {roadmap.map((stage, i) => (
                <li key={stage.stage} className="relative">
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-sm font-bold text-foreground">
                        {stage.stage}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl text-foreground">{stage.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-5 py-4 text-center text-sm font-medium text-foreground">
              <span className="inline-flex items-start gap-2 text-left">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="whitespace-pre-line leading-relaxed">
                  {curriculumNote}
                </span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/site-content'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-primary/5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">자주 묻는 질문</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            궁금한 점이 남았다면 무료 체험 신청 시 편하게 물어보세요.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primary/10"
                  >
                    <span className="text-base font-bold text-foreground">{faq.q}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import { trial } from '@/lib/site-content'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfcKxkz2ud3lH8mfx2xvsxkSt0M_zZfxq-NALTCrh2xYF6vcw/viewform'

const GOOGLE_FORM_URL2 =
  'https://docs.google.com/forms/d/e/1FAIpQLSf9ije7HPLQh_z455LyMFKK_i3gxoWKplG9fwrKmNciLzY8hw/viewform?usp=publish-editor'

export function TrialSection() {
  return (
    <section id="trial" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lg">
          <div className="bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
            <h2 className="font-display text-3xl sm:text-4xl">{trial.title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-relaxed text-primary-foreground/90 sm:text-base whitespace-pre-wrap">
              {Array.isArray(trial.subtitle) ? trial.subtitle.join('\n') : trial.subtitle}
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="flex flex-col items-center gap-5 py-6 text-center">
              <div className="rounded-2xl bg-primary/10 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                신청하러 가면 바로 구글폼에서 무료 체험 정보를 작성할 수 있어요.
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                {trial.submitLabel}
                <ArrowRight className="size-5" />
              </a>

              <p className="text-center text-sm text-muted-foreground">
                <a
                  href={GOOGLE_FORM_URL2}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {trial.businessInquiry}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

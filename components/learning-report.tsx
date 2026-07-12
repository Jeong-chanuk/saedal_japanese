'use client'

import Image from 'next/image'
import { BarChart3, CheckCircle2 } from 'lucide-react'
import { learningReport } from '@/lib/site-content'

export function LearningReport() {
  return (
    <section id="report" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <BarChart3 className="size-4" />
            학습성과 관리
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            {learningReport.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            {learningReport.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* 왼쪽: 리포트 이미지 */}
          <div className="relative">
            <div className="w-full rounded-3xl overflow-hidden bg-secondary/40 border border-border shadow-lg">
              <Image
                src={learningReport.image}
                alt="학습성과 리포트"
                width={1200}
                height={800}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 오른쪽: 설명 및 특징 */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              {learningReport.description}
            </p>

            {/* 특징 리스트 */}
            <div className="space-y-3">
              {learningReport.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* 강조 박스 */}
            <div className="mt-8 rounded-2xl bg-primary/10 border border-primary/20 p-6">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">
                💡 학습 포인트
              </p>
              <p className="text-base text-foreground leading-relaxed">
                구체적인 수치로 나타난 성장을 보면 더욱 동기부여가 되고, 어디를 더 집중해야 하는지 명확해집니다. 학생 맞춤형 학습 계획 수립에 활용됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

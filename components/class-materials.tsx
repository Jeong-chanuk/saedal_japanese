'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BookOpen, ImageIcon } from 'lucide-react'
import { classMaterials } from '@/lib/site-content'

export function ClassMaterials() {
  const [selectedMaterial, setSelectedMaterial] = useState(classMaterials[0])

  return (
    <section id="materials" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <BookOpen className="size-4" />
            학생 발표 자료
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            실제 수업 발표자료들
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            새달일본어 학생들의 창의적인 발표 과정들을 살펴보세요. 재미있는 주제로 자연스럽게 일본어를 습득합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* 좌측: 실습자료 목록 */}
          <div className="space-y-3">
            {classMaterials.map((material) => (
              <button
                key={material.id}
                onClick={() => setSelectedMaterial(material)}
                className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
                  selectedMaterial.id === material.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex size-6 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <ImageIcon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2">{material.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{material.lesson}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* 우측: 선택된 자료 상세 */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm overflow-hidden">
              {/* 이미지 영역 */}
              <div className="relative w-full bg-secondary/40 rounded-2xl overflow-hidden mb-6">
                <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                  <Image
                    src={selectedMaterial.image}
                    alt={selectedMaterial.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* 상세 정보 */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl text-foreground">{selectedMaterial.title}</h3>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <BookOpen className="size-4" />
                    {selectedMaterial.lesson}
                  </div>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {selectedMaterial.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

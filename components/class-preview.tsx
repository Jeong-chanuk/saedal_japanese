'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { classPreview } from '@/lib/site-content'

export function ClassPreview() {
  const [selectedClass, setSelectedClass] = useState(classPreview.items[0])

  return (
    <section id="class-preview" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <BookOpen className="size-4" />
            수업자료 미리보기
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            {classPreview.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl whitespace-pre-line text-pretty text-muted-foreground">
            {classPreview.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* 좌측: 수업자료 목록 */}
          <div className="space-y-3">
            {classPreview.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedClass(item)}
                className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
                  selectedClass.id === item.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary text-sm">
                    {item.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* 우측: 선택된 자료 미리보기 */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm overflow-hidden">
              {/* 이미지 영역 */}
              <div className="relative w-full bg-secondary/40 rounded-2xl overflow-hidden mb-6">
                <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                  <Image
                    src={selectedClass.image}
                    alt={selectedClass.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* 상세 정보 */}
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block text-4xl font-bold text-primary mb-2">
                      {selectedClass.number}
                    </span>
                    <h3 className="font-display text-2xl text-foreground">{selectedClass.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

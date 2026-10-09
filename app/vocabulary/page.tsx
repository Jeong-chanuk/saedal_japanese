import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { VocabularyPractice } from '@/components/vocabulary-practice'

export const metadata: Metadata = {
  title: 'JLPT 단어장 | 새달일본어',
  description:
    'JLPT N5~N2 단어를 직접 써 보며 외우는 새달일본어 단어 쓰기 연습장. 한국어→일본어, 일본어→한국어 두 가지 방식으로 연습하고 바로 채점해 보세요.',
}

export default function VocabularyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <VocabularyPractice />
      </main>
      <SiteFooter />
    </div>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Jua, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const jua = Jua({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jua',
  display: 'swap',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '새달일본어 | 친구처럼 편안한 온라인 일본어 스쿨',
  description:
    '일본 현지 10년 거주, 6년 강의 경력의 권영지 강사와 함께하는 Zoom 온라인 일본어 수업. 왕초보·회사원·취미 학습자 맞춤 커리큘럼. 무료 체험 20분 신청하세요.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4e9d8',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`bg-background ${jua.variable} ${notoSansKr.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

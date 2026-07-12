'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { nav } from '@/lib/site-content'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="#trial"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            무료 체험 신청
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-border/70 bg-background md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#trial"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
              >
                무료 체험 20분 신청
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

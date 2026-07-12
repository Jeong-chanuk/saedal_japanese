import { Logo } from '@/components/logo'
import { brand, footerNav } from '@/lib/site-content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {brand.tagline}
          </p>
        </div>

        <nav aria-label="푸터 메뉴">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          {brand.copyright}
        </p>
      </div>
    </footer>
  )
}

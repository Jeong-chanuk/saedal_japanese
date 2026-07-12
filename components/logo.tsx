import { brand } from '@/lib/site-content'

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2 ${className ?? ''}`}
      aria-label={`${brand.nameKo} 홈으로`}
    >
      <span
        className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg leading-none"
        aria-hidden="true"
      >
        새
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg text-foreground">{brand.name}</span>
        <span className="text-[11px] font-medium text-muted-foreground">{brand.nameKo}</span>
      </span>
    </a>
  )
}

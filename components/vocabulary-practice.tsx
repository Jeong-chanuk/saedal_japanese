'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { BookOpenCheck, Check, Eraser, Eye, EyeOff, Printer } from 'lucide-react'
import {
  DEFAULT_STATE,
  LEVELS,
  MODES,
  STORAGE_KEY,
  WORDS,
  answerKey,
  checkJ2K,
  checkK2J,
  countWords,
  hasAnswer,
  sanitizeState,
  type Answer,
  type Mode,
  type PracticeState,
  type Word,
} from '@/lib/vocabulary'

type Result = 'ok' | 'ng'

const inputBase =
  'w-full rounded-xl border border-transparent px-3 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/30 sm:text-lg print:h-10 print:border-border print:bg-white'

const okBg = 'bg-[oklch(0.93_0.07_150)]'
const ngBg = 'bg-[oklch(0.93_0.05_25)]'

export function VocabularyPractice() {
  const [state, setState] = useState<PracticeState>(DEFAULT_STATE)
  const [loaded, setLoaded] = useState(false)
  const [showAns, setShowAns] = useState(false)
  const [results, setResults] = useState<Record<string, Result>>({})
  const [score, setScore] = useState<{ ok: number; total: number } | null>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  // 저장된 입력 불러오기 (이 브라우저에만 저장됩니다)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      setState(sanitizeState(raw ? JSON.parse(raw) : null))
    } catch {
      setState(DEFAULT_STATE)
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* 저장 공간이 없어도 연습은 계속할 수 있어요 */
    }
  }, [state, loaded])

  const sets = WORDS[state.lv]
  const visibleSets = useMemo(
    () => (state.all ? sets.map((_, i) => i) : [state.set]),
    [state.all, state.set, sets],
  )

  const patch = (next: Partial<PracticeState>) => {
    setState((prev) => ({ ...prev, ...next }))
    setResults({})
    setScore(null)
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const isFilled = (setIndex: number) =>
    sets[setIndex].some((_, i) =>
      hasAnswer(state.v[answerKey(state.lv, state.mode, setIndex, i)]),
    )

  const updateAnswer = (key: string, field: keyof Answer, value: string) => {
    setState((prev) => ({
      ...prev,
      v: { ...prev.v, [key]: { ...prev.v[key], [field]: value } },
    }))
    setResults((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
    setScore(null)
  }

  const clearCurrent = () => {
    if (!window.confirm('현재 화면의 입력 내용을 모두 지울까요?')) return
    setState((prev) => {
      const v = { ...prev.v }
      visibleSets.forEach((s) =>
        sets[s].forEach((_, i) => delete v[answerKey(prev.lv, prev.mode, s, i)]),
      )
      return { ...prev, v }
    })
    setResults({})
    setScore(null)
  }

  const check = () => {
    const next: Record<string, Result> = {}
    let ok = 0
    let total = 0
    visibleSets.forEach((s) =>
      sets[s].forEach((word, i) => {
        const key = answerKey(state.lv, state.mode, s, i)
        const v = state.v[key]
        if (!hasAnswer(v)) return
        total++
        const good = state.mode === 'k2j' ? checkK2J(word, v!) : checkJ2K(word, v!)
        if (good) ok++
        next[key] = good ? 'ok' : 'ng'
      }),
    )
    setResults(next)
    setScore({ ok, total })
  }

  const print = () => {
    if (!state.all) setState((prev) => ({ ...prev, all: true }))
    setTimeout(() => window.print(), 150)
  }

  // Enter 키로 다음 칸 이동 (한글·일본어 입력 중에는 동작하지 않음)
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing) return
    e.preventDefault()
    const inputs = Array.from(
      tableRef.current?.querySelectorAll<HTMLInputElement>('tbody input') ?? [],
    )
    inputs[inputs.indexOf(e.currentTarget) + 1]?.focus()
  }

  const rowStatus = (key: string) => results[key]
  const inputBg = (key: string, fallback: string) =>
    rowStatus(key) === 'ok' ? okBg : rowStatus(key) === 'ng' ? ngBg : fallback

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 print:max-w-none print:p-0">
      {/* 소개 */}
      <div className="text-center print:hidden">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
          <BookOpenCheck className="size-4" aria-hidden="true" />
          JLPT 단어장
        </span>
        <h1 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
          새달일본어 단어 쓰기 연습
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
          JLPT 레벨별로 직접 써 보며 외워요. 세트당 15문제예요.
        </p>
      </div>

      {/* 레벨 선택 */}
      <div
        role="tablist"
        aria-label="JLPT 레벨 선택"
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 print:hidden"
      >
        {LEVELS.map((lv) => {
          const active = lv === state.lv
          return (
            <button
              key={lv}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                patch({ lv, set: 0, all: false })
                scrollTop()
              }}
              className={`flex flex-col items-start rounded-3xl border-2 px-5 py-4 text-left transition-all ${
                active
                  ? 'border-primary bg-card shadow-lg -translate-y-0.5'
                  : 'border-border bg-card/60 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card'
              }`}
            >
              <span className="font-display text-2xl text-foreground">{lv}</span>
              <span className="mt-1 text-xs font-medium text-muted-foreground">
                {countWords(lv)}문제 · {WORDS[lv].length}세트
              </span>
            </button>
          )
        })}
      </div>

      {/* 연습 도구 */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6 print:hidden">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-sm font-semibold text-foreground">연습 방식</span>
          <div
            role="tablist"
            aria-label="연습 방식 선택"
            className="inline-flex self-start rounded-full border border-border bg-secondary/60 p-1"
          >
            {(Object.keys(MODES) as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={m === state.mode}
                onClick={() => patch({ mode: m })}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                  m === state.mode
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {MODES[m].name}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {MODES[state.mode].desc}
        </p>

        <div className="mt-5 border-t border-border/70 pt-5">
          <p className="text-sm font-semibold text-foreground">세트 선택</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sets.map((_, i) => {
              const active = !state.all && i === state.set
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}세트`}
                  aria-pressed={active}
                  onClick={() => {
                    patch({ set: i, all: false })
                    scrollTop()
                  }}
                  className={`relative flex size-10 items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                    active
                      ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                      : 'border-border bg-background text-foreground/80 hover:border-primary/50 hover:bg-secondary'
                  }`}
                >
                  {i + 1}
                  {isFilled(i) && (
                    <span
                      className="absolute bottom-1 size-1.5 rounded-full bg-chart-3"
                      aria-label="입력한 내용 있음"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/70 pt-5">
          <ToolButton onClick={clearCurrent} icon={<Eraser className="size-4" />}>
            이 세트 지우기
          </ToolButton>
          <ToolButton onClick={() => patch({ all: !state.all })}>
            {state.all ? '1세트씩 보기' : '전체 세트 보기'}
          </ToolButton>
          <ToolButton onClick={print} icon={<Printer className="size-4" />}>
            인쇄
          </ToolButton>

          {state.mode === 'j2k' && (
            <label className="ml-1 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground/80">
              <input
                type="checkbox"
                checked={state.hint}
                onChange={(e) => setState((prev) => ({ ...prev, hint: e.target.checked }))}
                className="size-4 accent-[var(--primary)]"
              />
              읽기 힌트 보기
            </label>
          )}

          <span className="flex-1" />

          <ToolButton
            onClick={() => setShowAns((v) => !v)}
            icon={showAns ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          >
            {showAns ? '정답 숨기기' : '정답 보기'}
          </ToolButton>
          <button
            type="button"
            onClick={check}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            <Check className="size-4" aria-hidden="true" />내 답 채점
          </button>
        </div>

        {score && (
          <p
            role="status"
            className="mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-center text-sm font-bold text-foreground"
          >
            {score.total
              ? `채점 결과: ${score.total}문제 중 ${score.ok}문제 정답`
              : '입력한 내용이 없어요. 답을 먼저 적어 보세요.'}
          </p>
        )}
      </div>

      {/* 문제 */}
      <div ref={tableRef} className="mt-8 space-y-10 print:mt-0 print:space-y-0">
        {visibleSets.map((s) => (
          <section
            key={s}
            aria-label={`${state.lv} ${s + 1}세트`}
            className="print:break-after-page print:last:break-after-auto"
          >
            <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 px-1">
              <h2 className="font-display text-2xl text-primary sm:text-3xl">
                {state.lv} · SET {String(s + 1).padStart(2, '0')}
              </h2>
              <span className="text-sm text-muted-foreground">
                {MODES[state.mode].name} · {sets[s].length}문제
              </span>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm print:rounded-none print:shadow-none">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="text-xs font-bold text-secondary-foreground sm:text-sm">
                    <th className="w-9 bg-secondary py-3 sm:w-12" />
                    {state.mode === 'k2j' ? (
                      <>
                        <th className="bg-secondary px-2 py-3 text-center">한국어 뜻</th>
                        <th className="bg-primary/20 px-2 py-3 text-center">일본어 (한자·표기)</th>
                        <th className="bg-accent px-2 py-3 text-center">읽기 (히라가나)</th>
                      </>
                    ) : (
                      <>
                        <th className="bg-primary/20 px-2 py-3 text-center">일본어</th>
                        <th className="bg-secondary px-2 py-3 text-center">한국어 뜻</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {sets[s].map((word, i) => (
                    <Row
                      key={word.n}
                      word={word}
                      mode={state.mode}
                      hint={state.hint}
                      showAns={showAns}
                      answer={state.v[answerKey(state.lv, state.mode, s, i)]}
                      itemKey={answerKey(state.lv, state.mode, s, i)}
                      inputBg={inputBg}
                      onChange={updateAnswer}
                      onEnter={onEnter}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground print:hidden">
        입력한 내용은 이 브라우저에만 저장됩니다.
      </p>
    </div>
  )
}

function ToolButton({
  children,
  icon,
  onClick,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
    >
      {icon}
      {children}
    </button>
  )
}

function Row({
  word,
  mode,
  hint,
  showAns,
  answer,
  itemKey,
  inputBg,
  onChange,
  onEnter,
}: {
  word: Word
  mode: Mode
  hint: boolean
  showAns: boolean
  answer?: Answer
  itemKey: string
  inputBg: (key: string, fallback: string) => string
  onChange: (key: string, field: keyof Answer, value: string) => void
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  const noAutofill = {
    type: 'text',
    autoComplete: 'off',
    autoCapitalize: 'off',
    spellCheck: false,
  } as const

  const alt = word.alt?.length ? (
    <em className="font-normal not-italic text-muted-foreground">
      {' '}
      (다른 정답: {word.alt.map((a) => a[0] + (a[1] ? '・' + a[1] : '')).join(' / ')})
    </em>
  ) : null

  const ansClass = 'font-jp mt-1 min-h-[1em] text-xs font-bold text-destructive sm:text-sm'

  return (
    <tr className="border-t border-border/70 align-middle">
      <td className="w-9 py-2.5 text-center text-sm font-bold text-muted-foreground sm:w-12">
        {word.n}
      </td>

      {mode === 'k2j' ? (
        <>
          <td className="w-[34%] px-2 py-2.5 text-sm font-medium text-foreground sm:text-base">
            {word.k}
          </td>
          <td className="w-[33%] px-1.5 py-2.5 sm:px-2">
            <input
              {...noAutofill}
              lang="ja"
              aria-label={`${word.n}번 일본어 표기`}
              value={answer?.w ?? ''}
              onChange={(e) => onChange(itemKey, 'w', e.target.value)}
              onKeyDown={onEnter}
              className={`${inputBase} font-jp ${inputBg(itemKey, 'bg-primary/10')}`}
            />
            {showAns && (
              <div className={`${ansClass} print:block`}>
                {word.w}
                {alt}
              </div>
            )}
          </td>
          <td className="w-[33%] px-1.5 py-2.5 sm:px-2">
            <input
              {...noAutofill}
              lang="ja"
              aria-label={`${word.n}번 읽기`}
              value={answer?.y ?? ''}
              onChange={(e) => onChange(itemKey, 'y', e.target.value)}
              onKeyDown={onEnter}
              className={`${inputBase} font-jp ${inputBg(itemKey, 'bg-accent/50')}`}
            />
            {showAns && (
              <div className={ansClass}>{word.y || '(읽기 없음 · 표기와 동일)'}</div>
            )}
          </td>
        </>
      ) : (
        <>
          <td className="font-jp w-[34%] px-2 py-2.5 text-lg font-medium text-foreground sm:text-xl">
            {word.w}
            {hint && word.y && (
              <small className="block text-xs font-normal text-muted-foreground sm:text-sm">
                {word.y}
              </small>
            )}
          </td>
          <td className="w-[66%] px-1.5 py-2.5 sm:px-2">
            <input
              {...noAutofill}
              lang="ko"
              aria-label={`${word.n}번 한국어 뜻`}
              value={answer?.k ?? ''}
              onChange={(e) => onChange(itemKey, 'k', e.target.value)}
              onKeyDown={onEnter}
              className={`${inputBase} ${inputBg(itemKey, 'bg-secondary/70')}`}
            />
            {showAns && <div className={ansClass}>{word.k}</div>}
          </td>
        </>
      )}
    </tr>
  )
}

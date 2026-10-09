import data from './jlpt-words.json'

// =============================================================
// 새달일본어 JLPT 단어장 — 데이터 타입 / 채점 로직
// 단어 데이터는 lib/jlpt-words.json 에서 수정합니다.
// =============================================================

export type Word = {
  n: number
  w: string // 일본어 표기
  y: string // 읽기(히라가나), 없으면 빈 문자열
  k: string // 한국어 뜻
  alt?: string[][] // 다른 정답 [표기, 읽기]
}

export type Level = 'N5' | 'N4' | 'N3' | 'N2'
export type Mode = 'k2j' | 'j2k'

export const LEVELS: Level[] = ['N5', 'N4', 'N3', 'N2']

export const WORDS = data as unknown as Record<Level, Word[][]>

export const MODES: Record<Mode, { name: string; desc: string }> = {
  k2j: {
    name: '한국어 → 일본어',
    desc: '한국어 뜻을 보고 일본어(표기)와 읽기(히라가나)를 써 보세요.',
  },
  j2k: {
    name: '일본어 → 한국어',
    desc: '일본어를 보고 한국어 뜻을 써 보세요. 여러 뜻이면 쉼표(,)로 구분해도 됩니다.',
  },
}

export type Answer = { w?: string; y?: string; k?: string }

export type PracticeState = {
  lv: Level
  mode: Mode
  set: number
  all: boolean
  hint: boolean
  v: Record<string, Answer>
}

// 기존 단독 HTML과 같은 키를 써서, 이미 입력해 둔 내용이 있으면 이어서 볼 수 있습니다.
export const STORAGE_KEY = 'saedal-jlpt-v3'

export const DEFAULT_STATE: PracticeState = {
  lv: 'N5',
  mode: 'k2j',
  set: 0,
  all: false,
  hint: false,
  v: {},
}

export const countWords = (lv: Level) =>
  WORDS[lv].reduce((sum, set) => sum + set.length, 0)

export const answerKey = (lv: Level, mode: Mode, set: number, index: number) =>
  `${lv}-${mode}-${set}-${index}`

export function sanitizeState(raw: unknown): PracticeState {
  const s = raw as Partial<PracticeState> | null
  if (!s || !MODES[s.mode as Mode] || !WORDS[s.lv as Level]) return DEFAULT_STATE
  const lv = s.lv as Level
  return {
    lv,
    mode: s.mode as Mode,
    set: typeof s.set === 'number' && s.set < WORDS[lv].length ? s.set : 0,
    all: !!s.all,
    hint: !!s.hint,
    v: s.v && typeof s.v === 'object' ? s.v : {},
  }
}

// ----- 채점 -----
const norm = (s: string) =>
  (s || '')
    .replace(/[\s\u3000]/g, '')
    .replace(/[〜~]/g, '～')
    .normalize('NFKC')
const dropParen = (s: string) => s.replace(/[(（][^)）]*[)）]/g, '')
const noParen = (s: string) => s.replace(/[()（）]/g, '')

const same = (a: string, b: string) => {
  const x = norm(a)
  const y = norm(b)
  return x === y || dropParen(x) === dropParen(y) || noParen(x) === noParen(y)
}

const meaningParts = (s: string) =>
  norm(s)
    .split(/[,;、，]/)
    .map((x) => x.trim())
    .filter(Boolean)

export function checkK2J(word: Word, v: Answer) {
  const candidates: string[][] = [[word.w, word.y || '']].concat(word.alt ?? [])
  const hit = candidates.find((c) => same(v.w || '', c[0]))
  if (!hit) return false
  if (!hit[1]) return true
  return same(v.y || '', hit[1]) || same(v.y || '', hit[0])
}

export function checkJ2K(word: Word, v: Answer) {
  const student = meaningParts(v.k || '')
  if (!student.length) return false
  if (same(v.k || '', word.k)) return true
  const answers = meaningParts(word.k)
  return student.some((sp) => answers.some((ap) => same(sp, ap)))
}

export const hasAnswer = (v?: Answer) => !!v && !!(v.w || v.y || v.k)

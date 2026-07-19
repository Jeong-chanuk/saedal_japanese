// =============================================================
// 새달일본어 (SAEDAL Japanese) — 사이트 콘텐츠
// 모든 문구/수치는 여기서 쉽게 수정할 수 있습니다.
// =============================================================

export const brand = {
  name: 'SAEDAL Japanese',
  nameKo: '새달일본어',
  tagline: '친구처럼 편안한 온라인 일본어 스쿨',
  copyright: `© ${new Date().getFullYear()} SAEDAL Japanese. All rights reserved.`,
}

export const nav = [
  { label: '소개', href: '#instructor' },
  { label: '후기', href: '#stories' },
  { label: '커리큘럼', href: '#curriculum' },
  { label: '수강안내', href: '#how' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  badge: '일본 현지 14년 · 국내 6년 강의 경력',
  title: '새달일본어와 함께\n유창한 일본어,\n지금 시작하세요',
  subtitle:
    '한국인이 어려워하는 부분을 정확히 아는 강사가, Zoom으로 친구처럼 편하게 가르칩니다.',
  ctaPrimary: '무료 체험 20분 신청',
  ctaSecondary: '커리큘럼 살펴보기',
}

// 타깃(수강 유형) — 아래 스토리/커리큘럼이 이 선택에 따라 바뀝니다.
export type AudienceId = 'beginner' | 'business' | 'hobby'

export const audiences: {
  id: AudienceId
  emoji: string
  label: string
  labelEn: string
  desc: string
}[] = [
  {
    id: 'beginner',
    emoji: '🌱',
    label: '왕초보',
    labelEn: 'Beginner',
    desc: '히라가나부터 차근차근, 처음이라 더 편안하게',
  },
  {
    id: 'business',
    emoji: '💼',
    label: '회사원 · 비즈니스',
    labelEn: 'Business',
    desc: '메일·회의·출장에서 바로 쓰는 실전 일본어',
  },
  {
    id: 'hobby',
    emoji: '🎨',
    label: '취미',
    labelEn: 'Hobby',
    desc: '드라마·여행·덕질, 좋아하는 걸 원어로',
  },
]

export const instructor = {
  name: '권영지',
  nameEn: 'Youngji Kwon',
  role: '새달일본어 강사',
  photo: '/images/instructor-youngji.jpg',
  headline:
    '일본 현지 14년 거주, 6년간의 강의 경력. 한국인이 어려워하는 부분을 정확히 알고, 친구처럼 편하게 가르칩니다.',
  points: [
    '한번 익히면 평생 써먹는 언어 습관 들이기',
    '왕초보부터 비즈니스까지 6년간 70명 이상 지도',
    '한국인이 자주 틀리는 발음·문법 포인트를 콕 집어 교정',
    '수업이 끝나도 편하게 질문할 수 있는 1:1 밀착 케어',
  ],
}

export const stats: { value: string; label: string }[] = [
  { value: '92%', label: '재수강률' },
  { value: '70+', label: '누적 수강생' },
  { value: '5/5', label: '수강생 만족도' },
]

// 타깃별 변화 스토리 (Before & After)
export const storiesByAudience: Record<
  AudienceId,
  { name: string; before: string; after: string; period: string; photo: string }[]
> = {
  beginner: [
    {
      name: '이OO · 50대 · 은퇴 준비',
      before: '"あ"와 "お"도 헷갈리던 완전 백지 상태',
      after: '혼자 일본 소도시 여행, 식당·료칸 예약까지 척척',
      period: '5개월',
      photo: '/images/sushi.png',
    },
    {
      name: '박OO · 20대 · 대학생',
      before: '학원을 세 번 등록했지만 갑자기 어려워지는 중급에서 매번 포기',
      after: 'JLPT N4 합격, 일본인 친구와 채팅으로 수다',
      period: '6개월',
      photo: '/images/onigiri.png',
    },
  ],
  business: [
    {
      name: '김OO · 20대 · 반도체 현장직',
      before: '한 마디도 못 하던 20대 직장인',
      after: '통역사 없이 본사와 파트너사 커뮤니케이션 주도',
      period: '12개월',
      photo: '/images/neko.png',
    },
    {
      name: '정OO · 30대 · 영업직',
      before: '단어 몇 개 주워듣고 보조만 하던 신입사원',
      after: '이제는 일본 거래처 단독 출장도 맡는 실무 담당자',
      period: '8개월',
      photo: '/images/daruma.png',
    },
  ],
  hobby: [
    {
      name: '최OO · 30대 · JPOP 팬',
      before: '멜로디만 따라가고 가사는 이해하지 못하던 나',
      after: '이제는 가사의 뉘앙스까지 즐기는 사람',
      period: '5개월',
      photo: '/images/sushi_roll.png',
    },
    {
      name: '한OO · 20대 · 여행 러버',
      before: '메뉴판 앞에서 늘 손가락으로만 주문',
      after: '이자카야 마스터와 가벼운 대화를 즐기는 여행자로 변신',
      period: '6개월',
      photo: '/images/shiba.png',
    },
  ],
}

// 타깃별 커리큘럼 로드맵 (1개월 / 3개월 / 6개월)
export const curriculumByAudience: Record<
  AudienceId,
  { stage: string; title: string; items: string[] }[]
> = {
  beginner: [
    {
      stage: '1개월',
      title: '문자와 소리에 익숙해지기',
      items: ['히라가나·가타카나 완성', '기초 인사와 자기소개', '숫자·날짜·간단한 질문'],
    },
    {
      stage: '3개월',
      title: '문장 만들기의 즐거움',
      items: ['기초 문법(조사·동사·형용사 활용)', '일상 회화 반복 연습', 'JLPT N5 대비 어휘'],
    },
    {
      stage: '6개월',
      title: '혼자서도 말이 되는 단계',
      items: ['자연스러운 의견 말하기', 'N4 수준 독해·청해', '원어민 회화 세션으로 자신감 완성'],
    },
  ],
  business: [
    {
      stage: '1개월',
      title: '비즈니스 기초 다지기',
      items: ['꼼꼼한 기초문법 복습', '사내 기본 회화'],
    },
    {
      stage: '3개월',
      title: '실무에서 쓰는 표현',
      items: ['비즈니스 회화 듣기&말하기', '사내 회화와 거래처 회화를 구분한 비즈니스 일본어'],
    },
    {
      stage: '6개월',
      title: '회의를 주도하는 레벨',
      items: ['프레젠테이션 발표연습', '원어민 회화 세션으로 실전 감각'],
    },
  ],
  hobby: [
    {
      stage: '1개월',
      title: '기초문법 탄탄히 다지기',
      items: ['히라가나·가타카나 익히기', '기초단어 익히기', '기초 인사와 감정 표현'],
    },
    {
      stage: '3개월',
      title: '콘텐츠가 들리기 시작',
      items: ['영상에서 자주 나오는 회화 패턴 익히기', '여행 필수 표현', '유행하는 콘텐츠로 듣기 연습'],
    },
    {
      stage: '6개월',
      title: '자막 없이 즐기기',
      items: ['자연스러운 반말·구어체', '원어민 회화 세션으로 실전 대화'],
    },
  ],
}

export const curriculumNote = '원어민 회화 세션은 별도로 신청할 수 있어요. 배운 표현을 실제 대화로 굳혀 드립니다 (세부 커리큘럼은 개인별로 맞춤 진행됩니다).'

// 학생 실습자료 갤러리
export const classMaterials: {
  id: string
  title: string
  lesson: string
  description: string
  image: string
}[] = [
  {
    id: 'sticker-1',
    title: '일본어 스티커 팔레트',
    lesson: '기초 어휘 및 이모지 표현',
    description: '일본어 학습 중급 단계에서 본인이 자주 사용하는 이모지와 스티커를 정리한 자료입니다.',
    image: '/class/imoji.png',
  },
  {
    id: 'pokemon-1',
    title: '포켓몬 캐릭터 학습',
    lesson: '캐릭터로 배우는 문법',
    description: '좋아하는 포켓몬 캐릭터의 별칭 유래를 일본어로 설명.',
    image: '/class/Metamong.png',
  },
  {
    id: 'basketball-1',
    title: '농구 용어 및 전술 분석',
    lesson: '스포츠 일본어 & 전문 용어',
    description: '농구 경기의 규칙을 일본어로 설명한 자료입니다.',
    image: '/class/rule.png',
  },
  {
    id: 'highlight-1',
    title: '여행지에서 먹은 음식',
    lesson: '음식의 맛과 재료 표현해 보기',
    description: '여행지에서 먹은 가장 맛있었던 음식 소개.',
    image: '/class/sandwich.png',
  },
  {
    id: 'gesture-1',
    title: '자기 성찰 발표',
    lesson: '고치고 싶은 습관과 개선 방법 말해보기',
    description: '자신의 습관을 돌아보고, 고치고 싶은 습관과 개선 방법을 일본어로 발표한 자료입니다.',
    image: '/class/description.png',
  },
  {
    id: 'festival-1',
    title: '한 주간 뉴스 요약 발표',
    lesson: '뉴스 표현 및 시사 일본어 발표해 보기',
    description: '한 주간 뉴스를 요약하고, 뉴스 표현 및 시사 일본어를 발표한 자료입니다.',
    image: '/class/bitcoin.png',
  },
  {
    id: 'radiation-1',
    title: '난해한 주제 일본어로 발표해 보기',
    lesson: '프레젠테이션 스킬 & 창의적 표현',
    description: '슈뢰딩거의 고양이, 양자역학 등 난해한 주제를 일본어로 발표한 자료입니다.',
    image: '/class/cat.png',
  },
]

export const learningReport = {
  title: '분기별 학습성과 리포트',
  subtitle: '수강생의 객관적인 성장을 한눈에 확인할 수 있습니다',
  description:
    '새달일본어는 모든 학생에게 상세한 학습성과 리포트를 제공합니다. 발음, 문법, 어휘, 청해, 회화 등 각 영역별 성장도를 구체적인 수치와 그래프로 보여드리며, 다음 단계 학습 방향도 함께 제시합니다.',
  image: '/class/report.png',
  features: [
    '월별 학습 진도 추적',
    '영역별 상세 평가 분석',
    '개인맞춤 피드백',
    '장단점 보완 계획 제시',
  ],
}

export const steps: { title: string; desc: string }[] = [
  { title: '신청하기', desc: '무료 체험 폼을 남기면 하루 안에 연락드려요.' },
  { title: '레벨 진단', desc: 'Zoom으로 현재 실력과 목표를 함께 점검합니다.' },
  { title: '1:1 수업', desc: '진단 결과에 맞춘 맞춤 커리큘럼으로 수업을 진행해요.' },
  { title: '복습 케어', desc: '수업 노트와 과제 피드백으로 배운 내용을 확실히 굳힙니다.' },
]

export const trial = {
  title: '부담 없이 20분, 안 맞으면 그만',
  subtitle:[
    '레벨 진단과 학습 상담이 포함된 무료 체험 수업입니다.',
    '카메라를 켜지 않아도 괜찮아요.'],
  timeSlots: ['평일 오전', '평일 오후', '평일 저녁', '주말 오전', '주말 오후'],
  submitLabel: '무료 체험 20분 신청하기',
  businessInquiry: '기업 · 단체 교육 문의는 여기를 눌러주세요',
}

export const faqs: { q: string; a: string }[] = [
  {
    q: '왕초보도 정말 가능한가요?',
    a: '네, 수강생의 절반 이상이 히라가나부터 시작하는 완전 초보예요. 문자와 소리부터 차근차근 쌓아가고, 속도는 학습자에 맞춰 조절하니 부담 없이 시작하실 수 있습니다.',
  },
  {
    q: '회사 지원 처리가 되나요?',
    a: '가능합니다. 기업·단체 교육의 경우 현금영수증 발행과 수강 증빙 서류를 제공해 드립니다.',
  },
  {
    q: '수업은 몇 명이 함께 듣나요?',
    a: '완벽한 맞춤형 수업 진행을 위해 1:1 Zoom 수업으로만 진행하고 있습니다.',
  },
  {
    q: '교재는 따로 사야 하나요?',
    a: '초급의 경우 교재 구매가 필요하며, 중상급부터 기본 학습 자료는 무료로 제공됩니다.',
  },
  {
    q: '수업 시간은 어떻게 정하나요?',
    a: '평일·주말, 오전·저녁 등 원하는 시간대를 신청서에 남겨 주시면 강사 일정과 조율해 고정 시간을 정해 드립니다. 사정이 생기면 사전에 조정도 가능해요.',
  },
  {
    q: '원어민 회화 세션은 무엇인가요?',
    a: '배운 표현을 실제 대화로 연습하는 별도 세션입니다. 정규 수업과 함께 신청하면 말하기 자신감을 훨씬 빠르게 키울 수 있어요.',
  },
]

export const footerNav = [
  { label: '소개', href: '#instructor' },
  { label: '후기', href: '#stories' },
  { label: '커리큘럼', href: '#curriculum' },
  { label: '개인정보처리방침', href: '#' },
  { label: '문의', href: '#trial' },
]

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
  badge: '일본 현지 10년 · 6년 강의 경력',
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
  photo: '/images/instructor-youngji.png',
  headline:
    '일본 현지 10년 거주, 6년간의 강의 경력. 한국인이 어려워하는 부분을 정확히 알고, 친구처럼 편하게 가르칩니다.',
  points: [
    '도쿄에서 10년 생활하며 익힌 진짜 현지 표현',
    '왕초보부터 비즈니스까지 6년간 150명 이상 지도',
    '한국인이 자주 틀리는 발음·문법 포인트를 콕 집어 교정',
    '수업이 끝나도 편하게 질문할 수 있는 1:1 밀착 케어',
  ],
}

export const stats: { value: string; label: string }[] = [
  { value: '100%', label: '재수강률' },
  { value: '150+', label: '누적 수강생' },
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
      before: '학원을 세 번 등록했지만 매번 히라가나에서 포기',
      after: 'JLPT N4 합격, 일본인 친구와 채팅으로 수다',
      period: '6개월',
      photo: '/images/onigiri.png',
    },
  ],
  business: [
    {
      name: '김OO · 40대 · 제조업 과장',
      before: '한 마디도 못 하던 40대 직장인',
      after: '일본 출장에서 통역 없이 회의를 직접 주도',
      period: '6개월',
      photo: '/images/neko.png',
    },
    {
      name: '정OO · 30대 · IT 기획자',
      before: '일본 거래처 메일을 번역기로만 겨우 처리',
      after: '화상 미팅과 비즈니스 메일을 스스로 완결',
      period: '4개월',
      photo: '/images/daruma.png',
    },
  ],
  hobby: [
    {
      name: '최OO · 30대 · 애니 팬',
      before: '자막 없이는 한 장면도 이해 못 하던 시청자',
      after: '좋아하는 애니를 자막 없이 즐기고 성우 인터뷰까지 이해',
      period: '5개월',
      photo: '/images/sushi_roll.png',
    },
    {
      name: '한OO · 20대 · 여행 러버',
      before: '메뉴판 앞에서 늘 손가락으로만 주문',
      after: '현지인과 가벼운 대화를 즐기는 여행자로 변신',
      period: '3개월',
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
      items: ['기초 문법(조사·동사 활용)', '일상 회화 100문장', 'JLPT N5 대비 어휘'],
    },
    {
      stage: '6개월',
      title: '혼자서도 말이 되는 단계',
      items: ['여행·쇼핑 실전 회화', 'N4 수준 독해·청해', '원어민 회화 세션으로 자신감 완성'],
    },
  ],
  business: [
    {
      stage: '1개월',
      title: '비즈니스 기초 다지기',
      items: ['정중체(です·ます) 완전 정복', '자기소개·명함 교환 표현', '사내 기본 회화'],
    },
    {
      stage: '3개월',
      title: '실무에서 쓰는 표현',
      items: ['비즈니스 메일 작성법', '전화·화상 회의 응대', '거래처 미팅 롤플레이'],
    },
    {
      stage: '6개월',
      title: '회의를 주도하는 레벨',
      items: ['프레젠테이션·협상 표현', '출장 시나리오 실전 연습', '원어민 회화 세션으로 실전 감각'],
    },
  ],
  hobby: [
    {
      stage: '1개월',
      title: '좋아하는 걸로 시작하기',
      items: ['히라가나·가타카나 익히기', '드라마·노래 속 표현 맛보기', '기초 인사와 감정 표현'],
    },
    {
      stage: '3개월',
      title: '콘텐츠가 들리기 시작',
      items: ['자주 나오는 회화 패턴', '여행 필수 표현', '좋아하는 콘텐츠로 듣기 연습'],
    },
    {
      stage: '6개월',
      title: '자막 없이 즐기기',
      items: ['자연스러운 반말·구어체', '팬 커뮤니티 소통 표현', '원어민 회화 세션으로 실전 대화'],
    },
  ],
}

export const curriculumNote = '원어민 회화 세션은 별도로 신청할 수 있어요. 배운 표현을 실제 대화로 굳혀 드립니다.'

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
    description: '일본어 학습 초기 단계에서 자주 사용되는 이모지와 스티커를 정리한 자료입니다. 감정 표현과 반응 표현을 재미있게 배울 수 있어요.',
    image: '/class/imoji.png',
  },
  {
    id: 'pokemon-1',
    title: '포켓몬 캐릭터 학습',
    lesson: '캐릭터로 배우는 문법',
    description: '포켓몬 캐릭터를 활용하여 동물 이름과 형용사 표현을 배웠습니다. 재미있는 캐릭터와 함께 어휘 확장 연습.',
    image: '/class/Metamong.png',
  },
  {
    id: 'basketball-1',
    title: '농구 용어 및 전술 분석',
    lesson: '스포츠 일본어 & 전문 용어',
    description: '농구 경기의 전술을 일본어로 설명하는 실습입니다. 스포츠 특화 어휘와 방향 표현(앞, 뒤, 좌, 우)을 자연스럽게 습득합니다.',
    image: '/class/rule.png',
  },
  {
    id: 'highlight-1',
    title: '색상 및 대비 표현',
    lesson: '색상 어휘 & 하이라이트 기법',
    description: '하이라이트 기법을 활용한 색상 표현 학습입니다. 일상에서 자주 사용하는 색상 관련 표현과 강조 표현을 연습합니다.',
    image: '/class/sandwich.png',
  },
  {
    id: 'gesture-1',
    title: '일본어 손 제스처 표현',
    lesson: '신체 언어와 회화 표현',
    description: '손 제스처를 통한 자연스러운 일본어 표현입니다. "승리", "손가락질", "손흔들기" 등의 표현과 상황 별 제스처를 배웁니다.',
    image: '/class/description.png',
  },
  {
    id: 'festival-1',
    title: '비트코인 페스티벌 프로젝트',
    lesson: '프로젝트 기반 통합 학습',
    description: '실제 이벤트를 주제로 한 통합 프로젝트 학습입니다. 날짜, 시간, 행사 설명 등 다양한 표현을 실전에서 배웁니다.',
    image: '/class/bitcoin.png',
  },
  {
    id: 'radiation-1',
    title: '방사능 고양이 프레젠테이션',
    lesson: '프레젠테이션 스킬 & 창의적 표현',
    description: '창의적인 주제를 일본어로 설명하는 연습입니다. 시각 자료를 활용한 표현력 강화와 프레젠테이션 스킬을 동시에 습득합니다.',
    image: '/class/cat.png',
  },
]

export const learningReport = {
  title: '분기별 학습성과 리포트',
  subtitle: '수강생의 객관적인 성장을 한눈에 확인할 수 있습니다',
  description:
    '새달일본어는 모든 학생에게 3개월마다 상세한 학습성과 리포트를 제공합니다. 발음, 문법, 어휘, 청해, 회화 등 각 영역별 성장도를 구체적인 수치와 그래프로 보여드리며, 다음 단계 학습 방향도 함께 제시합니다.',
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
    q: '회사 지원(세금계산서) 처리가 되나요?',
    a: '가능합니다. 기업·단체 교육의 경우 세금계산서 발행과 수강 증빙 서류를 제공해 드립니다. 기업 문의 링크로 연락 주시면 안내해 드릴게요.',
  },
  {
    q: '수업은 몇 명이 함께 듣나요?',
    a: '1:1 개인 수업과 2~4명 소수 그룹 수업 중 선택할 수 있어요. 소수 수업도 모두가 충분히 말할 수 있도록 인원을 제한합니다.',
  },
  {
    q: '교재는 따로 사야 하나요?',
    a: '기본 학습 자료는 무료로 제공됩니다. 필요한 경우 시판 교재를 추천드리지만, 강매하지 않으며 대부분 자체 자료로 충분합니다.',
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

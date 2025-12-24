// nuxt.config.ts
export default defineNuxtConfig({
  extends: ['docus'],
  
  // 1. 사이트 기본 정보 설정 (브라우저 탭 접미사 및 OG 태그용)
  site: {
    name: '담담: 다르마베이스',
    description: '불교 경전 번역 및 연구노트 지식베이스',
  },

  // 2. 사용자님이 찾아내신 바로 그 부분! (LLMS용 메타데이터 교체)
  // 이 부분이 설정되지 않으면 Docus 기본값인 "Write beautiful..."이 출력됩니다.
  llms: {
    title: '담담: 다르마베이스',
    description: '불교 경전 번역 및 연구노트 지식베이스',
    full: {
      title: '담담: 다르마베이스',
      description: '불교 경전 번역 및 연구노트 지식베이스',
    }
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01'
})
// app/app.config.ts
export default defineAppConfig({
  // 1. docus 키를 빼고 바로 설정합니다.
  title: '담담 (DamDam)', 
  description: '불교 경전 번역 및 연구노트 지식베이스',
  // 2. 소셜 링크 설정
  socials: {
    github: 'https://github.com/biwoom/damdam',
    x: 'nuxt_js'
  },

  // 3. 목차(TOC) 설정
  toc: {
    title: '목차',
    bottom: {
      links: [{
        icon: 'i-lucide-book-open',
        label: '경전 읽기 안내',
        to: '/guide',
        target: '_blank',
      }],
    },
  },

  // 4. UI 및 레이아웃 커스터마이징 (Nuxt UI v3/v4 스타일)
  ui: {
    pageHero: {
      slots: {
        title: 'text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl',
      },
    },
  }
})
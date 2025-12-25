<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()

// 1. Docus 레이어에서 제공하는 전체 내비게이션 데이터를 주입받습니다.
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

// 2. 현재 섹션에 맞는 내비게이션 트리만 동적으로 추출합니다.
const filteredNavigation = computed(() => {
  if (!navigation?.value) return []

  // 현재 URL 경로의 첫 번째 세그먼트 추출 (예: /sutra)
  const segments = route.path.split('/').filter(Boolean)
  
  // 메인 페이지(/) 등 세그먼트가 없는 경우 전체 노출
  if (segments.length === 0) return navigation.value

  const currentRoot = `/${segments[0]}`

  // 전체 트리 중 현재 루트 경로와 일치하는 가지만 필터링하여 반환
  return navigation.value.filter(item => item.path.startsWith(currentRoot))
})
</script>

<template>
  <UContentNavigation
    v-if="filteredNavigation.length"
    highlight
    :navigation="filteredNavigation"
  />
  <div v-else class="p-4 text-sm text-gray-500 italic">
    해당 섹션의 목록을 찾을 수 없습니다.
  </div>
</template>
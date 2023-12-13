<script setup>
import { clsx } from 'clsx'
const props = defineProps({
  to: {
    type: String,
    default: '/',
  },
  label: {
    type: String,
  },
})
// 导航栏状态
const state = inject('state', false)

const menuItemClasses = computed(() =>
  clsx(
    'hover:bg-third-gradient hover:bg-clip-text hover:text-transparent lg:dark:text-white dark:hover:text-transparent',
    state.value ? 'lg:text-base-title' : 'lg:text-gray-200'
  )
)
</script>

<template>
  <NuxtLink
    activeClass="!bg-third-gradient !bg-clip-text !text-transparent"
    :to="props.to"
    :class="menuItemClasses"
  >
    <slot>
      {{ props.label }}
    </slot>
  </NuxtLink>
</template>

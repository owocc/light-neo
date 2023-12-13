<script setup>
import { clsx } from 'clsx'
const props = defineProps({
  icon: {
    type: String,
    default: 'i-carbon-face-dissatisfied',
  },
})

const state = inject('state', false) //接收状态栏当前状态
const actionClasses = computed(() =>
  clsx(
    'text-lg transition-all duration-300 dark:text-white ease-in-out cursor-pointer lg:text-xl hover:text-primary dark:hover:text-primary',
    state.value ? 'text-base-title' : 'text-white'
  )
)

</script>
<template>
  <button class="inline-flex items-center transition-all">
    <Icon :name="props.icon" :class="actionClasses" />
  </button>
</template>

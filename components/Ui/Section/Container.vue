<script setup>
import { clsx } from 'clsx'
const props = defineProps({
  grid: {
    type: Boolean,
    default: false,
  },
})
const containerClasses = computed(() =>
  clsx(
    props.grid
      ? 'grid gap-12 px-6 max-w-6xl mx-auto md:grid-cols-2 md:items-center'
      : 'px-6 max-w-6xl mx-auto'
  )
)
const sectionClasses = computed(() =>
  clsx('relative', !useAttrs().class && 'pt-40')
)
</script>
<template>
  <section :class="sectionClasses">
    <div :class="containerClasses">
      <slot />
    </div>
  </section>
</template>

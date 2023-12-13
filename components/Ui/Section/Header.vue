<script setup>
import { clsx } from 'clsx'
const props = defineProps({
  title: {
    type: String,
  },
  align: {
    type: String,
    default: 'center-left',
  },
})

const sectionHeader = computed(() =>
  clsx(
    'text-center',
    props.align === 'center-left' && 'md:text-left',
    props.align === 'center' && 'md:text-center'
  )
)

const textClasses = computed(() =>
  clsx('text-gray-400 mb-4 max-w-sm', props.align === 'center' && 'mx-auto')
)
</script>
<template>
  <header :class="sectionHeader">
    <slot name="title">
      <h2
        class="text-3xl font-medium mb-6 md:text-4xl lg:text-5xl lg:font-bold"
      >
        {{ props.title }}
      </h2>
    </slot>
    <p :class="textClasses">
      <slot />
    </p>
  </header>
</template>

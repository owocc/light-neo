<script setup>
import { clsx } from 'clsx'
const props = defineProps({
  icon: {
    type: String,
    default: 'i-carbon-face-wink-filled',
  },
})

const buttonClasses = computed(() =>
  clsx(
    'inline-flex bg-third-gradient text-xl text-white shadow-sm shadow-primary hover:scale-110 transition-all ease-in-out hover:shadow-md hover:shadow-primary',
    !useAttrs().class && 'p-1 rounded-lg'
  )
)
</script>
<template>
  <button :class="buttonClasses">
    <Icon :name="props.icon" />
  </button>
</template>

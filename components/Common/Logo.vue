<script setup>
import clsx from 'clsx'
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
  logo: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLink
    to="/"
    :class="
      clsx(
        'font-medium duration-500 flex items-center text-xl transition-all group dark:text-white',
        props.dark ? 'text-base-title ' : 'text-white'
      )
    "
  >
    <img src="/favicon.png" v-if="props.logo" alt="Logo" class="w-8 mr-2" />
    <span class="bg-third-gradient text-transparent bg-clip-text">星光</span
    >灯坊
  </NuxtLink>
</template>

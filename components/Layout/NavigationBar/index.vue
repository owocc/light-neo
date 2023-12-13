<script setup>
import clsx from 'clsx'

const navbarClasses = computed(() =>
  clsx(
    'w-full sticky top-0 left-0 nav z-50 transition-colors px-6 dark:bg-base-dark',
    state.value
      ? 'bg-base-body shadow-sm dark:border-b dark:border-b-primary'
      : 'bg-base-dark '
  )
)
// 导航栏状态
const { state } = useScroll(50)
// 注入导航栏状态,用于给子组件传递状态
provide('state', state)
</script>

<template>
  <header :class="navbarClasses">
    <nav class="max-w-7xl mx-auto h-full flex justify-between items-center">
      <CommonLogo :dark="state" />
      <div
        class="flex items-center gap-x-4 lg:gap-x-8 flex-row-reverse lg:flex-row"
      >
        <LayoutNavigationBarMenu />
        <LayoutNavigationBarActions/>
      </div>
    </nav>
  </header>
</template>

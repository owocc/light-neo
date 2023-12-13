<script setup>
import { gsap } from 'gsap'
import clsx from 'clsx'

const menuListContainerClasses = clsx(
  'fixed left-0 -top-full divide-fuchsia-400 bg-base-body w-full p-16 z-50 border-b ',
  'lg:top-0 lg:bg-transparent lg:relative lg:p-0 lg:border-none',
  'dark:bg-container-dark dark:border-primary dark:bg-opacity-50 dark:backdrop-blur-lg lg:dark:bg-transparent'
)

const menu = ref() //获取到菜单div,为他设置隐藏和显示
const handlerToggleMenu = (state) => {
  gsap.to(menu.value, {
    top: state ? 0 : '-100%',
    duration: 0.4,
  })
}

const { menuConfig } = useMenuConfig()
</script>

<template>
  <div ref="menu" :class="menuListContainerClasses">
    <!-- 导航菜单 -->
    <ul class="flex flex-col text-center gap-y-8 lg:flex-row lg:gap-8">
      <li v-for="menuItem in menuConfig" :key="menuItem.key">
        <UiLink :label="menuItem.label" :to="menuItem.to" />
      </li>
    </ul>

    <!-- 关闭菜单按钮 -->
    <button
      @click="handlerToggleMenu(false)"
      class="flex cursor-pointer absolute top-4 dark:text-white right-6 text-2xl text-base-title lg:hidden"
    >
      <Icon name="i-carbon-close" />
    </button>
  </div>

  <!-- 打开菜单按钮 -->
  <UiButtonAction
    @click="handlerToggleMenu(true)"
    icon="i-carbon-menu"
    class="lg:hidden"
  />
</template>

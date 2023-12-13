<script setup>
import { clsx } from 'clsx'
import { useSwiper } from 'swiper/vue'

// 使用 useSwiper() 获取 swiper 实例
const swiper = useSwiper()

// 按钮样式
const btnClasses = clsx(
  'inline-flex p-1 rounded-full text-xl text-primary shadow-sm bg-white hover:shadow-md transition-all hover:scale-95'
)
</script>
<template>
  <div
    class="gap-x-6 absolute w-full flex justify-center left-0 bottom-1 mx-auto lg:mx-0"
  >
    <!-- 轮播图向前翻页 -->
    <button @click="swiper.slidePrev()" :class="btnClasses">
      <Icon name="i-carbon-chevron-left" />
    </button>

    <!-- 轮播图向后翻页 -->
    <button @click="swiper.slideNext()" :class="btnClasses">
      <Icon name="i-carbon-chevron-right" />
    </button>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// 传入 lamps 数组,会渲染多个 CardProduct 组件,用于滑动轮播
const props = defineProps({
  lamps: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <!-- 轮播图 -->
  <Swiper
    class="!pb-16 relative px-16 md:px-0 !pt-2"
    slides-per-view="auto"
    loop
    centered-slides
    :breakpoints="{
      768: {
        centeredSlides: false,
      },
    }"
  >
    <!-- 轮播图元素,将卡片再次封装 -->
    <SwiperSlide class="!w-auto h-full flex" v-for="lamp in lamps" :key="lamp.id">
      <CardProduct :product="lamp" />
    </SwiperSlide>

    <!-- 轮播图操作按钮 -->
    <template #container-end v-if="lamps.length > 3">
      <CommonCarouselNavigation />
    </template>
  </Swiper>
</template>

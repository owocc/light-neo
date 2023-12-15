<!-- 商品详情轮播图 -->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const props = defineProps({
  lamp: {
    type: Object,
    required: true,
    default: () => ({
      images: [],
      headerImage: '/img/home-lamp.png',
    }),
  },
})
</script>
<template>
  <Swiper
    class="w-full !pb-16"
    slides-per-view="auto"
    loop
    space-between="20px"
  >
    <SwiperSlide>
      <CardProductHeaderImg :image="props.lamp.headerImage" />
    </SwiperSlide>
    <SwiperSlide v-for="image in props.lamp.images">
      <img :src="image" class="h-full w-full rounded-md" />
    </SwiperSlide>
    <!-- 轮播图操作按钮 -->
    <template #container-end>
      <CommonCarouselNavigation />
    </template>
  </Swiper>
</template>

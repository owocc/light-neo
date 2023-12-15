<!-- 商品详情轮播图头图 -->
<script setup>
const props = defineProps({
  image: {
    type: String,
  },
})
</script>
<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="relative h-96 w-72 flex items-center justify-center">
      <img :src="props.image" class="w-full relative z-10" />
      <div
        class="border-4 border-primary rounded-t-full absolute top-5 bottom-5 left-5 right-5 z-0"
      ></div>
    </div>
  </div>
</template>

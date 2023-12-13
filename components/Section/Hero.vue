<script setup>
// const { data: countData } = await useFetch('/api/sales/count', {
//   method: 'get',
// })
</script>
<template>
  <UiSectionContainer class="pt-12 md:pt-24">
    <CommonFixedBg />
    <UiSectionContainer grid class="pt-0">
      <div class="flex flex-col gap-y-12 md:order-1 lg:pt-16 h-full">
        <div class="text-center md:text-left">
          <h3
            class="bg-third-gradient font-normal mb-2 text-transparent bg-clip-text dark:text-transparent md:text-xl"
          >
            点亮一盏灯
          </h3>
          <h1 class="text-white text-4xl font-medium mb-4 lg:text-7xl">
            光影悠香
          </h1>
          <h2 class="text-4xl text-white mb-6 lg:text-7xl">温暖心房</h2>

          <div class="flex gap-x-4 justify-center md:justify-normal">
            <UiButton to="/all" label="发现更多" icon="i-carbon-arrow-right" />
            <!-- 视频组件 -->
            <CommonVideoPlayer />
          </div>
        </div>
        <CommonStatistics />
      </div>

      <!-- 灯具图片 -->
      <CardLamp theme="first" lamp-image="/img/home-lamp.png" />
    </UiSectionContainer>
  </UiSectionContainer>
</template>

<script setup>
// 弹出框样式
const modalUi = {
  base: 'items-center gap-4 p-2 dark:!bg-base-dark',
  width: 'md:max-w-2xl lg:max-w-3xl',
  container: 'items-center',
  overlay: {
    background: 'backdrop-blur-lg bg-white/10 dark:bg-base-body-dark/10',
  },
}

const openVideo = ref(false)
</script>
<template>
  <UModal v-model="openVideo" :ui="modalUi">
    <!-- 视频 -->
    <video
      src="/voide/lamp.mp4"
      controls
      class="rounded-md"
      ref="voide w-full"
    />

    <!-- 关闭视频 -->
    <UiButtonIcon
      @click="openVideo = false"
      class="p-2 rounded-full"
      icon="i-carbon-close"
    />
  </UModal>

  <!-- 打开视频 -->
  <button
    @click="openVideo = true"
    class="flex items-center justify-center text-gray-400 gap-x-2 group hover:text-primary transition-all ease-in-out"
  >
    <Icon name="i-carbon-play-outline" class="text-2xl" />
    播放视频
  </button>
</template>

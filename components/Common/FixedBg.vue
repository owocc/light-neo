<template>
  <!-- 斜角的背 -->
  <div
    class="absolute top-0 left-0 w-full bg-base-dark h-[95%] md:h-[110%] lg:h-[95%] clip-bg"
  ></div>
</template>

<style scoped>
.clip-bg {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
}
</style>

<template>
  <div
    class="flex justify-center items-center h-screen"
  >
    <!-- 图片区域 -->
    <div
      class="w-1/2 h-screen hidden lg:block brightness-75 hover:brightness-100 transition-all duration-1000"
    >
      <img
        src="/img/bg.jpg"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>

    <!-- 右侧表单 -->
    <div
      class="lg:p-36 md:p-52 sm:20 p-8 w-full h-full lg:w-1/2 relative flex items-center justify-center"
    >
      <CommonLogo dark class="mb-4 absolute right-5 top-5 !text-lg" />
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

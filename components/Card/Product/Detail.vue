<script setup>
const props = defineProps({
  lamp: {
    type: Object,
    required: true,
  },
})

const { formatPrice } = useUtils()
</script>
<template>
  <div
    class="w-full max-w-6xl rounded bg-container dark:bg-container-dark shadow-xl p-10 lg:p-20 mx-auto text-gray-800 dark:text-white relative md:text-left"
  >
    <div class="md:flex items-center -mx-10 md:h-full">
      <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
        <!-- 轮播图 -->
        <CommonCarouselDetail :lamp="props.lamp" />
      </div>

      <!-- 商品信息 -->
      <div class="w-full md:w-1/2 px-10 flex h-full flex-col justify-between">
        <div class="mb-10">
          <h1 class="font-bold uppercase text-2xl mb-5">
            {{ props.lamp.name }}
          </h1>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ props.lamp.desc }}
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <!-- 价格 -->
          <div>
            <span class="text-3xl leading-none text-primary align-baseline"
              >¥</span
            >
            <span class="font-bold text-5xl leading-none align-baseline">{{
              formatPrice(props.lamp.price)
            }}</span>
          </div>

          <!-- 操作部分 -->
          <div>
            <UiButton
              class="w-full md:w-auto"
              icon="i-carbon-shopping-cart"
              label="添加到购物车"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

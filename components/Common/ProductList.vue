<!-- 对产品卡片进行封装,直接是一个列表 -->
<script setup>
const props = defineProps({
  products: {
    typeo: Array,
    default: () => [],
  },
})
</script>
<template>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 2xl:grid-cols-5"
  >
    <CardProduct
      v-for="product in props.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

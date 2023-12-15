<script setup>
const cartStore = useCartStore()
</script>
<template>
  <tbody class="flex-col flex gap-y-4">
    <div
      v-if="cartStore.carts.length <= 0"
      class="py-24 flex justify-center items-center bg-container dark:bg-container-dark rounded-md"
    >
      <span>购物车还没有商品哦,去逛逛吧~</span>
    </div>

    <template v-else>
      <CartRow v-for="item in cartStore.carts" :product="item" :key="item.id" />
    </template>
  </tbody>
</template>

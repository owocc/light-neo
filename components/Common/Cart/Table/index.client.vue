<script setup>
const cartStore = useCartStore()
</script>
<template>
  <table class="w-full flex flex-col gap-y-4">
    <thead class="hidden md:block">
      <CommonCartTableHeader />
    </thead>
    <tbody class="flex-col flex gap-y-4">
      <div
        v-if="cartStore.carts.length <= 0"
        class="py-24 flex justify-center items-center bg-first-gray-950 rounded-md"
      >
        <span>购物车还没有商品哦,去专卖店逛逛吧~</span>
      </div>
      <template v-else>
        <CommonCartTableRow v-for="item in cartStore.carts" :product="item" />
      </template>
    </tbody>

    <tfoot class="w-full">
      <CommonCartTableFooter />
    </tfoot>
  </table>
</template>

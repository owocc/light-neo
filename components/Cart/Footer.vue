<script setup>
const cartStore = useCartStore()
const { formatPrice } = useUtils()
</script>
<template>
  <tfoot
    class="w-full bg-container dark:bg-container-dark p-4 flex gap-4 rounded-md flex-col md:flex-row md:items-center md:justify-between"
  >
    <div class="flex items-center">
      <Icon name="i-carbon-shopping-cart" class="text-2xl" />
      <span class="ml-2"
        >共计
        <span class="text-xl font-bold px-1 text-primary">{{
          cartStore.prodcutNum
        }}</span>
        件商品
      </span>
    </div>
    <div class="flex flex-col md:flex-row md:items-center gap-4">
      <b>
        <span>合计: ¥ </span>
        <span class="text-primary text-2xl">{{
          formatPrice(cartStore.total)
        }}</span>
      </b>

      <!-- 购物车结算 -->
      <UiButton label="结算" icon="i-carbon-certificate-check" />
    </div>
  </tfoot>
</template>

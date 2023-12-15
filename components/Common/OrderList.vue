<script setup>
const cartStore = useCartStore()
const { formatPrice } = useUtils()
const { gotoProductDetail } = useGoto()
</script>
<template>
  <table class="w-full flex flex-col gap-y-4">
    <thead
      class="hidden w-full md:block bg-base-body p-4 dark:bg-base-body-dark rounded-md border dark:border-primary/30"
    >
      <tr class="flex w-full text-center justify-around">
        <th class="w-full">商品信息</th>
        <th class="w-full">数量</th>
        <th class="w-full">小计</th>
      </tr>
    </thead>

    <tbody class="flex flex-col w-full gap-y-4">
      <tr
        class="flex items-center flex-col md:flex-row bg-base-body p-4 rounded-md border dark:bg-base-body-dark dark:border-primary/30 hover:border-primary cursor-pointer"
        v-for="item in cartStore.carts"
        @click="gotoProductDetail(item.id)"
      >
        <td class="w-full flex flex-col items-center justify-center gap-4">
          <img :src="item.image" class="w-16 object-contain" />
          <h2>{{ item.name }}</h2>
        </td>
        <UiRowContainer label="数量">
          <span class="text-lg">{{ item.count }} </span>
        </UiRowContainer>
        <UiRowContainer label="小记">
          <span class="text-lg text-primary"
            >¥{{ formatPrice(item.price * item.count) }}
          </span>
        </UiRowContainer>
      </tr>
    </tbody>

    <CartFooter hiddenButton />
  </table>
</template>

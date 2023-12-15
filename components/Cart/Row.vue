<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      name: '商品名称',
      desc: '商品简述',
      price: 0,
      image: '/img/home-lamp.png',
      count: 1,
    }),
  },
})
// 小记
const total = computed(() => {
  return parseFloat(props.product.price) * props.product.count
})

const { limitText, formatPrice } = useUtils()
const { gotoProductDetail } = useGoto()

const cartStore = useCartStore()
</script>
<template>
  <tr
    class="flex w-full justify-around flex-col gap-y-4 md:flex-row p-4 rounded-md bg-container dark:bg-container-dark outline outline-transparent hover:outline-primary transition-all"
  >
    <td
      class="flex justify-center items-center flex-col gap-4 w-full md:text-center md:items-center cursor-pointer"
      @click="gotoProductDetail(props.product.id)"
    >
      <img :src="props.product.image" class="w-36" />
      <div class="flex flex-col w-full">
        <b class="text-lg">{{ limitText(props.product.name, 20) }}</b>
        <p class="text-sm text-gray-400 dark:text-gray-300">
          {{ limitText(props.product.desc, 20) }}
        </p>
      </div>
    </td>

    <UiRowContainer label="单价">
      <span>¥ {{ formatPrice(props.product.price) }}</span>
    </UiRowContainer>

    <UiRowContainer label="数量">
      <UiCounter v-model="props.product.count" />
    </UiRowContainer>

    <UiRowContainer label="小计">
      <span>¥ {{ formatPrice(total) }}</span>
    </UiRowContainer>

    <td class="w-full flex justify-center items-center">
      <UiButton
        label="删除"
        class="btn-error w-full"
        icon="i-carbon-trash-can"
        @click="cartStore.remove(props.product.id)"
      />
    </td>
  </tr>
</template>

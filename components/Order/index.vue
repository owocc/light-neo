<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
})
//计算总金额
const orderTotal = computed(() => {
  return props.order.orderItems.reduce((total, item) => {
    return parseInt(total) + parseInt(item.totalPrice) * item.quantity
  }, 0)
})
const { formatPrice,formatTime } = useUtils()
const { gotoProductDetail } = useGoto()


</script>
<template>
  <div
    class="w-full p-4 bg-container dark:bg-container-dark rounded-md flex flex-col gap-8"
  >
    <div
      class="flex md:justify-between flex-col md:flex-row gap-2 p-4 rounded-md bg-base-body dark:bg-base-body-dark md:items-center"
    >
      <div class="space-y-2">
        <h1>订单号: {{ props.order.id }}</h1>
        <h2 class="text-gray-500 font-medium">购买时间: {{ formatTime(props.order.createAt) }}</h2>
      </div>
      <h2>
        订单总金额:
        <span class="text-primary text-2xl"
          >¥ {{ formatPrice(orderTotal) }}</span
        >
      </h2>
    </div>
    <div class="flex flex-col gap-4">
      <div
        @click="gotoProductDetail(orderItem.lampId)"
        class="flex justify-between cursor-pointer p-4 rounded-md hover:bg-primary/5 transition-all"
        v-for="orderItem in props.order.orderItems"
      >
        <div class="flex">
          <div class="w-20 h-20 p-2">
            <img :src="orderItem.lamp.headerImage" alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4">
            <div class="text-sm">{{ orderItem.lamp.name }}</div>
          </div>
        </div>
        <div class="flex flex-col justify-between text-right">
          <div class="text-lg text-primary">
            ￥{{ formatPrice(orderItem.lamp.price) }}
          </div>
          <div class="text-sm">x {{ orderItem.quantity }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  price: {
    type: String,
    default: '0',
  },
})
const { formatPrice } = useUtils()
</script>
<template>
  <div
    class="flex items-center p-4 bg-container rounded-lg shadow-xs dark:bg-container-dark shadow-lg outline outline-transparent active:outline-primary cursor-pointer transition-all active:scale-95"
  >
    <div
      class="p-3 mr-4 text-white rounded-full dark:text-orange-100 dark:bg-green-500 inline-flex"
    >
      <Icon name="i-carbon-logo-wechat" class="text-2xl" />
    </div>
    <div>
      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        微信充值
      </p>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
        ¥ {{ formatPrice(props.price) }}
      </p>
    </div>
  </div>
</template>

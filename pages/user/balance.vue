<script setup>
const priceList = ['10', '100', '1000', '2000', '3000', '10000']

const { fetchRecharge } = useUserApi()
const handlerRecharge = async (money) => {
  await fetchRecharge(money)
}
</script>
<template>
  <UiNavbar title="余额充值" />

  <div class="grid md:grid-cols-3 gap-4">
    <CardRecharge
      v-for="price in priceList"
      :price="price"
      @click="handlerRecharge(price)"
    />
  </div>
</template>

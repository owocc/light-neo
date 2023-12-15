<script setup>
const { fetchOrderList } = useOrderApi()

const data = ref({
  list: [],
  total: 0,
})
onMounted(async () => {
  if (process.server) return
  data.value = await fetchOrderList()
})
</script>
<template>
  <PageContainer>
    <UiNavbar title="我的订单" />
    <ClientOnly>
      <div class="grid gap-4">
        <Order v-for="item in data.list" :order="item" :key="item.id" />
      </div>
    </ClientOnly>
  </PageContainer>
</template>

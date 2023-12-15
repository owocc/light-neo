<script setup>
const { fetchProductDetail } = useProductApi()
const id = useRoute().params.id
const { data } = await fetchProductDetail(id)
</script>
<template>
  <div class="flex items-center p-5 lg:p-10 overflow-hidden relative flex-col">
    <CardProductDetail :lamp="data" />
  </div>
</template>

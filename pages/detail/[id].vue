<script setup>
const { fetchProductDetail } = useProductApi()
const id = useRoute().params.id
const { data } = await fetchProductDetail(id)

// 设置SEO数据
useSeoMeta({
  title: data.value.name,
})
</script>
<template>
  <div
    class="flex items-center p-5 max-w-6xl mx-auto lg:p-10 overflow-hidden relative flex-col gap-2"
  >
    <CardProductDetail :lamp="data" />
  </div>
</template>

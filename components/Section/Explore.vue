<script setup>
const { data } = await useFetch('/api/lamp/list', {
  method: 'get',
  query: {
    limit: 8,
  },
})
</script>
<template>
  <UiSectionContainer class="py-40">
    <UiSectionHeader title="探索更多" align="center">
      每款产品都蕴含独特设计，为你的空间注入精致光彩，打造个性化生活氛围
    </UiSectionHeader>

    <div
      class="grid mt-12 gap-8 justify-center sm:grid-cols-[repeat(2,max-content)] md:grid-cols-[repeat(3,max-content)] lg:grid-cols-[repeat(4,max-content)]"
    >
      <CardProduct v-for="lamp in data.list" :product="lamp" :key="lamp.id"/>
    </div>
  </UiSectionContainer>
</template>

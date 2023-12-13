<!-- 统计信息 -->
<script setup>
const { data } = await useFetch('/api/statistics', {
  method: 'GET',
})
</script>
<template>
  <div
    class="flex justify-center gap-x-8 text-center md:justify-normal md:text-left"
  >
    <div v-for="item in data" :key="item.key">
      <h3 class="text-white text-2xl mb-2 font-medium lg:text-4xl">
        {{ item.value }}<span class="text-primary ml-2">+</span>
      </h3>
      <span class="text-sm">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
// 获取推荐灯具列表
const { data } = await useFetch('/api/lamp/recommend', {
  method: 'GET',
})
</script>
<template>
  <UiSectionContainer>
    <UiSectionHeader title="灯具推荐" class="mb-12">
      精选推荐，添<span class="text-primary">亮</span>你的空间
    </UiSectionHeader>

    <!-- 商品推荐轮播图 -->
    <CommonCarousel :lamps="data.list" />
  </UiSectionContainer>
</template>

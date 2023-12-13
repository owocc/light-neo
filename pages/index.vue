<script setup>
// 处理SEO信息,设置页面标题和预览图片
useSeoMeta({
  title: '星光灯坊 | 首页',
  description: '星光灯坊，独特设计，温馨照明。精选灯具，点亮生活',
  ogImage: '/preview.png',
})
</script>
<template>
  <SectionHero />
  <SectionRecommend />
  <SectionComment />
  <SectionFeatured />
  <SectionExplore />
  <SectionCustom />
</template>

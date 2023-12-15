<script setup>
definePageMeta({
  middleware: ['auth'],
})
useSeoMeta({
  title:"星光灯坊 | 个人中心"
})
</script>
<template>
  <PageContainer>
    <NuxtPage />
  </PageContainer>
</template>

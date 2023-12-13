<script setup>
definePageMeta({
  middleware: ['auth'],
})
</script>
<template>
  <PageContainer>
    <NuxtPage />
  </PageContainer>
</template>

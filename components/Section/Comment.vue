<script setup>
const { data } = await useFetch('/api/comment/hot', {
  method: 'get',
})
</script>
<template>
  <UiSectionContainer grid>
    <CardLamp lamp-image="/img/industrial-lamp.png" img-class="lg:!w-[280px]" />
    <div class="grid gap-12">
      <UiSectionHeader title="星光评说" align="center">
        在每一份评价中，都闪烁着您的喜悦之光，因为我们关心每一个点亮您生活的瞬间
      </UiSectionHeader>
      <div class="grid gap-y-8">
        <CardComment v-for="comment in data" :comment="comment" />
      </div>
    </div>
  </UiSectionContainer>
</template>

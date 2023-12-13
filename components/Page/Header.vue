<script setup>
const props = defineProps({
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="w-full py-4 flex justify-center flex-col items-center mb-8 gap-4">
    <h1 class="text-2xl font-bold">{{ props.title }}</h1>
    <slot />
  </div>
</template>

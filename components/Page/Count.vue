<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
})
</script>
<template>
  <p class="text-center mt-8">
    共
    <span class="text-primary"> {{ props.total }} </span>
    个灯具
  </p>
</template>

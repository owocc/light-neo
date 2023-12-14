<script setup>
const props = defineProps({
  label: {
    type: String,
    default:'标签'
  },
  value: {
    default: '0',
  },
})
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-2xl font-bold text-navy-700 dark:text-white">
      {{ props.value }}
    </p>
    <p class="text-sm font-normal text-gray-400">{{ props.label }}</p>
  </div>
</template>

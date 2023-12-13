<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <button
    class="w-full h-24 md:w-24 rounded-md text-primary flex flex-col items-center justify-center active:scale-95 transition-all border bg-white hover:bg-primary hover:text-white group dark:bg-container-dark dark:border-primary/25 dark:hover:bg-primary gap-1"
  >
    <Icon
      :name="props.icon"
      class="text-3xl transition-all group-hover:-translate-y-1"
    />
    <span class="transition-all">{{ props.label }}</span>
  </button>
</template>

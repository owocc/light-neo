<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <UTooltip :text="props.text">
    <NuxtLink
      :to="props.to"
      class="hover:text-primary inline-flex items-center justify-center transition-all"
      active-class="text-primary"
    >
      <Icon :name="props.icon" class="text-xl" />
    </NuxtLink>
  </UTooltip>
</template>

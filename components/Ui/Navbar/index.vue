<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '星光灯坊',
  },
  icon: {
    type: String,
  },
})
</script>
<template>
  <nav class="flex justify-between w-full mb-4 items-center">
    <div class="flex items-center gap-x-4">
      <slot name="before"> </slot>
      <slot name="title">
        <div class="flex items-center gap-2 text-xl md:text-2xl">
          <Icon v-if="props.icon" :name="props.icon" />
          <h1>{{ props.title }}</h1>
        </div>
      </slot>
    </div>

    <slot name="after" />
  </nav>
</template>

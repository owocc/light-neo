<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})
// 定义emit给input使用,用于双向绑定
defineEmits(['update:modelValue'])
</script>
<template>
  <div class="mb-4">
    <label class="block text-gray-400 mb-2">{{ props.label }}</label>
    <input
      v-bind="$attrs"
      @input="(event) => $emit('update:modelValue', event.target.value)"
      class="w-full border border-gray-300 dark:border-transparent rounded-md py-2 px-3 focus:outline-none focus:border-primary dark:focus:border-primary"
      autocomplete="off"
    />
  </div>
</template>

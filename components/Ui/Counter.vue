<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
})
const emit = defineEmits(['update:modelValue'])

const updateVal = (val) => {
  if (val < 1) {
    emit('update:modelValue', 1)
    return
  }

  // 如果不是数字就将数值重置为1
  if (isNaN(val)) {
    emit('update:modelValue', 1)
    return
  }
  // 如果是小数就将数值重置为1
  if (val % 1 !== 0) {
    emit('update:modelValue', 1)
    return
  }
  // 将数值转换为整数
  emit('update:modelValue', parseInt(val))
}
</script>
<template>
  <div
    class="flex gap-2 items-center"
  >
    <UiButtonIcon
      icon="i-carbon-add"
      @click="updateVal(props.modelValue + 1)"
    />
    <input
      class="outline-none text-center w-12 bg-transparent p-1 hidden-btn"
      :value="props.modelValue"
      type="number"
      @input="(e) => updateVal(e.target.value)"
      @focusout="(e) => updateVal(e.target.value)"
    />
    <UiButtonIcon
      icon="i-carbon-subtract"
      @click="updateVal(props.modelValue - 1)"
    />
  </div>
</template>

<style scoped>
/* 隐藏输入框为数字的按钮 */
.hidden-btn[type='number']::-webkit-inner-spin-button,
.hidden-btn[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

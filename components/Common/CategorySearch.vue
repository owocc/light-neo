<!-- 封装分类查询组件 -->
<script setup>
const { fetchCategoryList, categoryTypeMap } = useCategory()

// 获取分类数据
const { data: category } = await fetchCategoryList()

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])

// 处理选择
const handlerSelect = (category) => {
  //判断当前id是否已存在
  if (isSelect(category)) {
    //如果存在,则删除
    emit(
      'update:modelValue',
      props.modelValue.filter((id) => id !== category.name)
    )
  } else {
    //如果不存在,则添加
    emit('update:modelValue', [...props.modelValue, category.name])
  }
}
//判断是否已选择
const isSelect = (category) => {
  return props.modelValue.includes(category.name)
}
</script>
<template>
  <div
    class="flex  w-full flex-col gap-4 border p-4 rounded-md bg-container dark:bg-container-dark dark:border-primary/75"
  >
    <div v-for="item in categoryTypeMap">
      <div class="flex gap-4 flex-col md:flex-row">
        <h3 class="w-24">{{ item.label }}:</h3>
        <div class="flex gap-2 flex-wrap flex-1 w-full">
          <UBadge
            :key="item.id"
            :variant="isSelect(item) ? 'solid' : 'outline'"
            v-for="item in category[item.value]"
            class="cursor-pointer"
            @click="handlerSelect(item)"
            >{{ item.name }}</UBadge
          >
        </div>
      </div>
    </div>
  </div>
</template>

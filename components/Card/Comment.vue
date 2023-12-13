<script setup>
import { gsap } from 'gsap'

// 评论框的状态
const commentBox = ref(null)
const state = ref(false)
const handlerSwitchComment = () => {
  state.value = !state.value
  gsap.to(commentBox.value, {
    height: state.value ? 'auto' : 0,
    opacity: state.value ? 1 : 0,
    duration: 0.3,
  })
}

const props = defineProps({
  comment: {
    type: Object,
    default: () => ({
      nickname: '星光用户',
      content: '用户评论内容',
    }),
  },
})
</script>
<template>
  <div>
    <div
      class="flex items-center gap-x-3 cursor-pointer"
      @click="handlerSwitchComment"
    >
      <!-- 操作按钮,根据状态会变换不同的图标 -->
      <UiButtonIcon :icon="state ? 'i-carbon-subtract' : 'i-carbon-add'" />
      <!-- 评论标题 -->
      <h3 class="font-normal">来自 {{ props.comment.nickname }} 的评价</h3>
    </div>
    <!-- 内容 -->
    <div ref="commentBox" class="h-0 overflow-hidden">
      <p class="pt-2 pl-10 pr-4 break-all">
        {{ props.comment.content }}
      </p>
    </div>
  </div>
</template>

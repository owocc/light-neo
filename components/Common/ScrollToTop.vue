<!--返回到页面顶部-->
<script setup>
import { gsap } from 'gsap/gsap-core'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const { state } = useScroll(350)
const button = ref(null)

// 滚动到顶部
const handlerToUp = () => {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: 0,
  })
}

// 切换按钮显示
const handlerShowButton = (val) => {
  if (val) {
    gsap.to(button.value, {
      duration: 0.2,
      opacity: 1,
      y: 0,
    })
  } else {
    gsap.to(button.value, {
      duration: 0.2,
      opacity: 0,
      y: 100,
    })
  }
}

watch(
  () => state.value,
  (val) => {
    handlerShowButton(val)
  }
)

onMounted(() => {
  handlerShowButton(state.value)
})
</script>
<template>
  <div ref="button" class="fixed bottom-10 right-10 z-[9999]">
    <UiButtonIcon
      icon="i-carbon-arrow-up"
      @click="handlerToUp"
      class="hover:-translate-y-1 transition-all p-1 rounded-full hover:pb-2"
    />
  </div>
</template>

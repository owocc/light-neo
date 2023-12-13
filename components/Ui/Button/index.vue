<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  icon: {
    type: String,
  },
  to: {
    type: String,
  },
})
const clickHandler = () => {
  if (!props.to) return
  useRouter().push({
    path: props.to,
  })
}
</script>
<template>
  <button
    @click="clickHandler"
    class="inline-flex group items-center hover:px-14 gap-x-1 bg-third-gradient py-3 transition-all px-12 justify-center rounded-full text-white font-medium shadow-lg active:scale-95"
  >
    {{ props.label }}
    <Icon
      v-if="props.icon"
      :name="props.icon"
      class="text-xl group-hover:ml-2 transition-all duration-300 ease-in-out"
    />
  </button>
</template>

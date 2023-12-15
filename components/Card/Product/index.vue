<script setup>
import { clsx } from 'clsx'

const productCardClasses = clsx(
  'relative w-48 bg-container rounded-t-full px-3 pt-3 pb-4 ms-4 transition-all ease-out flex flex-col group',
  'dark:bg-container-dark ',
  'outline-offset-2 outline outline-transparent ',
  'cursor-pointer hover:shadow-primary/5 hover:shadow-xl',
  'dark:hover:outline-primary dark:hover:outline dark:hover:shadow-none'
)

const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      name: '名称',
      desc: '简述',
      price: '0',
      image: ['/img/modern-lamp.png'],
      headerImage: '/img/modern-lamp.png',
    }),
  },
})

// 导入工具方法,用于格式化价格和限制文本
const { formatPrice, limitText } = useUtils()

// 导入导航函数
const { gotoProductDetail } = useGoto()

const { add } = useCartStore()
</script>
<template>
  <article :class="productCardClasses">
    <!-- 灯具图片容器 -->
    <div
      @click="gotoProductDetail(props.product.id)"
      class="bg-base-body h-56 rounded-t-full mb-3 overflow-hidden dark:bg-base-body-dark flex items-center justify-center"
    >
      <img
        :src="props.product.headerImage"
        class="block w-32 mx-auto object-contain"
      />
    </div>

    <!-- 灯具信息 -->
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <h3 class="font-medium mb-1 dark:text-white">
          {{ props.product.name }}
        </h3>
        <span class="block text-sm font-medium mb-4">{{
          limitText(props.product.desc, 25)
        }}</span>
      </div>
      <h3 class="text-2xl dark:text-white">
        <span class="text-primary mr-1">¥</span
        >{{ formatPrice(props.product.price) }}
      </h3>
    </div>

    <!-- 加入购物车按钮 -->
    <UiButtonIcon
      icon="i-carbon-add"
      @click="add(props.product)"
      class="absolute right-3 bottom-4 p-1 rounded-lg"
    />
  </article>
</template>

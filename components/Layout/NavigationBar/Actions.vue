<script setup>
// 使用 pinia 状态管理,得到用户的登录状态
const userStore = useUserStore()
</script>

<template>
  <div
    class="flex gap-x-4 lg:gap-x-6 items-center lg:border lg:py-2 lg:px-4 border-primary rounded-full transition-all lg:hover:bg-black/5 lg:dark:hover:bg-white/5"
  >
    <!-- 购物车按钮 -->
    <UiButtonAction
      icon="i-carbon-shopping-cart"
      @click="$router.push('/cart')"
    />
    <!-- 判断用户是否登录,如果登录就显示个人中心和订单按钮 -->
    <template v-if="userStore.isLogin">
      <UiButtonAction
        icon="i-carbon-order-details"
        @click="$router.push('/order')"
      />
      <UiButtonAction icon="i-carbon-user" @click="$router.push('/user')" />
    </template>

    <!-- 没有登录就显示登录按钮 -->
    <UiButtonAction
      icon="i-carbon-login"
      v-else
      @click="$router.push('/login')"
    />
  </div>
</template>

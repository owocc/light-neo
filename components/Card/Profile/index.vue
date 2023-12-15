<!-- 用户信息卡片 -->
<script setup>
const { data: hitokoto } = await useFetch('https://v1.hitokoto.cn', {
  method: 'get',
})

// 用户信息
const userStore = useUserStore()

// 获取用户信息
const { fetchUserInfo } = useUserApi()
// 判断运行环境为浏览器时，获取用户信息
onMounted(async () => {
  if (process.client) {
    const userInfo = await fetchUserInfo()
    //更新用户信息
    userStore.setUserInfo(userInfo)
  }
})

const { formatPrice } = useUtils()
</script>
<template>
  <div
    class="relative flex flex-col items-center rounded-md border-[1px] border-gray-200 w-full transition-all md:max-w-[400px] p-4 bg-white dark:bg-container-dark bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-primary/20 dark:!bg-navy-800 dark:text-white dark:shadow-none"
  >
    <div
      class="relative flex h-32 w-full outline outline-transparent dark:outline-primary/50 justify-center rounded-md bg-cover"
    >
      <img
        src="/img/bg.jpg"
        class="absolute flex object-cover h-32 w-full justify-center rounded-md"
      />
    </div>
    <div class="mt-6 flex flex-col items-center">
      <h4 class="text-xl mb-2 font-bold text-navy-700 dark:text-white">
        {{ userStore.userInfo?.nickname }}
      </h4>
      <p class="text-base font-normal text-gray-400 text-center">
        {{ hitokoto.hitokoto }}
      </p>
    </div>

    <!-- 渲染用户信息 -->
    <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
      <CardProfileItem
        label="订单数量"
        :value="userStore.userInfo?.orderCount || 0"
      />
      <CardProfileItem  label="用户余额" :value="formatPrice(userStore.money)" />
      <CardProfileItem
        label="注册天数"
        :value="userStore.userInfo?.createDay || 0"
      />
    </div>
  </div>
</template>

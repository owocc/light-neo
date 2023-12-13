<script setup>
const { logoutUser } = useAuth()

// 退出登录
const handlerLogout = () => {
  logoutUser()
  useToast().add({
    title: '退出登录成功',
    description: '正在跳转到首页',
  })
  useRouter().push('/')
}
</script>
<template>
  <div class="flex flex-col gap-4 md:flex-row">
    <CardUserActionItem
      icon="i-carbon-money"
      label="余额充值"
      @click="$router.push('/user/balance')"
    />

    <CardUserActionItem
      icon="i-carbon-logout"
      label="退出登录"
      @click="handlerLogout"
    />
  </div>
</template>

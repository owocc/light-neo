<script setup>
definePageMeta({
  layout: 'account', //切换布局,
})

useSeoMeta({
  title: '星光灯坊 | 注册', // 页面标题
})

const formData = reactive({
  name: '',
  password: '',
  nickname: '',
})
const { registerUser } = useAuth()
const handlerRegister = async (event) => {
  event.preventDefault()

  const res = await registerUser(formData)
  console.log(res)
}
</script>
<template>
  <h1 class="text-2xl font-semibold mb-4">注册</h1>
  <form @submit="handlerRegister">
    <UiInput
      label="昵称"
      placeholder="请输入昵称"
      v-model="formData.nickname"
    />
    <UiInput
      label="用户名"
      placeholder="请输入用户名"
      v-model="formData.name"
    />
    <UiInput
      type="password"
      label="密码"
      placeholder="请输入密码"
      v-model="formData.password"
    />

    <div
      class="mb-6 text-primary-alt text-sm hover:text-primary transition-all"
    >
      <NuxtLink to="/login" class="hover:underline">
        已有账号? 点我去登录
      </NuxtLink>
    </div>

    <!-- 登录按钮 -->
    <UiButton class="w-full hover:shadow-xl" label="注册" />
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'account', //切换布局,
})
useSeoMeta({
  title: '星光灯坊 | 登录', // 页面标题
})

const formData = reactive({
  name: '',
  password: '',
})

const { loginUser } = useAuth() // 导入登录方法
const handlerLogin = async (event) => {
  event.preventDefault() // 阻止表单默认提交
  await loginUser(formData)
  // 登录成功后跳转到首页
  const router = useRouter()
  router.push('/')
}
</script>
<template>
  <h1 class="text-2xl font-semibold mb-4">登录</h1>
  <form @submit="handlerLogin">
    <UiInput v-model="formData.name" label="用户名" />
    <UiInput v-model="formData.password" type="password" label="密码" />

    <div
      class="mb-6 text-primary-alt text-sm hover:text-primary transition-all"
    >
      <NuxtLink to="/register" class="hover:underline">
        还没有账号? 点我去注册
      </NuxtLink>
    </div>

    <!-- 登录按钮 -->
    <UiButton class="w-full hover:shadow-xl" label="登录" />
  </form>
</template>

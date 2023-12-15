<!-- 私人定制表单 -->
<script setup>
const mail = ref('')

// 发送定制请求
const handlerSendCustom = async (event) => {
  event.preventDefault() // 阻止表单默认提交

  const { fetchCreateCustom } = useCustomApi()
  if (mail.value === '') {
    useToast().add({
      title: '请填写邮件地址',
      timeout: 1500,
      color:'red'
    })
    return
  }
  await fetchCreateCustom(mail.value)
  mail.value = ''
  useToast().add({
    title: '你的私人定制已经发送成功',
    timeout: 1500,
    description: '我们的客服人员会尽快与您联系',
  })
}
</script>
<template>
  <form
    class="grid gap-3 md:grid-cols-[1fr,max-content] md:gap-2 md:bg-base-body md:rounded-full p-2"
    @submit="handlerSendCustom"
  >
    <input
      type="email"
      placeholder="请输入您的邮箱"
      class="w-full dark:text-base-title outline-none bg-base-body py-4 px-6 rounded-full"
      v-model="mail"
    />
    <UiButton label="发送定制请求" icon="i-carbon-mail-reply" />
  </form>
</template>

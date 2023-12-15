<script setup>
// 订单信息表单
const formData = reactive({
  name: '',
  phone: '',
  address: '',
  postal: '',
})

const emit = defineEmits(['submit'])
const handlerEmit = (event) => {
  event.preventDefault() // 阻止表单默认提交
  // 判断所有字段不为空
  const { name, address, phone, postal } = formData
  if (name == '' || address == '' || phone == '' || postal == '') {
    useToast().add({
      title: '请检查信息是否填写完整',
      timeout: 1500,
      color: 'red',
    })
    return
  }
  emit('submit', toRaw(formData))
}
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="mx-auto w-full">
      <form @submit="handlerEmit">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <UiInput label="收件人姓名" v-model="formData.name" />
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <UiInput label="联系电话" v-model="formData.phone" />
          </div>
        </div>
        <UiInput label="收货地址" v-model="formData.address" />

        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <UiInput label="邮编" v-model="formData.postal" />
          </div>
        </div>

        <div class="mt-4 flex justify-end">
          <UiButton
            label="确认支付"
            class="w-full md:w-auto"
            icon="i-carbon-chevron-right"
          />
        </div>
      </form>
    </div>
  </div>
</template>

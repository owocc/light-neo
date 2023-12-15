<script setup>
definePageMeta({
  middleware: ['auth'],
})

useSeoMeta({
  title: '星光灯坊 | 支付',
})

// 用户支付事件
const handlerSubmit = async (formData) => {
  const cartStore = useCartStore()
  const { fetchCreateOrder } = useOrderApi()
  try {
    await fetchCreateOrder({
      products: cartStore.carts,
      form: formData,
    })

    //清空购物车
    cartStore.clear()

    useToast().add({
      title: '支付成功,正在为你跳转到我的订单',
      color: 'green',
      timeout: 1500,
    })
    const router = useRouter()
    // 跳转到订单详情
    router.push('/order')
  } catch (e) {}
}
</script>
<template>
  <PageContainer>
    <div
      class="grid md:grid-cols-2 gap-y-12 gap-x-4 bg-container dark:bg-container-dark p-4 rounded-md shadow-md"
    >
      <div class="md:order-1">
        <UiNavbar title="订单信息填写" />
        <FormPayInfo @submit="handlerSubmit" />
      </div>
      <div>
        <UiNavbar title="订单详情" />
        <ClientOnly>
          <CommonOrderList />
        </ClientOnly>
      </div>
    </div>
  </PageContainer>
</template>

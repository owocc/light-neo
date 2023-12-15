<script setup>
useSeoMeta({
  title:"星光灯坊 | 我的购物车"
})
</script>
<template>
  <PageContainer>
    <UiNavbar title="我的购物车" />
    <!-- 一个表格,记录商品的购物车信息,以及修改数量和删除商品 -->
    <ClientOnly>
      <table class="w-full flex flex-col gap-y-4">
        <CartHeader />
        <CartTable />
        <CartFooter />
      </table>
    </ClientOnly>
  </PageContainer>
</template>

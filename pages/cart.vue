<template>
  <PageContainer>
    <UiNavbar title="我的购物车" />
    <!-- 一个表格,记录商品的购物车信息,以及修改数量和删除商品 -->
    <ClientOnly>
      <div class="w-full">
        <CommonCartTable />
      </div>
    </ClientOnly>
  </PageContainer>
</template>

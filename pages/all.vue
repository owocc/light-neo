<script setup>
// 定义页面SEO
useSeoMeta({
  title: '星光灯坊 | 全部',
})

// 搜索参数
const query = reactive({
  name: '',
})

// 获取页面数据
const { data } = await useAsyncData(
  'all',
  () => {
    return $fetch('/api/lamp/list', {
      method: 'GET',
      query: {
        name: query.name,
      },
    })
  },
  { default: () => ({ list: [], total: 0 }), watch: [() => query.name] }
)
</script>
<template>
  <PageContainer>
    <!-- 搜索 -->
    <PageHeader title="全部灯具">
      <div
        class="w-full border p-4 rounded-md bg-white flex-col gap-y-4 dark:bg-base-dark dark:border-orange-900"
      >
        <input
          v-model="query.name"
          class="bg-transparent w-full flex-1 inline-block outline-none"
          placeholder="输入想要搜索的灯具名称吧"
        />
      </div>
    </PageHeader>
    <CommonProductList :products="data.list"/>
    <PageCount :total="data.total" />
  </PageContainer>
</template>

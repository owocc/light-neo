<script setup>
// 定义页面SEO
useSeoMeta({
  title: '星光灯坊 | 全部',
})

// 搜索参数,从路由读取,如果没有则为空
const { name } = useRoute().query
const query = reactive({
  name: name || '',
})

// 监听输入参数,对页面路由进行替换
watch(
  () => query.name,
  () => {
    const router = useRouter()
    router.replace({
      path: '/all',
      query,
    })
  }
)

// 加载商品API
const { fetchProductList } = useProductApi()
// 获取页面数据
const { data } = await useAsyncData(
  'all', // 用于缓存的key
  () =>
    fetchProductList({
      query, //查询条件
    }),
  {
    default: () => ({ list: [], total: 0 }),
    watch: [() => query.name],
  }
)
</script>

<template>
  <PageContainer>
    <!-- 搜索 -->
    <PageHeader title="全部灯具">
      <div
        class="w-full border p-4 rounded-md bg-container flex-col gap-y-4 dark:bg-container-dark dark:border-primary/75"
      >
        <input
          v-model="query.name"
          class="bg-transparent w-full flex-1 inline-block outline-none"
          placeholder="输入想要搜索的灯具名称吧"
        />
      </div>
    </PageHeader>
    <CommonProductList :products="data.list" />
    <PageCount :total="data.total" />
  </PageContainer>
</template>

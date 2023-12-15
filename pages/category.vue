<script setup>
useSeoMeta({
  title: '星光灯坊 | 分类搜索',
})

const route = useRoute()
const { categorys } = route.query

const query = reactive({
  categorys: (categorys && categorys.split(',')) || [],
})

// 加载商品API
const { fetchProductList } = useProductApi()
// 获取页面数据
const { data } = await useAsyncData(
  'category', // 用于缓存的key
  () =>
    fetchProductList({
      query: {
        categorys: query.categorys.join(','),
      }, //查询条件
    }),
  {
    default: () => ({ list: [], total: 0 }),
    watch: [() => query.categorys],
  }
)

// 监听分类变化,对路由进行替换
watch(
  () => query.categorys,
  () => {
    const router = useRouter()
    router.replace({
      path: '/category',
      query: {
        categorys: query.categorys.join(','), // 将数组转换为字符串
      },
    })
  }
)
</script>
<template>
  <PageContainer>
    <PageHeader title="分类搜索">
      <CommonCategorySearch v-model="query.categorys" />
    </PageHeader>
    <CommonProductList :products="data.list" />
    <PageCount :total="data.total" />
  </PageContainer>
</template>

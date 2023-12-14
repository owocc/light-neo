<script setup>
const { fetchCategoryList, categoryTypeMap } = useCategory()

// 获取分类数据
const { data: category } = await fetchCategoryList()
const route = useRoute()

const query = reactive({
  categoryIds: [],
})
</script>
<template>
  <PageContainer>
    <PageHeader title="分类搜索">
      <div
        class="flex flex-col gap-4 border p-4 rounded-md bg-container dark:bg-container-dark dark:border-primary/75"
      >
        <div v-for="item in categoryTypeMap">
          <div class="flex gap-4 flex-col md:flex-row">
            <h3 class="w-24">{{ item.label }}</h3>
            <div class="flex gap-2 flex-wrap flex-1 w-full">
              <UBadge
                :key="item.id"
                :variant="
                  query.categoryIds.includes(item.id) ? 'solid' : 'outline'
                "
                v-for="item in category[item.value]"
                class="cursor-pointer"
                >{{ item.name }}</UBadge
              >
            </div>
          </div>
        </div>
      </div>
    </PageHeader>
    <!-- {{ category  }} -->

    <!-- {{ category[categoryTypeMap[0].value] }} -->
    <!-- {{ route.query }} -->
    <CommonProductList :products="[]" />
    <PageCount :total="10" />
  </PageContainer>
</template>

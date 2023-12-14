export default function () {
  // 使用数组对象对应分类类型关系
  const categoryTypeMap = [
    {
      label: '风格',
      value: 'STYLE',
    },
    {
      label: '灯具类型',
      value: 'TYPE',
    },
  ]

  // 获取分类列表
  const fetchCategoryList = () => {
    return useFetch('/api/category/tree', {
      method: 'get',
    })
  }

  return {
    categoryTypeMap,
    fetchCategoryList,
  }
}

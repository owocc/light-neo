// 商品相关API
export default function () {
  // 获取商品列表
  const fetchProductList = (params) => {
    return $fetch('/api/lamp/list', {
      method: 'GET',
      ...params,
    })
  }
  return {
    fetchProductList,
  }
}

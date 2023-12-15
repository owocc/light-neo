// 商品相关API
export default function () {
  // 获取商品列表
  const fetchProductList = (params) => {
    return $fetch('/api/lamp/list', {
      method: 'GET',
      ...params,
    })
  }

  // 获取商品详情
  const fetchProductDetail = (id) => {
    return useFetch(`/api/lamp/${id}`, {
      method: 'GET',
    })
  }

  return {
    fetchProductList,
    fetchProductDetail,
  }
}

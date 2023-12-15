export default function () {
  const { useApiFetch } = useApi()

  //创建订单
  const fetchCreateOrder = ({ products, form }) => {
    return useApiFetch('/order', {
      method: 'POST',
      body: {
        products,
        form,
      },
    })
  }

  // 获取订单列表
  const fetchOrderList = () => {
    return useApiFetch('/order/list', {
      method: 'GET',
    })
  }

  return {
    fetchCreateOrder,
    fetchOrderList,
  }
}

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

  return {
    fetchCreateOrder,
  }
}

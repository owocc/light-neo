export default function () {
  const { useApiFetch } = useApi()
  // 获取用户信息
  const fetchUserInfo = () => {
    return useApiFetch('/user', {
      method: 'GET',
    })
  }

  // 充值余额
  const fetchRecharge = (money) => {
    return useApiFetch('/user/recharge', {
      method: 'POST',
      body: {
        money,
      },
    })
  }
  return {
    fetchUserInfo,
    fetchRecharge,
  }
}

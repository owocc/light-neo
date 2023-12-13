export default function () {
  const { useApiFetch } = useApi()
  // 获取用户信息
  const fetchUserInfo = () => {
    return useApiFetch('/user', {
      method: 'GET',
    })
  }

  return {
    fetchUserInfo,
  }
}

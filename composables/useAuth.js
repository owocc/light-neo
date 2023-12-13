// 用户认证,注册,登录,登出等相关操作
export default function () {
  const { useApiFetch } = useApi()
  // 注册用户
  const registerUser = async (data) => {
    return await useApiFetch('/register', {
      body: data,
      method: 'POST',
    })
  }

  // 用户登录
  const loginUser = async (data) => {
    const res = await useApiFetch('/login', {
      body: data,
      method: 'POST',
    })

    //使用pinia存储用户信息还有token
    if (res.token) {
      const userStore = useUserStore()
      userStore.setToken(res.token)
      userStore.setUserInfo(res.user)
    }
  }

  // 退出登录
  const logoutUser = async () => {
    const { clear } = useUserStore()
    clear()
  }
  return {
    registerUser,
    loginUser,
    logoutUser,
  }
}

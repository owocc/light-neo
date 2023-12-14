export const useUserStore = defineStore('user', {
  persist: true, //开启持久化
  state: () => ({
    userInfo: null,
    token: null,
  }),

  getters: {
    //判断是否登录,这里只是简单判断token是否存在
    isLogin: (state) => {
      return state.token != null && state.userInfo != null
    },
    money: (state) => {
      return state.userInfo?.money || '0'
    },
  },
  actions: {
    //设置用户信息
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    //设置token
    setToken(token) {
      this.token = token
    },
    clear() {
      this.userInfo = null
      this.token = null
    },
  },
})

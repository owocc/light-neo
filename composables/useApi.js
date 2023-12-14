import { ofetch } from 'ofetch'

export default function () {
  // 读取用户仓库,获取token
  const userStore = useUserStore()

  const useApiFetch = ofetch.create({
    baseURL: '/api',
    headers: {
      token: userStore.token,
    },
    // 相应拦截器,自动处理响应的消息
    async onResponse({ response }) {
      if (response.ok && response._data?.msg) {
        useToast().add({
          title: response._data?.msg,
          type: 'success',
          timeout: 1000,
        })
      }
    },

    // 错误拦截器
    async onResponseError({ response, error }) {
      useToast().add({
        title: response._data?.statusMessage,
        type: 'error',
        timeout: 1500,
      })
    },
  })

  return {
    useApiFetch,
  }
}

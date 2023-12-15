// 认证拦截器, 用于拦截需要登录的页面,非全局,需要在路由中配置
export default defineNuxtRouteMiddleware((to, from) => {
  // 判断是否需要拦截
  const { isLogin } = useUserStore()
  if (!isLogin) {
    return navigateTo('/')
  }
})

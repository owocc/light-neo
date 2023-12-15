export default function () {
  const router = useRouter()
  const cartStore = useCartStore() //购物车
  const userStore = useUserStore() //用户信息
  // 跳转到商品详情
  const gotoProductDetail = (id) => {
    router.push({
      path: `/detail/${id}`,
    })
  }

  // 跳转到支付页面
  const gotoPay = () => {
    //判断用户是否登录
    if (!userStore.isLogin) {
      useToast().add({
        title: '请先登录账号再进行支付',
        color: 'red',
      })

      router.push({
        path: '/login',
      })
      return
    }

    //判断购物车是否为空
    if (cartStore.prodcutNum === 0) {
      useToast().add({
        title: '购物车为空，请先添加商品',
        color: 'red',
      })
      return
    }

    router.push({
      path: '/pay',
    })
  }

  return {
    gotoProductDetail,
    gotoPay,
  }
}

import { getOrderListByUser } from '~/server/db/order'

export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'token')

  if (!token) {
    const error = createError({
      status: 400,
      statusMessage: '未登录',
    })
    sendError(event, error)
  }

  // 解析token
  const user = verifyToken(token)

  // 检查用户是否已存在
  if (!user) {
    const error = createError({
      status: 400,
      statusMessage: '该用户不存在',
    })
    sendError(event, error)
  }

  // 获取用户订单
  const orders = await getOrderListByUser(user.id)
  return {
    list: orders,
    total: orders.length,
  }
})

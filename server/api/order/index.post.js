import { createOrder, getOrderTotalPrice } from '~/server/db/order'
import prisma from '~/server/db/prisma'
import { deductUserMoney, findUserById } from '~/server/db/user'

// 订单创建
export default defineEventHandler(async (event) => {
  // 从请求头获取token
  const token = getHeader(event, 'token')

  if (!token) {
    const error = createError({
      status: 400,
      statusText: '未登录',
    })
    return sendError(event, error)
  }

  // 解析token
  const verifyUser = verifyToken(token)

  // 检查用户是否已存在
  if (!verifyUser) {
    const error = createError({
      status: 400,
      statusText: '该用户不存在',
    })
    return sendError(event, error)
  }

  // 从数据库中查询用户信息
  const user = await findUserById(verifyUser.user.id)

  // 读取请求体
  const body = await readBody(event)

  // 判断用户金额是否足够
  const totalPrice = await getOrderTotalPrice(body.products)
  if (user.money < totalPrice) {
    const error = createError({
      status: 400,
      statusMessage: '余额不足',
    })
    return sendError(event, error)
  }

  // 余额扣除
  await deductUserMoney(user, totalPrice)

  // 创建订单
  const order = await createOrder({
    form: body.form,
    products: body.products,
    user,
  })
  return {
    orderId: order.id,
  }
})

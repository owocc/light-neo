import { findUserById, rechargeMoney } from '~/server/db/user'

// 余额充值
export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'token')

  if (!token) {
    const error = createError({
      statusCode: 401,
      statusMessage: '未登录',
    })
    sendError(event, error)
  }

  // 验证 token
  const verify = verifyToken(token)

  // 通过 id 获取用户信息
  const user = await findUserById(verify.user.id)

  const body = await readBody(event)

  await rechargeMoney(user, body.money)

  return {
    msg: '充值成功',
  }
})

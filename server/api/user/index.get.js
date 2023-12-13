import { findUserById } from '~/server/db/user'
import { verifyToken } from '~/server/utils/jwt'

// 获取用户信息
export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'token')

  if (!token) {
    const error = createError({
      statusCode: 401,
      statusText: '未登录',
    })
    sendError(event, error)
  }

  // 验证 token
  const verify = verifyToken(token)

  // 通过 id 获取用户信息
  const user = await findUserById(verify.user.id)

  return {
    ...user,
    password: undefined,
  }
})

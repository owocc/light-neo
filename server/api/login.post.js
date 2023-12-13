import { findUserById, findUserByName } from '../db/user'
import md5 from 'md5'
import { generateToken } from '../utils/jwt'
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, password } = body

  // 根据用户名查找用户
  const user = await findUserByName(name)

  // 检查用户是否已存在
  if (!user) {
    const error = createError({
      status: 400,
      statusText: '该用户不存在',
    })
    sendError(event, error)
  }

  // 判断密码是否正确
  if (user.password !== md5(password)) {
    const error = createError({
      status: 400,
      statusText: '密码错误',
    })
    sendError(event, error)
  }

  // 根据id获取用户信息
  const userInfo = await findUserById(user.id)

  return {
    msg: '登录成功',
    token: generateToken(userInfo),
    user: {
      ...userInfo,
      password: undefined, // 去除密码
    },
  }
})

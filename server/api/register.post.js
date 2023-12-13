import { addUser, findUserByName } from '../db/user'
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, nickname, password } = body

  //检查用户名是否已存在
  const user = await findUserByName(name)

  if (user) {
    const error = createError({
      status: 400,
      statusText: '该用户已存在',
    })
    sendError(event, error)
  }

  //用户不存在的话,就创建用户
  await addUser({ name, nickname, password })

  return {
    msg: '注册成功',
  }
})

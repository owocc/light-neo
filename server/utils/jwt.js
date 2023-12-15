// token 生成 和 验证
import jwt from 'jsonwebtoken'

// 生成 token
export const generateToken = (user) => {
  const { jwtSecret } = useRuntimeConfig()

  // 准备 payload
  const payload = {
    user: {
      id: user.id,
    },
  }

  // 生成 token
  return jwt.sign(payload, jwtSecret)
}

// 验证 token
export const verifyToken = (token) => {
  const { jwtSecret } = useRuntimeConfig()
  // 验证 token
  try {
    return jwt.verify(token, jwtSecret)
  } catch (e) {
    return null
  }
}

import prisma from './prisma'
import md5 from 'md5'
// 添加新用户
export const addUser = (data) => {
  return prisma.user.create({
    data: {
      ...data,
      password: md5(data.password),
    },
  })
}

//通过用户名查找用户
export const findUserByName = (name) => {
  return prisma.user.findUnique({
    where: {
      name,
    },
  })
}

// 通过ID查找用户,并查询出用户的订单信息和注册时间
export const findUserById = async (id) => {
  const [user, orderCount] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id,
      },
    }),
    prisma.order.count({
      where: {
        userId: id,
      },
    }),
  ])

  return {
    ...user,
    orderCount,
    // 计算用户注册时间,从注册到现在的天数,向下取整
    createDay: Math.floor((Date.now() - user.createAt) / 1000 / 60 / 60 / 24),
  }
}

// 扣除用户余额
export const deductUserMoney = (user, money) => {
  return prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      money: user.money - money,
    },
  })
}

// 用户余额充值
export const rechargeMoney = (user, money) => {
  return prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      money: parseInt(user.money) + parseInt(money),
    },
  })
}

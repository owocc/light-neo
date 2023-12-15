import prisma from './prisma'

// 获取订单列表
export const getOrderListByUser = (userId) => {
  return prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      orderItems: {
        include: {
          lamp: true,
        },
      },
    },
  })
}

// 计算总价
export const getOrderTotalPrice = async (products) => {
  const ids = products.map((item) => item.id)

  // 从数据库中查询商品数据
  const orderData = await prisma.lamp.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    select: {
      id: true,
      price: true,
    },
  })

  // 合并两个数据, 计算总价
  products.forEach((item) => {
    orderData.find((product) => product.id === item.id).count = item.count
  })

  return orderData.reduce((total, item) => {
    return total + item.price * item.count
  }, 0)
}

// 创建订单
export const createOrder = async ({ form, products, user }) => {
  // 创建订单数据
  const order = await prisma.order.create({
    data: {
      ...form,
      userId: user.id,
    },
  })

  // 查询商品数据
  const ids = products.map((item) => item.id)

  // 查询商品数据
  const productList = await prisma.lamp.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    select: {
      id: true,
      price: true,
      sales: true,
    },
  })

  //合并两个数据
  products.forEach((item) => {
    productList.find((product) => product.id === item.id).count = item.count
  })

  // 更新销量
  for (let i = 0; i < productList.length; i++) {
    await prisma.lamp.update({
      where: {
        id: productList[i].id,
      },
      data: {
        sales: productList[i].sales + productList[i].count,
      },
    })
  }

  // 创建订单项数据
  await prisma.orderItem.createMany({
    data: [
      ...productList.map((item) => ({
        orderId: order.id,
        lampId: item.id,
        totalPrice: item.price * item.count,
        quantity: item.count,
      })),
    ],
  })

  return order
}

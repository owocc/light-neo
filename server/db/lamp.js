import prisma from './prisma'

// 获取灯具列表
export const getLampList = async (query) => {
  const where = {
    name: {
      contains: query?.name,
    },
  }
  // 查询灯具列表
  const [list] = await Promise.all([
    prisma.lamp.findMany({
      where,
      include: {
        categorys: true,
      },
      take: query?.limit,
    }),
  ])

  return {
    list,
    total: list.length,
  }
}

// 分页查询灯具列表
export const getLampListByPage = async ({ pagination, query }) => {
  const where = {
    name: {
      contains: query?.name,
    },
  }

  const { skip, take } = pagination

  // 查询灯具列表
  const [list, total] = await Promise.all([
    prisma.lamp.findMany({
      where,
      include: {
        categorys: true,
      },
      skip: skip,
      take: take,
    }),
    prisma.lamp.count({
      where,
    }),
  ])

  return {
    list,
    total,
  }
}

// 查询推荐灯具列表
export const getRecommendLampList = async () => {
  const list = await prisma.lamp.findMany({
    where: {
      recommend: true,
    },
    include: {
      categorys: true,
    },
    orderBy: {
      sales: 'desc', // 按销量降序排列
    },
    take: 15, // 取前15条
  })

  return {
    list,
    total: list.length,
  }
}

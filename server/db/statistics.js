//---------- 对数据进行统计 ------------
import prisma from './prisma'

// 获取统计数据
export const getStatisticsData = async () => {
  const [lampCount, sales, customCount] = await Promise.all([
    // 获取商品数量
    prisma.lamp.count(),
    prisma.lamp.findMany({
      where: {
        sales: {
          // 查询销量大于0的数据
          gt: 0,
        },
      },
      select: {
        sales: true,
      },
    }),
    prisma.custom.count(),
  ])

  return {
    lampCount,//灯具数量统计
    // 统计销量
    salesCount: sales.reduce((old, val) => old + val.sales, 0),
    customCount,//定制请求统计
  }
}

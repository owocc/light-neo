import { getStatisticsData } from '~/server/db/statistics'

// 获取统计数据
export default defineEventHandler(async (event) => {
  const { lampCount, salesCount, customCount } = await getStatisticsData()
  const statisticsResult = [
    {
      label: '灯具数量',
      value: lampCount,
      key: 'lampCount',
    },
    {
      label: '灯具销量',
      value: salesCount,
      key: 'salesCount',
    },
    {
      label: '定制委托',
      value: customCount,
      key: 'customCount',
    },
  ]
  return statisticsResult
})

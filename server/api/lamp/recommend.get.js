import { getRecommendLampList } from '~/server/db/lamp'

// 获取推荐灯具
export default defineEventHandler(async (evnet) => {
  return await getRecommendLampList()
})

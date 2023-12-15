import { getLampList } from '~/server/db/lamp'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await getLampList({
    ...query,
    //判断是否有limit，有则转换为数字，没有则为undefined
    //用于判断是否只需要部分数据
    limit: query.limit ? parseInt(query.limit) : undefined,
    categorys: query.categorys ? query.categorys.split(',') : undefined,
  })
})

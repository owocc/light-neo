import { getCategoryList } from '~/server/db/category'

export default defineEventHandler(async (event) => {
  const res = await getCategoryList()
  return res
})

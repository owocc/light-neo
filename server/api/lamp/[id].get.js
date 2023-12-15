import { getLampDetail } from '~/server/db/lamp'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return await getLampDetail(parseInt(id))
})

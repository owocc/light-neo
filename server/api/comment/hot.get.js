import { getCommentHotList } from '~/server/db/comment'

export default defineEventHandler(async (evnet) => {
  return await getCommentHotList()
})

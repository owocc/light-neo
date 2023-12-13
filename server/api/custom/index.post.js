import { addCustom } from '~/server/db/custom'

export default defineEventHandler(async (evnet) => {
  const { mail } = await readBody(evnet)
  return await addCustom(mail)
})

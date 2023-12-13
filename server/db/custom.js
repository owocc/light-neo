import prisma from './prisma'

// 添加定制需求,记录用户邮箱
export const addCustom = (mail) => {
  return prisma.custom.create({
    data: {
      mail,
    },
  })
}

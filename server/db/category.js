import prisma from './prisma'
// 引入数据库中定义的枚举CategoryType
import { CategoryType } from '@prisma/client'

export const getCategoryList = async () => {
  const res = await prisma.category.findMany()

  return treeHelper(res, {
    key: 'type',
    enumType: CategoryType,
  })
}

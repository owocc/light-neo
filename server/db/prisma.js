import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()
// 暴露 prisma 客户端, 以便在其他文件中使用来进行数据库操作
export default prisma

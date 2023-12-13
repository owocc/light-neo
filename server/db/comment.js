import prisma from './prisma'

// 评论Service

// 获取四条最热门的评论
export const getCommentHotList = async () => {
  return await prisma.comment.findMany({
    where: {
      like: {
        gte: 1000,//大于等于1000点赞的评论
      },
    },
    orderBy: {
      like: 'desc',
    },
    take: 4,
  })
}

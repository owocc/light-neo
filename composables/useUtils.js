export default function () {
  //限制最大文本长度
  const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + '...'
    } else {
      return text
    }
  }

  // 将价格格式化为带有小数点的价格
  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2)
  }
  return {
    limitText,
    formatPrice,
  }
}

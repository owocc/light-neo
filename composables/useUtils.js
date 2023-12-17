export default function () {
  //限制最大文本长度
  const limitText = (text, limit) => {
    if(!text){
      return ''
    }
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

  // 格式化时间
  const formatTime = (time) => {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  return {
    limitText,
    formatPrice,
    formatTime,
  }
}

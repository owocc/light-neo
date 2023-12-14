export default function (data, { key, enumType }) {
  // enumType 为一个对象，包含了枚举的值,比如 {"STYLE":"STYLE","TYPE":"TYPE"}
  // key 为data中的一个属性,存储了枚举的值
  // data为数据库中查询出来的数据
  // 这颗树就只有两层,第一层为枚举的值,第二层为枚举值对应的数据
  const tree = {}
  // enumType 是对象,使用Object.keys()方法可以获取对象的所有属性名
  // 接着遍历 enumType 对象,为 tree 对象添加属性,属性名为枚举的值,属性值为一个空数组
  Object.keys(enumType).forEach((key) => {
    tree[enumType[key]] = []
  })

  // data为数据库中查询出来的数据,遍历data,将data中的数据按照key的值存储到tree中
  data.forEach((item) => {
    tree[item[key]].push(item)
  })

  return tree
}

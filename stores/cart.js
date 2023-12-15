export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: [],
  }),
  persist: true,
  getters: {
    // 商品总计金额
    total() {
      return this.carts.reduce((acc, cur) => acc + cur.price * cur.count, 0)
    },
    // 商品数量
    prodcutNum() {
      return this.carts.length
    },
  },

  actions: {
    // 将商品添加到购物车
    add(product) {
      const index = this.carts.findIndex((cart) => cart.id === product.id)
      if (index === -1) {
        this.carts.push({
          name: product.name,
          desc: product.desc,
          id: product.id,
          price: product.price,
          image: product.headerImage || '',
          count: 1,
        })
      } else {
        this.carts[index].count++
      }
    },
    remove(id) {
      const index = this.carts.findIndex((cart) => cart.id === id)
      if (index !== -1) {
        this.carts.splice(index, 1)
      }
    },
    clear() {
      this.carts = []
    },
  },
})

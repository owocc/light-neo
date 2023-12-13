export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: [],
  }),
  persist: true,
  getters: {
    total() {
      return this.carts.reduce((acc, cur) => acc + cur.price * cur.count, 0)
    },
    num() {
      return this.carts.length
    },
  },

  actions: {
    add(item) {
      const index = this.carts.findIndex((cart) => cart.id === item.id)
      if (index === -1) {
        this.carts.push({
          name: item.name,
          description: item.description,
          id: item.id,
          price: item.price,
          image: item.images[0].url || '',
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

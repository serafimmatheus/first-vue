import { createStore } from 'vuex'



export default createStore({
  state: {
    user: {
      name: 'Matheus Serafim',
      // avatar: 'https://avatars.githubusercontent.com/u/62813813?v=4',
      avatar: 'https://github.com/serafimmatheus.png',
      email: 'matheus18serafim@gmail.com',
      age: 28,
      state: 'PR',
      country: 'Weissopolis',
      city: 'Pinhais',
      address: 'Rua das Flores, 123',
      postalCode: '83324-123',
      phone: '(41) 9 9999-9999',
    },
    cart: [],
    products: []    
  },
  getters: {
    total(state) {
      return state.cart.reduce((acc, product) => acc + product.price, 0)
    }
  },
  mutations: {
    updateUser(state, user) {
      state.user.name = user.name
      state.user.email = user.email
    },

    addProductToCart(state, product) {
      const productInCart = state.cart.find(item => item.id === product.id)

      if (productInCart) {
        productInCart.quantity++
        return 
      }

      state.cart.push(product)
    },

    removeProductFromCart(state, product) {
      const productIndex = state.cart.findIndex(item => item.id === product.id)

      if (productIndex >= 0) {
        state.cart.splice(productIndex, 1)
      }
    },

    getProducts(state, products) {
      console.log(products)
      state.products.push(products)
     
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        commit('getProducts', data)

      } catch (error) {
        console.error(error)
      }
    },
  },
  modules: {
  }
})

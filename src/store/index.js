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
    }
  },
  getters: {
  },
  mutations: {
    updateUser(state, user) {
      state.user.name = user.name
      state.user.email = user.email
    }
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {
  },

  //Functions that affects the state
  mutations: {
  },

  //Functions that you call throughout your application that calls mutations
  actions: {
  },

  modules: {
    User: UserModule
  }
})

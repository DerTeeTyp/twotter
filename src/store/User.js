export const UserModule = {
    namespaced: true,

    state: {
        user: null
      },
    
      //Functions that affects the state
      mutations: {
        SET_USER(state, user) {
          state.user = user;
        }
      },
    
      //Functions that you call throughout your application that calls mutations
      actions: {
        setUser({ commit }, user) {
          commit('SET_USER', user);
        }
      }
}
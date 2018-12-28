import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {

  },
  getters: {

  },
  mutations: {
    goBack(): any {
      window.history.go(-1)
    },
    goHome() {

    }
  },
  actions: {

  }
})

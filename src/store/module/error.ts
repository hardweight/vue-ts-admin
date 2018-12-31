//import router from '@/router'
export default {
  namespaced: true,
  strict: process.env.NODE_ENV === 'development',
  state: {

  },
  getters: {

  },
  mutations: {
    
  },
  actions: {
    goBack(): any {
      window.history.go(-1)
    },
    goHome(state: any, r: any) {
      r.push('/')
    }
  }
}

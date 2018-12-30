const mutations = {
  setUserToken(state: any, token: any) {
    localStorage.setItem('hasLogin', token.hasLogin)
    localStorage.setItem('access', token.access)
  },
  handleChangeTheme(state: any, theme: any) {
    state.theme = theme
    localStorage.setItem('theme', theme)
    window.history.go(0)
  }
}
export default mutations
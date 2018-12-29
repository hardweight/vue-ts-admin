const mutations = {
  handleChangeTheme(state: any, theme: any) {
    state.theme = theme
    localStorage.setItem('theme', theme)
    window.history.go(0)
  }
}
export default mutations
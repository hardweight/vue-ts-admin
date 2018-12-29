import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';

Vue.config.productionTip = false;

Vue.use(iView)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

//不要问我为什么这个逻辑写在实例化后面(微笑/微笑)
if(store.state.theme === 'dark') {
  require('@/theme/dark.less')
}else if(store.state.theme === 'light') {
  require('@/theme/light.less')
}

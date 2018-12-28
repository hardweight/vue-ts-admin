import Vue from 'vue';
import Router from 'vue-router';
import routes from './router'; 
import store from '@/store'
import iView from 'iview';
import { authorityControl } from './../lib/util';

Vue.use(Router);

const router: any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

let HAS_LOGIN: boolean = true;
const LOGIN_PAGE_NAME = 'login';
const HAS_NO_ACCESS = 'error_401';
const MAIN_PAGE = 'home';
//实现登陆鉴权

router.beforeEach((to: any, from: any, next: any) => {
  iView.LoadingBar.start()
	if(to.name !== 'login') {
		if(HAS_LOGIN) next()
		else next({ name: 'login' })
	} else {
		if(HAS_LOGIN) next({ name: 'home' })
		else next()
	}
})

router.afterEach((to: any, from: any) => {
  //去掉等待跳转的操作
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router

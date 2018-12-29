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


const LOGIN_PAGE_NAME = 'login';
const HAS_NO_ACCESS = 'error_401';
const MAIN_PAGE = 'home';
let token: boolean = false;
let userAccess: string = 'admin';
//实现登陆鉴权

router.beforeEach((to: any, from: any, next: any) => {
  iView.LoadingBar.start()
	if (!token && to.name !== LOGIN_PAGE_NAME) {
    next({
      name: LOGIN_PAGE_NAME
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    next()
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    next({
      name: MAIN_PAGE
    })
  } else {
  	if(authorityControl(userAccess, to.meta.access)) {
  		next()
  	} else {
  		next({
	      replace: true,
        name: HAS_NO_ACCESS
      })
    }
  }
})

router.afterEach((to: any, from: any) => {
  //去掉等待跳转的操作
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router

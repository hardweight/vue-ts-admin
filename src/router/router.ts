const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import ('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      hideInMenu: true,
      access: ['admin']
    },
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      access: ['admin']
    },
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/views/error_page/error_401.vue')
  }, 
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/views/error_page/error_500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/views/error_page/error_404.vue')
  }
]

export default routes

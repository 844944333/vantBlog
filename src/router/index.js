import Vue from 'vue'
import VueRouter from 'vue-router'
/* mobile */
// import MobileHome from '../views/mobile/Home.vue'

/* pc */
// import PcHome from '../views/pc/PcHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {
      default: () => import('@/views/mobile/MobileHome'),
      pc: () => import('@/views/pc/PcHome'),
      mobile: () => import('@/views/mobile/MobileHome')
    }
  },
  {
    path: '/about',
    components: {
      default: () => import('@/views/mobile/MobileAbout'),
      pc: () => import('@/views/pc/PcAbout'),
      mobile: () => import('@/views/mobile/MobileAbout')
    }
  }
]
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

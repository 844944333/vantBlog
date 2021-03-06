import Vue from 'vue'
import VueRouter from 'vue-router'
/* mobile */
// import MobileHome from '../views/mobile/Home.vue'

/* pc */
// import PcHome from '../views/pc/PcHome.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/'
  // },
  {
    path: '/',
    components: {
      default: () => import('@/views/mobile/MobileHome'),
      mobile: () => import('@/views/mobile/MobileHome'),
      pc: () => import('@/views/pc/PcHome')
    }
  },
  {
    path: '/study',
    components: {
      default: () => import('@/views/mobile/MobileStudy'),
      mobile: () => import('@/views/mobile/MobileStudy'),
      pc: () => import('@/views/pc/PcStudy')
    }
  },
  {
    path: '/category',
    components: {
      default: () => import('@/views/mobile/MobileCategory'),
      mobile: () => import('@/views/mobile/MobileCategory'),
      pc: () => import('@/views/pc/PcCategory')
    }
  },
  {
    path: '/about',
    components: {
      default: () => import('@/views/mobile/MobileAbout'),
      mobile: () => import('@/views/mobile/MobileAbout'),
      pc: () => import('@/views/pc/PcAbout')
    }
  },
  {
    path: '/life',
    components: {
      default: () => import('@/views/mobile/MobileLife'),
      mobile: () => import('@/views/mobile/MobileLife'),
      pc: () => import('@/views/pc/PcLife')
    }
  },
  {
    path: '/technical',
    components: {
      default: () => import('@/views/mobile/MobileTechnical'),
      mobile: () => import('@/views/mobile/MobileTechnical'),
      pc: () => import('@/views/pc/PcTechnical')
    }
  }
]
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active"
})

export default router

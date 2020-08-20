import Vue from 'vue'
import VueRouter from 'vue-router'
import Phishing1 from '@/components/Phishing1'
import Phishing2 from '@/components/Phishing2'
import Phishing3 from '@/components/Phishing3'
import Mail03 from '@/components/Campaign/Mail03'

import Home from '@/views/Home'
import About from '@/views/About'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/c',
    name:'Campaign',
    component: () => import(/* webpackChunkName: "about" */ '../views/Campaign.vue'),
    children:[
      {
        path:'3',
        name: 'mail03',
        component: Mail03,
      },
      {
        path:'1',
        name: 'mail01',
        component: () => import(/* webpackChunkName: "mail01" */ '../components/Campaign/Mail01.vue'),

      },
    ]
  },
  {
    path: '/test',
    name: 'About',
    component: About,
    
    children:[
      {
        path:'/test/1',
        name: 'Phishing1',
        component: Phishing1,
      },
      {
        path:'/test/2',
        name: 'Phishing2',
        component: Phishing2
      },
      {
        path:'/test/3',
        name: 'Phishing3',
        component: Phishing3
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
 
  routes
})

export default router

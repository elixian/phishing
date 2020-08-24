import Vue from 'vue'
import VueRouter from 'vue-router'
import Phishing1 from '@/components/Phishing1'
import Phishing2 from '@/components/Phishing2'
import Phishing3 from '@/components/Phishing3'


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
        path:'1',
        name: 'mail01',
        component: () => import(/* webpackChunkName: "mail01" */ '../components/Campaign/Mail01.vue'),

      },
      {
        path:'2',
        name: 'mail02',
        component: () => import(/* webpackChunkName: "mail02" */ '../components/Campaign/Mail02.vue'),

      },
      {
        path:'3',
        name: 'mail03',
        component: () => import(/* webpackChunkName: "mail03" */ '../components/Campaign/Mail03.vue'),

      },
      {
        path:'4',
        name: 'mail04',
        component: () => import(/* webpackChunkName: "mail04" */ '../components/Campaign/Mail04.vue'),

      },
      {
        path:'5',
        name: 'mail05',
        component: () => import(/* webpackChunkName: "mail05" */ '../components/Campaign/Mail05.vue'),

      },
      {
        path:'6',
        name: 'mail06',
        component: () => import(/* webpackChunkName: "mail06" */ '../components/Campaign/Mail06.vue'),

      },
      {
        path:'7',
        name: 'mail07',
        component: () => import(/* webpackChunkName: "mail07" */ '../components/Campaign/Mail07.vue'),

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

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
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
    },
  {
    path: '/d',
    name: 'Home',
    component: Home
  },
  {
    path: '/camp',
    name:'Campaign',
    component: () => import(/* webpackChunkName: "Campaign" */ '../views/Campaign.vue'),
    beforeEnter:(to,from,next)=>{
      if(to.name === 'Campaign'){
        next({name: 'NotFound'});
      }
      next();
    },
    children:[
      {
        path:'AlP1',
        name: 'mail01',
        component: () => import(/* webpackChunkName: "mail01" */ '../components/Campaign/Mail01.vue'),

      },
      {
        path:'2Pak',
        name: 'mail02',
        component: () => import(/* webpackChunkName: "mail02" */ '../components/Campaign/Mail02.vue'),

      },
      {
        path:'3ggS',
        name: 'mail03',
        component: () => import(/* webpackChunkName: "mail03" */ '../components/Campaign/Mail03.vue'),

      },
      {
        path:'R4ton',
        name: 'mail04',
        component: () => import(/* webpackChunkName: "mail04" */ '../components/Campaign/Mail04.vue'),

      },
      {
        path:'Wsu5Q',
        name: 'mail05',
        component: () => import(/* webpackChunkName: "mail05" */ '../components/Campaign/Mail05.vue'),

      },
      {
        path:'w6ki',
        name: 'mail06',
        component: () => import(/* webpackChunkName: "mail06" */ '../components/Campaign/Mail06.vue'),

      },
      {
        path:'7Sins',
        name: 'mail07',
        component: () => import(/* webpackChunkName: "mail07" */ '../components/Campaign/Mail07.vue'),

      },
      {
        path:'8==8',
        name: 'mail08',
        component: () => import(/* webpackChunkName: "mail08" */ '../components/Campaign/Mail08.vue'),
      },
      {
        path:'9below0',
        name: 'mail09',
        component: () => import(/* webpackChunkName: "mail09" */ '../components/Campaign/Mail09.vue'),
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

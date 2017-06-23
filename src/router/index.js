import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from '@/store'
import What from '@/components/What'
import Compare from '@/components/Compare'
import Angular from '@/components/Angular'
import React from '@/components/React'
import Dive from '@/components/Dive'
import StoreState from '@/components/StoreState'
import VModel from '@/components/VModel'
import Test from '@/components/Test'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index'
    },
    {
      path: '/what',
      name: 'what',
      component: What
    },
    {
      path: '/compare',
      name: 'compare',
      component: Compare
    },
    {
      path: '/compare/angular',
      name: 'angular',
      component: Angular
    },
    {
      path: '/compare/react',
      name: 'react',
      component: React
    },
    {
      path: '/dive',
      name: 'dive',
      component: Dive
    },
    {
      path: '/store-state',
      name: 'store-state',
      component: StoreState
    },
    {
      path: '/store-state/vmodel',
      name: 'vmodel',
      component: VModel
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'index') {
    store.dispatch('setMenuStateInitial')
  } else {
    store.dispatch('setMenuStateUnobtrusive')
  }
  next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import What from '@/components/What'
import Compare from '@/components/Compare'
import Angular from '@/components/Angular'
import React from '@/components/React'
import Dive from '@/components/Dive'
import Store from '@/components/Store'
import Test from '@/components/Test'
import Explore from '@/components/Explore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
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
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    }
  ]
})

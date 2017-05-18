import Vue from 'vue'
import Router from 'vue-router'
import What from '@/components/What'
import Compare from '@/components/Compare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/what',
      name: 'What',
      component: What
    },
    {
      path: '/compare',
      name: 'Compare',
      component: Compare
    }
  ]
})

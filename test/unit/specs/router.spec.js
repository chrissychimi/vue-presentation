import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from '@/store'
import router from '@/router'

Vue.use(Vuex)
Vue.use(VueRouter)

describe('beforeEach', () => {
  var vm
  beforeEach(() => {
    vm = new Vue({
      el: document.createElement('div'),
      store: store,
      router: router,
      template: '<router-view></router-view>'
    })
  })

  describe('when navigating somewhere else', () => {
    var to = {name: 'test'}
    beforeEach(() => {
      vm.$router.push(to)
    })

    it('should set menu to unobtrusive state', () => {
      expect(vm.$store.state.menuState).to.eql({
        iconMinimized: true,
        navShown: false})
    })
  })

  describe('when navigating to index', () => {
    var to = {name: 'index'}
    beforeEach(() => {
      vm.$router.push(to)
    })

    it('should set menu to the initial state', () => {
      expect(vm.$store.state.menuState).to.eql({
        iconMinimized: false,
        navShown: false})
    })
  })
})

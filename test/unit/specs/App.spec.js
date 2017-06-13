import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '@/App'
import store from '@/store'
import router from '@/router'

Vue.use(Vuex)
Vue.use(VueRouter)

describe('App.vue unmounted', () => {
  it('should have a data function', () => {
    expect(App.data).to.be.a('function')
  })
})
describe('App.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...App })
    vm = new Constructor({store, router}).$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should have a populated topics array', () => {
    expect(vm.$data.topics.length).to.be.above(0)
  })
  it('should have a title for every topic', () => {
    let arr = vm.$data.topics
    expect(arr.filter((el) => {
      return el.hasOwnProperty('title') && el.title.length > 0
    }).length).to.equal(arr.length)
  })
  it.skip('should reset showMenu and shrinkVue on animateMenu', done => {
    let sShow = vm.$data.showMenu

    vm.animateMenu()

    Vue.nextTick(() => {
      expect(vm.$data.showMenu).to.equal(!sShow)
      expect(vm.$data.shrinkVue).to.equal(!sShow)
      done()
    })
  })
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import StoreState from '@/components/StoreState'
import router from '@/router'

Vue.use(VueRouter)

describe('StoreState.vue unmounted', () => {
  it('should have a data function', () => {
    expect(StoreState.data).to.be.a('function')
  })
})
describe('StoreState.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...StoreState })
    vm = new Constructor({router}).$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should have a populated prosandcons array', () => {
    expect(vm.$data.prosandcons.length).to.be.above(0)
  })
})

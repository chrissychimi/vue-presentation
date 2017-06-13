import Vue from 'vue'
import StoreState from '@/components/StoreState'

describe('StoreState.vue unmounted', () => {
  it('should have a data function', () => {
    expect(StoreState.data).to.be.a('function')
  })
})
describe('StoreState.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...StoreState })
    vm = new Constructor().$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should have a populated listsToDisplay array', () => {
  	let num = vm.$data.listsToDisplay.length
    expect(num).to.be.above(0)
  })
})

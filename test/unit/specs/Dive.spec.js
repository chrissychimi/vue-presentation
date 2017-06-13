import Vue from 'vue'
import Dive from '@/components/Dive'

describe('Dive.vue unmounted', () => {
  it('should have a data function', () => {
    expect(Dive.data).to.be.a('function')
  })
})
describe('Dive.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...Dive })
    vm = new Constructor().$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should have access to getRandomNumberMinMax', () => {
    expect(vm.getRandomNumberMinMax).to.be.a('function')
  })
  it('should change borderColor value on update', done => {
    let color = vm.$data.borderColor

    vm.$data.orderNum++

    Vue.nextTick(() => {
      expect(vm.$data.borderColor).not.to.equal(color)
      done()
    })
  })
  it('should add to array on showNext', () => {
    let arrLen = vm.vueConstructing.length

    vm.showNext()

    expect(vm.vueConstructing.length).to.be.above(arrLen)
  })
})

import Vue from 'vue'
import Bubble from '@/components/Bubble'

describe('Bubble.vue unmounted', () => {
  it('should have a data function', () => {
    expect(Bubble.data).to.be.a('function')
  })
})
describe('Bubble.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...Bubble })
    vm = new Constructor().$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should have some text', () => {
    const Constructor = Vue.extend({ ...Bubble })
    const vm = new Constructor().$mount()

    expect(vm.$el.textContent).not.to.equal('')
  })
  it('should have access to getRandomNumberMinMax', () => {
    expect(vm.getRandomNumberMinMax).to.be.a('function')
  })
  it('should determine bigness from showBig value', () => {
    const Constructor = Vue.extend({ ...Bubble })
    const vm = new Constructor().$mount()

    let bigness = vm.$data.showBig

    expect(vm.classObject.big).to.equal(bigness)
  })
  it('should emit remove on dismiss', () => {
    var spy = sinon.spy(vm, '$emit')

    vm.dismiss()

    expect(spy).to.have.been.calledWith('remove')
  })
})

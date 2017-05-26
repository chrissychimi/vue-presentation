import Vue from 'vue'
import Bubble from '@/components/Bubble'

describe('Bubble.vue', () => {
  it('should have a data function', () => {
    expect(Bubble.data).to.be.a('function')
  })
  it('should have some text', () => {
    const Constructor = Vue.extend({ ...Bubble })
    const vm = new Constructor().$mount()

    expect(vm.$el.textContent).not.to.equal('')
  })
  it('should determine bigness from showBig value', () => {
    const Constructor = Vue.extend({ ...Bubble })
    const vm = new Constructor().$mount()

    let bigness = vm.$data.showBig

    expect(vm.classObject.big).to.equal(bigness)
  })
})

import Vue from 'vue'
import ExampleDirective from '@/components/ExampleDirective'

describe('ExampleDirective.vue unmounted', () => {
  it('should have a data function', () => {
    expect(ExampleDirective.data).to.be.a('function')
  })
})
describe('ExampleDirective.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...ExampleDirective })
    vm = new Constructor().$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should make the element transparent initially', () => {
    expect(vm.$el.getElementsByTagName('span')[0].style.color).to.equal('rgba(255, 0, 0, 0)')
  })
  it('should make the element darker along with the value of redness', done => {
    vm.$data.redness = 100
    Vue.nextTick(() => {
      expect(vm.$el.getElementsByTagName('span')[0].style.color).to.equal('rgb(255, 0, 0)')
      done()
    })
  })
})

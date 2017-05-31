import Vue from 'vue'
import ExampleFilter from '@/components/ExampleFilter'

describe('ExampleFilter.vue unmounted', () => {
  it('should have a data function', () => {
    expect(ExampleFilter.data).to.be.a('function')
  })
})
describe('ExampleFilter.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...ExampleFilter })
    vm = new Constructor().$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should return an alternately capitalized string on filter one', () => {
    expect(vm.$options.filters.one('the monkey')).to.equal('tHe mOnKeY')
  })
  it.skip('should return a wingdinged string on filter two', () => {
    expect(vm.$options.filters.two('the monkey')).to.equal('❔❈❅✀❍❏❎❋❅❙')
  })
  it('should return a reversed string on filter three', () => {
    expect(vm.$options.filters.three('the monkey')).to.equal('yeknom eht')
  })
})

import Vue from 'vue'
import What from '@/components/What'

describe('What.vue', () => {
  it('should have a data function', () => {
    expect(What.data).to.be.a('function')
  })
  it('should have a bubble for every item in points array', () => {
    const Constructor = Vue.extend({ ...What })
    const vm = new Constructor().$mount()

    let num = vm.$data.points.length

    expect(vm.$el.children.length).to.equal(num)
  })
})

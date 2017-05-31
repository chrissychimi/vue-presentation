import Vue from 'vue'
import What from '@/components/What'

describe('What.vue unmounted', () => {
  it('should have a data function', () => {
    expect(What.data).to.be.a('function')
  })
})
describe('What.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...What })
    vm = new Constructor().$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should have a populated points array', () => {
    expect(vm.$data.points.length).to.be.above(0)
  })
  it('should have a bubble for every item in points array', () => {
    let num = vm.$data.points.length

    expect(vm.$el.children.length).to.equal(num + 1)
  })
  it('should have a title for every point', () => {
    let arr = vm.$data.points
    expect(arr.filter((el) => {
      return el.hasOwnProperty('title') && el.title.length > 0
    }).length).to.equal(arr.length)
  })
  it('should have access to getRandomNumberMinMax', () => {
    expect(vm.getRandomNumberMinMax).to.be.a('function')
  })
  it('should set random value on creation', () => {
    expect(vm.$data.random).not.to.be.null
  })
  it('should change random value on shuffle', () => {
    let rand = vm.$data.random

    vm.shuffle()

    expect(vm.$data.random).not.to.equal(rand)
  })
  it('should change points order on shuffle', () => {
    let arr = vm.$data.points.slice()

    vm.shuffle()

    expect(vm.$data.points).not.to.equal(arr)
  })
  it('should remove a point from the list, given a valid id', () => {
    let ids = vm.$data.points.map((val) => {
      return val.id
    })

    let len = vm.$data.points.length
    vm.pointRemove(ids[0])
    expect(vm.$data.points.length).to.equal(len - 1)
  })
  it('should not remove a point from the list, given an invalid id', () => {
    let len = vm.$data.points.length
    vm.pointRemove(1047)
    expect(vm.$data.points.length).to.equal(len)
  })
})

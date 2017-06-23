import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/components/List'
import router from '@/router'

Vue.use(VueRouter)

describe.skip('List.vue unmounted', () => {
  it('should have a data function', () => {
    expect(List.data).to.be.a('function')
  })
})
describe.skip('List.vue mounted', () => {
  var vm
  beforeEach(() => {
    const Constructor = Vue.extend({ ...List })
    vm = new Constructor({router}).$mount()
  })
  afterEach(() => {
    vm.$destroy
  })
  it('should increment the number of shown tips on addTip', () => {
    let mockTips = [
      {text: 'Tip 1', show: true},
      {text: 'Tip 2', show: false},
      {text: 'Tip 3', show: false}
    ]

    vm.addTip(mockTips)

    let num = mockTips.filter((tip) => {
      return tip.show
    }).length

    expect(num).to.equal(2)
  })
  it('should not change the number of shown tips in a full array on addTip', () => {
    let mockTips = [
      {text: 'Tip 1', show: true},
      {text: 'Tip 2', show: true},
      {text: 'Tip 3', show: true}
    ]

    vm.addTip(mockTips)

    let num = mockTips.filter((tip) => {
      return tip.show
    }).length

    expect(num).to.equal(3)
  })
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import router from '@/router'

Vue.use(VueRouter)

describe.skip('beforeEach', () => {
  var commit, next

  beforeEach(() => {
    commit = sinon.stub(store, 'commit')
    next = sinon.stub()
  })

  afterEach(() => {
    commit.restore()
  })

  describe('when navigating to index', () => {
    var to = {name: 'index'}

    beforeEach(() => {
      router.push(to)
    })

    it('should set menu to the initial state', () => {
      expect(commit).to.have.been.calledWithExactly('setMenuStateInitial')
    })

    it('should call next', () => {
      expect(next).to.have.been.calledWithExactly({})
    })
  })

  describe('when navigating somewhere else', () => {
    var to = {name: 'test'}
    beforeEach(() => {
      router.push(to)
    })

    it('should set menu to unobtrusive state', () => {
      expect(commit).to.have.been.calledWithExactly('setMenuStateUnobtrusive')
    })

    it('should call next', () => {
      expect(next).to.have.been.calledWithExactly()
    })
  })
})

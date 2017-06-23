import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, actions } from '@/store'

const { setSapiens } = mutations
const {
        setMenuStateInitial,
        setMenuStateNavigate,
        setMenuStateUnobtrusive
      } = actions

Vue.use(Vuex)

describe('mutations', () => {
  it('setSapiens sets the sapiens array state', () => {
    var mockState = {
      sapiens: ['Moe']
    }
    setSapiens(mockState, {sapiens: ['Moe', 'Larry']})
    expect(mockState.sapiens).to.eql(['Moe', 'Larry'])
  })
})
describe.skip('actions', () => {
  it('setMenuStateInitial sets correct values', () => {
    const mockState = {
      menuState: {
        iconMinimized: false,
        navShown: true
      }
    }
    setMenuStateInitial(mockState)
    expect(mockState.menuState.iconMinimized).to.be.false
    expect(mockState.menuState.navShown).to.be.false
  })
  it('setMenuStateNavigate sets correct values', () => {
    const mockState = {
      menuState: {
        iconMinimized: false,
        navShown: true
      }
    }
    setMenuStateNavigate(mockState)
    expect(mockState.menuState.iconMinimized).to.be.false
    expect(mockState.menuState.navShown).to.be.true
  })
  it('setMenuStateUnobtrusive sets correct values', () => {
    const mockState = {
      menuState: {
        iconMinimized: false,
        navShown: true
      }
    }
    setMenuStateUnobtrusive(mockState)
    expect(mockState.menuState.iconMinimized).to.be.true
    expect(mockState.menuState.navShown).to.be.false
  })
})

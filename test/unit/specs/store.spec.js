import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from '@/store'

const { setSapiens,
        setMenuStateInitial,
        setMenuStateNavigate,
        setMenuStateUnobtrusive
      } = mutations

Vue.use(Vuex)

describe('mutations', () => {
  it('setSapiens sets the sapiens array state', () => {
    const mockState = {
      sapiens: ['Moe']
    }
    setSapiens(mockState, {sapiens: ['Moe', 'Larry']})
    expect(mockState.sapiens).to.eql(['Moe', 'Larry'])
  })
  it('setMenuStateInitial sets correct values', () => {
    const mockState = {
      menuState: {
        iconShrunk: true,
        iconMinimized: false,
        navShown: true
      }
    }
    setMenuStateInitial(mockState)
    expect(mockState.menuState.iconShrunk).to.be.false
    expect(mockState.menuState.iconMinimized).to.be.false
    expect(mockState.menuState.navShown).to.be.false
  })
  it('setMenuStateNavigate sets correct values', () => {
    const mockState = {
      menuState: {
        iconShrunk: true,
        iconMinimized: false,
        navShown: true
      }
    }
    setMenuStateNavigate(mockState)
    expect(mockState.menuState.iconShrunk).to.be.true
    expect(mockState.menuState.iconMinimized).to.be.false
    expect(mockState.menuState.navShown).to.be.true
  })
  it('setMenuStateUnobtrusive sets correct values', () => {
    const mockState = {
      menuState: {
        iconShrunk: true,
        iconMinimized: false,
        navShown: true
      }
    }
    setMenuStateUnobtrusive(mockState)
    expect(mockState.menuState.iconShrunk).to.be.true
    expect(mockState.menuState.iconMinimized).to.be.true
    expect(mockState.menuState.navShown).to.be.false
  })
})

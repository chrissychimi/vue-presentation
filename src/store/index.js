import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  sapiens: ['Bug'],
  menuState: {
    iconShrunk: false,
    iconMinimized: false,
    navShown: false
  }
}

export const mutations = {
  setSapiens (state, payload) {
    state.sapiens = payload.sapiens
  },
  setMenuStateInitial (state) {
    state.menuState = {
      iconShrunk: false,
      iconMinimized: false,
      navShown: false
    }
  },
  setMenuStateNavigate (state) {
    state.menuState = {
      iconShrunk: true,
      iconMinimized: false,
      navShown: true
    }
  },
  setMenuStateUnobtrusive (state) {
    state.menuState = {
      iconShrunk: true,
      iconMinimized: true,
      navShown: false
    }
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  mutations
})

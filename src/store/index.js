import Vue from 'vue'
import Vuex from 'vuex'
// import mixinsMethods from '@/mixins/mixins'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  sapiens: ['Bug'],
  menuState: {
    iconMinimized: false,
    navShown: false
  }
}

export const mutations = {
  setSapiens (state, payload) {
    state.sapiens = payload.sapiens
  },
  minimizeIcon (state) {
    state.menuState.iconMinimized = true
  },
  maximizeIcon (state) {
    state.menuState.iconMinimized = false
  },
  showNav (state) {
    state.menuState.navShown = true
  },
  hideNav (state) {
    state.menuState.navShown = false
  }
}

export const actions = {
  setMenuStateInitial ({ commit }) {
    commit('hideNav')
    commit('maximizeIcon')
  },
  setMenuStateNavigate ({ commit }) {
    commit('minimizeIcon')
    commit('showNav')
  },
  setMenuStateUnobtrusive ({ commit }) {
    commit('minimizeIcon')
    commit('hideNav')
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  mutations,
  actions
})

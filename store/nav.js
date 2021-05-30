// States
export const state = () => ({
  toggleSidebar: false,
})

// mutations
export const mutations = {
  OPEN_SIDEBAR(state) {
    state.toggleSidebar = true
  },
  CLOSE_SIDEBAR(state) {
    state.toggleSidebar = false
  },
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
}

// actions
export const actions = {
  openSidebar({ commit }) {
    commit('OPEN_SIDEBAR')
  },
  closeSidebar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
}

// Getters
export const getters = {
  toggleSidebar: (state) => state.toggleSidebar,
}

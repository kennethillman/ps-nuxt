
export const state = () => ({
  activeStep: 1,
  merchants: false,
  order: false,
  showModal: false,
  termsAccepted: false,
  lockBodyScroll: false,
  notify: false,
  token: null,
})

export const mutations = {
  setActiveStep(state, step) {
    state.activeStep = step
  },
  setMerchants(state, res) {
    state.merchants = res
  },
  setOrder(state, res) {
    state.order = res
  },
  setShowModal(state, bol) {
    state.showModal = bol
  },
  setTermsAccepted(state, bol) {
    state.termsAccepted = bol
  },
  setLockBodyScroll(state, bol) {
    state.lockBodyScroll = bol
  },
  setNotify(state, bol) {
    state.notify = bol
  },
  setToken(state, tok) {
    state.token = tok
  }
}

export const actions = {

async nuxtServerInit({ commit }) {

  const psm = await fetch('https://purspotapi-dev.azurewebsites.net/api/shop/merchants')
  .then(response => response.json())

  commit('setMerchants', psm)

},
  setActiveStep(vuexContext, step) {
    vuexContext.commit('setActiveStep', step)
  },
  setShowModal(vuexContext, bol) {
    vuexContext.commit('setShowModal', bol)
  },
  setTermsAccepted(vuexContext, bol) {
    vuexContext.commit('setTermsAccepted', bol)
  },
  setLockBodyScroll(vuexContext, bol) {
    vuexContext.commit('setLockBodyScroll', bol)
  },
  setNotify(vuexContext, bol) {
    vuexContext.commit('setNotify', bol)
  },
  setToken(vuexContext, tok) {
    vuexContext.commit('setToken', tok)
  }
}

export const getters = {
  getActiveStep(state) {
    return state.activeStep
  },
  getMerchants(state) {
    return state.merchants
  },
  getOrder(state) {
    return state.order
  },
  getShowModal(state) {
    return state.showModal
  },
  getTermsAccepted(state) {
    return state.termsAccepted
  },
  getLockBodyScroll(state) {
    return state.lockBodyScroll
  },
  getNotify(state) {
    return state.notify
  },
  getToken(state) {
    return state.token
  }
}





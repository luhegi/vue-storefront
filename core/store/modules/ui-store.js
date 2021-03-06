const state = {
  sidebar: false,
  microcart: false,
  wishlist: false,
  searchpanel: false,
  newsletterPopup: false,
  overlay: false,
  loader: false,
  authElem: 'login',
  checkoutMode: false,
  openMyAccount: false
}

const mutations = {
  setOverlay (state, action) {
    state.overlay = action === true
  },
  setLoader (state, action) {
    state.loader = action === true
  },
  setMicrocart (state, action) {
    state.microcart = action === true
  },
  setSidebar (state, action) {
    state.sidebar = action === true
  },
  setSearchpanel (state, action) {
    state.searchpanel = action === true
  },
  setAuthElem (state, action) {
    state.authElem = action
  },
  setWishlist (state, action) {
    state.wishlist = action === true
  },
  setOpenMyAccount (state, action) {
    state.openMyAccount = action === true
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

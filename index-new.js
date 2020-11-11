// Temp - Mock Api req
import psTempData from '~/static/ps.json';
import psTempMerchantsData from '~/static/ps-merchants.json';


// STATE

export const state = () => ({
  
  visitorEntry: false,      // home, group, merchant, location
  visitorActiveStep: 1,     // 4-5 steps  
  vistorCookie: false,      // -> Bool -> Get from with local storage
  visitorOrder: false, 
  visitorOrderToken: false,

  appDefaults: false,       // Api ( Purspust PS )
  appMode: 'default',       // default, dark, light
  appShowModal: false,      // -> Bool
  appTermsAccepted: false,  // -> Bool (like special terms for buying tickets)
  appLockBodyScroll: false, // -> Bool 
  appNotify: false,         // -> Bool 
  appToken: null,           // -> Bool 

  groupList: false,        // Api -> ?  

  merchantList: false,      // Api
  merchant: false,          // Api

  location: false,          // Api
  locationType: false,      // restaurant, shop, ticket ...
  locationDelivery: false  // Fetch "5" (Hämta), Recive "5" (merchants lämnar eller elevererar, Pay "4" (kvitto) )


})


// MUTATIONS

export const mutations = {
  setVisitorEntry(state, d) {
    state.visitorEntry = d
  },
  setVisitorActiveStep(state, d) {
    state.visitorActiveStep = d
  },
  setVisitorCookie(state, d) {
    state.visitorCookie = d
  },
  setVisitorCookie(state, d) {
    state.visitorCookie = d
  },
  setVisitorOrder(state, d) {
    state.visitorOrder = d
  },
  setVisitorOrderToken(state, d) {
    state.visitorOrderToken = d
  },

  setAppDefaults(state, d) {
    state.appDefaults = d
  },
  setAppMode(state, d) {
    state.appMode = d
  },
  setAppShowModal(state, d) {
    state.appShowModal = d
  },
  setAppTermsAccepted(state, d) {
    state.appTermsAccepted = d
  },
  setAppLockBodyScroll(state, d) {
    state.appLockBodyScroll = d
  },
  setAppNotify(state, d) {
    state.appNotify = d
  },
  setAppToken(state, d) {
    state.appToken = d
  },

  setGroupList(state, d) {
    state.groupList = d
  },

  setMerchantList(state, d) {
    state.merchantList = d
  },
  setMerchant(state, d) {
    state.merchant = d
  },

  setLocation(state, d) {
    state.location = d
  },
  setLocationType(state, d) {
    state.locationType = d
  },
  setLocationDelivery(state, d) {
    state.locationDelivery = d
  }


}


// ACTIONS

export const actions = {

  async nuxtServerInit({ commit }, context) {

    // console.log(context);

    //const psm = await fetch('https://purspotapi-dev.azurewebsites.net/api/shop/merchants')
    //.then(response => response.json())
    //commit('setToken', psm)

    commit('setMerchants', psTempMerchantsData)
    commit('appDefaults', psTempData)

  },

  setVisitorEntry(vuexContext, state) {
    vuexContext.commit('setVisitorEntry', step)
  },
  setVisitorActiveStep(vuexContext, state) {
    vuexContext.commit('setVisitorActiveStep', step)
  },
  setVisitorCookie(vuexContext, state) {
    vuexContext.commit('setVisitorCookie', step)
  },
  setVisitorCookie(vuexContext, state) {
    vuexContext.commit('setVisitorCookie', step)
  },
  setVisitorOrder(vuexContext, state) {
    vuexContext.commit('setVisitorOrder', step)
  },
  setVisitorOrderToken(vuexContext, state) {
    vuexContext.commit('setVisitorOrderToken', step)
  },

  setAppDefaults(vuexContext, state) {
    vuexContext.commit('setAppDefaults', step)
  },
  setAppMode(vuexContext, state) {
    vuexContext.commit('setAppMode', step)
  },
  setAppShowModal(vuexContext, state) {
    vuexContext.commit('setAppShowModal', step)
  },
  setAppTermsAccepted(vuexContext, state) {
    vuexContext.commit('setaAppTermsAccepted', step)
  },
  setAppLockBodyScroll(vuexContext, state) {
    vuexContext.commit('setAppLockBodyScroll', step)
  },
  setAppNotify(vuexContext, state) {
    vuexContext.commit('setAppNotify', step)
  },
  setAppToken(vuexContext, state) {
    vuexContext.commit('setAppToken', step)
  },

  setGroupList(vuexContext, state) {
    vuexContext.commit('setGroupList', step)
  },

  setMerchantList(vuexContext, state) {
    vuexContext.commit('setMerchantList', step)
  },
  setMerchant(vuexContext, state) {
    vuexContext.commit('setMerchant', step)
  },

  setLocation(vuexContext, state) {
    vuexContext.commit('setLocation', step)
  },
  setLocationType(vuexContext, state) {
    vuexContext.commit('setLocationType', step)
  },
  setLocationDelivery(vuexContext, state) {
    vuexContext.commit('setLocationDelivery', step)
  }

}



// GETTERS

export const getters = {
  getVisitorEntry(state) {
    return state.visitorEntry
  },
  getVisitorActiveStep(state) {
    return state.visitorActiveStep
  },
  getVisitorCookie(state) {
    return state.visitorCookie
  },
  getVisitorCookie(state) {
    return state.visitorCookie
  },
  getVisitorOrder(state) {
    return state.visitorOrder
  },
  getVisitorOrderToken(state) {
    return state.visitorOrderToken
  },

  getAppDefaults(state) {
    return state.appDefaults
  },
  getAppMode(state) {
    return state.appMode
  },
  getAppShowModal(state) {
    return state.appShowModal
  },
  getAppTermsAccepted(state) {
    return state.appTermsAccepted
  },
  getAppLockBodyScroll(state) {
    return state.appLockBodyScroll
  },
  getAppNotify(state) {
    return state.appNotify
  },
  getAppToken(state) {
    return state.appToken
  },

  getGroupList(state) {
    return state.groupList
  },

  getMerchantList(state) {
    return state.merchantList
  },
  getMerchant(state) {
    return state.merchant
  },

  getLocation(state) {
    return state.location
  },
  getLocationType(state) {
    return state.locationType
  },
  getLocationDelivery(state) {
    return state.locationDelivery
  }


}
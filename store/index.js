// Temp - Mock Api req
import psTempData from '~/static/ps.json';
import psTempMerchantsData from '~/static/ps-merchants-latest.json';


// STATE

export const state = () => ({
  
  visitorEntry: false,      // home, group, merchant, location
  visitorActiveStep: 1,      
  vistorCookie: false,      // -> Bool -> Get from with local storage
  visitorOrder: false, 
  visitorOrderToken: false,

  appDefaults: false,       // Api ( Purspust PS )
  appMode: 'default',       // default, dark, light
  appMenuOpen: false,       // -> Bool
  appShowModal: false,      // -> Bool
  appTermsAccepted: false,  // -> Bool (like special terms for buying tickets)
  appLockBodyScroll: false, // -> Bool 
  appNotify: false,         // -> Bool 
  appToken: null,           // -> Bool
  appHideHeader: false,      // -> Bool  

  groupList: false,         // Api -> ?  

  merchantList: false,      // Api
  merchant: false,          // Api

  location: false,          // Api
  locationType: false,      // restaurant, shop, ticket ...
  locationDelivery: 'pay',  // Fetch "5" , Recive "5", Delivery "5",  Pay "4" )

  cart: [],
  cartCount: 0, 
  cartCode: false, 
  cartDisabled: true,
  cartTotal: 0,


})


// MUTATIONS

export const mutations = {
  addToCart(state, item) {

    // let found = state.cart.find(product => product.id == item.id);

    // if (found) {
    //     found.quantity ++;
    //     found.totalPrice = found.quantity * found.price;
    // } else {
        
    //     state.cart.push(item);

    //     // Vue.set(item, 'quantity', 1);
    //     // Vue.set(item, 'totalPrice', item.price);
    // }

    // state.cartCount++;
  },
  removeFromCart(state, item) {
    // let index = state.cart.indexOf(item);

    // if (index > -1) {
    //     let product = state.cart[index];
    //     state.cartCount -= product.quantity;

    //     state.cart.splice(index, 1);
    // }
  },
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
  setAppMenuOpen(state, d) {
    state.appMenuOpen = d
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
  setAppHideHeader(state, d) {
    state.appHideHeader = d
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
  },
  
  setCartDisabled(state, d) {
    state.cartDisabled = d
  },
  setCartTotal(state, d) {
    state.cartTotal = d
  },
  setCartCode(state, d) {
    state.cartCode = d
  },
  setCartCount(state, d) {
    state.cartCount = d
  }




}


// ACTIONS

export const actions = {

  async nuxtServerInit({ commit }, context) {

    // console.log(context);

    const apiMerchants = await fetch('https://purspotapi-dev.azurewebsites.net/api/shop/merchants')
    .then(response => response.json())
    commit('setAppToken', apiMerchants)

    commit('setMerchantList', apiMerchants)
    commit('setAppDefaults', psTempData)

  },
  addToCart(vuexContext, state) {
    vuexContext.commit('addToCart', state)
  },
  removeFromCart(vuexContext, state) {
    vuexContext.commit('removeFromCart', state)
  },
  setVisitorEntry(vuexContext, state) {
    vuexContext.commit('setVisitorEntry', state)
  },
  setVisitorActiveStep(vuexContext, state) {
    vuexContext.commit('setVisitorActiveStep', state)
  },
  setVisitorCookie(vuexContext, state) {
    vuexContext.commit('setVisitorCookie', state)
  },

  setVisitorOrder(vuexContext, state) {
    vuexContext.commit('setVisitorOrder', state)
  },
  setVisitorOrderToken(vuexContext, state) {
    vuexContext.commit('setVisitorOrderToken', state)
  },

  setAppDefaults(vuexContext, state) {
    vuexContext.commit('setAppDefaults', state)
  },
  setAppMenuOpen(vuexContext, state) {
    vuexContext.commit('setAppMenuOpen', state)
  },
  setAppMode(vuexContext, state) {
    vuexContext.commit('setAppMode', state)
  },
  setAppShowModal(vuexContext, state) {
    vuexContext.commit('setAppShowModal', state)
  },
  setAppTermsAccepted(vuexContext, state) {
    vuexContext.commit('setaAppTermsAccepted', state)
  },
  setAppLockBodyScroll(vuexContext, state) {
    vuexContext.commit('setAppLockBodyScroll', state)
  },
  setAppNotify(vuexContext, state) {
    vuexContext.commit('setAppNotify', state)
  },
  setAppToken(vuexContext, state) {
    vuexContext.commit('setAppToken', state)
  },
  setAppHideHeader(vuexContext, state) {
    vuexContext.commit('setAppHideHeader', state)
  },

  setGroupList(vuexContext, state) {
    vuexContext.commit('setGroupList', state)
  },

  setMerchantList(vuexContext, state) {
    vuexContext.commit('setMerchantList', state)
  },
  setMerchant(vuexContext, state) {
    vuexContext.commit('setMerchant', state)
  },

  setLocation(vuexContext, state) {
    vuexContext.commit('setLocation', state)
  },
  setLocationType(vuexContext, state) {
    vuexContext.commit('setLocationType', state)
  },
  setLocationDelivery(vuexContext, state) {
    vuexContext.commit('setLocationDelivery', state)
  },
  
  setCartDisabled(vuexContext, state) {
    vuexContext.commit('setCartDisabled', state)
  },
  setCartTotal(vuexContext, state) {
    vuexContext.commit('setCartTotal', state)
  },
  setCartCode(vuexContext, state) {
    vuexContext.commit('setCartCode', state)
  },
  setCartCount(vuexContext, state) {
    vuexContext.commit('setCartCount', state)
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
  getAppMenuOpen(state) {
    return state.appMenuOpen
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
  getAppHideHeader(state) {
    return state.appHideHeader
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
  },
  getCartDisabled(state) {
    return state.cartDisabled
  },
  getCartTotal(state) {
    return state.cartTotal
  },
  getCartCode(state) {
    return state.cartCode
  },
  getCart(state) {
    return state.cart
  },
  getCartCount(state) {
    return state.cartCount
  }


}
// Temp - Mock Api req
import psTempData from '~/static/ps.json';
import psTempMerchantsData from '~/static/ps-merchants-latest.json';


// STATE

export const state = () => ({
  
  visitorEntry: false,      // home, group, merchant, location
  visitorActiveStep: 1,      
  vistorCookie: false,      // -> Move to local storage 

  appDefaults: false,       // Api ( Purspots app defualts from temp json file today)
  appMode: 'default',       // default, dark, light
  appMenuOpen: false,       // -> Bool
  appShowModal: false,      // -> Bool
  appTermsAccepted: false,  // -> Bool (like special terms for buying tickets)
  appNotify: false,         // NOT USED (Make custom notify component) 
  appHideHeader: false,     // -> Bool  

  groupList: false,         // Api   

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
  cartPulse: false,
  cartOpen: false,

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
  setAppNotify(state, d) {
    state.appNotify = d
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
  },
  setCartPulse(state, d) {
    state.cartPulse = d
  },
  setCartOpen(state, d) {
    state.cartOpen = d
  }




}


// ACTIONS

export const actions = {

  async nuxtServerInit({ commit }, context) {

    // console.log(context);

    const apiMerchants = await fetch('https://purspotapi-dev.azurewebsites.net/api/shop/merchants')
    .then(response => response.json())

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
  setAppNotify(vuexContext, state) {
    vuexContext.commit('setAppNotify', state)
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
  },
  setCartPulse(vuexContext, state) {
    vuexContext.commit('setCartPulse', state)
  },
  setCartOpen(vuexContext, state) {
    vuexContext.commit('setCartOpen', state)
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
  getAppNotify(state) {
    return state.appNotify
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
  },
  getCartPulse(state) {
    return state.cartPulse
  },
  getCartOpen(state) {
    return state.cartOpen
  }


}
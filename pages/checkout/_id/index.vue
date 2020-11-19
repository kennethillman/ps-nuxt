<template>
<div>

  <div class="ps-info -even">
    <InfoMerchant :merchant="merchant" />
    <InfoPlace :location="location" /> 
    <InfoCart />
  </div>


  <h1>3.Betala - {{this.$store.getters.getCartTotal}}  SEK</h1>

  <div class="ps-items">

    <a href="" class="ps-item -payment" @click.prevent="pay(0)">
      <img src="https://www.boxnet.se/Content/Images/hero/hero-Swish_logo.png">
      <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg></figure> Dummy
    </a>

  </div>


<!-- <h1>Checkout</h1>
 {{checkout}} -->


</div>
</template>

<script>


export default {
  transition: 'custom',
  data() {
    return {
     
    }
  },
  asyncData ({ req, params, store }) {

    return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/checkout/' + params.id)
      .then(res => res.json())
      .then((data) => {
        return { checkout: data, merchant: data.merchant , location: data.merchantLocation}
      })

  },

  head () {
    return {


      title: "Purspot | Checkout",
      style: [
        { cssText:
          `:root {
            --ps-skin: ${this.merchant.customStyling.styling.skin.vars.colors.skin};
            --ps-skin-bg: linear-gradient(#fff, #fff 34vh, #e9e9e9 90vh);
            --ps-link: ${this.merchant.customStyling.styling.skin.vars.colors.link};
            --ps-btn-txt: ${this.merchant.customStyling.styling.skin.vars.colors.btnText};
          }

          .-mode-dark,
          .-mode-light  {
            --ps-skin: ${this.merchant.customStyling.styling.skin.vars.colors.skin};
            --ps-skin-bg: var(--ps-skin);
            --ps-link: ${this.merchant.customStyling.styling.skin.vars.colors.link};
            --ps-btn-txt: ${this.merchant.customStyling.styling.skin.vars.colors.btnText};
          }` ,
          type: 'text/css'}
      ]

    }
  },
  methods: {
    pay(id) {

      // /api/shop/pay/a9da70b5-a3c0-4bcd-aa58-6aab2fdf3262?PaymentMethod=Dummy&CallbackUrl=https://ps-nuxt.vercel.app/receipt/a9da70b5-a3c0-4bcd-aa58-6aab2fdf3262

      console.log('Pay -> ' + id);
      let postData = {};
      let url = 'https://purspotapi-dev.azurewebsites.net/api/shop/pay/' + this.$route.params.id + '?PaymentMethod=Dummy&CallbackUrl=http://localhost:3000/receipt/ ' + this.$route.params.id ;
      this.$axios.get(url, postData).then(response => {
        console.log(response.data);
       // this.$router.push('/receipt/' + response.data.orderId);
      });
    } 
    
  },
  mounted() {

    // Update active step
    this.$store.dispatch("setVisitorActiveStep", 3);
    
    // Make Cart Enabled
    this.$store.dispatch("setCartDisabled", false); 

    // Set mode
    this.$store.dispatch("setAppMode", this.merchant.customStyling.styling.skin.mode);  

    // Set merchnat in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {
      this.$store.dispatch("setMerchant", this.merchant);
    }

  }


}
</script>





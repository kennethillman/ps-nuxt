<template>
<div>

  <!-- Show if entrypage is MERCHANT -->
  <HeroBrand :merchant="merchant" v-if="this.$store.getters.getVisitorEntry === 'merchant'" />

  <!-- Show if entrypage is other then MERCHANT -->
  <div class="ps-info -even" v-if="this.$store.getters.getVisitorEntry != 'merchant'">
    <InfoMerchant :merchant="merchant" />
  </div>


  <h1>1. Välj kassa</h1>


  <div class="ps-items">

    <nuxt-link  v-for="(loc, index) of merchant.merchantLocations" :to="/location/ + loc.id"  class="ps-item -place" :key="index + loc.name">
      <div>
         <div class="header">{{loc.name}}</div>
         <div class="text" v-if="loc.description">{{loc.description}}</div>
      </div>
     
      <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></figure>

    </nuxt-link>

    <!-- HTML DEMO -->
    <a class="ps-item -place -disabled">
      <div>
        <div class="header">Demo stängd  </div>
      <div class="text">Hämt vid disken bredvid kassa 3. </div>
      </div>
      
      <div class="closed">Stängt</div>
    </a>

    <!-- HTML DEMO -->
    <a class="ps-item -place -disabled">
      <div>
        <div class="header">Demo stängd  </div>
      </div>
      
      <div class="closed">Stängt</div>
    </a>

  </div> 


<!--   <h1>Response</h1>
  {{merchant}} -->

  <!-- cart has html problem -->
  <Cart />

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

    return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/merchant/' + params.id)
      .then(res => res.json())
      .then((data) => {
        return { merchant: data }
      })

  },

  // Ki -> Slow - Below make page blink

  // async asyncData({ $axios, params }) {
  //   const d = await $axios.$get('https://purspotapi-dev.azurewebsites.net/api/shop/merchant/' + params.id)
  //   return { merchant: d  }
  // },

  head () {
    return {
      title: "Purspot | Merchant",
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
    setEntry(m) {
      
    },
  },
  mounted() {

    // Update active step
    this.$store.dispatch("setVisitorActiveStep", 1);

    // Make Cart Disabled
    this.$store.dispatch("setCartDisabled", true); 
    
    // Set mode
    this.$store.dispatch("setAppMode", this.merchant.customStyling.styling.skin.mode);

    // Set merchnat in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {

      this.$store.dispatch("setMerchant", this.merchant);
    }
    
    // Set entry
    if(!this.$store.getters.getVisitorEntry) {
      this.$store.dispatch("setVisitorEntry", 'merchant');
    }

    this.$store.dispatch("setCartOpen", false);  

  }


}
</script>




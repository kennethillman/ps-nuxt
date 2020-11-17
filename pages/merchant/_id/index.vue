<template>
<div>





      <!-- hero -->
      <!-- Show if entrypage is MERCHANT -->
    <div class="ps-hero -brand -no-img-overlay" 
      :style="{ 'background-image': 'url(' + merchant.customStyling.bgImageUrl + ')' }"
      v-if="this.$store.getters.getVisitorEntry === 'merchant'">
        <div class="hero-body">

          <div class="hero-top">
            <h1 class="hero-header"><span>Välkommen till Purspot</span><i><!-- {{merchant.group}}<br> -->{{merchant.name}}</i><span>En mobil Expresskassa!</span></h1>


              
                <template v-if="merchant.imageUrl">
                    <figure 
                      class="logo"
                      :style="{ background: merchant.customStyling.styling.skin.vars.colors.skin}"
                      @click="setMerch(merch)"
                    >
                      <img :src="merchant.imageUrl" />
                    </figure>
                </template> 
                <template v-else>
                  <figure 
                  class="logo -text"
                  :class="{'-dark' : merchant.customStyling.styling.skin.mode === 'dark'}" 
                  :style="{ background: merchant.customStyling.styling.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                  >
                    <i class="logo-text">
                      {{merchant.name.slice(0, 3)}}
                    </i>
                  </figure>
                </template> 

          </div>

          <div class="hero-info">
            <div class="hero-text -hide-mobile">
              <p>Handla snabbare när du beställer med Purspot och betala med Swish eller kort. Du behöver inte ladda ner någon app eller registrera dig.</p>
            </div>
            <div class="hero-usp">

              <div class="ps-usp">
                <div class="ups-body">
                  <ul >
                    <li >
                      <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
                      </figure>
                      <div class="text">
                        Slipp trängsel och kö.
                      </div>
                    </li>
                    <li >
                      <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
                      </figure>
                      <div class="text">
                        Betala med Swish eller kort.
                      </div>
                    </li>
                    <li >
                      <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
                      </figure>
                      <div class="text">
                        Ingen app eller registrering
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          
          </div>

        </div>

    </div>


    
      <!-- info -->
      <!-- Show if entrypage is HOME -->
      <div class="ps-info -even" v-if="this.$store.getters.getVisitorEntry != 'merchant'">
        <div class="ps-info-item -merchant js-merchant -close " >
          <div class="adress">
            <div class="header" v-if="merchant.group">{{merchant.group}}</div>
            <div class="header -sub">{{merchant.name}}</div>
              <div class="text">
                <div v-if="merchant.address">{{merchant.address}}, {{merchant.city}}</div>
                <span v-if="merchant.telephone"> Telefon: {{merchant.telephone}}</span>
               
              </div>
              <div class="text -extra">
                <br>
                
              Demo AB, 
              <br>559009-9007<br>
              Levernas ider kan variera mellan 20-40 min <br><br> 
              Org Birkavägen 4, <br>152 41 Solna<br>
              
              </div>
              <a href="#" class="ps-btn -xsmall -ghost -inbl -mode js-merchant-click">Mer info</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
          </div>

              <template v-if="merchant.imageUrl">
                <figure 
                  class="logo"
                  :style="{ background: merchant.customStyling.styling.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                >
                  <img :src="merchant.imageUrl" />
                </figure>
              </template> 
              <template v-else>
                <figure 
                class="logo -text"
                :class="{'-dark' : merchant.customStyling.styling.skin.mode === 'dark'}" 
                :style="{ background: merchant.customStyling.styling.skin.vars.colors.skin}"
                @click="setMerch(merch)"
                >
                  <i class="logo-text">
                    {{merchant.name.slice(0, 3)}}
                  </i>
                </figure>
              </template> 
          
        </div>
      </div>




      <h1>1. Välj kassa</h1>

    <div class="ps-items">

      <nuxt-link  v-for="(loc, index) of merchant.merchantLocations" :to="/location/ + loc.id"  class="ps-item -place" :key="index + loc.name">

        <div class="header">{{loc.name}}</div>
        <div class="text">{{loc.description}}</div>
        <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></figure>

      </nuxt-link>

    </div> 


<!--   <h1>Response</h1>
  {{merchant}} -->

  <Cart />

</div>
</template>

<script>


export default {
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

  // Ki -> Slow - Make page blink
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
    setMerchant(m) {
      this.$store.dispatch("setMerchant", m);
    },
    setMode(m) {
      this.$store.dispatch("setAppMode", m);
    },
    setEntry(m) {
      this.$store.dispatch("setVisitorEntry", m);
    },
  },
  mounted() {



    // Update active step
    this.$store.dispatch("setVisitorActiveStep", 1);

    // Make Cart Disabled
    this.$store.dispatch("setCartDisabled", true); 
    
    // Set mode
    this.setMode(this.merchant.customStyling.styling.skin.mode)  

    // Set merchnat in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {
      this.setMerchant(this.merchant)
    }
    
    // Set entry
    if(!this.$store.getters.getVisitorEntry) {
      this.setEntry('merchant')  
    }

    this.$store.dispatch("setCartOpen", false);  

   
    
  }






}
</script>




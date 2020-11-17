<template>
<div>






      <!-- hero -->
      <!-- Show if entrypage is "location" -->
      <div class="ps-hero -brand -no-img-overlay" v-if="this.$store.getters.getVisitorEntry === 'location'">
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
      <!-- Show if entrypage is HOME Other then "location" -->
      <div class="ps-info -even" >
        <div class="ps-info-item -merchant js-merchant -close " v-if="this.$store.getters.getVisitorEntry != 'location'">
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
        <div class="ps-info-item -place" v-if="this.$store.getters.getVisitorEntry != 'location'">
            <div class="place">
                <div class="header">{{location.name}}</div>
                <div class="text">
                  xxx
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-1 5v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l.471 4h-13.385l.471-4h2.221z"></path></svg>
            </div>
        </div>
        <div class="ps-info-item -time">
          <div class="ps-body">
            <div class="open">
              <div class="header">
                ÖPPETTIDER idag 
              </div>
              <div class="time">
                xx:xx - xx:xx
              </div>
            </div>
            <div class="order">
              <div class="header">
                Ordertider idag 
              </div>
              <div class="time">
                xx:xx - xx:xx
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"></path></svg>    
          </div> 

        </div>
      </div>






    
      <h1>2. Välj varor</h1>

      <div class="ps-search -full">
        <svg-icon name="search" />
        <input type="text" name="" placeholder="Sök varor...">
      </div>


      <div class="ps-accordion" >

        <div class="ps-accordion-group" v-for="(category, index) of categories" :key="category+index"> 
          
          <!-- GROUPE HEADER -->
          <div class="ps-accordion-header " @click="accordionGroupToggle($event)" :class="{'-no-image' : !category.imageUrl}">
            <figure class="image" v-if="category.imageUrl">
                <img :src="category.imageUrl">
              </figure>
            <div class="header">{{category.name}} </div>
            <figure class="icon" v-if="category.products">
              <svg-icon name="arrow" />
            </figure>
          </div>

          <!-- GRUOP PRODUCTS -->

          <div class="ps-accordion-products">
              <div class="ps-products">
                  <template v-for="product of category.products">

                    <!-- HEADER or PRODUCT -->

                    <!-- --- HEADER - IF sub products-->
                    <template v-if="product.productVariants.length">
                        <div class="ps-accordion-group -sub">
                          <div class="ps-accordion-header -sub " @click="accordionGroupToggle($event)" :class="{'-no-image' : !product.imageUrl}">
                            <figure class="image" v-if="product.imageUrl">
                                <img :src="product.imageUrl">
                              </figure>
                            <div class="header">{{product.name}} </div>
                            <figure class="icon">
                              <svg-icon name="arrow" />
                            </figure>
                          </div>

                          <div class="ps-accordion-products">
                            <div class="ps-products">
                              <template v-for="prod of product.productVariants">
                                  <!-- product here -->
                                  <Product :product="prod" />
                              </template>
                            </div>
                          </div>

                        </div>
                    </template>

                    <!-- --- PRODUCT - IF NO sub products -->
                    <template v-else>
                      <Product :product="product" />
                    </template>
                   
                  </template>
                
              </div>
          </div>
   

          

        </div><!-- Group *** END ***-->
        
        
      </div>





<!--   <h1>Response</h1>
  {{location}}
 -->
<!--  <h1>Cart</h1>
  {{this.$store.getters.getCart}} -->

  <Cart />


</div>
</template>

<script>


export default {
  data() {
    return {
      message: this.$route.params.id,
      location: [],
      categories: [],
      basketLines: []
    }
  },
  asyncData ({ req, params, store }) {

    return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/location/' + params.id)
      .then(res => res.json())
      .then((data) => {
        return { location: data , categories: data.productCategories, merchant: data.merchant}
      })

  },

  head () {
    return {


      title: "Purspot | Location",
      style: [
        { cssText:
          `:root {
            --ps-skin: ${this.location.merchant.customStyling.styling.skin.vars.colors.skin};
            --ps-skin-bg: linear-gradient(#fff, #fff 34vh, #e9e9e9 90vh);
            --ps-link: ${this.location.merchant.customStyling.styling.skin.vars.colors.link};
            --ps-btn-txt: ${this.location.merchant.customStyling.styling.skin.vars.colors.btnText};
          }

          .-mode-dark,
          .-mode-light  {
            --ps-skin: ${this.location.merchant.customStyling.styling.skin.vars.colors.skin};
            --ps-skin-bg: var(--ps-skin);
            --ps-link: ${this.location.merchant.customStyling.styling.skin.vars.colors.link};
            --ps-btn-txt: ${this.location.merchant.customStyling.styling.skin.vars.colors.btnText};
          }` ,
          type: 'text/css'}
      ]

    }
  },
  methods: {
    
    accordionGroupToggle (event) {
      let el = event.target;
      el.closest('.ps-accordion-group').classList.toggle('-open-group');
    }
  },
  mounted() {

    // Update active step
    this.$store.dispatch("setVisitorActiveStep", 2);
    
    // Make Cart Enabled
    this.$store.dispatch("setCartDisabled", false); 

    // Set mode
    this.$store.dispatch("setAppMode", this.location.merchant.customStyling.styling.skin.mode);  

    // Set merchnat in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {
      this.$store.dispatch("setMerchant", this.location.merchant);
    }
    
    // Set entry
    if(!this.$store.getters.getVisitorEntry) {
      this.$store.dispatch("setVisitorEntry", 'location');
    }

    this.$store.dispatch("setCartOpen", false);  

  }






}
</script>




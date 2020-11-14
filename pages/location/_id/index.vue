<template>
<div>



      <!-- info -->
      <!-- Show if entrypage is HOME -->
      <div class="ps-info -even" v-if="this.$store.getters.getVisitorEntry != 'location'">
        <div class="ps-info-item -merchant js-merchant -close ">
          <div class="adress">
            <div class="header" v-if="location.merchant.group">{{location.merchant.group}}</div>
            <div class="header -sub">{{location.merchant.name}}</div>
              <div class="text">
                <div>Kanalvägen 7, Upplands Väsby</div>
                <span> Telefon: 08-590 342 60</span>
              </div>
              <div class="text -extra">
                <br>
                
              Bredden thai AB, 
              <br>559009-9007<br>
              Leevrnas tider kan variera mellan 20-40 min <br><br> 
              Org Birkavägen 4, <br>152 41 Södertälje<br>
              
              </div>
              <a href="#" class="ps-btn -xsmall -ghost -inbl -mode js-merchant-click">Mer info</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
          </div>

              <template v-if="location.merchant.customStyling.bgImageUrl">
                <figure 
                  class="logo"
                  :style="{ background: location.merchant.customStyling.styling.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                >
                  <img :src="require(`~/assets/logos/${location.merchant.customStyling.bgImageUrl}`)" />
                </figure>
              </template> 
              <template v-else>
                <figure 
                class="logo -text"
                :class="{'-dark' : location.merchant.customStyling.styling.skin.mode === 'dark'}" 
                :style="{ background: location.merchant.customStyling.styling.skin.vars.colors.skin}"
                @click="setMerch(merch)"
                >
                  <i class="logo-text">
                    {{location.merchant.name.slice(0, 3)}}
                  </i>
                </figure>
              </template> 
          
        </div>
      </div>



      <!-- hero -->
      <!-- Show if entrypage is MERCHANT -->
      <div class="ps-hero -brand -no-img-overlay" v-if="this.$store.getters.getVisitorEntry === 'location'">
        <div class="hero-body">

          <div class="hero-top">
            <h1 class="hero-header"><span>Välkommen till Purspot</span><i>{{merchant.group}}<br>{{merchant.name}}</i><span>En mobil Expresskassa!</span></h1>

                <template v-if="location.merchant.customStyling.bgImageUrl">
                  <figure 
                    class="logo"
                    :style="{ background: location.merchant.customStyling.styling.skin.vars.colors.skin}"
                    @click="setMerch(merch)"
                  >
                    <img :src="require(`~/assets/logos/${location.merchant.customStyling.bgImageUrl}`)" />
                  </figure>
                </template> 
                <template v-else>
                  <figure 
                  class="logo -text"
                  :class="{'-dark' : location.merchant.customStyling.styling.skin.mode === 'dark'}" 
                  :style="{ background: location.merchant.customStyling.styling.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                  >
                    <i class="logo-text">
                      {{location.merchant.name.slice(0, 3)}}
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
                                                         <div class="ps-product " v-for="productVariant of product.productVariants"  @click="addToBasket(product.id)" :class="{'-no-image' : !product.imageUrl}">
                            <figure class="image" v-if="product.imageUrl">
                              <img :src="product.imageUrl">
                            </figure>
                                    
                              <div class="text">
                                  <h5 class="title">{{product.partnerProductNr}} {{product.name}}</h5>
                                  <h5 class="desc">{{product.description}}&nbsp;</h5>

                                  <div class="price-quantity">

                                      <div class="price">
                                          {{product.price}} SEK
                                      </div>

                                      <div class="quantity ">
                                          <button class="ps-btn -round -small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 9h24v6h-24z"></path></svg></button>
                                          <div class="sum">0</div>
                                          <button class="ps-btn -round -small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"></path></svg></button>
                                      </div>

                                  </div>
                              </div>
                        </div>

                            </div>
                          </div>



                        </div>
                    </template>

                    <!-- --- PRODUCT - IF NO sub products -->
                    <template v-else>
                      <div class="ps-product " @click="addToBasket(product.id)" :class="{'-no-image' : !product.imageUrl}">
                          <figure class="image" v-if="product.imageUrl">
                            <img :src="product.imageUrl">
                          </figure>
                                  
                            <div class="text">
                                <h5 class="title">{{product.partnerProductNr}} {{product.name}}</h5>
                                <h5 class="desc">{{product.description}}&nbsp;</h5>

                                <div class="price-quantity">

                                    <div class="price">
                                        {{product.price}} SEK
                                    </div>

                                    <div class="quantity ">
                                        <button class="ps-btn -round -small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 9h24v6h-24z"></path></svg></button>
                                        <div class="sum">0</div>
                                        <button class="ps-btn -round -small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"></path></svg></button>
                                    </div>

                                </div>
                            </div>
                      </div>
                    </template>
                   
                  </template>
                
              </div>
          </div>
   

          

        </div><!-- Group *** END ***-->
        
        
      </div>

      <br><br><br><br>



    <!-- <div v-for="category of categories" class="item -hide">

      <img :src="category.imageUrl" class="img" /><br />
      <b>{{category.name}}</b><br />
      {{category.description}}

        <div v-for="product of category.products" class="item" @click="addToBasket(product.id)">
          <img :src="product.imageUrl" class="img" /><br />
          <b>{{product.partnerProductNr}} {{product.name}} - {{product.price}} SEK</b> <br />
          {{product.description}}

          <div v-for="productVariant of product.productVariants" class="item" @click="addToBasket(productVariant.id)">
            <img :src="productVariant.imageUrl" class="img" /><br />
            <b>{{productVariant.partnerProductNr}} {{productVariant.name}} - {{productVariant.price}} SEK</b> <br />
            {{productVariant.description}}
          </div>

        </div>

       </div> -->



<!--   <h1>Response</h1>
  {{location.merchant}} -->

  <Cart />

</div>
</template>

<script>


export default {
  data() {
    return {
      merchant: this.$store.getters.getMerchant,
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
        return { location: data , categories: data.productCategories}
      })

  },

  // Ki -> Slow - Make page blink
  // async asyncData({ $axios, params }) {
  //   const d = await $axios.$get('https://purspotapi-dev.azurewebsites.net/api/shop/merchant/' + params.id)
  //   return { merchant: d  }
  // },



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
    addToBasket(productId) {
      // alertify.success('Added ' + productId);
      this.$toast.success('Added ' + productId)
      console.log(productId)
      if(undefined === this.basketLines[productId]) {
        let p =
        {
          'productId': productId,
          'quantity': 1
        };
        this.basketLines.push(p);
      }
    },
    postBasket(){
      let postData =
      {
        basketLines: this.basketLines
      };
      
      let url = apiUrl + '/api/shop/createorder/' + this.$route.params.id;
      axios.post(url, postData).then(response => {
        console.log(response.data);
        alertify.success('Basket saved to db: ' + response.data);
        this.$router.push('/checkout/' + response.data.orderId);
      });
    },

    setMerchant(m) {
      this.$store.dispatch("setMerchant", m);
    },
    setMode(m) {
      this.$store.dispatch("setAppMode", m);
    },
    setEntry(m) {
      this.$store.dispatch("setVisitorEntry", m);
    },

    accordionGroupToggle (event) {

      let el = event.target;

        console.log(' atoggle -> ' , el.closest('.ps-accordion-group'))

 
        el.closest('.ps-accordion-group').classList.toggle('-open-group');
  

    // let el = document.getElementsByClassName("js-temp-accordion");

    // for (var i = 0; i < el.length; i++) {
    //     el[i].addEventListener('click', accordion, false);
    // }
    }
  },
  mounted() {
    
    // Set mode
    this.setMode(this.location.merchant.customStyling.styling.skin.mode)  

    // Set merchnat in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {
      this.setMerchant(this.location.merchant)
    }
    
    // Set entry
    if(!this.$store.getters.getVisitorEntry) {
      this.setEntry('location')  
    }

   
    
  }






}
</script>




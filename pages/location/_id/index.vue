<template>
<div>





      <!-- hero -->
      <!-- Show if entrypage is "location" -->

      <HeroBrand :merchant="merchant" v-if="this.$store.getters.getVisitorEntry === 'location'" />

      <!-- info -->
      <!-- Show if entrypage is HOME Other then "location" -->
      <div class="ps-info -even" >

        <InfoMerchant :merchant="merchant" v-if="this.$store.getters.getVisitorEntry != 'location'" />
        <InfoPlace :location="location" />
        <InfoTime :location="location"  />
        
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
  transition: 'custom',
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




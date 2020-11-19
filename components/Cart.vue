<template>
<div>
  

  <CartItems />


  <div class="ps-cart" :class="{'-disabled' : this.$store.getters.getCartDisabled}">
    <div class="cart ">
   
      <div class="cart-button">
        <div class="cart-buttons-wrapper">

          <a href="/" class="ps-btn small -icon" @click.prevent="showHideCart()"
           :disabled="this.$store.getters.getCartDisabled"
           :class="{'-disabled' : this.$store.getters.getCartDisabled}">
              
              <span class="price"></span>{{this.$store.getters.getCartTotal}} SEK  <span class="text" :class="{'-discrete': this.$store.getters.getCartTotal !== 0 }">
                DIN VARUKROG 
              </span> 

             <svg-icon name="cart" />
          </a>


          <a href="/" class="ps-btn small -icon" @click.prevent="showHideCart()"> 
            Stäng varukorgen 
            <svg-icon name="cross" />
           
          </a>

        </div> 
      </div>

      <div class="num" :class="{'-animate-pulse': this.$store.getters.getCartPulse}">
        {{this.$store.getters.getCartCount}}
        <i></i>
      </div> 
      
    </div> 
  </div>

</div>
</template>


<script>

  export default {
    data(){
      return {
        disabled: this.$store.getters.getCartDisabled,
        pulse: false,
      }
    },
    methods: {
      showHideCart(){
        if(!this.$store.getters.getCartDisabled){
          if (this.$store.getters.getCartOpen){
            this.$store.dispatch("setCartOpen", false);  
          } else {
            this.$store.dispatch("setCartOpen", true); 
          }
        }

        
      },



    }

  }


    // async asyncData({ $axios }) {
  //   const test = await $axios.$get('http://icanhazip.com')
  //   return { test }
  // },
</script>




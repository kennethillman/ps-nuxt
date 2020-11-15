<template>

<div class="ps-cart" :class="{'-disabled' : this.$store.getters.getCartDisabled}"">
  <div class="cart ">
 
    <div class="cart-button">
      <a href="ps-step-2.html" class="ps-btn small -icon"
      :disabled="this.$store.getters.getCartDisabled"
      :class="{'-disabled' : this.$store.getters.getCartDisabled}">
        <span :class="{'-discrete': this.$store.getters.getCartTotal !== 0 }">
          DIN VARUKROG - 
        </span> 
          {{this.$store.getters.getCartTotal}} SEK 
       <svg-icon name="cart" />
      </a>
      <div class="num" :class="{'-animate-pulse': pulse}">
        {{this.$store.getters.getCartCount}}
        <i></i>
        <i></i>
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



    }

  }
</script>

<template>

<div class="ps-cart" :class="{'-disabled' : this.$store.getters.getCartDisabled}">
  <div class="cart ">
 
    <div class="cart-button">
      <a href="" class="ps-btn small -icon" @click.prevent="postBasket()"
      :disabled="this.$store.getters.getCartDisabled"
      :class="{'-disabled' : this.$store.getters.getCartDisabled}">
        
      <span class="price"></span>{{this.$store.getters.getCartTotal}} SEK  <span class="text" :class="{'-discrete': this.$store.getters.getCartTotal !== 0 }">
        DIN VARUKROG 
      </span> 

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
      postBasket(){
        let postData =
        {
          basketLines: [ { "productId": "5f3e0961-d7b6-49ae-8b23-383e88b9f4d3", "quantity": 1 }, { "productId": "5f3e0961-d7b6-49ae-8b23-383e88b9f4d3", "quantity": 1 }, { "productId": "5f3e0961-d7b6-49ae-8b23-383e88b9f4d3", "quantity": 1 } ]
        };

        console.log(postData)
        
        let url = 'https://purspotapi-dev.azurewebsites.net/api/shop/createorder/' + this.$route.params.id;

        console.log(url)

        this.$axios.post(url, postData).then(response => {
          console.log(response.data);
          //alertify.success('Basket saved to db: ' + response.data);
          this.$router.push('/checkout/' + response.data.orderId);
        });
      },


    }

  }


    // async asyncData({ $axios }) {
  //   const test = await $axios.$get('http://icanhazip.com')
  //   return { test }
  // },
</script>




<template>

  <div class="ps-product" :class="{'-no-image' : !product.imageUrl}">
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
                      <button class="ps-btn -round -small" :disabled="itemCount === 0"
                        :class="{'-disabled' : itemCount === 0}"
                        @click="removeFromBasket(product.id,product.price)"><svg-icon name="minus" /></button>
                      <div class="sum">{{itemCount}}</div>
                      <button class="ps-btn -round -small"  @click="addToBasket(product.id,product.price)"><svg-icon name="plus" /></button>
                  </div>

              </div>
          </div>

       <!--    {{basketLines}} -->
    </div>

</template>


<script>

  export default {
    props:[
      'product'
    ],
    data(){
      return {
        itemCount: 0,
        basketLines: []
      }
    },
    methods: {
      cartPulse(){

        // Add to store or add to "addToBasket"

        let timerPulse = setTimeout(() => {
          this.$store.dispatch("setCartPulse", false)
        }, 775);

        if (this.$store.getters.getCartPulse){
          this.$store.dispatch("setCartPulse", false)
        }

        this.$store.dispatch("setCartPulse", true)

      },
      addToBasket(productId, productPrice) {

        this.cartPulse();

        let p, totalItems = this.$store.getters.getCartCount + 1;
        let totalPrice = this.$store.getters.getCartTotal + productPrice;

        this.itemCount ++;
        this.$store.dispatch('setCartCount', totalItems);

        this.$store.dispatch('setCartTotal', totalPrice);

        //this.$toast.success('Added ' + productId)


        if(undefined === this.basketLines[productId]) {
          p = {
            'productId': productId,
            'quantity': 1
          }
          this.basketLines.push(p);
        }


        //  this.$store.dispatch('addToCart', p);
        


        //
      },
      removeFromBasket(productId, productPrice) {

        this.cartPulse();
        

       // this.$toast.error('Removed ' + productId)
        let totalItems, totalPrice = this.$store.getters.getCartTotal - productPrice;
        this.itemCount --;

        if(this.itemCount < 0){
          this.itemCount = 0;
          this.$store.dispatch('setCartTotal', 0);
        } else {
          totalItems = this.$store.getters.getCartCount - 1;
          this.$store.dispatch('setCartCount', totalItems);
          this.$store.dispatch('setCartTotal', totalPrice);
        }


       
       
        //if(undefined === this.basketLines[productId]) {
          // let p =
          // {
          //   'productId': productId,
          //   'quantity': 1
          // };

        //  this.$store.dispatch('removeFromCart', p);
          //this.basketLines.push(p);
        //}
      }


    }
  
  }
  
</script>

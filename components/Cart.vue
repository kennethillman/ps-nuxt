<template>
<div>
  
  <div class="ps-cart-items ps-box">
     <div class="cart-header">
      <h2>DIN VARUKORG</h2> <!-- <a href="" class="ps-btn -small -icon" @click.prevent="showHideCart()">
            Stäng 
            <svg-icon name="cross" />
          </a> -->
    </div>
  <div class="cart-scroll ps-the-box ">
   
    
    
<div class="ps-forms ps-the-box-text-black ">

      <!-- COUPON -->

<!--  -->     <div class="cart-item-coupon">
        <label class="ps-label">Kupong</label>
        <div class="ps-coupon">
          <a class="ps-btn -code">ANVÄND</a>
          <input type="text" placeholder="Kupongkod..." name="">
        </div>      
      </div> 


      <!-- NOTE-->

      <div class="cart-item-note">
          <label class="ps-label -mt-8">Notering</label>
          <input type="text" placeholder="Ex. Bordsnummer" name="">
      </div>

      <div class="divider"></div>
      

      <!-- TIP -->

            

      <div class="cart-items-tip">
       <b>LÄGG TILL DRICKS</b>
       <div class="tips">
        <a class="ps-btn -tip">5%</a>
           <a class="ps-btn -tip">10%</a> 
           <a class="ps-btn -tip -active">15%</a> 
       </div>
          
      </div> 

            <div class="divider"></div>

      
      



      <!-- CHOICES -->

      <div class="cart-items-choices">
        <label class="radio-wrapper" for="eatingSpot">
                <span>Äta här</span>
                
                <label class="ps-rc">
                  <input type="radio" name="test">
                  <span class="checkmark"></span>
                </label>

            </label>
          <label class="radio-wrapper" for="eatingSpot">
                <span>Ta med</span>
                
                <label class="ps-rc">
                  <input type="radio" name="test">
                  <span class="checkmark"></span>
                </label>

            </label>
            <label class="radio-wrapper" for="eatingSpot">
                <span>Hemleverans</span>
                
                <label class="ps-rc">
                  <input type="radio" name="test" checked="">
                  <span class="checkmark"></span>
                </label>

            </label>

          <div class="-mt-16">
            Minsta belopp för hemleverans 150 SEK <br>
              Fri hemleverans vid belopp över 400 SEK
            </div>

      </div>

      <div class="divider"></div>


      <!-- DELIVERY ADRESS -->


    <!--         -->
      <div class="cart-items-delivery">

        <p>Lite text om vad hemleverans innebär (går att ändra i admin)
        Giltig postnummer: 10000-20000, 31000-32000</p>

        <input type="text" placeholder="Förnamn" name="">
        <input type="text" placeholder="Efternamn" name="">
        <input type="text" placeholder="Adress" name="">
        <input type="text" placeholder="Postnummer" name="">
        <input type="text" placeholder="Stad" name="">
        <input type="text" placeholder="Portkod" name="">
        <input type="text" placeholder="Telefon" name="">
        <input type="text" placeholder="Epost" name="">


        <label class="radio-wrapper" for="RememeberMe">
                <span>Kom ihåg mig</span>
                <label class="ps-rc">
                  <input type="radio" name="test">
                  <span class="checkmark"></span>
                </label>
            </label>

      </div> 

      <div class="divider"></div>

    


      <!-- MERCHENDISE -->

      <div class="cart-items-merchendise ps-the-box-text">

            <h2 class="header-2">VAROR</h2>

            <div class="products">
                <div class="row -p">
                    <div class="left">1 Margeherita- Lunch</div>
                    <div class="right">25.00 SEK</div>
                </div>
                <div class="row">
                    <div class="left">1 La bussola med extra ost och extra allt inkl dryck och kaffe med påtår - Lunch</div>
                    <div class="right">21199.00 SEK</div>
                </div>
                <div class="row">
                    <div class="left">1 Vesuvio barn pizza - Lunch</div>
                    <div class="right">99.00 SEK</div>
                </div>

                <div class="row -p">
                    <div class="left">Moms 12%</div>
                    <div class="right">12.00 SEK</div>
                </div>
                <div class="row">
                    <div class="left">Moms 18%</div>
                    <div class="right">16.00 SEK</div>
                </div>

                <div class="row -b -p -total">
                    <div class="left">TOTALT <span>(inkl. moms)</span></div>
                    <div class="right">253.00 SEK</div>
                </div>

            </div>   

        </div>


          
          <a href="" class="ps-btn -icon -to-pay" @click.prevent="postBasket()" > 
            Till Betalning - 253 SEK
            <svg-icon name="arrow" />
          </a>

          <div class="divider"></div>

          <p>När du genomför köp på denna sida godkänner du  våra 
      köpvillkor och sekretess enligt GDPR. <br>
      <a href="">Läs mer här om våra villkor och sekretess.</a></p>

    </div>

  </div>
  </div>



  <div class="ps-cart" :class="{'-disabled' : this.$store.getters.getCartDisabled}">
    <div class="cart ">
   
      <div class="cart-button">


        <div class="cart-buttons-wrapper">

          <a href="" class="ps-btn small -icon" @click.prevent="showHideCart()"
           :disabled="this.$store.getters.getCartDisabled"
           :class="{'-disabled' : this.$store.getters.getCartDisabled}">
              
              <span class="price"></span>{{this.$store.getters.getCartTotal}} SEK  <span class="text" :class="{'-discrete': this.$store.getters.getCartTotal !== 0 }">
                DIN VARUKROG 
              </span> 

             <svg-icon name="cart" />
          </a>

          <a href="" class="ps-btn small -icon" @click.prevent="showHideCart()"> 
            Stäng varukorgen<!-- - 253 SEK --> 
            <svg-icon name="cross" />
          </a>

        </div>
     



        <div class="num" :class="{'-animate-pulse': this.$store.getters.getCartPulse}">
          {{this.$store.getters.getCartCount}}
          <i></i>
          <!-- <i></i> -->
          <!-- <i></i> -->
        </div> 
      </div>
      
      <div class="cart-button -pay">
         
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
      postBasket(){
        this.$store.dispatch("setCartOpen", false);  
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




<template>

  <div class="ps-cart-items ps-box">

    <div class="cart-close-button">
      <a class="ps-btn -round -cart-close" @click="showHideCart()"><svg-icon name="cross" /></a>
    </div>
    

    <div class="cart-scroll ps-the-box " 
         v-body-scroll-lock="this.$store.getters.getCartOpen" 
         :style="{'height': scrollAreaHeight + 'px' }">
     
      
      
    <div class="ps-forms ps-the-box-text-black " id="cartContent">


          

        <!-- COUPON -->

        <!--     
        <div class="cart-item-coupon">
          <label class="ps-label">Kupong</label>
          <div class="ps-coupon">
            <a class="ps-btn -code">ANVÄND</a>
            <input type="text" placeholder="Kupongkod..." name="">
          </div>      
        </div> 
        --> 

        <!-- NOTE-->

        <div class="cart-item-note">
            <label class="ps-label -mt-8">Notering</label>
            <input type="text" placeholder="Ex. Bordsnummer" name="">
        </div>

        <div class="divider"></div>
        

        <!-- TIP -->

              

        <!-- 
        <div class="cart-items-tip">
         <b>LÄGG TILL DRICKS</b>
         <div class="tips">
          <a class="ps-btn -tip">5%</a>
             <a class="ps-btn -tip">10%</a> 
             <a class="ps-btn -tip -active">15%</a> 
         </div>
            
        </div> 

              <div class="divider"></div> 
            -->



        <!-- CHOICES -->

        <div class="cart-items-choices">
          <label class="radio-wrapper" for="eatingSpot" @click="eatingSpot()">
                  <span>Äta här</span>
                  
                  <label class="ps-rc">
                    <input type="radio" name="test">
                    <span class="checkmark"></span>
                  </label>

              </label>
            <label class="radio-wrapper" for="eatingSpot" @click="eatingSpot()">
                  <span>Ta med</span>
                  
                  <label class="ps-rc">
                    <input type="radio" name="test">
                    <span class="checkmark"></span>
                  </label>

              </label>
              <label class="radio-wrapper" for="eatingSpot" @click="eatingSpot()">
                  <span>Hemleverans</span>
                  
                  <label class="ps-rc">
                    <input type="radio" name="test" >
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


        <!--         
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

        <div class="divider"></div>x
        -->
      


        <!-- MERCHENDISE -->

        <div class="cart-items-merchendise ps-the-box-text">

          <h2 class="header-2">VAROR</h2>

          <div class="products -interactive">
              <div class="row -p">
                  <div class="quantity ">
                    <button class="ps-btn -round -xsmall" ><svg-icon name="minus" /></button>
                    <div class="sum">1</div>
                    <button class="ps-btn -round -xsmall" ><svg-icon name="plus" /></button>
                </div>
                  <div class="name"> Margeherita- Lunch</div>
                  <div class="price">25 SEK</div>
              </div>
              <div class="row">
                <div class="quantity ">
                    <button class="ps-btn -round -xsmall" ><svg-icon name="minus" /></button>
                    <div class="sum">3</div>
                    <button class="ps-btn -round -xsmall" ><svg-icon name="plus" /></button>
                </div>
                  <div class="name">La bussola med extra ost och extra allt inkl dryck och kaffe</div>
                  <div class="price">2199 SEK</div>
              </div>
         
              <div class="row ">
                  <div class="quantity ">
                    <button class="ps-btn -round -xsmall" ><svg-icon name="minus" /></button>
                    <div class="sum">1</div>
                    <button class="ps-btn -round -xsmall" ><svg-icon name="plus" /></button>
                </div>
                  <div class="name"> Vuesuvio</div>
                  <div class="price">109 SEK</div>
              </div>
            </div>
            <div class="products ">
                  <div class="row -int">
                      <div class="left">Moms 12%</div>
                      <div class="right">12 SEK</div>
                  </div>
                  <div class="row -int">
                      <div class="left">Moms 18%</div>
                      <div class="right">16 SEK</div>
                  </div>

                  <div class="row -b -p -int -total">
                      <div class="left">TOTALT <span>(inkl. moms)</span></div>
                      <div class="right">253 SEK</div>
                  </div>

            </div>   
          </div>


            <div class="ps-mandatory" :class="{'-done' : this.payActive}"><svg-icon name="info" /> Fyll i <b>Ät här</b> , <b>Ta med</b> eller <b>Hemleverans</b>.</div>
            <a href="" class="ps-btn -to-pay " 
               :class="{'-disabled' : !this.payActive}"
               @click.prevent="postBasket()" > 

              Till Betalning - 253 SEK
            </a>

            <div class="divider"></div>

            <p>När du genomför köp på denna sida godkänner du  våra 
        köpvillkor och sekretess enligt GDPR. <br>
        <a href="">Läs mer här om våra villkor och sekretess.</a></p>

    </div>

    </div>
  </div>


</template>

<script>

  export default {
    data() {
      return {
        scrollAreaHeight: 280,
        payActive: false,
      }
    },
    methods: {
      setCartScrollAreaHeight(){
        // Needed fix pixel for crossbrowser / device.

        let windowInnerHeight  = window.innerHeight - 154;
        let cartContent = document.getElementById('cartContent').clientHeight;

        if ( windowInnerHeight < cartContent){
          this.scrollAreaHeight = windowInnerHeight
        } else {
          this.scrollAreaHeight = cartContent
        }

      },
      showHideCart(){
        if(!this.$store.getters.getCartDisabled){
          if (this.$store.getters.getCartOpen){
            this.$store.dispatch("setCartOpen", false);  
          } else {
            this.$store.dispatch("setCartOpen", true); 
          }
        }
      },
      eatingSpot(){

        this.payActive = true;

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


    },
    mounted(){
      this.setCartScrollAreaHeight()
    }

  }



</script>


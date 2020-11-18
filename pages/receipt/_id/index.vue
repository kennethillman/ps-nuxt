<template>
<div>

  <div class="ps-info -even">
      <div class="ps-info-item -thanks">
        <div class="ps-body">
          <div class="header">Tack för din beställning!</div>
          <a href="">Ditt kvitto kan ses nedan.</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.855 10.303c.086.554.145 1.118.145 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.348 0 4.518.741 6.304 1.993l-1.421 1.457c-1.408-.913-3.083-1.45-4.883-1.45-4.963 0-9 4.038-9 9s4.037 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.865-1.902zm-.951-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"></path></svg>
        </div>
    </div>  
            <div class="ps-info-item -recipte">
        <div class="ps-body">
          <div class="header">Skicka kvitto</div>
          <div>
            Ange e-pst och mobilnummer för att få kvitto eller vid 
    eventuella frågor från handlaren om ditt köp.
          </div>
           <div class="ps-forms">
            <input type="text" placeholder="E-post..." name="">
            <input type="text" placeholder="Mobilnummer..." name="">
            
          </div>
          <div class="ps-forms -second">

          <label class="radio-wrapper" for="RememeberMe">
                  <span>Kom ihåg mig</span>
                  
                  <label class="ps-rc">
                    <input type="checkbox" name="test">
                    <span class="checkmark"></span>
                  </label>

              </label> 
              <button class="ps-btn -small -inbl">Skicka</button>

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"></path></svg>
      </div>
    </div>  
    </div>


    <figure class="ps-notification">
      <div>
        <h1>4. Beredning</h1>
        <div class="sub-text">
          Din beställning är på g!
        </div>
        <div class="num-header">
          Köpkod
        </div>
        <div class="num">
          100083
        </div>    
      </div>

    </figure>


    <div class="ps-box -info -receipte">
        <div class="ps-the-box ps-the-box-text">

          <h2 class="header">Betalningskvitto <span>2020-10-21 14:20:23</span>
            </h2>


            <h2 class="header-2 -row -choice">Val: <span>Äta här</span></h2>

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

                <div class="row -b -p">
                    <div class="left">TOTALT</div>
                    <div class="right">252.00 SEK</div>
                </div>

            </div>   

            <div class="divider"></div>

            <div class="text">
                <b>HaYo Location </b><br>
                <b>Hayo Locayon AB </b><br>
                5555555-5555 <br>
                Storgatan 1 <br>
                123 45 Stockholm <br>
                08 - 123 456
            </div>

            <h2 class="header-2 -p">REFERENCE NUMMER</h2>
            <div class="text">
                e1241234d32142314-3243-4213-324523
            </div>

        </div>  
    </div>


    <br>
    <a class="ps-btn ">Din betalhistorik</a>
    <a class="ps-btn -ghost">Ge oss feedback</a>
    <a class="ps-btn -ghost">Till startsidan</a>


<!--   <h1>Receipt</h1>
  {{receipt}} -->


</div>
</template>

<script>


export default {
  data() {
    return {
     
    }
  },
  asyncData ({ req, params, store }) {

      return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/receipt/' + params.id)
        .then(res => res.json())
        .then((data) => {
  
          return { receipt: data,  merchant: data.merchant}
        })

  },

  head () {
    return {


      title: "Purspot | Checkout",
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

    
  },
  mounted() {

    // Update active step
    this.$store.dispatch("setVisitorActiveStep", 4);
    
    // Make Cart Enabled
    this.$store.dispatch("setCartDisabled", false); 

    // Set mode
    this.$store.dispatch("setAppMode", this.merchant.customStyling.styling.skin.mode);  

    // Set merchnat in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {
      this.$store.dispatch("setMerchant", this.merchant);
    }

  }


}
</script>







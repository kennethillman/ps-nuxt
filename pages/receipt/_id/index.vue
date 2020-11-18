<template>
<div>

  <div class="ps-info -even">

    <InfoThanks />
    <InfoReceipt />
    <InfoPlace :location="location" /> 
 
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
  async asyncData ({ req, params, store }) {

      return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/receipt/' + params.id)
        .then(res => res.json())
        .then((data) => {
  
          return { receipt: data,  merchant: data.merchant, location: data.merchantLocation}
        })

  },

  head () {
    return {


      title: "Purspot | Receipt",
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

    // Set merchant in VUEX if not defind before
    if(!this.$store.getters.getMerchant) {
      this.$store.dispatch("setMerchant", this.merchant);
    }

  }


}
</script>







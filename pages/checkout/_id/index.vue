<template>
<div>

  <div class="ps-info">
       <div class="ps-info-item -merchant js-merchant -close ">
          <div class="adress">
            <div class="header">Purspot</div>
            <div class="header -sub">Mall of Scandianvia</div>
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

          <figure class="logo">
            <img src="https://purspot.com/Content/images/purspot-logo-small.png">
          </figure>
          
        </div>
                <div class="ps-info-item -cart">
          <div class="ps-body">
            <div class="sum">
              <div class="header">
                Betalt belopp
              </div>
              <div class="num">
                253 sek
              </div>
            </div>
            <div class="code">
              <div class="header">
                Köpkod
              </div>
              <div class="num">
                100083
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841v-2.036h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.313-.464 6.005-2.293 6-5.729z"></path></svg>    
          </div> 

        </div>  
    </div>


    <h1>3.Betala</h1>

    <div class="ps-items">

      <a href="" class="ps-item -payment" @click.prevent="pay(0)">
        <img src="https://www.boxnet.se/Content/Images/hero/hero-Swish_logo.png">
        <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg></figure> Dummy
      </a>


    </div>


  <h1>Checkout</h1>

  <h4>issue with response... ? yo</h4>

 {{merchant}}



</div>
</template>

<script>


export default {
  data() {
    return {
      id: this.$route.params.id,
      merchant: this.$store.getters.getMerchant,
      style: [
        { cssText:
          `:root {
            --ps-skin: ${this.$store.getters.getMerchant.customStyling.styling.skin.vars.colors.skin};
            --ps-skin-bg: linear-gradient(#fff, #fff 34vh, #e9e9e9 90vh);
            --ps-link: ${this.$store.getters.getMerchant.customStyling.styling.skin.vars.colors.link};
            --ps-btn-txt: ${this.$store.getters.getMerchant.customStyling.styling.skin.vars.colors.btnText};
          }

          .-mode-dark,
          .-mode-light  {
            --ps-skin: ${this.$store.getters.getMerchant.customStyling.styling.skin.vars.colors.skin};
            --ps-skin-bg: var(--ps-skin);
            --ps-link: ${this.$store.getters.getMerchant.customStyling.styling.skin.vars.colors.link};
            --ps-btn-txt: ${this.$store.getters.getMerchant.customStyling.styling.skin.vars.colors.btnText};
          }` ,
          type: 'text/css'}
      ]

    }
  },
  asyncData ({ req, params, store }) {

   
      // return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/pay/' + params.id)
      //   .then(res => res.json())
      //   .then((data) => {
    
      //     return { checkout: data }
      //   })


  },




  head () {
    return {

      title: "Purspot | Checkout",


    }
  },

  methods: {
    pay(id) {
      console.log('Pay -> ' + id);
      let postData = {};
      let url = 'https://purspotapi-dev.azurewebsites.net/api/shop/pay/' + this.$route.params.id;
      this.$axios.post(url, postData).then(response => {
        console.log(response.data);
        this.$router.push('/receipt/' + response.data.orderId);
      });
    }

  },
  mounted() {

     // Update active step
    this.$store.dispatch("setVisitorActiveStep", 3);

    
  },






}
</script>




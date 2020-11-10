<template>
<div class="purspot">

  <div class="startpage-top">

        <!-- header -->
    <div class="ps-header ">
      <div class="ps-body">

        <figure class="ps-logo">
            <LogoPurspotBlack/>
        </figure>

        <div class="ps-header-steps">
          <div class="box-steps ">

             <div class="step -active">
                <figure><span>Plats</span></figure>
                <div></div>
             </div>

             <div class="step ">
                <figure><span>Varor</span></figure>
                <div></div>
             </div>

             <div class="step ">
                <figure><span>Betala</span></figure>
                <div></div>
             </div>

             <div class="step">
                <figure><span>Bered.</span></figure>
                <div></div>
             </div>

             <div class="step">
                <figure><span>Hämta</span></figure>
                <div></div>
             </div>

          </div>
        </div>

        <div class="ps-menu-toggle ">
            <div class="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>


        <div class="ps-menu">
          <ul class="menu">
                <li><a class="ps-btn" href="/about/consumer">Konsument</a></li>
                <li><a class="ps-btn" href="/about/merchant">Handlare</a></li>
                <li><a class="ps-btn" href="/contact">Purspot</a></li>
                <li><a class="ps-btn" href="/history">Betalhistorik</a></li>
                <li><br><a class="ps-btn -xsmall -inbl " href="/history">Logga in</a></li>
            </ul>

            <ul class="menu -lang">
               <li><a class="ps-btn -xsmall  -inbl " href="/history">SV</a></li>
               <li><a class="ps-btn -xsmall -ghost -inbl " href="/history">EN</a></li>
            </ul>
        </div>


      </div>
    </div>


    <!-- hero -->
      <div class="ps-hero -brand -no-img-overlay">
    <div class="hero-body">

      <div class="hero-top">
        <h1 class="hero-header"><span>Välkommen till Purspot</span><i>{{merchant.group}}<br>{{merchant.name}}</i><span>En mobil Expresskassa!</span></h1>

              <template v-if="merchant.imageUrl">
                <figure 
                  class="logo"
                  :style="{ background: merchant.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                >
                  <img :src="require(`~/assets/logos/${merchant.imageUrl}`)" />
                </figure>
              </template> 
              <template v-else>
                <figure 
                class="logo -text"
                :class="{'-dark' : merchant.skin.mode === 'dark'}" 
                :style="{ background: merchant.skin.vars.colors.skin}"
                @click="setMerch(merch)"
                >
                  <i class="logo-text">
                    {{merchant.group.slice(0, 3)}}
                  </i>
                </figure>
              </template> 
      </div>

      <div class="hero-info">
        <div class="hero-text -hide-mobile">
          <p>Handla snabbare när du beställer med Purspot och betala med Swish eller kort. Du behöver inte ladda ner någon app eller registrera dig.</p>
        </div>
        <div class="hero-usp">

<div class="ps-usp">
  <div class="ups-body">
    <ul >
  <li >
    <figure>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
    </figure>
    <div class="text">
      Slipp trängsel och kö.
    </div>
  </li>
  <li >
    <figure>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
    </figure>
    <div class="text">
      Betala med Swish eller kort.
    </div>
  </li>
  <li >
    <figure>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
    </figure>
    <div class="text">
      Ingen app eller registrering
    </div>
  </li>
</ul>
  </div>
</div>

        </div>
      </div>

    </div>

  </div>


  </div>


    <h1>Välj Varor</h1>
<!-- 
    <div class="ps-items">

      <a href="ps-step-2.html" class="ps-item -place">
        <div class="header">Västgötagatan</div>
        <div class="text">Hämta i luckan mot gatan..</div>
        <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></figure>
      </a>

      <a href="ps-step-2.html" class="ps-item -place">
        <div class="header">Liljeholmen</div>
        <div class="text">Hämta i luckan mot gatan..</div>
        <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></figure>
      </a>

      <a href="ps-step-2.html" class="ps-item -place">
        <div class="header">Rörstrandsgatan</div>
        <div class="text">Hämta i luckan mot gatan..</div>
        <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></figure>
      </a>



    </div> -->




</div>

</div>



</template>

<script>


export default {
  // asyncData ({ req, params }) {

  //   // We can return a Promise instead of calling the callback
  //   return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/locations/' + params.id)
  //     .then(res => res.json())
  //     .then((data) => {
  //       return { mm: data[0] }
  //     })
  // },

  head () {
    return {
      style: [
        // { cssText: `body { color: red!important; display: ${this.mm.name}; }`, type: 'text/css' }
      ],
      title: "Purspot | Olearys",
      bodyAttrs: {
        class: '-mode-dark'
      },
      style: [
        { cssText:
          `:root {
            --ps-skin: ${this.merchant.skin.vars.colors.skin};
            --ps-skin-bg: var(--ps-skin);
            --ps-link: ${this.merchant.skin.vars.colors.link};
            --ps-btn-txt: ${this.merchant.skin.vars.colors.btnText};
          }

          .-mode-dark,
          .-mode-light  {
            --ps-skin: ${this.merchant.skin.vars.colors.skin};
            --ps-skin-bg: var(--ps-skin);
            --ps-link: ${this.merchant.skin.vars.colors.link};
            --ps-btn-txt: ${this.merchant.skin.vars.colors.btnText};
          }` ,
          type: 'text/css'}
      ]

    }
  },
  data() {
    return {
      id: this.$route.params.id,
      merchant: this.$store.getters.getMerch
    }
  },

  mounted() {



  }

  // async fetch() {
  //   this.merchant = await fetch('https://purspotapi-dev.azurewebsites.net/api/shop/locations/' + this.$route.params.id).then(res =>
  //     res.json()
  //   )
  // },

}
</script>




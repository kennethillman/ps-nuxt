<template>
<div>


  <div class="ps-hero -brand -no-img-overlay">
    <div class="hero-body">

      <div class="hero-top">
        <h1 class="hero-header"><span>Välkommen till Purspot</span><i>{{groups.name}}</i><span>En mobil Expresskassa!</span></h1>

<!--             <template v-if="merchant.imageUrl">
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
            </template>  -->

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


  <h1>Välj {{groups.name}}</h1>


  <div class="ps-items">

      <nuxt-link  v-for="(group, index) of groups.merchantGroups" :to="/merchant/ + group.id"  class="ps-item -place" :key="group.id">
        <div class="header">{{group.name}}</div>
        <div class="text">{{group.description}}</div>
        <figure><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></figure>

      </nuxt-link>

    </div> 

    <h1>Response</h1>
    {{groups}}

 <Cart />

</div>
</template>

<script>


export default {
  data() {
    return {
      id: this.$route.params.id,
      merchant: this.$store.getters.getMerchant,
      merchantOrg: false,
      products: false
    }
  },
  asyncData ({ req, params, store }) {

      // We can return a Promise instead of calling the callback
      return fetch('https://purspotapi-dev.azurewebsites.net/api/shop/group/' + params.id)
      
        .then(res => res.json())
        .then((data) => {
    
          return { groups: data }
        })

  },

  // async asyncData({ $axios }) {
  //   const test = await $axios.$get('http://icanhazip.com')
  //   return { test }
  // },


  head () {
    return {
      style: [
        // { cssText: `body { color: red!important; display: ${this.mm.name}; }`, type: 'text/css' }
      ],
      title: "Purspot | Group",
      // style: [
      //   { cssText:
      //     `:root {
      //       --ps-skin: ${this.merchant.skin.vars.colors.skin};
      //       --ps-skin-bg: var(--ps-skin);
      //       --ps-link: ${this.merchant.skin.vars.colors.link};
      //       --ps-btn-txt: ${this.merchant.skin.vars.colors.btnText};
      //     }

      //     .-mode-dark,
      //     .-mode-light  {
      //       --ps-skin: ${this.merchant.skin.vars.colors.skin};
      //       --ps-skin-bg: var(--ps-skin);
      //       --ps-link: ${this.merchant.skin.vars.colors.link};
      //       --ps-btn-txt: ${this.merchant.skin.vars.colors.btnText};
      //     }` ,
      //     type: 'text/css'}
      // ]

    }
  },

  methods: {
    setMode(m) {
      this.$store.dispatch("setAppMode", m);
    },
    setEntry(m) {
      this.$store.dispatch("setVisitorEntry", m);
    },
  },
  mounted() {
   // this.setMode(this.merchant.skin.mode)

    if(!this.$store.getVisitorEntry) {
      this.setEntry('merchnant')  
    }

    this.$store.dispatch("setCartOpen", false);  
    
  }






}
</script>




<template>
<div>


  <div class="startpage-top">



    <!-- hero -->
    <div class="ps-hero">
      <div class="hero-body">

        <h1 class="hero-header"><i>Purspot</i> är en Expresskassa i din mobiltelefon</h1>

        <div class="hero-info">
          <div class="hero-text">
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
      <div class="hero-usp -hide">

      </div>
    </div>

  </div>


  <div class="startpage-merchants">

    <!-- search -->
    <div class="ps-search -full -start">
      <svg-icon name="search" />
      <input type="text" name="" placeholder="Sök handlare..." v-model="search">
    </div>



      <!-- mearchants -->
      <div class="ps-items -small -start">

        <div class="header -small -hide">
          (Search view, only when searching )
        </div>

        <!-- hidden for search -->
        <div class="ps-item -merchant -hide">

          <figure class="merchant-logo">
            <img src="data:image/png;base64,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">
          </figure>
          <div class="merchant-info">
            <div class="name">Olearys</div>
            <div class="place">Mall of Scanidnaiva</div>

            <div class="location">
              <div>
                <span>Drottninggatan 64</span>
                <span>Stockholm, 123 45</span>
              </div>
            </div>
          </div>

        </div>



        <div class="header -small" >
          Handlare, A-Ö
        </div>
 
          <nuxt-link :to="/location/ + merch.id" :id="merch.id" v-for="(merch, index) of filterdMerchants" class="ps-item -merchant -small" :key="index + merch.id">

            <template v-if="merch.imageUrl">
              <figure 
                class="merchant-logo"
                :style="{ background: merch.skin.vars.colors.skin}"
                @click="setMerch(merch)"
              >
                <img :src="require(`~/assets/logos/${merch.imageUrl}`)" />
              </figure>
            </template> 
            <template v-else>
              <figure 
              class="merchant-logo -text"
              :class="{'-dark' : merch.skin.mode === 'dark'}" 
              :style="{ background: merch.skin.vars.colors.skin}"
              @click="setMerch(merch)"
              >
                <i class="logo-text">
                  {{merch.group.slice(0, 3)}}
                </i>
              </figure>
            </template> 
                
       
            <div class="merchant-info" @click="setMerch(merch)">
              <div class="name">{{merch.nameShort}}</div>
              <div class="location">
                <div>
                  <span>{{merch.adress}}, {{merch.city}}, {{merch.postal}}</span>
                </div>
              </div>
            </div>

          </nuxt-link>
        </div>


    </div>


    <!-- hero how -->
    <div class="ps-hero -how">
      <div class="hero-body">

        <h1 class="hero-header"> Så här fungerar det</h1>

        <div class="hero-info">
          <div class="hero-text">
            <p>Handla med din smartphone utan att
  ladda ner en app. <a href="#">Läs mera här</a>.</p>
          </div>
          <div class="hero-usp">


            <div class="ps-usp -how">
              <div class="ups-body">
                <ul >
                  <li >
                    <figure>
                      -
                    </figure>
                    <div class="text">
                       Välj handlare och beställ varor

                    </div>
                  </li>
                                  <li >
                    <figure>
                      -
                    </figure>
                    <div class="text">
                       Betala med Swish eller betalkort
                    </div>
                  </li>
                  <li >
                    <figure>
                      -
                    </figure>
                    <div class="text">

                       Pling i mobilen när varan är klar

                    </div>
                  </li>
                                  <li >
                    <figure>
                      -
                    </figure>
                    <div class="text">
                       Hämta varorna eller få leverans
                    </div>
                  </li>

                </ul>
              </div>
            </div>


          </div>
        </div>




      </div>
      <div class="hero-usp -hide">

      </div>
    </div>

    <!-- hero how -->
      <div class="ps-hero -how -connect">
      <div class="hero-body">

        <h1 class="hero-header"> Anslut dig som handlare</h1>

        <div class="hero-info">
          <div class="hero-text">
            <p>Vill du som handlare börja erbjuda Purspot till dina kunder och öka din försäljning? <a href="#">Läs mera här</a>.</p>
          </div>

        </div>




      </div>
      <div class="hero-usp -hide">

      </div>
    </div>




  </div>



</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Purspot startpage',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ],
      style: [
        { cssText:
          `:root {
            --ps-skin: ${this.ps[0].settings.skins.vars.default.skin};
            --ps-skin-bg: ${this.ps[0].settings.skins.vars.default.skinBg};
            --ps-link: ${this.ps[0].settings.skins.vars.default.link};
            --ps-btn-txt: ${this.ps[0].settings.skins.vars.default.btnText};
          }

          .-mode-dark {
            --ps-skin: ${this.ps[0].settings.skins.vars.dark.skin};
            --ps-skin-bg: ${this.ps[0].settings.skins.vars.dark.skinBg};
            --ps-link: ${this.ps[0].settings.skins.vars.dark.link};
            --ps-btn-txt: ${this.ps[0].settings.skins.vars.dark.btnText};
          }` ,
          type: 'text/css'}
      ]

    }
  },
  data() {
    return {
      search: '',
      merchants: this.$store.getters.getMerchantList,
      ps: this.$store.getters.getAppDefaults,
    };
  },
  computed: {
    filterdMerchants() {
      return this.merchants.filter(mearch => {
         return mearch.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || mearch.group.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    },
  },

  methods: {
    setMerch(m) {
      this.$store.dispatch("setMerchant", m);
    },
    setMode(m) {
      this.$store.dispatch("setAppMode", m);
    },
    setEntry(m) {
      this.$store.dispatch("setVisitorEntry", m);
    },
  },
  mounted() {
    // Startpage should always have Purpsot defaults
    this.setMode('default')
    this.setEntry('home')
  }
      
}
</script>

<style lang="scss">

  .ps-page-container {

    .logo {
      width: 120px;
      margin: 40px auto;
      svg {
        width:100%;
        height: auto;
      }
    }

  }

</style>


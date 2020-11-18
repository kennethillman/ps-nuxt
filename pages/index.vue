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
                  <svg-icon  name="checkbox" />
                </figure>
                <div class="text">
                  Slipp trängsel och kö.
                </div>
              </li>
              <li >
                <figure>
                  <svg-icon  name="checkbox" />
                </figure>
                <div class="text">
                  Betala med Swish eller kort.
                </div>
              </li>
              <li >
                <figure>
                  <svg-icon  name="checkbox" />
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


  <div class="startpage-merchants">

    <!-- search -->
    <div class="ps-search -full -start" >
      <svg-icon name="search" />
      <input type="text" name="" placeholder="Sök handlare..." v-model="search"
      @blur="searchBlur($event)" 
      @focus="searchFocus($event)"
      @keyup="searchKeyup($event)">
    </div>



      <!-- mearchants -->
      <div class="ps-items  -start" :class="{'-small-items -small': !searchActive}">


<!--         <div class="header -small" >
          Groups
        </div> -->

        <div class="header -small" v-if="!searchActive">
          Handlare, A-Ö
        </div>
        <div class="header -small" v-else>
          Sök resultat:
        </div>

        
 
          <nuxt-link :to="/merchant/ + merch.id" :id="merch.id" v-for="(merch, index) of filterdMerchants" class="ps-item -merchant " :key="index + merch.id">



            <template v-if="merch.imageUrl">
                <figure 
                  class="merchant-logo"
                  :style="{ background: merch.customStyling.styling.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                >
                  <img :src="merch.imageUrl" />
                </figure>
            </template> 
            <template v-else>

              <figure 
              class="merchant-logo -text"
              :class="{'-dark' : merch.customStyling.styling.skin.mode === 'dark'}" 
              :style="{ background: merch.customStyling.styling.skin.vars.colors.skin}"
              @click="setMerch(merch)"
              >
                <i class="logo-text" v-if="merch.group">
                  {{merch.group.slice(0, 3)}}
                </i>
                <i class="logo-text" v-else>
                  {{merch.name.slice(0, 3)}}
                </i>
              </figure>
            </template> 
                
       
            <div class="merchant-info" @click="setMerch(merch)">
              <div class="name">{{merch.name.slice(0, 12)}}</div>
              <div class="location">
                <div>
                  <span v-if="merch.adress">{{merch.adress}}, </span><span v-if="merch.city"> {{merch.city}} </span><span v-if="merch.postal">, {{merch.postal}}</span>
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
                  <li>
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
  transition: 'custom',
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
            --ps-skin: #ffffff;
            --ps-skin-bg: #ffffff;
            --ps-skin-start-bg: linear-gradient(#fff, #fff 34%, #efefef 90%);
            --ps-link: #99bd48;
            --ps-btn-txt: #ffffff;
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
      searchActive: false
    };
  },
  computed: {
    filterdMerchants() {
      return this.merchants.filter(mearch => {


         //return mearch.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || mearch.group.toLowerCase().indexOf(this.search.toLowerCase()) > -1
         return mearch.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    },
  },

  methods: {
    searchKeyup(event) {
      let el = event.target;
      this.searchActive = true

      if (el.value === ""){
        this.searchActive = false
      }

      
    },
    searchFocus(event) {

      let x,y,el = event.target
      let rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      x = rect.left + scrollLeft
      y = rect.top + scrollTop - 8

      window.scrollTo(0, y);
      this.$store.dispatch("setAppHideHeader", true)

    },
    searchBlur(event){
       let x,y,el = event.target
      let rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      x = rect.left + scrollLeft
      y = rect.top + scrollTop - 90

      window.scrollTo(0, y);
      this.searchActive = false
      this.$store.dispatch("setAppHideHeader", false)
    },
    setMerch(m) {
      this.$store.dispatch("setMerchant", m);
    },
  },
  mounted() {

    // Update active step
    this.$store.dispatch("setVisitorActiveStep", 1);
    this.$store.dispatch("setCartOpen", false);  

    // Startpage should always have Purpsot defaults
    this.$store.dispatch("setAppMode", 'default');
    this.$store.dispatch("setVisitorEntry", 'home');
  }
      
}
</script>




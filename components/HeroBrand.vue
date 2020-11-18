<template>

       <div class="ps-hero -brand " 
            :class="{'-no-img-overlay' : merchant.customStyling.bgImageOverlay}" 
            :style="{ 'background-image': 'url(' + merchant.customStyling.bgImageUrl + ')' }"
        >
        <div class="hero-body">

          <div class="hero-top">
            <h1 class="hero-header"><span>Välkommen till Purspot</span><i><!-- {{merchant.group}}<br> -->{{merchant.name}}</i><span>En mobil Expresskassa!</span></h1>

              
                <template v-if="merchant.imageUrl">
                    <figure 
                      class="logo"
                      :style="{ background: merchant.customStyling.styling.skin.vars.colors.skin}"
                      @click="setMerch(merch)"
                    >
                      <img :src="merchant.imageUrl" />
                    </figure>
                </template> 
                <template v-else>
                  <figure 
                  class="logo -text"
                  :class="{'-dark' : merchant.customStyling.styling.skin.mode === 'dark'}" 
                  :style="{ background: merchant.customStyling.styling.skin.vars.colors.skin}"
                  @click="setMerch(merch)"
                  >
                    <i class="logo-text">
                      {{merchant.name.slice(0, 3)}}
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

</template>


<script>

  export default {
    props:[
      'merchant'
    ]
  }
</script>

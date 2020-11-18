<template>

        <div class="ps-info-item -merchant js-merchant -close " >
        <div class="adress">
          <div class="header" v-if="merchant.group">{{merchant.group}}</div>
          <div class="header -sub">{{merchant.name}}</div>
            <div class="text">
              <div v-if="merchant.address">{{merchant.address}}, {{merchant.city}}</div>
              <span v-if="merchant.telephone"> Telefon: {{merchant.telephone}}</span>
             
            </div>
            <div class="text -extra">
              <br>
              
            Demo AB, 
            <br>559009-9007<br>
            Levernas ider kan variera mellan 20-40 min <br><br> 
            Org Birkavägen 4, <br>152 41 Solna<br>
            
            </div>
            <a href="#" class="ps-btn -xsmall -ghost -inbl -mode js-merchant-click">Mer info</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
        </div>

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

</template>


<script>

  export default {
    props:[
      'merchant'
    ]
  }
</script>

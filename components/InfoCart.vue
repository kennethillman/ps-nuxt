<template>


<div class="ps-info-item -cart">
  <div class="ps-body">
    <div class="sum">
      <div class="header" v-if="this.$route.name === 'checkout-id'">
        Belopp att betala 
      </div>
      <div class="header" v-if="this.$route.name !== 'checkout-id'">
        Betalt belopp
      </div>
      <div class="num">
        {{this.$store.getters.getCartTotal}} sek
      </div>
    </div>
    <div class="code " v-if="this.$route.name !== 'checkout-id'">
      <div class="header">
        Köpkod
      </div>
      <div class="num">
        xxx
      </div>
    </div>
    <svg-icon name="dollar" />      
  </div> 

</div> 


</template>


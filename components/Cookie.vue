<template>

<div class="ps-cookie" v-if="!cookie">
  <div class="cookie-body ">

    <div class="cookie-text">
      <h2 class="header">Din intergitet</h2>
      <p>Denna webbsida använder cookies för att din användarupplevelse ska bli så bra som möjligt.</p>
    <a href="">Läs mer om cookies här </a>
    </div>
 
    <div class="cookie-button">
      <a href="#" class="ps-btn -small -inbl" @click="acceptCookie">
        Jag accepterar
      </a>
    </div>
    
  </div> 
</div>

</template>


<script>

  export default {
    data(){
      return {

        cookie: false,
      }
    },
    methods: {

      acceptCookie: function(){
        this.cookie = true
        this.$store.commit("setVisitorCookie", true)
      },


    }

  }
</script>

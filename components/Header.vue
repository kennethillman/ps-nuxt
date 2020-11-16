<template>

    <!-- header -->
    <div class="ps-header " :class="{'-hide' : this.$store.getters.getAppHideHeader}">
      <div class="ps-body">

        <figure class="ps-logo">

          <nuxt-link to="/">
              <template v-if="this.$store.getters.getAppMode === 'default'">
                <svg-icon name="logo"/>
              </template>
              <template v-else>
                <svg-icon name="logo-black"/>
              </template>                      
          </nuxt-link> 

              
        </figure>

        <div class="ps-header-steps">
          <div class="box-steps ">

            <div v-for="(step, index) of steps" class="step" :key="index+'step'"
            :class="{'-active': $store.getters.getVisitorActiveStep === index+1,'-done': $store.getters.getVisitorActiveStep >= index+2}"
            >

              <figure><span>{{step}} </span></figure>
              <div></div>

            </div>

          </div>
        </div>

        <div class="ps-menu-toggle" @click="toggleMenu">
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

</template>


<script>

  export default {
    data(){
      return {
        stepType: this.$store.getters.getLocationDelivery,
        steps: []
      }
    },
    methods: {
      toggleMenu: function(){
        this.isMenuOpen = !this.isMenuOpen;
        this.$store.dispatch("setAppMenuOpen",this.isMenuOpen);
      },
      closeMenu: function(){
        this.$store.dispatch("setAppMenuOpen",false);
      },
      setSteps: function(){

        if (this.stepType === "fetch") {
          this.steps = ["Plats","Varor","Betala","Bered.","Hämta"]
        } else if (this.stepType === "recive")  {
          this.steps = ["Plats","Varor","Betala","Bered.","Vänta"]
        } else if (this.stepType === "delivery")  {
          this.steps = ["Plats","Varor","Betala","Bered.","Leverans"]
        } else if (this.stepType === "pay")  {
          this.steps = ["Plats","Varor","Betala","Kvitto"]
        }
        
        
      }

    },
    mounted(){
      this.setSteps()
    }

  }
</script>

<template>
  <div>

    <!-- PURSPOT WRAPPER - For styling -->
    <div class="purspot" :class="{'-open-menu' : this.$store.getters.getAppMenuOpen,'-open-cart' : !this.$store.getters.getCartOpen}">

        <!-- HEADER -->
        <Header /> 
       
        <!-- NUXT -->
        <Nuxt />
       
       <!-- COKKIE -->
       <!--    <Cookie /> -->

    </div>

  </div>
</template>



<script>

export default {
  head() {
    return {
      bodyAttrs: {
        class: `-mode-${this.$store.getters.getAppMode} `
      }
    }
  }
}

</script>

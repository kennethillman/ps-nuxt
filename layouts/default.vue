<template>
  <div>

    <div class="purspot" 
    :class="{'-open-menu' : this.$store.getters.getAppMenuOpen}"
    >
        <Header /> 
        <Nuxt />
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

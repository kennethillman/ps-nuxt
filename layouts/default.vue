<template>
  <div>

    <div class="purspot">
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
        class: `-mode-${this.$store.getters.getAppMode}`
      }
    }
  }
}

</script>

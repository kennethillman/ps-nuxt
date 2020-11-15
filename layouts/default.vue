<template>
  <div>

    <div class="purspot" 
    :class="{
      '-mode-default': this.$store.getters.getAppMode === 'default',
      '-mode-dark': this.$store.getters.getAppMode === 'dark',
      '-mode-light': this.$store.getters.getAppMode === 'light',
      '-open-menu': this.$store.getters.getAppMenuOpen === true
    }">
        <Header /> 
        <Nuxt />
     <!--    <Cookie /> -->
    </div>

  </div>
</template>





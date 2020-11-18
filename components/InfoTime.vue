<template>

<div class="ps-info-item -time">
  <div class="ps-body">

    <div class="open">
      <div class="header">
        ÖPPETTIDER idag 
      </div>
      <div class="time">
        xx:xx - xx:xx
      </div>
    </div>
    <div class="order">
      <div class="header">
        Ordertider idag 
      </div>
      <div class="time">
        xx:xx - xx:xx
      </div>
    </div>

    <svg-icon name="time" />  

  </div> 
</div>

</template>


<script>

  export default {
    props:[
      'location'
    ]
  }
</script>

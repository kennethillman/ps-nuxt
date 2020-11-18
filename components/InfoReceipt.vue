<template>

    <div class="ps-info-item -recipte" :class="{'-sent' : this.sent}">
        <div class="ps-body">

        	<div class="ps-hide">
        		<div class="ps-transition">
        		
	                <div class="ps-send">
			        	<div class="header">Skicka kvitto</div>
				          <div>
				            Ange e-pst och mobilnummer för att få kvitto eller vid 
				    		eventuella frågor från handlaren om ditt köp.
				          </div>
				           <div class="ps-forms">
				            <input type="text" placeholder="E-post..." name="">
				            <input type="text" placeholder="Mobilnummer..." name="">
				            
				          </div>
				          <div class="ps-forms -second">

				          <label class="radio-wrapper" for="RememeberMe">
				                  <span>Kom ihåg mig</span>
				                  
				                  <label class="ps-rc">
				                    <input type="checkbox" name="test">
				                    <span class="checkmark"></span>
				                  </label>

				              </label> 
				              <button class="ps-btn -small -inbl" @click="send()">Skicka</button>

				          </div>
				       
				          
		        	</div>

		        	<div class="ps-sent">
		        		
					    <div class="header">Kvittot är skickat!</div>
					    <div class="text">
					    	0701234568 / stefan.andersson@gmail.com
					    </div>
					    <a href="" @click.prevent="send()">Blev det fel nummer eller epost?</a>
					  

		        	</div>

        		</div>
        	</div>

        	   <svg-icon name="send" /> 
        	
      </div>

    </div> 


</template>


<script>

  export default {
    data(){
      return {
        sent: false,
      }
    },
    methods: {
      send(){
        if(!this.sent){
         	this.sent = true
        } else {
        	this.sent = false
        }

        
      },



    }

  }



</script>


<template>

<div class="ps-info-item -place">
	<div class="place">
	    <div class="header">{{location.name}}</div>
	    <div class="text">
	      xxx
	    </div>
	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-1 5v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l.471 4h-13.385l.471-4h2.221z"></path></svg>
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

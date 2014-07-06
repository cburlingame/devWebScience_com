<style>
	.box-shadow-menu 
	{
	   position: relative;
	   padding-left: 1.25em;
	}
		
	.box-shadow-menu:before 
	{
		content: "";
	  	position: absolute;
	  	left: 0;
	  	top: 0.25em;
	  	width: 1em;
	  	height: 0.15em;
	  	background: ##ddd;
	  	box-shadow: 0 0.25em 0 0 ##ddd, 0 0.5em 0 0 ##ddd;
	}
	
	.outerContainer
	{
		border:2px solid green;
		background:transparent;
		position:absolute;
		height:75%;
		width:15%;
	}
</style>

<fieldset>
	<legend>
		<span onClick="buildNav();" class="box-shadow-menu">Navigate</span>
	</legend>
	
	<div class="content">
		<span>Home</span><br>
		<span>Mission</span><br>
		<span>Programs</span><br>
		<span>Contact</span><br>
		<span>About</span>
	</div>
</fieldset>
<script type="text/javascript">
	buildNav = function()
	{
		alert('build the navigation');	
	}
</script>
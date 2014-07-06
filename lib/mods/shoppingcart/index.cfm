<!DOCTYPE HTML>
<cfoutput>
<head>
	<title>dev.webScience()</title>
	<meta name="Keywords" content="dev,development,web,code,HTML,HTML5,CSS,CSS3,JavaScript,JS,AJAX,ColdFusion,Cold Fusion,Railo,cfml,SQL,databases,website,websites,application,webapp,web application">
  	<meta name="Description" content="The Science of Web Development. Bringing web apps to the masses.">

	<!--- <link rel="stylesheet" href="lib/css/devwebscience.css" type="text/css"> --->
  	<!--- <link ref="lib/css/print.css" rel="stylesheet" type="text/css"> --->

	<!--- <script type="text/javascript" src="lib/js/devWebScience.js"></script>
	<script type="text/javascript" src="lib/js/lightbox.js"></script> --->
	<!--- <script type="text/javascript">
		initializeCamera = function()
		{
			// Grab elements, create settings, etc.
			var canvas = document.getElementById("canvas");
			var context = canvas.getContext("2d");
			var video = document.getElementById("video");
			var videoObj = { "video": true };
			var errBack = function(error) {console.log("Video capture error: ", error.code);};
			
			// Put video listeners into place
			if(navigator.getUserMedia) 
			{ // Standard
				navigator.getUserMedia(videoObj, function(stream) 
				{
					video.src = stream;
					video.play();
				}, errBack);
			} 
			else if(navigator.webkitGetUserMedia) 
			{ // WebKit-prefixed
				navigator.webkitGetUserMedia(videoObj, function(stream)
				{
					video.src = window.webkitURL.createObjectURL(stream);
					video.play();
				}, errBack);
			}
			else if(navigator.mozGetUserMedia) 
			{ // Firefox-prefixed
				navigator.mozGetUserMedia(videoObj, function(stream)
				{
					video.src = window.URL.createObjectURL(stream);
					video.play();
				}, errBack);
			}
				
			context.drawImage(video, 0, 0, 400, 250);
		}
		
		takePhoto = function()
		{
			// Grab elements, create settings, etc.
			var canvas = document.getElementById("canvas");
			var context = canvas.getContext("2d");
			
			document.getElementById("snap").addEventListener("click", function() {
				// if(canvas)
				// {
					context.drawImage(video, 0, 0, 200, 150);
				// }
			});							
		}
		
		/*function saveImage()
		{
		    var xmlhttp;
		    xmlhttp=((window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"));
		    xmlhttp.onreadystatechange=function()
		    {
		        if (xmlhttp.readyState==4)
		        {
		            if(xmlhttp.status==200)
		            {
		                //handle success                
		            }
		        }
		    }
		    
		    xmlhttp.open("POST",baseURL,true);
		    
		    var oldCanvas = under.toDataURL("image/png");
		    var params=oldCanvas;
		    
		    xmlhttp.setRequestHeader("Content-type", "application/upload");
		    xmlhttp.setRequestHeader("Content-length", params.length);
		    xmlhttp.setRequestHeader("Connection", "close");
		    xmlhttp.send(params);
		}*/
	</script> --->
	<!--- if sent is in url and = 1 then show message and set url.sent = 0 or remove it from the query_string --->
</head>
<body>
	<div>
		<fieldset class="primaryFieldset">
			<legend class="primaryLegend">
				dev.webScience();
			</legend>
			<span id="welcome" onClick="javascript:getUsersName('$cr1ptNiNj@');">Building the Web through Education and Innovation</span>
		</fieldset>
		
		<div class="contentContainer">
			<h2>COMING SOON!!<br><br>This Site is Under Construction</h2>
			
			<span>please come back and check us out... we think you will like it.. a lot!</span>
		</div>
	</div>
</body>
</cfoutput>
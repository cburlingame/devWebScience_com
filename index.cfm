<!DOCTYPE HTML>
<cfoutput>
<html ng-app>
<head>
	<title>dev.webScience()</title>
	<meta name="Keywords" content="dev,development,web,code,HTML,HTML5,CSS,CSS3,JavaScript,JS,AJAX,ColdFusion,Cold Fusion,Railo,cfml,SQL,databases,website,websites,application,webapp,web application">
  	<meta name="Description" content="The Science of Web Development. Bringing web apps to the masses.">
	<link rel="stylesheet" href="lib/css/devwebscience.css" type="text/css">
	<link ref="lib/css/print.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="lib/js/devwebscience.js"></script>
	
	<!--- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script> ---> <!--- minified prod version --->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.js"></script> <!--- human readable dev version --->
	<script type="text/javascript" src="lib/js/lightbox.js"></script>
	
	<!--- confirmation screen after message sent --->
	<cfif isDefined('URL.sent') and URL.sent EQ 1>
		<script type="text/javascript">
			buildStage('8');
			removeParameter('sent');
			
			function removeParameter(parameter)
			{
			   //Get Query String from url
			   fullQString = window.location.search.substring(1);
			   
			   paramCount = 0;
			   queryStringComplete = "?";
			
			   if(fullQString.length > 0)
			   {
			       //Split Query String into separate parameters
			       paramArray = fullQString.split("&");
			       
			       //Loop through params, check if parameter exists.  
			       for (i=0;i<paramArray.length;i++)
			       {
			         currentParameter = paramArray[i].split("=");
			         if(currentParameter[0] == parameter) //Parameter already exists in current url
			         {
			            //don't include existing (will be appended to end of url)
			         }
			         else //Existing unrelated parameter
			         {
			            if(paramCount > 0)
			               queryStringComplete = queryStringComplete + "&";
			           
			            queryStringComplete = queryStringComplete + paramArray[i];
			            paramCount++;
			         }
			       }
			   }
			   
			   window.location = self.location.protocol + '//' + self.location.host + self.location.pathname + queryStringComplete;
			}
		</script>
	</cfif>	
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
	<!--- onLoad: save user data to local storage --->
	<!--- on menu click: build nav --->
	<fieldset class="primaryFieldset">
		<legend class="primaryLegend">
			<span onClick="buildNav();" class="box-shadow-menu"><strong>dev.webScience();</strong></span>
		</legend>
				
		<span id="welcome" onClick="javascript:getUsersName('$cr1ptNiNj@');">Building the Web through Education and Innovation</span>
		
		<span id="toolBar">
			<img src="/lib/images/printer32.png" style="float:right;top:-5px;left:-300px;position:relative;" onClick="window.print();">
			<img src="/lib/images/email32.png" style="float:right;top:-8px;left:-200px;position:relative;" onClick="window.location.href='mailto:craig@cburlingame.com'">
			<!--- <img src="/lib/images/facebook.png" style="float:right;top:-5px;left:-100px;position:relative;">
			<img src="/lib/images/linkedin.png" style="float:right;top:-5px;left:0px;position:relative;"> --->
		</span>
	</fieldset>
		
	<div class="contentContainer">
		<h2>COMING SOON!!</h2>
			
		<span>please come back and check us out... we think you will like it.. a lot!</span>
	</div>
</body>
</html>
</cfoutput>
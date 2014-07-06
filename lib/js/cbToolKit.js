function getClickLocation(e)
{
	var evt = e ? e:window.event;
	var clickX=0, clickY=0;
	var arrayReturn = new Array();
			
	if ((evt.clientX || evt.clientY) &&	document.body && document.body.scrollLeft!=null) 
    {
 		clickX = evt.clientX + document.body.scrollLeft;
 		clickY = evt.clientY + document.body.scrollTop;
 	}
		 
 	if ((evt.clientX || evt.clientY) && document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.scrollLeft!=null) 
 	{
		clickX = evt.clientX + document.documentElement.scrollLeft;
		clickY = evt.clientY + document.documentElement.scrollTop;
	}
		 
 	if (evt.pageX || evt.pageY) 
 	{
		clickX = evt.pageX;
		clickY = evt.pageY;
	}
		
	arrayReturn[0] = clickX;
	arrayReturn[1] = clickY;
			 
	return arrayReturn;
};

function getParameterByName(name) 
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);
	    
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

getHighestZindex = function()
{
	var elements = document.getElementsByTagName("*");
	var highest_index = 0;
			
	for (var i=0;i<elements.length - 1;i++) 
	{
	    if (parseInt(elements[i].style.zIndex) > highest_index) 
	    {
	        highest_index = parseInt(elements[i].style.zIndex);
	    }
	}

	return (highest_index + 1);
};

makeListener = function() /* test it.. made changes */
{
	// add click listener & prevent the submit event from committing
	var oElems = document.getElementsByTagName("input");
	for (var i=0; i<oElems.length; ++i) 
	{
		if (oElems[i].type == "SUBMIT" || oElems[i].type == "Submit" || oElems[i].type == "submit")
	    {
		    if(oElems[i].addEventListener)
		    {
		    	if(oElems[i].preventDefault)
		    	{
		    		oElems[i].preventDefault();
		    		oElems[i].returnValue = false;
		    	}
		    	else
		    	{
		    		oElems[i].returnValue = false;
		    	}
			    oElems[i].addEventListener('click', function() { validateForms(); return false;});    
			} 
			else if(oElems[i].attachEvent) // IE < 9
			{ 
			 	oElems[i].returnValue = false; // IE does not support preventDefault()... dude, IE8 is soo weak
		    	oElems[i].attachEvent('onclick', function() { validateForms(); return false;});
			}
		}
	}
};

preventSubmit = function(event)  /* complete it & test it */
{
	// return false;
	// event.preventDefault();
	// cancelBubble?
};

asyncCall = function()
{
	// generic async request transport
};

postFrm = function()
{
	// build it
};

function jsInclude(id, url)
{
	var xmlHttp;
	
	try 
	{
		xmlHttp = new XMLHttpRequest();		
	} 
	catch (e) 
	{
		try 
		{
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e) 
		{
			try 
			{
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (e) 
			{
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
		
	xmlHttp.onreadystatechange = function()
	{
		if (xmlHttp.readyState == 4) 
		{
			if(xmlHttp.responseText == undefined)
			{
				elem.innerHTML = 'add loading image';		
			}
			else
			{
				elem.innerHTML = xmlHttp.responseText;
			}
		}
	}

	var elem = document.getElementById(id);
	if (!elem) 
	{
		alert('The element with the passed ID: ' + id + ' doesn\'t exist.');
		return;
	}
		
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
};

String.prototype.capitalize = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
};
       
function getUserSystem ()
{
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;
           
    if ((verOffset=nAgt.indexOf("Opera"))!=-1)
    {
         browserName = "Opera";
         fullVersion = nAgt.substring(verOffset+6);
         if ((verOffset=nAgt.indexOf("Version"))!=-1)
           fullVersion = nAgt.substring(verOffset+8);
    }
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1)
    {
         browserName = "Microsoft Internet Explorer";
         fullVersion = nAgt.substring(verOffset+5);
    }
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1)
    {
         browserName = "Chrome";
         fullVersion = nAgt.substring(verOffset+7);
    }
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1)
    {
         browserName = "Safari";
         fullVersion = nAgt.substring(verOffset+7);
         if ((verOffset=nAgt.indexOf("Version"))!=-1)
           fullVersion = nAgt.substring(verOffset+8);
    }
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1)
    {
         browserName = "Firefox";
         fullVersion = nAgt.substring(verOffset+8);
    }
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
              (verOffset=nAgt.lastIndexOf('/')) )
    {
         browserName = nAgt.substring(nameOffset,verOffset);
         fullVersion = nAgt.substring(verOffset+1);
         if (browserName.toLowerCase()==browserName.toUpperCase())
         {
              browserName = navigator.appName;
         }
    }
           
    if ((ix=fullVersion.indexOf(";"))!=-1)
       fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
       fullVersion=fullVersion.substring(0,ix);
   
    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion))
    {
         fullVersion  = ''+parseFloat(navigator.appVersion);
         majorVersion = parseInt(navigator.appVersion,10);
    }
       
    var userSystem = [];
    userSystem.browserNm = browserName;
    userSystem.versionFull = fullVersion;
    userSystem.versionMajor = majorVersion;
    userSystem.appName = navigator.appName;
    userSystem.userAgent = navigator.userAgent;
           
    return userSystem;
};
       
function validateForms ()
{
    var userSys = getUserSystem();
   
    if (userSys.browserNm == 'Firefox')
    {
        var forms = document.getElementsByTagName("form");
       
        for(var x = 0; x < forms.length; x++)
        {
            var thisForm = document.getElementsByTagName("form");
            var inputs = document.getElementsByTagName("input");
            var check = 0;
                               
            
            for(var i = 0; i < inputs.length; i++)
            {
            	if (inputs[i].required == true)
            	{
                       if (inputs[i].value == "")
                       {
                           elName = inputs[i].name.capitalize();
                           alert(elName.replace( /([a-z])([A-Z])/g, "$1 $2") + '  is required.');
                           check = 0;
                           return false;
                       }
                       else
                       {
                           	check = check + 1;
                          
                           	if(inputs[i].type == 'email')
	                        {
	                            var atPos = inputs[i].value.indexOf("@");
	                            var dotPos = inputs[i].value.lastIndexOf(".");
	                               
	                            if (atPos == -1 || dotPos == -1 || dotPos<atPos || dotPos+3>=inputs[i].value.length)
	                            {
	                                alert("Not a valid e-mail address, a valid email address is required.");
	                                check = 0;
	                                return false;
	                            }
	                        }
                       }
                }
            }
        }
    }
    else if (userSys.browserNm == 'Microsoft Internet Explorer')
    {
        if (userSys.versionMajor <= 8) // IE8 and below
        {
            var forms = document.getElementsByTagName("form");
           
            for(var x = 0; x < forms.length; x++)
            {
                var thisForm = document.getElementsByTagName("form");
                var inputs = document.getElementsByTagName("input");
                var check = 0;
                       
                for(var i = 0; i < inputs.length; i++)
                {
                    if (inputs[i].getAttribute('required') == "true")
                       {
                           if (inputs[i].value == "")
                           {
                               elName = inputs[i].name.capitalize();
                               alert(elName.replace( /([a-z])([A-Z])/g, "$1 $2") + '  is required...');
                               check = 0;
                               return false;
                           }
                           else
                           {
                               check = check + 1;
                              
                               if(inputs[i].getAttribute('type') == 'email')
                            {
                                   var atPos = inputs[i].value.indexOf("@");
                                var dotPos = inputs[i].value.lastIndexOf(".");
                               
                                if (atPos == -1 || dotPos == -1 || dotPos<atPos || dotPos+3>=inputs[i].value.length)
                                {
                                    alert("Not a valid e-mail address, a valid email address is required.");
                                    check = 0;
                                    return false;
                                }
                            }
                        }
                       }
                       else
                       {
                           check = check + 1;
                       }
                }
            }
        }
        else // IE9 and above
        {
            var forms = document.getElementsByTagName("form");
            var evt = window.event;
           
            for(var x = 0; x < forms.length; x++)
            {
                var thisForm = document.getElementsByTagName("form");
                var inputs = document.getElementsByTagName("input");
                var check = 0;
                                       
                for(var i = 0; i < inputs.length; i++)
                {
                   if (inputs[i].getAttribute('required') == "true")
                   {
                           if (inputs[i].value == "")
                           {
                               elName = inputs[i].name.capitalize();
                               alert(elName.replace( /([a-z])([A-Z])/g, "$1 $2") + '  is required.');
                               check = 0;
                               returnValue = false;
                               if(evt.returnValue) {
                                evt.returnValue = false;
                                evt.stopPropagation();
                                evt.preventDefault();
                            }
                           }
                           else
                           {
                               check = check + 1;
                              
                               if(inputs[i].type == 'email')
                            {
                                   var atPos = inputs[i].value.indexOf("@");
                                var dotPos = inputs[i].value.lastIndexOf(".");
                                       
                                if (atPos == -1 || dotPos == -1 || dotPos<atPos || dotPos+3>=inputs[i].value.length)
                                {
                                    alert("Not a valid e-mail address, a valid email address is required.");
                                    check = 0;
                                    returnValue = false;
                                       if(evt.returnValue) {
                                        evt.returnValue = false;
                                        evt.stopPropagation();
                                        evt.preventDefault();
                                    }
                                   }
                            }
                           }
                       }
                }
            }
        }
    }           
    else if (userSys.browserNm == "Chrome")
    {
        var forms = document.getElementsByTagName("form");
       
        for(var x = 0; x < forms.length; x++)
        {
            var thisForm = document.getElementsByTagName("form");
            var inputs = document.getElementsByTagName("input");
            var check = 0;
                                   
            for(var i = 0; i < inputs.length; i++)
            {
               if (inputs[i].required == true)
               {
                       if (inputs[i].value == "")
                       {
                           elName = inputs[i].name.capitalize();
                           alert(elName.replace( /([a-z])([A-Z])/g, "$1 $2") + '  is required.');
                           check = 0;
                           return false;
                       }
                       else
                       {
                           check = check + 1;
                          
                           if(inputs[i].type == 'email')
	                       {
	                           var atPos = inputs[i].value.indexOf("@");
	                           var dotPos = inputs[i].value.lastIndexOf(".");
	                                   
	                           if (atPos == -1 || dotPos == -1 || dotPos<atPos || dotPos+3>=inputs[i].value.length)
	                           {
	                               alert("Not a valid e-mail address, a valid email address is required.");
	                               check = 0;
	                               return false;
	                           }
	                        }
                       }
                   }
            }
        }
    }
           
    if (check != 0)
    {
        thisForm[0].submit();
    }
};



/* mobile - tablet specific */

/*onTouchScreenTap = function ()
{
	// helpers
	var $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document),
    getPointerEvent = function(event) 
    {
        return event.targetTouches ? event.targetTouches[0] : event;
    },
					    
    setListener = function (elm,events,callback) 
    {
        var eventsArray = events.split(' '),
        i = eventsArray.length;
        while(i--)
        {
            elm.addEventListener( eventsArray[i], callback, false );
        }
    };
					
	var $touchArea = $('#touchArea'),
	touchStarted = false, // detect if a touch event is sarted
	currX = 0,
	currY = 0,
	cachedX = 0,
	cachedY = 0;
					
	//setting the events listeners
	setListener($touchArea,'touchstart mousedown',function (e)
	{
	    e.preventDefault(); 
	    var pointer = getPointerEvent(e);
	    // caching the current x
	    cachedX = currX = pointer.pageX;
	    // caching the current y
	    cachedY = currY = pointer.pageY;
	    // a touch event is detected      
	    touchStarted = true;
	    $touchArea.innerHTML = 'Touchstarted';
					  
	    // detecting if after 200ms the finger is still in the same position
	    setTimeout(function ()
	    {
	        if ((cachedX === currX) && !touchStarted && (cachedY === currY)) 
	        {
	            // Here you get the Tap event
	            $touchArea.innerHTML = 'Tap';
	        }
	    },200);
	});

	setListener($touchArea,'touchend mouseup touchcancel',function (e)
	{
	    e.preventDefault();
	    // here we can consider finished the touch event
	    touchStarted = false;
	    $touchArea.innerHTML = 'Touchended';
	});

	setListener($touchArea,'touchmove mousemove',function (e)
	{
	    e.preventDefault();
	    var pointer = getPointerEvent(e);
	    currX = pointer.pageX;
		currY = pointer.pageY;
		if(touchStarted) 
		{
		     // here you are swiping
		     $touchArea.innerHTML = 'Swiping';
		}
					   
	});
};*/

/* onTap - working */
onTap = function()
{
	var tap = true;
	
	document.addEventListener('touchstart',function(e) 
	{
		tap = true;
	});
	
	document.addEventListener('touchmove',function(e) 
	{
		tap = false;
	});
	
	document.addEventListener('touchend',function(e) 
	{
		if(tap) 
		{
			var touch = e.changedTouches[0];
			var pageX = touch.pageX;
			var pageY = touch.pageY;
		}
	});
			   
	testTap = function ()
	{
		el = document.getElementById('tmpTestDiv');
		
		if(el.innerHTML == "Tap")
		{
			el.innerHTML = "Tapped!";
		}
		else
		{
			el.innerHTML = "Tap";
		}

		console.log(el.innerHTML);
	}
};
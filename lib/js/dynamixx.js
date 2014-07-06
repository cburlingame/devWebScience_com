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
}
       
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
}
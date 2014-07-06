buildNav = function()
{
	if(document.getElementById('nav'))
	{
		var navNode = document.getElementById('nav');
		document.body.removeChild(navNode);
	}
	else
	{
		var nav = document.createElement('div');
		nav.setAttribute('id', 'nav');
		nav.setAttribute('class', 'navigation');
		nav.innerHTML = '<a class="navLink" onClick="buildStage(1);">Home</a><br><a class="navLink" onClick="buildStage(2);">Programs</a><br><a class="navLink" onClick="buildStage(3);">Services</a><br><a class="navLink" onClick="buildStage(4);">Mission</a><br><a class="navLink" onClick="buildStage(7);">Contact</a><br><br><div class="fb-like" data-send="true" data-width="450" data-show-faces="false" style="float:right;"></div>';
		/* br a class="navLink" onClick="buildStage(5);" >Code end_a	*/
		/* br a class="navLink" onClick="buildStage(3);" >Poetry end_a */
		document.body.appendChild(nav);
	}
}

buildStage = function(id)
{
	if(id == 1)
	{
		id = 'home';
		path='app/view/';
	}
	else if(id == 2)
	{
		id = 'programs';
		path='app/view/';
	}
	else if(id == 3)
	{
		id = 'services';
		path='app/view/';
	}
	else if(id == 4)
	{
		id = 'mission';
		path='app/view/';
	}
	/*else if(id == 5)
	{
		id = 'code';
		path='app/view/';
	}*/
	/*else if(id == 6)
	{
		id = 'about';
		path='app/view/';
	}*/
	else if(id == 7)
	{
		id = 'contact';
		path='app/view/';
	}
	/*else if(id == 8)
	{
		id = 'sysMessage';
		path='app/view/';
	}*/
			
	// remove current stage if exists
	if(document.getElementsByClassName('stage')[0] != undefined)
	{
		var stageId = document.getElementsByClassName('stage')[0];
		var body = document.body;
		body.removeChild(stageId);
	}
			
	// build new stage
	var stage = document.createElement('div');
	stage.setAttribute('id', id);
	stage.setAttribute('class', 'stage');
	
	document.body.appendChild(stage);
	
	// include cf content
	var content = jsInclude(id, path + id + '.cfm'); // use loading_58x58.png while undefined
	
	if(content !== undefined && content !== 'undefined')
	{
		stage.innerHTML = content;	
	}
	else
	{
		stage.innerHTML = '<img src="/lib/images/image_600449.gif">';
	}
	
};

closeStage = function()
{
	if(document.getElementsByClassName('stage')[0] != undefined)
	{
		var stageId = document.getElementsByClassName('stage')[0];
		var body = document.body;
		body.removeChild(stageId);
	}
};

/* cbToolkit */
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

function jsInclude(id, url)
{
	var xmlHttp;
	
	try 
	{// Firefox, Opera, Safari
		xmlHttp = new XMLHttpRequest();		
	} 
	catch (e) 
	{// IE
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
				elem.innerHTML = '<img src="lib/images/loading_58x58.gif">';		
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
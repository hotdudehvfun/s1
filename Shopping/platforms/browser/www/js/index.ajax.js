window.onload=ajaxStart;
function ajaxStart(argument) 
{
	getDataFromPhp();
}


function getDataFromPhp(argument)
{
		
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) 
	    {
	     		console.log(xhttp.responseText);
	    }
	  };
	  xhttp.open("GET", "http://localhost/shoppy/getdata.php", true);
	  xhttp.send();
}

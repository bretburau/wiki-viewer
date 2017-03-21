const css = require('./app.css'); //from external css module of webpack


function search(e) {
	e.preventDefault();
	//build the query string
	var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=jsonp&srsearch=steve+Gadd";
	var searchText = document.getElementById("search").value;
	console.log(searchText);
	var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    xhr.open('GET', url);
    xhr.onreadystatechange = function() { //callback
    	if (this.readyState == 4 && this.status == 200) { //ensure ajax worked


    	} //else handle errors

    } //end callback
    xhr.send();
	/*
	alert(searchText);
	//make the ajax call
	var httpRequest = new XMLHttpRequest;
	httpRequest.onreadystatechange = function() { ///ajax callback
		//process the json 
	}// end onreadystatechange

	httpRequest.open('GET', url, true);
	httpRequest.send(null);
	*/
} //end search function


document.getElementById("searchButton").onclick = search;


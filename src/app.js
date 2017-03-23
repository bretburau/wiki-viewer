const css = require('./app.css'); //from external css module of webpack



//var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=jsonp&srsearch=steve+Gadd&origin=*";

function search(e) {
	e.preventDefault(); //stop page from reloading

	 $.ajax({
	 	url: "https://en.wikipedia.org/w/api.php",
	 	data: {
	 		action: "query",
	 		format: "json",
	 		list: "search",
	 		srsearch: "Steve Gadd",
	 		origin: "*"
	 	},
	 	success: function(json) {
	 		alert(json);
	 	}
	 }); // end .ajax
	 	
} //end search function


document.getElementById("searchButton").onclick = search;


const css = require('./app.css'); //from external css module of webpack



//var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=jsonp&srsearch=steve+Gadd&origin=*";

function search(e) {
	e.preventDefault(); //stop page from reloading

	var searchText = $("#search").val(); //grab text from input field
	

	$.ajax({
	 	url: "https://en.wikipedia.org/w/api.php",
	 	data: {
	 		action: "query",
	 		format: "json",
	 		list: "search",
	 		srsearch: searchText,
	 		origin: "*"
	 	},
	 	success: function(json) {
	 		var newContent = "";	 		
	 		for(var i=0; i<9; i++) {
	 			var newEntry = "<li class='listing'><h2>" +json.query.search[i].title + "</h2><br>";  //grab title for this listing
 				newEntry += "<p>" + json.query.search[i].snippet + "</li>"; //grab snippet for this listing
	 			newContent += newEntry; //add listing to total content
	 		}; //end success
	 		document.getElementById("list").innerHTML = newContent; //add all content to the ul
	 		document.getElementById("input_form").style.display = "none"; //hide search field
	 	}
	}); // end .ajax
	 	
} //end search function


document.getElementById("searchButton").onclick = search;


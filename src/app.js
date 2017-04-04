const css = require('./app.css'); //from external css module of webpack

var searchButton = document.getElementById("searchButton");
//var resetButton = document.getElementById("reset");
var form = document.getElementById("input_form");
var h1 = document.getElementById("header");

searchButton.onclick = search;
//resetButton.onclick = removeClass //reset.classList.remove("reset-fadein");

function removeClass(className) {
	//reset.classList.remove("reset-fadein");
	form.classList.remove("move");
}




function search(e) {
	e.preventDefault(); //stop page from reloading
	var searchText = $("#search").val(); //grab text from input field
	if(searchText == "") { 	
		alert("Please enter something to lookup!"); //assure field isn't empty  
		return;
	};
	form.className = "move"; //animate form up and fade header out
	h1.className = "fadeout";
	
	

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
	 			var url = "https://en.wikipedia.org/wiki/" + encodeURIComponent(json.query.search[i].title); //encode title and build link for item

	 			var newEntry = "<a href=" + url + " target='_blank'>";
	 			newEntry +="<li class='listing'><h2>" +json.query.search[i].title + "</h2><br>";  //grab title for this listing
 				newEntry += "<p>" + json.query.search[i].snippet + "</li></a>"; //grab snippet for this listing
	 			newContent += newEntry; //add listing to total content
	 		}; //end success
	 		document.getElementById("list").innerHTML = newContent; //add all content to the ul
	 		//document.getElementById("input_form").style.display = "none"; //hide search field
	 	}
	}); // end .ajax
	 	
} //end search function





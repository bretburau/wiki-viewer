const css = require('./app.css'); //from external css module of webpack

var searchButton = document.getElementById("searchButton");
var form = document.getElementById("input_form");
var h1 = document.getElementById("header");

searchButton.onclick = search;
function removeClass(className) {
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

	 			var newEntry = "<a href=" + url + " target='_blank'><li id='listItem" + i + "'>";
	 			newEntry += "<h2>" +json.query.search[i].title + "</h2><br>";
	 			newEntry += "<p>" + json.query.search[i].snippet + "</li></a>";

	 			
	 			newContent += newEntry; //add listing to total content
	 		}; //end success
	 		document.getElementById("list").innerHTML = newContent; //add all content to the ul
	 		var y=0;
 			function animateLoop () {           //  create a loop function
  			 	setTimeout(function () {    //  call a 3s setTimeout when the loop is called
   					var currentLi = "listItem" + y;
			      	document.getElementById(currentLi).className = "fadein";				           
			      	y++;                     //  increment the counter
			      	if (y < document.getElementById("list").childNodes.length) {            //  if the counter < 10, call the loop function
			        	animateLoop();             //  ..  again which will trigger another 
			      	}                        
			   	}, 50)
			}
			animateLoop();
 			
 			
	 		
	 	} // end callback
	}); // end .ajax
	 	
} //end search function








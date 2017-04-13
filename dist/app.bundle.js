/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const css = __webpack_require__(0); //from external css module of webpack

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









/***/ })
/******/ ]);
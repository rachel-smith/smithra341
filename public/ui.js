/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

/**
 * function: fetch
 *
 * purpose: get element inputed on website to filter results.
 *
 * Date/author: Rachel Smith/9_23_15
 */
var fetch = function() {
	//alert("inside fetch function!");
	//Grab the html element with ID "year"
	var el = document.getElementById('year');
	//access value of element el
	var value = el.value;
	//log the value of el to the console
	console.log(value);
	vizController(value);

};

var count = 0;
var toggle = function() {

	if (count % 2 == 0) {
		// Grab the html element with the ID “about”
		var el = document.getElementById('about');
		// Add the class “show” to the element.
		addClass(el, 'show');
		count++;
	} else {
		// Grab the html element with the ID “about”
		var el = document.getElementById('about');
		// Remove the class “show” to remove the element.
		removeClass(el, 'show');
		count++;
	}

};

var initialize = function() {

	console.log('Initialize!');

	// Grab the 'About' button element, identified by the
	// 'about-btn' id.
	var button = document.getElementById('about-btn');

	// From this point forward, when the button is clicked, the
	// toggle function shall be invoked.
	button.onclick = toggle;

	// Grab the 'Submit' button element, identified by the
	// 'submit-btn' id.
	var button1 = document.getElementById('submit-btn');

	// From this point forward, when the button is clicked, the
	// fetch function shall be invoked.
	button1.onclick = fetch;

};

// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();

/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */
var count = 0;
var toggle = function() {

    if(count%2 == 0){ 
    	// Grab the html element with the ID “about”
    	var el = document.getElementById('about');
    	// Add the class “show” to the element.
    	addClass(el, 'show');
    	count++;
   }
   else{
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

};

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();
